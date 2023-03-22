/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() } id="toc-entry-point">
			<details open={ 'defaultClosed' === attributes.behavior ? null : 'true' }>
				<RichText.Content
					tagName="summary"
					value={attributes?.summary || 'Table of Contents'}
					onClick={ 'alwaysOpen' === attributes?.behavior ? 'return false;' : null}
				/>
			</details>
		</div>
	);
}
