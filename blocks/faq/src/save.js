/**
 * Save
 */

import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Save
 * 
 * @export
 * @return {WPElement} Save
 */
export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps } >
			<RichText.Content
				tagName="h4"
				value={ attributes?.question || '' }
				className="wp-block-cata-faq__question"
			/>
			<div class="wp-block-cata-faq__answer">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}