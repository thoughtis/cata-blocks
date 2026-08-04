# Block Editor

Editor-wide extensions that modify *core or third-party* blocks — extra
attributes, inspector controls, Query Loop behavior — rather than registering
new blocks (those live in `blocks/`). Each feature has its own folder, build,
and README, loaded at the bottom of `cata-blocks.php`.

| Folder | What it adds |
| --- | --- |
| [app](app/README.md) | Grab-bag script: Flex Grow control for fixed-width blocks, link control for the Safe SVG icon block |
| [color-scheme](color-scheme/README.md) | Per-block light/dark `color-scheme` control and editor dark-mode preview (theme opt-in) |
| [image-lightbox-exclude](image-lightbox-exclude/README.md) | "Exclude from lightbox" toggle on the core Image block, pairs with `blocks/image-lightbox` |
| [query-filters](query-filters/README.md) | Query Loop toggles: inherit main query, filter by current term, exclude already-shown posts |
| [text-decoration-color](text-decoration-color/README.md) | Text Decoration Color picker for text blocks (theme opt-in) |

Theme-opt-in features gate their scripts behind filters
(`cata_blocks_theme_supports_color_scheme`,
`cata_blocks_theme_supports_text_decoration_color`), so sites whose themes
don't support them never load the controls.
