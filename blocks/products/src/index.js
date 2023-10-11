/**
 * Products block
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
 * Style shared between editor and content
 */
import './style.scss';

/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { cacheMiddleware, proxyMiddleware } from '../../../blocks-middleware-3/build/index';

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
