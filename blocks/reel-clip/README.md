# Reel Clip

A single item inside a Reel (`cata/reel`): it declares `"parent": ["cata/reel"]` so it can only be inserted there, and holds any inner blocks as one slide in the reel's horizontal strip.

Its one attribute, `inlineSize`, is set from a Unit control in the inspector (units come from the theme's `spacing.units` setting, falling back to %/px/em/rem/vw) and written as an inline `width` style on the wrapper in both edit and save. The parent Reel's flex track gives every child `flex: none`, so that width determines how much of the strip each clip occupies — left empty, the clip shrinks to fit its content.

The block is static with no stylesheet of its own; layout comes from the parent Reel's styles, appearance from the theme. Registration can be disabled via the `cata_blocks_support_reel_clip_block` filter.
