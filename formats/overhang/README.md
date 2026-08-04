# Overhang

A rich-text format (`cata-format/overhang`) that wraps the selected text in `<span class="cata-overhang">`. Registered under the `Cata\Formats` PHP namespace, it ships only an editor script — a `RichTextToolbarButton` (line icon, "Overhang") that toggles the format and appears only when the selected block is a `core/heading`, making the format effectively heading-only.

The plugin provides no styles for `.cata-overhang` on the front end or in the editor; the look is entirely up to the theme. Registration can be disabled via the `cata_blocks_support_overhang_format` filter.
