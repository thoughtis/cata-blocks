/**
 * Save 
 */

import classnames from 'classnames';
import { RichText, useBlockProps } from '@wordpress/block-editor';
 
/**
 * Save
 *
 * @return {WPElement} Element to render.
 */
export default function Save( { attributes } ) {
	const { textAlign, content } = attributes;
	const blockProps = useBlockProps.save({
		className: classnames({
			[`has-text-align-${textAlign}`]: textAlign
		})
	});
	return (
		<RichText.Content
			{ ...blockProps }
			tagName="p"
			value={ content }
		/>
	);
}
 