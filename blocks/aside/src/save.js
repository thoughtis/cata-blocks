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
		<aside { ...blockProps }>
			<div className="wp-block-cata-aside__inner-container">
				<InnerBlocks.Content />
			</div>
		</aside>
	);
}
