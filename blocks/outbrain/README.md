# Outbrain

Outputs an [Outbrain](https://www.outbrain.com/) content-recommendation widget — the third-party "you may also like" unit monetizing the end of an article — so it can be placed and configured in templates like any other block instead of hard-coded in the theme.

The block is fully dynamic (no saved markup; a `render_callback` produces everything) and renders only on singular post views, returning an empty string anywhere else. It enqueues Outbrain's loader (`https://widgets.outbrain.com/outbrain.js`, async, in the footer) and emits the marker element that script looks for:

```html
<div class="OUTBRAIN wp-block-cata-outbrain" data-src="…canonical post URL…" data-widget-id="GS_1"></div>
```

`data-src` is the post's canonical URL (`wp_get_canonical_url()`), which Outbrain uses to pick recommendations; all visible content is injected client-side by Outbrain.

The single attribute, **widgetId** (default `GS_1`, editable in the Inspector), must match a widget configured in the site's Outbrain dashboard — the only per-block configuration needed. The editor shows a plain placeholder instead of loading the third-party script. The block ships no front-end styling (the boilerplate `style.css` import is commented out); appearance is controlled from Outbrain's side. The `cata_blocks_support_outbrain_block` filter disables registration.
