/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InspectorControls, useInnerBlocksProps, useBlockProps, useSettings } from '@wordpress/block-editor';

import { __experimentalUseCustomUnits as useCustomUnits, PanelBody, __experimentalUnitControl as UnitControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes: { inlineSize }, setAttributes } ) {

	const units = useCustomUnits( {
		availableUnits: useSettings( 'spacing.units' )[0] ?? [
			'%',
			'px',
			'em',
			'rem',
			'vw',
		],
	} );
	
	return (
		<>
		<InspectorControls>
			<PanelBody title={ __( 'Column settings' ) }>
				<UnitControl
					label={ __( 'Inline Size' ) }
					labelPosition="edge"
					value={ inlineSize || '' }
					onChange={ ( nextInlineSize ) => {
						nextInlineSize =
							0 > parseFloat( nextInlineSize ) ? '0' : nextInlineSize;
						setAttributes( { inlineSize: nextInlineSize } );
					} }
					units={ units }
				/>
			</PanelBody>
		</InspectorControls>
		<div { ...useInnerBlocksProps( useBlockProps( { style: { inlineSize } } ) ) } />
		</>
	);
}
