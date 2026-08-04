# Advanced Modal

Renders a trigger button (hamburger or search icon) that opens a native `<dialog>` of editor-chosen inner blocks — header slide-out navigation and search panels as plain block content, no theme-specific markup or bespoke JavaScript — with open/close handled by the Interactivity API.

## How it works

Inner blocks are saved statically, but the wrapper is dynamic: a `render_callback` rebuilds the trigger and `<dialog>` on every request, with a unique dialog id from `wp_unique_id()`. The wrapper carries `data-wp-interactive="cata-blocks-advanced-modal"` plus a context holding the dialog id and open state; the button's `data-wp-on--click` runs the store's `toggle` action (a `viewScriptModule`), calling `dialog.show()` / `dialog.close()`. The dialog opens non-modally, stretched full-viewport by the block's stylesheet (below the admin bar when present); the dimmed backdrop is an `::after` overlay driven by CSS custom properties, since native `::backdrop` only applies to modal dialogs.

Insertion pre-fills the dialog with a Group holding a Close Modal block (`cata/advanced-modal-close`, a child block registered only for use here) and a placeholder paragraph.

## Attributes and controls

- **icon** — hamburger (default) or search, chosen in the Inspector. Both SVGs are filterable (`cata_blocks_advanced_modal_block_hamburger_icon`, `cata_blocks_advanced_modal_block_search_icon`).
- **backdropColor / customBackdropColor** — a palette slug (emitted as a `--wp--preset--color--*` var) or a custom value; default `#000000`.
- **backdropOpacity** — 0–100 slider, default 70.

It also opts into color (text/background/link), typography, and interactivity supports; the `cata_blocks_support_advanced_modal_block` filter disables registration.

## Theming

The plugin provides the markup, toggle behavior, and structural styles (full-viewport dialog, transparent icon button, backdrop overlay); the modal's contents and interior appearance are down to the inner blocks and theme.
