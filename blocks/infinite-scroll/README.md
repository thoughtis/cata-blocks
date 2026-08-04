# Infinite Scroll

Two blocks load the next article as the reader nears the end of the current one: `cata/infinite-scroll`, a container wrapping the article template content, and `cata/infinite-scroll-beacon`, a sentinel near the article's end triggering the load when scrolled into view. Both are Interactivity API blocks sharing the `cata-blocks-infinite-scroll` store; neither works without the other.

Registration requires the `cata_blocks_support_infinite_scroll_block` filter (**default false** — themes must opt in) and forces `should_load_block_assets_on_demand` off so all block styles load on every page and fetched articles arrive styled.

## How it works

- **Container** (`src/infinite-scroll/`): an InnerBlocks wrapper for the single-post template; `render.php` seeds state with `postUrls` (currently one "next post" permalink) and marks the wrapper `data-wp-interactive`; on init each instance gets a sequential page index (`data-cata-infinite-scroll`) for history bookkeeping.
- **Beacon** (`src/infinite-scroll-beacon/`): an empty interactive `<div>` bound to `callbacks.onInView`; renders nothing unless the feature is on, the request is a singular post, and the current post isn't the configured next post (which would loop).
- **Load** (`src/infinite-scroll/view.js`, a `viewScriptModule`): an IntersectionObserver watches each beacon (fires once); the next post's URL is fetched as HTML, parsed with `DOMParser`, and its `[data-wp-interactive="cata-blocks-infinite-scroll"]` element — the next article's container — inserted before the beacon, carrying over the fetched page's unique `#core-block-supports-inline-css` styles under CSS `@scope`; the title updates and the new URL is pushed onto history.
- **History**: manual `scrollRestoration`; each entry stores the title and its article's page index, so back/forward scrolls that article into view and restores its title.
- **Extension point**: after insertion, a `cata-blocks:infinite-scroll:load` CustomEvent fires on `document` with `{ article, source, url }`. Only the container is inserted — anything else (ads, analytics outside the wrapper) must be pulled from `source` here before the fetched document is discarded.

## Configuration

The next-post URL and on/off switch live in the `cata_blocks` option (`active`, `post_id`), managed on the `admin/admin.php` settings page; accessors (`cata_blocks_get_infinite_scroll_config()` and friends) sit in `infinite-scroll.php` alongside registration.
