/**
 * Edit
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/post-title',
];

const TEMPLATE = [
	[ 'core/post-title', { className: 'wp-block-cata-marquee__inner', level: 2, lock: { 'move': true, 'remove': true }  } ],
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
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } templateLock="all" />
		</div>
	);
}
