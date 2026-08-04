# Network Link

The Network Link block (`cata/network-link`) renders a single inline-SVG logo linking to another Thought Catalog network site. It exists only as a child of the [Network Links](../network-links/README.md) container (`"parent": [ "cata/network-links" ]` in `block.json`) — like core's Social Links / Social Link — and appears in the inserter as one variation per bundled brand rather than as a bare block.

Six logos ship, defined twice: React components in `src/logos/` for the editor, SVG strings in the PHP service map in `network-link.php` for the front end. The services are `collectiveworld`, `creepycatalog`, `quotecatalog`, `shopcatalog`, `thoughtcatalog` (the default variation and the fallback for unknown service slugs), and `thoughtcatalogbooks`; each variation pre-fills the matching `url`.

The render callback outputs an `<li class="wp-block-cata-network-link wp-block-cata-network-link-{service}">` containing an `<a>` with the SVG logo and an `aria-label` (the brand name unless a `label` attribute is set); a block with no `url` renders nothing. The editor preview mirrors this with the React logo plus a screen-reader-text label.

Attributes are `service`, `url`, and `width` — the latter set via a Dimensions panel `UnitControl` (`src/dimension-controls.js`) and applied as `inline-size` on the list item in editor and front end alike. The `cata_blocks_support_network_link_block` filter disables registration.
