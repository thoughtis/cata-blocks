# Image Lightbox

Turns a post's in-content images into a modal gallery: qualifying `core/image` blocks get a count badge and zoom cursor; clicking opens a full-screen `<dialog>` slider with accessible navigation, captions, a photo index, and an ad slot. The template-level block itself renders only the dialog and slides.

## How the gallery is assembled

Rendering is fully server-side (`render.php` plus the badge filter below). On singular views, `parse_blocks()` turns every `core/image` — even nested in groups/columns — into a slide, in content order. Two things shape it:

- **Minimum count**: fewer than 6 in-content images (filter `cata_blocks_image_lightbox_minimum_images`) means no gallery and no badges. The featured image is never a slide and doesn't count.
- **Lightbox-only images**: `cata_lightbox_image_ids` post meta (REST-exposed on `wp/v2/posts`) holds attachment ids appended as extra slides not in the content; curated ids also force the gallery on below the minimum.

`excludeFromLightbox`, an Inspector toggle added to `core/image` by the companion plugin `block-editor/image-lightbox-exclude`, opts an image out of a slide; it still opens the gallery at slide one.

A `render_block_core/image` filter wraps each collected image in a trigger — `.cata-image-lightbox-figure` with slide index, plus an accessible badge button showing the total — in the initial HTML, so triggers exist even without JavaScript; images with existing click behavior (core's "enlarge on click", a wrapping link) are left alone.

## Front-end behavior

The `viewScriptModule` is imperative, not Interactivity API directives — directives bind only at hydration, but articles appended by the site's infinite scroll need galleries too: it listens for `cata-blocks:infinite-scroll:load`, imports the fetched article's gallery markup, namespaces its ids, and routes triggers to the right gallery. Also in `view.js`:

- Desktop keeps keyboard arrows, wrapping prev/next buttons, whole-image left/right click zones, and a persistent thumbnail strip. Phones stop at the sequence ends and use one compact footer with 44px prev/next controls, an exact live counter, and a visual seven-position sliding dot window.
- Phone captions and credits are hidden from normal flow behind an explicit Info disclosure. The full sanitized caption opens in a scrollable sheet over the photo, so the image and footer do not move.
- On phones, All photos opens the existing lazy thumbnails as an overlay grid with roving tabindex and arrow-key movement. The strip stays persistent and horizontal on desktop; disabling thumbnails with `cata_blocks_image_lightbox_show_thumbnails` also removes All photos.
- Phone touch/pen swipes track the finger and snap between a live three-item window (current sequence item plus immediate neighbors); every other photo keeps no layout geometry, preserving lazy loading. Direction locking leaves vertical scrolling and pinch zoom native, reduced motion snaps instantly, disclosure-origin gestures do not navigate, and mouse drag remains unused so caption text stays selectable. Wider layouts retain the established threshold-then-crossfade swipe.
- Lazy, inert slide images: trigger hover/touch pre-warms the image, neighbors prefetch, the clicked image's cached rendition seeds the slide, a blurred Photon preview covers slow loads.
- Without `CloseWatcher`, opening pushes a history entry so the back gesture closes the lightbox, not the article; the slide number mirrors into the URL hash as an ad-refresh signal.
- A gallery wired below 600px moves the empty ad container exactly once into a break after photo four; that placement never changes on rotation. The break stays measurable while inactive, replaces the phone dot rail with an Advertisement state, remains absent from public photo numbering, and fires `slideshow:adslide` rather than `slideshow:slidechange`.
- When the theme's pageview-stats class is available, the final phone photo can show one low-prominence "Trending now" card. Recent posts come from the owner's 15-day window, their object-meta totals are ranked in PHP and cached for 45 minutes, and the class's 100-view display threshold gates inclusion. The card is absolutely positioned only when runtime slot geometry proves it fits beneath the photo, so it never shrinks the image; it stays absent on desktop, portrait/full-height photos, the ad slide, and every earlier photo.
- `slideshow:open`/`slideshow:slidechange`/`slideshow:adslide`/`slideshow:close` CustomEvents (carrying the ad container id) drive the ad script; open fires 300 ms late so the ad request doesn't compete with the slide image.

Slide `srcset`s are built by hand against Photon/Jetpack resizing (640–2048 px candidates, capped at the original width) because the CDN setup leaves core's metadata-derived srcsets empty.

Thumbnails use their own 144–576px candidate ladder. The server renders the 144px desktop fallback plus inert, original-width-capped candidate data; once a thumbnail layout has geometry, `view.js` points each image directly at the smallest candidate that covers its CSS width at the current DPR. The phone grid does that synchronously when All photos reveals it, preserving zero thumbnail requests both on page load and on the initial gallery open.

## Attributes and supports

Backdrop color/opacity (`backdropColor`/`customBackdropColor`, `backdropOpacity`, default 80), native text/background color supports (skip-serialized; emitted as CSS custom properties by `render.php`), and the per-block Color Scheme control (`cataBlocksColorScheme`, from `block-editor/color-scheme`) honored as a `color-scheme` style. The editor shows a labeled placeholder.

## Usage

Place once in the single-post template (targets `get_queried_object()`); renders nothing on unqualifying posts. The stylesheet enqueues early on gallery posts so badges are styled at first paint, with a content-hash `?ver` for cache busting. Filters: `cata_blocks_support_image_lightbox_block` (kill switch), `cata_blocks_image_lightbox_images` (add/alter slides), `_minimum_images`, `_show_thumbnails`, `_show_ad`, `_show_related_content`, `_trending_window_days`, `_trending_candidate_pool`, `_trending_minimum_views`, `_badge_icon`, `_badge_text`, `_caption`, plus the close/prev/next icon filters. The plugin ships complete dialog styles; themes restyle only for a different look.
