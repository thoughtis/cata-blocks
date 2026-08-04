# Substack Social Link

This variation adds Substack as a service option to the core Social Icons block (`core/social-link`), which core doesn't ship. Two halves:

- **Editor (JS)** — registers a `core/social-link` block variation named `substack` with a custom Substack SVG icon and an `isActive` check on the `service` attribute, added both via `registerBlockVariation()` and by pushing it into the block's settings through a `blocks.registerBlockType` filter.
- **Front end (PHP)** — core renders unknown services with a generic "Share Icon" chain glyph, so a `render_block` filter intercepts `core/social-link` blocks whose `service` is `substack` (and that have a URL), swaps in the Substack SVG, and replaces the "Share Icon" label with "Substack". The stylesheet, enqueued only when such a block renders, applies Substack's brand orange (`#ff6719`) as background or logo color depending on the block style.

The result saves as a normal `core/social-link` block; everything Substack-specific happens at edit and render time, so removing this variation degrades gracefully to core's generic share icon.
