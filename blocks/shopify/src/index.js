/**
 * Shopify Block
 */

/**
 * External dependencies
 */
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'cata/shopify', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save
} );

registerBlockStyle( 'cata/shopify', {
	name: 'reel',
	label: 'Reel'
} );
