# Block Filters

Server-side filters that change the output of *existing* blocks via
`render_block_{name}` hooks — no editor scripts, no new blocks. One class per
folder, instantiated in `cata-blocks.php`. (A related generic `render_block`
filter — applying Flex Grow to the Featured Image block — lives in
`includes/filters/class-filters.php`.)

## Post Excerpt

Hides `core/post-excerpt` on single post templates when the post has no
hand-written excerpt, where core would otherwise repeat the article's opening
as an auto-excerpt. Acts only when the block's `postId`/`postType` context
matches the main request, so excerpts inside Query Loops on the same page are
untouched.

## SVG Icon

Makes the Safe SVG plugin's `safe-svg/svg-icon` block linkable: wraps its
`<svg>` in an `<a>` at render time, reading the `url`/`linkTarget` attributes
added by the editor-side control in
`block-editor/app/src/components/svg-url.js`.
