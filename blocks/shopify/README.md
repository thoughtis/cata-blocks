# Shopify Products

Displays products from a Shopify store via the [Storefront GraphQL API](https://shopify.dev/docs/api/storefront): editors pick a store, optionally filter by product tags, and set a count; each product is a card with image, linked title, and price range. Dynamic block: `save()` outputs an empty wrapper, all front-end markup comes from PHP (`Shopify\Render`), and product data is never baked into post content.

## Store management

Configured under **Settings → Shopify API** (`Shopify\Options`, capability `manage_options`): any number of `subdomain` + Storefront API `access_token` pairs ("Add Store" appends fields client-side), saved to the `cata_blocks_shopify_stores` option via the Settings API; sanitization drops rows missing either field. Tokens are stored in plain text, so they must be public, read-only Storefront tokens.

## How products get into the block

**Editor**: the store dropdown reads the `cata/blocks` @wordpress/data store from `blocks-store/blocks-store.php` — a hard dependency — which enqueues a script on `enqueue_block_editor_assets` localizing the configured subdomains as `window.cataBlocks.shopifyData`, read via `select( 'cata/blocks' ).getShopifyData()` (JS filter `cata-blocks.shopify-data`). The live preview POSTs the attributes to the `cata/v1/shopify-proxy` route (`Shopify\Proxy`, logged-in `edit_posts` users), which queries Shopify server-side — keeping the token off the client — and writes the products into the cache the front end reads, pre-warming it.

**Front end**: rendering never calls Shopify synchronously. The pipeline in `includes/`:

- `Feed\Query` — allow-lists `store`, `tags`, `count`; builds the GraphQL request (`available_for_sale:true` plus `AND tag:…` clauses, newest first) against `https://{store}.myshopify.com/api/2023-01/graphql.json`; looks up the token from the option.
- `Feed\Cache` — JSON product list and timestamp in two non-autoloaded options (`cata-blocks-shopify-feed-data-{hash}` / `-time-{hash}`), hashed from request URL + args, nominal one hour; options, not transients, so stale data survives eviction.
- `Feed` — reads the cache; after half the duration, schedules one WP-Cron event (`cata_blocks_shopify_feed_update`, args = the query options) if none is queued. Pages always serve cached data (stale-while-revalidate).
- `Feed\Update` — the cron handler, instantiated from the main plugin file alongside `Shopify\Options` and `Shopify\Proxy`; re-runs the query via `Feed\Fetch`, and on validation failure, WP_Error, or empty response caches `[]`, resetting the timestamp so failures aren't retried every request.
- `Feed\Fetch` — HTTP layer: `vip_safe_wp_remote_request()` when available (3s timeout), else `wp_remote_post()`, handling non-2xx statuses and unusable bodies.

## Rendering

`Shopify\Render::render_products()` outputs the wrapper plus one `<article class="wp-block-cata-shopify-product">` per product: a lazy-loaded image with a full `srcset` from Shopify's image CDN (width/height/crop args, capped to the source image's real dimensions, honoring the chosen aspect ratio), a `tappable-card` linked title (URL filterable via `cata_product_block_link`), and an optional price or min–max range. An empty cache renders nothing.

Inspector: store, comma-separated tags, count, aspect ratio (1:1, 3:4, 3:2), price toggle. Block styles: a responsive grid (default) and "Reel" (`is-style-reel`), a horizontal scroller.

Disable via `cata_blocks_support_shopify_block`. The plugin provides editor UI, markup, and structural layout styles; the Cata parent and child themes the look and feel.
