/**
 * External Dependencies
 */
import { createReduxStore, register } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';

/**
 * Register Redux Store
 */
register(
	createReduxStore( 'cata/blocks', {
		reducer: ( state = window.cataBlocks ) => {
			return state;
		},
		selectors: {
			getShopifyData: ( state ) => applyFilters( 'cata-blocks.shopify-data', state.shopifyData ),
		},
	} )
);
