/**
 * Edit
 */

import classnames from 'classnames';
import { Fragment } from '@wordpress/element';
import {
	AlignmentToolbar,
	BlockControls,
	RichText,
	useBlockProps
} from '@wordpress/block-editor';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';

/**
 * Edit
 *
 * @return {WPElement} Element to render.
 */
 export default function Edit( {
	attributes,
	setAttributes,
	clientId,
	mergeBlocks,
	onReplace,
	onRemove
} ) {
	const { textAlign, content } = attributes;
	const blockProps = useBlockProps({
		className: classnames({
			[`has-text-align-${textAlign}`]: textAlign
		})
	});
	return (
		<Fragment>
			<BlockControls group="block">
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( {
								textAlign: nextAlign
						} );
					} }
				/>
			</BlockControls>
			<RichText
					{ ...blockProps }
					tagName="p"
					value={ content }
					onChange={ ( nextContent ) =>
						setAttributes( { content: nextContent } )
					}
					onMerge={ mergeBlocks }
					onReplace={ onReplace }
					onRemove={ onRemove }
					onSplit={ ( value, isOriginal ) => {
						let block;
	
						if ( isOriginal || value ) {
							block = createBlock( 'cata/kicker', {
								...attributes,
								content: value,
							} );
						} else {
							block = createBlock(
								getDefaultBlockName() ?? 'cata/kicker'
							);
						}
	
						if ( isOriginal ) {
							block.clientId = clientId;
						}
	
						return block;
					} }
			/>
		</Fragment>
	);
}
