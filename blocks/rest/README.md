# WordPress REST API

`cata/rest` renders linked post previews (image, kicker, date, title, excerpt, domain) from any WordPress site's `/wp-json/wp/v2/posts` endpoints, cross-promoting content across the Thought Catalog network without shared databases. Editors paste one or more URLs and pick a layout; URLs are fetched independently and merged, so one block can mix sites.

## Data flow

No front-end render ever waits on a remote HTTP request.

- **Editor**: `edit.js` fetches each URL with `@wordpress/api-fetch` and custom options `cata: { useCache: true, useProxy: true }`, handled by the **blocks-middleware** layer (`blocks-middleware/`, loaded from the main plugin file — a hard dependency): `proxyMiddleware` rewrites requests to `/cata/v1/proxy/?url=…`; `cacheMiddleware` memoizes per path for the session.
- **Proxy** (`includes/proxy/class-proxy.php`, `Cata\Blocks\Proxy`): route `cata/v1/proxy`, logged-in users with `edit_posts`. Requires the URL path to start with `/wp-json/`, fetches server-side (`Feed\Fetch`), returns decoded posts, and writes them into the server-side feed cache — editing the block first warms the cache the front end reads.
- **Front end**: the render callback resolves URLs via `Cata\Blocks\Feed` + `Feed\Cache` (`includes/feed/`). Each feed's JSON lives in a non-autoloaded option keyed by a URL hash, nominal duration one hour. Reads never fetch; after half the duration, `Feed` schedules one cron event (`cata_blocks_feed_update`, handled by `Feed\Update`) to re-fetch in the background. Failed fetches cache `[]` so broken feeds don't retry every render.
- **URL normalization** (both paths): `URLs::get_standardized_rest_api_url()` (`includes/urls/class-urls.php`) decodes HTML entities and URL encoding and appends `_embed=wp:featuredmedia,wp:term` unless `_embed` is present — layouts depend on embedded featured media and terms.

## Rendering

The block renders twice, on purpose. **Save** (`src/save.js`) serializes the editor preview into the `content` attribute, keeping a complete static copy in post content. **Server render** (`rest.php`, `cata_rest_render_callback`) re-renders from cached feeds on every request inside try/catch (errors go to Query Monitor via `qm/debug`); any failure — invalid URLs, empty cache, empty output — falls back to the saved content. `Layout::get_opening_tag()` reuses the saved opening `<div>` so editor-applied alignment, border, and spacing classes survive.

## Layouts

Eight editor layouts — Default, Network, Compact, Compact Grid, Stack, Stack Grid, Daily Horoscope, Trending — each a React component under `src/components/layout/` (preview and saved fallback). The server has two renderers (`includes/layout/`):

- **`Standard`**: everything except Trending. The slug mostly affects CSS — `is-layout-{slug}` classes on the wrapper and each `<article class="preview">`, plus a per-layout `sizes` attribute — with identical markup.
- **`Trending`**: own markup (medium feature, large feature, up to six headline-only links), author bylines from the embedded `author` taxonomy, and a four-post minimum, below which it falls back to saved content.

Also: Daily Horoscope pairs zodiac in-page links from `<h2 id="…">` headings with the sign SVGs in `includes/layout/daily-horoscope/svg/` (editor icons: `src/components/icons/`); category kickers skip the slugs `uncategorized`, `collective-world`, `project-oasis`; images resize via Photon-style `?resize=w,h` with a generated srcset; cross-domain links open in a new tab.

## Attributes

- `urls` — REST API URLs, validated with `wp_http_validate_url`.
- `layout` — slug; empty is the default, unknown falls back to `Standard`.
- `sorting` — `""` keeps feed order; `published:newest` sorts by `date_gmt` (implemented in both `includes/sorting.php` and `src/components/layout/sorting.js` so editor and server agree).
- `display` — toggles for `image`, `category`, `date`, `title`, `excerpt`, `zodiac`, `domain`; ignored by Trending.
- `aspect_ratio` — `""` (original), `1/1`, `3/4`, or `3/2`, applied as inline `aspect-ratio`/`object-fit` on preview images.
- `content` — the serialized fallback markup.

## Usage

Disable per site via `cata_blocks_support_rest_block` (default true). The plugin ships the editor experience, markup, and a shared structural stylesheet; the Cata parent theme adds structural front-end styles for the layout classes, child themes the look and feel.
