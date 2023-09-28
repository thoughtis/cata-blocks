/**
 * Network Link Block
 */

/**
 * WordPress dependencies
*/
import { blockMeta as icon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import variations from './variations';

registerBlockType( 'cata/network-link', {
	icon,
	edit,
	variations
} );
