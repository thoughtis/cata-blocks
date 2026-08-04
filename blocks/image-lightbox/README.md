# Image Lightbox

Turns a post's in-content images into a modal gallery: qualifying `core/image` blocks get a count badge and zoom cursor; clicking opens a full-screen `<dialog>` slider with arrows, thumbnails, captions, swipe navigation, and an ad slot. The template-level block itself renders only the dialog and slides.

## How the gallery is assembled

Rendering is fully server-side (`render.php` plus the badge filter below). On singular views, `parse_blocks()` turns every `core/image` — even nested in groups/columns — into a slide, in content order. Two things shape it:

- **Minimum count**: fewer than 6 in-content images (filter `cata_blocks_image_lightbox_minimum_images`) means no gallery and no badges. The featured image is never a slide and doesn't count.
- **Lightbox-only images**: `cata_lightbox_image_ids` post meta (REST-exposed on `wp/v2/posts`) holds attachment ids appended as extra slides not in the content; curated ids also force the gallery on below the minimum.

`excludeFromLightbox`, an Inspector toggle added to `core/image` by the companion plugin `block-editor/image-lightbox-exclude`, opts an image out of a slide; it still opens the gallery at slide one.

A `render_block_core/image` filter wraps each collected image in a trigger — `.cata-image-lightbox-figure` with slide index, plus an accessible badge button showing the total — in the initial HTML, so triggers exist even without JavaScript; images with existing click behavior (core's "enlarge on click", a wrapping link) are left alone.

## Front-end behavior

The `viewScriptModule` is imperative, not Interactivity API directives — directives bind only at hydration, but articles appended by the site's infinite scroll need galleries too: it listens for `cata-blocks:infinite-scroll:load`, imports the fetched article's gallery markup, namespaces its ids, and routes triggers to the right gallery. Also in `view.js`:

- Keyboard arrows, prev/next buttons, whole-image left/right click zones, touch/pen swipe with direction locking (vertical scrolls pass through).
- Thumbnail strip with roving tabindex (one tab stop) and an `aria-live` counter.
- Lazy, inert slide images: trigger hover/touch pre-warms the image, neighbors prefetch, the clicked image's cached rendition seeds the slide, a blurred Photon preview covers slow loads.
- Without `CloseWatcher`, opening pushes a history entry so the back gesture closes the lightbox, not the article; the slide number mirrors into the URL hash as an ad-refresh signal.
- `slideshow:open`/`slideshow:slidechange`/`slideshow:close` CustomEvents (carrying the ad container id) drive the ad script; open fires 300 ms late so the ad request doesn't compete with the slide image.

Slide `srcset`s are built by hand against Photon/Jetpack resizing (640–2048 px candidates, capped at the original width) because the CDN setup leaves core's metadata-derived srcsets empty.

## Attributes and supports

Backdrop color/opacity (`backdropColor`/`customBackdropColor`, `backdropOpacity`, default 80), native text/background color supports (skip-serialized; emitted as CSS custom properties by `render.php`), and the per-block Color Scheme control (`cataBlocksColorScheme`, from `block-editor/color-scheme`) honored as a `color-scheme` style. The editor shows a labeled placeholder.

## Usage

Place once in the single-post template (targets `get_queried_object()`); renders nothing on unqualifying posts. The stylesheet enqueues early on gallery posts so badges are styled at first paint, with a content-hash `?ver` for cache busting. Filters: `cata_blocks_support_image_lightbox_block` (kill switch), `cata_blocks_image_lightbox_images` (add/alter slides), `_minimum_images`, `_show_thumbnails`, `_show_ad`, `_badge_icon`, `_badge_text`, `_caption`, plus the close/prev/next icon filters. The plugin ships complete dialog styles; themes restyle only for a different look.
