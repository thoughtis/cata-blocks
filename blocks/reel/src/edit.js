/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';


/**
 * Allowed Blocks
 * Gotta be defined outside of the useInnerBlocksProp function call.
 * @link https://fabian-kaegy.com/define-allowedblocks-outside-of-jsx-for-useinnerblocksprops-function/
 * @link https://github.com/WordPress/gutenberg/pull/30274
 */
const ALLOWED_BLOCKS = [ 'cata/reel-clip' ];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div {
				...useInnerBlocksProps(
					{
						className: 'wp-block-cata-reel__inner-container',
						orientation: 'horizontal'
					},
					{
						allowedBlocks: ALLOWED_BLOCKS
					}
				)
			} />
		</div>
	);
}
