/**
 * Color Scheme Control
 */

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import {
	InspectorControls,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import useEditorCanvas from '../hooks/use-editor-canvas';
import { hasBlockSupport } from '@wordpress/blocks';

/**
 * Main
 */
export default function main() {
	addFilter(
		'blocks.registerBlockType',
		'cata/add-color-scheme-attribute',
		addColorSchemeAttribute
	);

	addFilter(
		'editor.BlockEdit',
		'cata/color-scheme-control',
		withColorSchemeControl
	);

	addFilter(
		'editor.BlockListBlock',
		'cata/color-scheme-editor-style',
		withColorSchemeStyle
	);

	addFilter(
		'blocks.getSaveContent.extraProps',
		'cata/apply-color-scheme-attribute',
		applyColorSchemeAttribute
	);
}

/**
 * Add Color Scheme Attribute
 * 
 * @param {Object} settings
 * @param {string} name
 * 
 * @return {Object} updated settings
 */
function addColorSchemeAttribute( settings, name ) {

	if ( undefined === settings.attributes ) {
		return settings;
	}

	if ( true !== hasBlockSupport( settings, 'color', false ) ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		cataBlocksColorScheme: {
			type: 'string',
		}
	} );

	return settings;
}

/**
 * With Color Scheme Control
 * 
 * @param {Object} BlockEdit
 * 
 * @return {function} updated block in editor with flex grow control
 */
const withColorSchemeControl = ( BlockEdit ) => {
	return ( props ) => {

		const { attributes, setAttributes, isSelected } = props;

		const { getBlockByClientId } = useEditorCanvas();

		const colorGradientSettings = useMultipleOriginColorsAndGradients();

		useEffect(
			() => {
				if ( ! isSelected ) {
					return;
				}
				const blockInDOM = getBlockByClientId(props.clientId);

				if ( blockInDOM ) {
					window.document.body.classList.toggle(
						'has-active-dark-mode-element',
						'dark only' === getComputedStyle( blockInDOM ).colorScheme
					);
				}
			},
			[isSelected, attributes.cataBlocksColorScheme]
		);

		if ( true !== hasBlockSupport( props.name, 'color', false ) ) {
			return <BlockEdit { ...props }/>
		}

		return (
			<>
				<BlockEdit { ...props } />
				{ isSelected && colorGradientSettings.hasColorsOrGradients &&
					<InspectorControls group="color">
						<SelectControl
							value={attributes.cataBlocksColorScheme}
							options={
								[
									{
										label: 'Original',
										value: ''
									},
									{
										label: 'Light',
										value: 'light only'
									},
									{
										label: 'Dark',
										value: 'dark only'
									}
								]
							}
							label={ __( 'Color Scheme', 'cata' ) }
							onChange={ ( newColorScheme ) => {
								setAttributes( { cataBlocksColorScheme: newColorScheme } )
							} }
						/>
					</InspectorControls>
				}
			</>
		);
	};
};

/**
 * With Color Scheme Style
 * 
 * @param {function} BlockListBlock
 * 
 * @return {function} updated wrapper component in editor
 */
const withColorSchemeStyle = createHigherOrderComponent( ( BlockListBlock ) => {

	return ( props ) => {
		const { attributes } = props;
	
		if ( null === attributes.cataBlocksColorScheme || undefined === attributes.cataBlocksColorScheme || '' === attributes.cataBlocksColorScheme ) {
			delete attributes.cataBlocksColorScheme;
			return <BlockListBlock {...props} />;
		}
	
		return (
			<BlockListBlock {...props} wrapperProps={ { style: { colorScheme: attributes.cataBlocksColorScheme } } } />
		);
	}

}, 'withColorSchemeStyle' );

/**
 * Apply Color Scheme Attribute
 * 
 * @param {Object} props
 * @param {Object} blockType
 * @param {Object} attributes
 * 
 * @return {Object} updated props
 */
function applyColorSchemeAttribute( props, blockType, attributes ) {

	const { cataBlocksColorScheme } = attributes;

	if ( undefined === cataBlocksColorScheme || null === cataBlocksColorScheme || '' === cataBlocksColorScheme ) {
		return props;
	}

	Object.assign( props, { 
		style: { 
			...props.style, 
			colorScheme: cataBlocksColorScheme,
		} 
	} );

	return props;

}
