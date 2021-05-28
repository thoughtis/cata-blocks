/**
 * Edit
 */

import './editor.scss';
import classnames from 'classnames';
import { Fragment } from '@wordpress/element';
import {
	AlignmentToolbar,
	BlockControls,
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

/**
 * Edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
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
			/>
		</Fragment>
	);
}
