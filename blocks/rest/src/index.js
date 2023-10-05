/**
 * Rest Block
 */

/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * API Fetch Middleware
 */
import { cacheMiddleware, proxyMiddleware } from './api-fetch-middleware';

apiFetch.use( proxyMiddleware );
apiFetch.use( cacheMiddleware );

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'cata/rest', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save
} );
