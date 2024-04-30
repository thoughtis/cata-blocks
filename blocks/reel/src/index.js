/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Style shared between editor and content
 */
import './style.scss';

registerBlockType( 'cata/reel', {
	edit: Edit,
	save: save,
} );
