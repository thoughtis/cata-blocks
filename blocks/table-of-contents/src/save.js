/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes, className } ) {
	const DetailsElement = 'alwaysOpen' === attributes.behavior ? 'div' : 'details';
	const SummaryElement = 'alwaysOpen' === attributes.behavior ? 'div' : 'summary';
	return (
		<div { ...useBlockProps.save({className}) } id="toc-entry-point">
			<DetailsElement open={ 'startOpen' === attributes.behavior ? 'true' : null }>
				<SummaryElement className="wp-block-cata-toc__summary">
					<InnerBlocks.Content />
				</SummaryElement>
			</DetailsElement>
		</div>
	);
}
