/**
 * Edit
 */

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
			<InnerBlocks />
		</div>
	);
}
