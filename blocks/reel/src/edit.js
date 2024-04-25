/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const ReelPlaceholder = (
		<div className="wp-block-cata-reel__prompt">
			{ __( 'Click plus to add' ) }
		</div>
	);

	const blockProps = useBlockProps();

	const innerBlockProps = useInnerBlocksProps( blockProps, {
		placeholder: ReelPlaceholder,
	} );

	return (
		<div { ...innerBlockProps } />
	);
}
