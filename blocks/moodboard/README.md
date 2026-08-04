# Moodboard

The Moodboard block is a gallery in which every item shares a uniform height, so mixed-ratio images and videos read as one visual strip. It accepts only `core/image` and `core/video` inner blocks, laid out as a wrapping flex row with `justify-content: space-evenly`, and saves static markup.

The height comes from a single `blockSize` attribute (default `16em`), edited via a Unit Control ("Moodboard Item Settings") and emitted as the `--wp-block-cata-moodboard-block-size` CSS custom property on the wrapper; each `img`/`video` gets that block-size with `object-fit: contain` and automatic width. Item spacing uses the block-gap support (horizontal and vertical), resolved to a `gap` inline style at save time. Captions render as `table-caption`s below their media with a small up-arrow (`↑`) pointing at the item.

Also supports text/background/link color, wide/full alignment, and font family. Registration can be disabled via the `cata_blocks_support_moodboard_block` filter.
