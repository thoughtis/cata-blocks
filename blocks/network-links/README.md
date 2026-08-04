# Network Links

The Network Links block (`cata/network-links`) is the container half of the network-links pair: a `<ul>` holding [Network Link](../network-link/README.md) child blocks, each a logo linking to another site in the Thought Catalog network — typically used in footers and site-wide navigation, mirroring how core's Social Links wraps Social Link.

The container is a static block (no render callback) registered from `network-links.php` behind the `cata_blocks_support_network_links_block` filter. Its `block.json` supports a locked flex layout, left/center/right alignment, anchor, and margin/padding/blockGap spacing; the editor (`src/edit.js`) restricts inner blocks to `cata/network-link`, uses an `<li>` appender so the list stays valid HTML while editing, and shows a "Click plus to add" prompt when empty. `__experimentalExposeControlsToChildren` surfaces this block's controls on its children too.

The six bundled brand logos (Thought Catalog, Thought Catalog Books, Collective World, Creepy Catalog, Quote Catalog, Shop Catalog) belong to the child block; see its README for how each link renders.
