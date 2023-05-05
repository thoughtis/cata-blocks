/**
 * Edit
 */

import './editor.scss';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph', 
	'core/list',
];

const TEMPLATE = [
	['core/heading', { className: 'wp-block-cata-faq__question', level: 3, placeholder: 'Enter question...' } ],
	[ 'core/paragraph', { placeholder: 'Enter answer...' } ],
];

/**
 * Edit
 * 
 * @export
 * @return {WPElement} Edit
 */
export default function Edit() {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps } >
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } />
		</div>
	);
}
