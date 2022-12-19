/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId, onReplace, mergeBlocks } ) {
	return (
		<div { ...useBlockProps() } >
			<RichText
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				tagName="div"
				value={attributes?.summary || 'Table of Contents'}
				onChange={(nextSummary)=>{ setAttributes({summary: nextSummary})}}
				onReplace={ onReplace }
				onMerge={mergeBlocks}
				onSplit={ ( value, isOriginal ) => {
					if ( isOriginal || value ) {
						return createBlock( 'cata/toc', {
							...attributes,
							summary: value,
							clientId: isOriginal ? clientId : null
						} );
					}
					return createBlock(
						getDefaultBlockName()
					)
				} }
			/>
		</div>
	);
}
