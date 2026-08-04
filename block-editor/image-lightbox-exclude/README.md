# Image Lightbox Exclude

Adds an `excludeFromLightbox` attribute and an "Exclude from image lightbox"
inspector toggle to the core Image block. An excluded image still renders
normally in the content, but does not appear as a slide in the
`cata/image-lightbox` viewer — clicking it opens the lightbox at its first
slide instead of a slide of its own. See `blocks/image-lightbox` for the
lightbox itself, which reads this attribute when collecting slides.

Editor-only script; sites can turn it off (together with the lightbox UI) via
the `cata_blocks_support_image_lightbox_block` filter, which defaults to true.
