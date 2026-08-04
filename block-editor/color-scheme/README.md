# Color Scheme

Lets editors pin a block to light or dark mode. Blocks with color support get
a `cataBlocksColorScheme` attribute and a "Color Scheme" select
(Default / Light / Dark) in the color panel, applied as an inline
`color-scheme` property (`light only` / `dark only`) in editor and saved
markup — the theme's light-dark color system does the rest.

Themes opt in with
`add_filter( 'cata_blocks_theme_supports_color_scheme', '__return_true' );`
and are expected to define their colors with `light-dark()` (or equivalent
`color-scheme`-aware custom properties) so pinning a scheme actually changes
the palette.

Server side, `color-scheme.php` allows `color-scheme` through `safe_style_css`
and styles color-picker popovers dark while a dark-pinned block is selected.
`src/components/color-scheme-preview.js` adds a "Preview Dark Mode" item to
the editor's Preview menu that flips the whole canvas;
`src/hooks/use-editor-canvas.js` resolves the canvas whether the editor is
iframed or not.
