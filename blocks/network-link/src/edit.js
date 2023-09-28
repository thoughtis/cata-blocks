/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { URLInput, URLPopover, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import { getIconBySite, getNameBySite } from './network-list.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import './editor.scss';

const NetworkLinkURLPopover = ( {
	url,
	setAttributes,
	setPopover,
	popoverAnchor,
	clientId,
} ) => {
	const { removeBlock } = useDispatch( blockEditorStore );
	return (
		<URLPopover
			anchor={ popoverAnchor }
			onClose={ () => setPopover( false ) }
		>
			<form
				className="block-editor-url-popover__link-editor"
				onSubmit={ ( event ) => {
					event.preventDefault();
					setPopover( false );
				} }
			>
				<div className="block-editor-url-input">
					<URLInput
						__nextHasNoMarginBottom
						value={ url }
						onChange={ ( nextURL ) =>
							setAttributes( { url: nextURL } )
						}
						placeholder={ __( 'Enter address' ) }
						disableSuggestions={ true }
						onKeyDown={ ( event ) => {
							if (
								!! url ||
								event.defaultPrevented ||
								! [ BACKSPACE, DELETE ].includes(
									event.keyCode
								)
							) {
								return;
							}
							removeBlock( clientId );
						} }
					/>
				</div>
				<Button
					icon={ keyboardReturn }
					label={ __( 'Apply' ) }
					type="submit"
				/>
			</form>
		</URLPopover>
	);
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { service, url } = attributes;
	const [ showURLPopover, setPopover ] = useState( false );
	const IconComponent = getIconBySite( service );
	const socialLinkName = getNameBySite( service );
	const blockProps = useBlockProps();

	return (
		<li { ...blockProps }>
			<Button>
				<IconComponent />
				<span className="cata-network-link-label screen-reader-text">
					{ socialLinkName }
				</span>
				{
					isSelected && showURLPopover && (
						<NetworkLinkURLPopover
							url={ url }
							setAttributes={ setAttributes }
							setPopover={ setPopover }
							popoverAnchor={ popoverAnchor }
							clientId={ clientId }
						/>
					)
				}
			</Button>
		</li>
	);
}
