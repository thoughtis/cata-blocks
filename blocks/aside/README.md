# Aside

A grouping container for tangentially related content — trivia, digressions, editor's notes — saved statically as a semantic `<aside>` wrapping an inner container `div` and freeform `InnerBlocks`.

It supports background, gradient, and text color, and disables custom class names and raw HTML editing. The plugin's stylesheet draws the signature dashed `currentColor` border and splits padding between the outer and inner elements so a background color doesn't shift layout.

Registration can be disabled via the `cata_blocks_support_aside_block` filter. The Trivia pattern (`patterns/trivia`) uses this block as its outer wrapper.
