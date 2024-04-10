/**
 * Aside Block
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

registerBlockType( 'cata/aside', {
	edit: Edit,
	save: Save,
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" fill="none" stroke="black" strokeWidth="2" strokeDasharray="2 2" strokeDashoffset="1" /></svg>
} );
