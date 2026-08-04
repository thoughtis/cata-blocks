# Text Decoration Color

Adds a "Text Decoration Color" picker to the color panel of `core/group`,
`core/heading`, `core/paragraph`, `core/pullquote`, and `core/quote` (when
link color support is on). The value is stored as
`cataBlocksTextDecorationColor` and applied in editor and saved markup as an
inline `--cata-text-decoration-color` custom property — the block never sets
`text-decoration-color` itself; the theme decides where the variable applies.

Themes opt in (and must support link colors with at least one palette color):

```php
add_filter( 'cata_blocks_theme_supports_text_decoration_color', '__return_true' );
```

with CSS for both editor and front end of at least:

```css
:root {
	--cata-text-decoration-color: color-mix( in srgb, currentColor 60%, transparent );
}
a:where(:not(.wp-element-button)) {
	text-decoration-color: var( --cata-text-decoration-color );
}
```
