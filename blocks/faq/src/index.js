/**
 * FAQ Block
 */

import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

registerBlockType( 'cata/faq', {
	edit: Edit,
	save: Save,
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0a12 12 0 1 0 12 12A12.01 12.01 0 0 0 12 0Zm.02 19a1 1 0 0 1-.01-2h.01a1 1 0 0 1 0 2Zm1.91-6.495a1.646 1.646 0 0 0-.93 1.408 1.039 1.039 0 0 1-1 1.044.965.965 0 0 1-1-.957 3.644 3.644 0 0 1 1.964-3.247 2 2 0 0 0 1-2.125 2.024 2.024 0 0 0-1.6-1.595A2 2 0 0 0 10 9a1 1 0 0 1-2 0 4 4 0 1 1 5.93 3.505Z"/></svg>
} );