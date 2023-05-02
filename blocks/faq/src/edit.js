/**
 * Edit
 */

import './editor.scss';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Edit
 * 
 * @export
 * @return {WPElement} Edit
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps } >
			<RichText
				tagName="h2"
				value={ attributes?.question || '' }
				onChange={ ( nextQuestion ) => setAttributes( { question: nextQuestion } ) }
				placeholder="Enter question here"
			/>
			<div class="wp-block-cata-faq__answer">
				<InnerBlocks />
			</div>
		</div>
	);
}