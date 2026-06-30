/**
 * Image Lightbox Block
 */

import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Style shared between editor and content
 */
import './style.scss';

registerBlockType( 'cata/image-lightbox', {
	edit: Edit,
	save: Save,
	icon: "editor-expand"
} );
