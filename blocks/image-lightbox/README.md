# Image Lightbox

Turns a post's in-content images into a modal gallery: qualifying `core/image` blocks get a count badge and zoom cursor; clicking opens a full-screen `<dialog>` slider with accessible navigation, captions, a photo index, and an ad slot. The template-level block itself renders only the dialog and slides.

## How the gallery is assembled

Rendering is fully server-side (`render.php` plus the badge filter below). On singular views, `parse_blocks()` turns every `core/image` — even nested in groups/columns — into a slide, in content order. Three things shape it:

- **Minimum count**: fewer than 6 in-content images (filter `cata_blocks_image_lightbox_minimum_images`) means no gallery and no badges. The featured image is never a slide and doesn't count.
- **Silent loops**: optional `cata_lightbox_video_ids` video attachment ids lead the sequence and force the gallery on. Invalid, duplicate, non-video or unavailable attachments are dropped. A loop requires a still: its `cata_lightbox_poster_id` first, then its own featured image, then the article featured image. The post featured image remains a poster only, never an extra slide.
- **Lightbox-only images**: `cata_lightbox_image_ids` post meta (REST-exposed on `wp/v2/posts`) holds attachment ids appended as extra slides not in the content; curated ids also force the gallery on below the minimum.

Curated attachments also work when the article has **no in-content images**.
In that case the template block renders a visible “View N photos” button using
the same gallery opener as the image badges. The featured image is still never
a slide. Invalid, duplicate or non-image attachment ids do not create slides;
an entirely unusable selection renders neither an empty dialog nor an opener.

`excludeFromLightbox`, an Inspector toggle added to `core/image` by the companion plugin `block-editor/image-lightbox-exclude`, opts an image out of a slide; it still opens the gallery at slide one.

