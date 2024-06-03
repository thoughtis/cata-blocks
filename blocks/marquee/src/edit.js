/**
 * Edit
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/post-title',
	'core/query-title',
	'core/heading',
	'core/paragraph',
];

const TEMPLATE = [
	[ 'core/post-title', { level: 2 } ],
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
		<div { ...blockProps }>
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } />
		</div>
	);
}
