!function(){"use strict";var t=window.wp.data,a=window.wp.hooks;(0,t.register)((0,t.createReduxStore)("cata/blocks",{reducer:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.cataBlocks;return t},selectors:{getShopifyData:t=>(0,a.applyFilters)("cata-blocks.shopify-data",t.shopifyData)}}))}();