A `render_block_core/image` filter wraps each collected image in a trigger — `.cata-image-lightbox-figure` with slide index, plus an accessible badge button showing the total — in the initial HTML, so triggers exist even without JavaScript; images with existing click behavior (core's "enlarge on click", a wrapping link) are left alone.

## Front-end behavior

The `viewScriptModule` is imperative, not Interactivity API directives — directives bind only at hydration, but articles appended by the site's infinite scroll need galleries too: it listens for `cata-blocks:infinite-scroll:load`, imports the fetched article's gallery markup, namespaces its ids, and routes triggers to the right gallery. Also in `view.js`:

- The opening click listener sits on each trigger, wired at load and again for each appended article, never on the document: Safari on iPhone and iPad synthesizes a click from a tap only for an element below `body` that listens for clicks, so a document listener heard mice but never fingers. Keyboard readers reach each photo through its badge, a real `<button>`.
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

## Optional video contract (0.19.7)

`cata_lightbox_video_ids` is REST-exposed with the same array schema, post-type
filter and edit-post authorization as `cata_lightbox_image_ids`. Its sanitizer
keeps only positive, unique video attachment ids. Reads validate again.
`Cata\Blocks\cata_image_lightbox_get_post_videos( WP_Post $post )` returns each
usable loop as `id`, `src`, `type`, `width`, `height`, `poster`, `alt`, plus
`poster_id`, `caption` and `media_type: video`. Video dimensions come from the
attachment metadata. Poster alt text remains the accessible description;
attachment captions carry the credit.

`cata_lightbox_poster_id` is single integer meta registered on `attachment`,
exposed in REST, and defaults to `0`. Its sanitizer accepts an image attachment
ID or returns `0`; authorization checks `current_user_can( 'edit_post', $object_id )`
for the attachment being updated. Set it with
`POST /wp-json/wp/v2/media/<video-id>` and
`{ "meta": { "cata_lightbox_poster_id": 123 } }`; send `0` to clear it.
This supplies a poster through REST without attachment thumbnail support.
The helper tries this meta first, then the video's standard featured image
(`get_post_thumbnail_id( $video_id )`), then the post's featured image. Invalid
IDs or unusable image URLs fall through to the next candidate; a loop with no
usable still is omitted. No automatic attachment or post writes are performed.

`cata_image_lightbox_get_post_images()` remains photo-only.
`cata_image_lightbox_get_post_slides()` is the combined sequence, loops first.
Every loop and every photo is **one item**: counter, +N badges, opener and index
all use this same total. Mixed galleries say “items”; image-only galleries keep
their existing photo copy and markup. The phone ad still follows the fourth
**photo**, excluding leading loops and the ad itself from photo placement.

A video uses `muted loop playsinline preload="none"` and an inert `data-src`.
Its still is always present underneath, and the video fades in only on actual
playback. Only the current slide in an open, visible dialog plays; changing
slides, closing, opening the thumbnail index or hiding the page pauses it.
The small “Pause motion” / “Play motion” button keeps an explicit pause until
that reader resumes it. Reduced motion and Save-Data show the still without
loading the video, and hide the motion control. Video thumbnails use their
posters with a small motion glyph. Existing trigger wiring, image lazy loading,
infinite-scroll id namespacing and curated-gallery openers are retained.

Becoming's optional shared loop manager integrates through
`window.BecomingLoops.setGalleryVideo(video, active, userPaused, userRequested)` and the
`becoming:loops:ready` event, so the gallery participates in its page-wide
playback limit. `userRequested` is true only for an explicit pause/play click,
allowing a reader to retry a denied autoplay within their gesture. Without that theme module the plugin manages its current video
itself. No video metadata means no video markup or playback listeners.

## Attributes and supports

Backdrop color/opacity (`backdropColor`/`customBackdropColor`, `backdropOpacity`, default 80), native text/background color supports (skip-serialized; emitted as CSS custom properties by `render.php`), and the per-block Color Scheme control (`cataBlocksColorScheme`, from `block-editor/color-scheme`) honored as a `color-scheme` style. The editor shows a labeled placeholder.

## Usage

Place once in the single-post template (targets `get_queried_object()`); renders nothing on unqualifying posts. The stylesheet enqueues early on gallery posts so badges are styled at first paint, with a content-hash `?ver` for cache busting. Registering the metadata alone does not install the template block. Filters: `cata_blocks_support_image_lightbox_block` (kill switch), `cata_blocks_image_lightbox_images` (add/alter slides), `_minimum_images`, `_show_thumbnails`, `_show_ad`, `_show_related_content`, `_trending_window_days`, `_trending_candidate_pool`, `_trending_minimum_views`, `_badge_icon`, `_badge_text`, `_caption`, plus the close/prev/next icon filters. The plugin ships complete dialog styles; themes restyle only for a different look.

## Regression check

Run `php blocks/image-lightbox/tests/meta-only.php` from the plugin root. The
database-free harness executes the real collector and PHP renderer against
stubbed WordPress attachment reads: metadata-only and mixed galleries, stable
ordering, duplicate/featured/unavailable attachment exclusions, a visible
opener, video and attachment-poster REST registration/authorization and
sanitization, three-level poster precedence and fallback, silent lazy
video markup, leading-video slide/badge counts, and the unchanged minimum for
uncurated articles. Set `CATA_LIGHTBOX_VIDEO_FIXTURE=/path/video-gallery.html`
to retain a mixed-gallery fixture. Set
`CATA_LIGHTBOX_FIXTURE=/path/gallery.html` to retain the generated gallery
markup for a browser check with the built stylesheet and view script. A live
site check must also confirm that its active single-post template contains
`cata/image-lightbox` and that the selected slide images load when opened.


For playback lifecycle regression after the PHP fixture is saved, run
`node blocks/image-lightbox/tests/video-playback.mjs /path/video-gallery.html`
(with the plugin development dependencies installed). This uses the actual
view script in jsdom with media and geometry stubs: no video bytes while closed,
current-slide playback, pause/reopen intent, navigation, ad placement after four
photos, reduced motion, Save-Data and late shared-manager handoff. It does not
prove native video decoding or iPhone behavior.
