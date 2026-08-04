# First Page Content

A Group-style container whose contents only appear on page one. The save function serializes bare `InnerBlocks.Content`; at render time a `render_callback` returns an empty string when `is_paged()` is true, and otherwise wraps the inner content in a `<div>` carrying the block wrapper attributes. Intended for templates — intros, promos, or archive headers that shouldn't repeat on `/page/2/` and beyond.

Extra wrapper attributes can be injected via the `cata/first-page-content_block_wrapper_attributes` filter (the name is built from the block name). The render callback is wrapped in try/catch, reporting failures through the Query Monitor `qm/debug` action and falling back to the raw inner content.

It mirrors `core/group`'s broad supports: alignment, anchor, background image, colors and gradients, borders, shadow, spacing/blockGap, min-height, sticky position, typography, layout child sizing, and `allowedBlocks`. The plugin ships editor script only — no styles of its own; presentation comes from the theme. Registration can be disabled via the `cata_blocks_support_first_page_content_block` filter.
