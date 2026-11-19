/**
 * Kicker Deprecations
 */

import classnames from 'classnames';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Markup with a font family class, which the block no longer supports.
 */
const v1 = {
	supports: {
		html: false,
		customClassName: false,
		typography: {
			fontSize: true,
			__experimentalFontFamily: true,
			__experimentalTextTransform: true,
		},
		splitting: true,
	},
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
			default: '',
		},
		textAlign: {
			type: 'string',
		},
		fontSize: {
			type: 'string',
			default: 'small',
		},
		fontFamily: {
			type: 'string',
		},
		style: {
			type: 'object',
		},
	},
	save( { attributes } ) {
		const { textAlign, content } = attributes;
		const blockProps = useBlockProps.save( {
			className: classnames( {
				[ `has-text-align-${ textAlign }` ]: textAlign,
			} ),
		} );
		return (
			<RichText.Content
				{ ...blockProps }
				tagName="p"
				value={ content }
			/>
		);
	},
	migrate( { fontFamily, ...attributes } ) {
		return attributes;
	},
};

export default [ v1 ];
