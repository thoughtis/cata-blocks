# Kicker

A single `<p>` of rich text, saved statically, whose only styling job is pulling the next block up close (`+ * { margin-block-start: 0.375em !important }`) so it can sit above a heading as contextual lead-in text or stand alone as a deemphasized title.

It defaults to the small font size with uppercase text-transform, supports font size and text transform controls plus an alignment toolbar, and behaves like a paragraph: splitting and merging on Enter/Backspace and transforming to and from `core/paragraph` and `core/heading`. Registration can be disabled via the `cata_blocks_support_kicker_block` filter.
