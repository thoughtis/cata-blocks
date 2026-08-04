# Advanced Modal Close

Renders an X button that dismisses the surrounding Advanced Modal. A child block (`"parent": [ "cata/advanced-modal" ]` in `block.json`), it can only be inserted inside an Advanced Modal, whose insertion template places one automatically.

The saved markup is an empty wrapper filled by a `render_callback`. The button ships no script of its own: its `data-wp-on--click="actions.toggle"` resolves against the parent's `cata-blocks-advanced-modal` Interactivity API store, so the same action that opens the dialog closes it. In the editor the button closes the nearest `<dialog>` directly for previewing.

The X icon SVG can be replaced with the `cata_blocks_advanced_modal_block_close_icon` filter, and registration disabled with `cata_blocks_support_advanced_modal_close_block`. Styling is minimal — a transparent, borderless button inheriting the text color — leaving placement and sizing to the modal's content and the theme.
