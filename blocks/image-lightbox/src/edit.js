/**
 * Edit
 */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

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
			{ __(
				'Image Lightbox: in-content image blocks open in a modal slider on the front end when clicked.',
				'cata'
			) }
		</div>
	);
}
