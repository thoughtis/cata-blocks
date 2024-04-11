/**
 * Network Link Block
 */

/**
 * WordPress dependencies
*/
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import variations from './variations';

/**
 * Style shared between editor and content
 */
import './style.scss';

registerBlockType( 'cata/network-link', {
	edit: edit,
	variations: variations
} );
