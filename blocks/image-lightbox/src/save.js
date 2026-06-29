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
		<div { ...blockProps } >
			<div class="wp-block-cata-image-lightbox__inner-blocks">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
