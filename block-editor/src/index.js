/**
 * Flex Grow Control
 */

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

/**
 * Add Flex Grow Attribute
 * 
 * @param {Object} settings
 * @param {string} name
 * 
 * @return {Object} updated settings
 */
function addFlexGrowAttribute( settings, name ) {

	if ( undefined === settings.attributes ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		cataBlocksFlexGrow: {
			type: 'int',
		}
	} );

	return settings;

}

addFilter(
	'blocks.registerBlockType',
	'cata/add-flex-grow-attribute',
	addFlexGrowAttribute
);

/**
 * Flex Grow Control
 * 
 * @param {Object} BlockEdit
 * 
 * @return {function} updated block in editor with flex grow control
 */
const withFlexGrowControl = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {
		const { __ } = wp.i18n;
		const { __experimentalNumberControl: NumberControl } = wp.components;
		const { InspectorControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		const layoutStyle = attributes.style;

		if ( undefined === layoutStyle || undefined === layoutStyle.layout || 'fixed' !== layoutStyle.layout.selfStretch ) {
			setAttributes( { cataBlocksFlexGrow: null } );
			return <BlockEdit { ...props }/>
		}

		return (
			<>
				<BlockEdit { ...props }/>
				{ isSelected &&
					<InspectorControls group="dimensions">
						<NumberControl
							label={ __( 'Flex Grow', 'cata' ) }
							value={ attributes.cataBlocksFlexGrow }
							min={ 0 }
							onChange={ ( newFlexGrow ) => {
								setAttributes( { cataBlocksFlexGrow: newFlexGrow } )
							} }
						/>
					</InspectorControls>
				}
			</>
		);
	};

}, 'withFlexGrowControl' );

addFilter(
	'editor.BlockEdit',
	'cata/flex-grow-control',
	withFlexGrowControl
);

/**
 * With Flex Grow Style
 * 
 * @param {function} BlockListBlock
 * 
 * @return {function} updated wrapper component in editor
 */
const withFlexGrowStyle = createHigherOrderComponent( ( BlockListBlock ) => {

	return ( props ) => {
		const { attributes } = props;
	
		if ( null === attributes.cataBlocksFlexGrow || undefined === attributes.cataBlocksFlexGrow ) {
			return <BlockListBlock {...props} />;
		}
	
		return (
			<BlockListBlock {...props} wrapperProps={ { style: { flexGrow: attributes.cataBlocksFlexGrow } } } />
		);
	}

}, 'withFlexGrowStyle' );

addFilter(
	'editor.BlockListBlock',
	'cata/flex-grow-editor-style',
	withFlexGrowStyle
);

/**
 * Apply Flex Grow Attribute
 * 
 * @param {Object} props
 * @param {Object} blockType
 * @param {Object} attributes
 * 
 * @return {Object} updated props
 */
function applyFlexGrowAttribute( props, blockType, attributes ) {

	const { cataBlocksFlexGrow } = attributes;

	if ( undefined === cataBlocksFlexGrow || null === cataBlocksFlexGrow ) {
		return props;
	}

	Object.assign( props, { 
		style: { 
			...props.style, 
			flexGrow: cataBlocksFlexGrow,
		} 
	} );

	return props;

}

addFilter(
	'blocks.getSaveContent.extraProps',
	'cata/apply-flex-grow-attribute',
	applyFlexGrowAttribute
);
