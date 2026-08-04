# Block Editor App

The original grab-bag editor script; newer features get their own sibling
folder instead of being added here.

- **Flex Grow** (`src/components/flex-grow.js`) — adds a `cataBlocksFlexGrow`
  attribute and a Dimensions-panel number control to blocks whose width is set
  to "Fixed" (`style.layout.selfStretch === 'fixed'`), applied as an inline
  `flex-grow` style in editor and saved markup. For the dynamic
  `core/post-featured-image` block, `includes/filters/class-filters.php`
  applies it at render time instead.
- **SVG URL** (`src/components/svg-url.js`) — adds `url`/`linkTarget`
  attributes, a toolbar link control, and link color support to the Safe SVG
  plugin's `safe-svg/svg-icon` block; the front-end `<a>` wrapping happens
  server-side in `block-filters/svg-icon`.
