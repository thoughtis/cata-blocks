# Blocks Store

Registers the `cata/blocks` `@wordpress/data` store in the block editor,
seeded from a localized `cataBlocks` global. It currently holds one thing: the
configured Shopify store subdomains.

`blocks-store.php` reads the `cata_blocks_shopify_stores` option (managed on
the Cata Blocks settings page) and localizes each store's `subdomain` as
`window.cataBlocks.shopifyData`; `src/index.js` registers the store with one
selector, `getShopifyData`, whose result passes through the
`cata-blocks.shopify-data` JS hook. The Shopify block uses it to know which
stores' product feeds are available. Editor-only.
