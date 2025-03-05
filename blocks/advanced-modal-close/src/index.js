/**
 * Advanced Modal Close Block
 */

/**
 * WordPress dependencies
*/
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import Save from './save';

/**
 * Style shared between editor and content
 */
import './style.scss';

registerBlockType( 'cata/advanced-modal-close', {
	edit: edit,
	save: Save,
	icon: "no",
} );
