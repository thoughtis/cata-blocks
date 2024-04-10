/**
 * Kicker Block
 */

import { registerBlockType, createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Style shared between editor and content
 */
import './style.scss';

registerBlockType( 'cata/kicker', {
	edit: Edit,
	save: Save,
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="6" width="15" height="4" /><rect x="0" y="12" width="24" height="4" /></svg>,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/paragraph', 'core/heading' ],
				transform: ( { content } ) => {
					return createBlock( 'cata/kicker', {
						content,
					} );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { content } ) => {
					return createBlock( 'core/paragraph', {
						content,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/heading' ],
				transform: ( { content } ) => {
					return createBlock( 'core/heading', {
						content,
					} );
				},
			},
		]
	},
	merge( attributes, attributesToMerge ) {
		return {
			content:
				( attributes.content || '' ) +
				( attributesToMerge.content || '' ),
		};
	},
} );
