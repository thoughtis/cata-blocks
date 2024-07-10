/**
 * Save
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Save
 *
 * @export
 * @return {WPElement} Save
 */
export default function Save() {	
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
