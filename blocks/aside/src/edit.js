/**
 * Edit
 */

import './editor.scss';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Edit
 *
 * @export
 * @return {WPElement} Edit
 */
export default function Edit() {
	const blockProps = useBlockProps();
	return (
		<aside { ...blockProps }>
			<div className="wp-block-cata-aside__inner-container">
				<InnerBlocks />
			</div>
		</aside>
	);
}
