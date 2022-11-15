/**
 * Products block
 */

/**
 * External dependencies
 */
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { cacheMiddleware, proxyMiddleware } from './api-fetch-middleware';
import Edit from './edit';
import save from './save';

/**
 * Style shared between editor and content
 */
import './style.scss';

/**
 * Use middleware
 */
apiFetch.use( proxyMiddleware );
apiFetch.use( cacheMiddleware );

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'cata/products', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save
} );

registerBlockStyle( 'cata/products', {
	name: 'reel',
	label: 'Reel'
} );
