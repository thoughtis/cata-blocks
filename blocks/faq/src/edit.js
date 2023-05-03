/**
 * Edit
 */

import './editor.scss';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Allowed Blocks
 * Gotta be defined outside of the useInnerBlocksProp function call.
 * @link https://fabian-kaegy.com/define-allowedblocks-outside-of-jsx-for-useinnerblocksprops-function/
 * @link https://github.com/WordPress/gutenberg/pull/30274
 */
const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph', 
	'core/list',
];

const TEMPLATE = [
	['core/heading', { className: 'wp-block-cata-faq__question', level: 4, placeholder: 'Enter question...' } ],
	['core/group', { className: 'wp-block-cata-faq__answer' }, [
		[ 'core/paragraph', { placeholder: 'Enter answer...' } ],
	] ],
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
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } templateLock={ 'false' } />
		</div>
	);
}