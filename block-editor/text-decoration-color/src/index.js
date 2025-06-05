/**
 * Text Decoration Control
 */

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';

import { hasBlockSupport } from '@wordpress/blocks';

/**
 * Add Text Decoration Color Attribute
 * 
 * @param {Object} settings
 * 
 * @return {Object} updated settings
 */
function addTextDecorationColorAttribute( settings ) {

	if ( undefined === settings.attributes ) {
		return settings;
	}

	if ( true !== isBlockAllowed( settings.name ) || true !== hasBlockSupport( settings, 'color.link', false ) ) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			cataBlocksTextDecorationColor: {
				type: 'string',
			}
		}
	}
}

/**
 * With Text Decoration Color Control
 * 
 * @param {Object} BlockEdit
 * 
 * @return {function} updated block in editor with text decoration control
 */
const withTextDecorationColorControl = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		const colorGradientSettings = useMultipleOriginColorsAndGradients();
		const { attributes, setAttributes, clientId, isSelected } = props;
		const { cataBlocksTextDecorationColor } = attributes;

		if ( true !== isBlockAllowed( props.name ) || true !== hasBlockSupport( props.name, 'color.link', false ) ) {
			return <BlockEdit { ...props }/>
		}

		return (
			<>
				<BlockEdit { ...props }/>
				{ isSelected &&
					<InspectorControls group="color">
						<ColorGradientSettingsDropdown
							settings={ [ {
								label: __( 'Text Decoration Color', 'cata' ),
								colorValue: cataBlocksTextDecorationColor,
								onColorChange: ( value ) => {
									setAttributes( {
										cataBlocksTextDecorationColor: value
									} );
								}
							} ] }
							panelId={ clientId }
							hasColorsOrGradients={ false }
							disableCustomColors={ false }
							enableAlpha={true}
							__experimentalIsRenderedInSidebar
							{ ...colorGradientSettings }
						/>
					</InspectorControls>
				}
			</>
		);
	};

}, 'withTextDecorationColorControl' );

/**
 * With Text Decoration Color Style
 * 
 * @param {function} BlockListBlock
 * 
 * @return {function} updated wrapper component in editor
 */
const withTextDecorationColorStyle = createHigherOrderComponent( ( BlockListBlock ) => {

	return ( props ) => {
		const { attributes } = props;

		if ( true !== isBlockAllowed( props.name ) || true !== hasBlockSupport( props.name, 'color.link', false ) ) {
			delete attributes.cataBlocksTextDecorationColor;
			return <BlockListBlock {...props} />;
		}
	
		if ( null === attributes.cataBlocksTextDecorationColor || undefined === attributes.cataBlocksTextDecorationColor ) {
			delete attributes.cataBlocksTextDecorationColor;
			return <BlockListBlock {...props} />;
		}
	
		return (
			<BlockListBlock {...props} wrapperProps={ { style: { '--cata-text-decoration-color': attributes.cataBlocksTextDecorationColor } } } />
		);
	}

}, 'withTextDecorationColorStyle' );

/**
 * Apply Text Decoration Color Attribute
 * 
 * @param {Object} props
 * @param {Object} blockType
 * @param {Object} attributes
 * 
 * @return {Object} updated props
 */
function applyTextDecorationColorAttribute( props, blockType, attributes ) {

	const { cataBlocksTextDecorationColor } = attributes;

	if ( true !== isBlockAllowed( blockType.name ) || true !== hasBlockSupport( blockType, 'color.link', false ) ) {
		return props;
	}

	if ( undefined === cataBlocksTextDecorationColor || null === cataBlocksTextDecorationColor ) {
		return props;
	}

	return {
		...props,
		style: {
			...props.style,
			'--cata-text-decoration-color': cataBlocksTextDecorationColor,
		}
	};
}


/**
 * Is Block Allowed?
 *
 * @param {string} blockName 
 * @return {boolean}
 */
function isBlockAllowed( blockName ) {
	return [
		'core/group',
		'core/heading',
		'core/paragraph',
		'core/pullquote',
		'core/quote'
	].includes(blockName);
}

addFilter(
	'blocks.registerBlockType',
	'cata/add-text-decoration-color-attribute',
	addTextDecorationColorAttribute
);

addFilter(
	'editor.BlockEdit',
	'cata/text-decoration-color-control',
	withTextDecorationColorControl
);

addFilter(
	'editor.BlockListBlock',
	'cata/text-decoration-color-editor-style',
	withTextDecorationColorStyle
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'cata/apply-text-decoration-color-attribute',
	applyTextDecorationColorAttribute
);
