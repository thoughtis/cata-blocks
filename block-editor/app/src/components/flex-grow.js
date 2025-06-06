/**
 * Flex Grow Control
 */

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function main() {
	addFilter(
		'blocks.registerBlockType',
		'cata/add-flex-grow-attribute',
		addFlexGrowAttribute
	);

	addFilter(
		'editor.BlockEdit',
		'cata/flex-grow-control',
		withFlexGrowControl
	);

	addFilter(
		'editor.BlockListBlock',
		'cata/flex-grow-editor-style',
		withFlexGrowStyle
	);

	addFilter(
		'blocks.getSaveContent.extraProps',
		'cata/apply-flex-grow-attribute',
		applyFlexGrowAttribute
	);
}

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

/**
 * With Flex Grow Control
 * 
 * @param {Object} BlockEdit
 * 
 * @return {function} updated block in editor with flex grow control
 */
const withFlexGrowControl = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {
		const { attributes, setAttributes, isSelected } = props;

		if ( ! isFixedBlock( attributes ) ) {
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

		if ( ! isFixedBlock( attributes ) ) {
			attributes.cataBlocksFlexGrow = null;
		}
	
		if ( null === attributes.cataBlocksFlexGrow || undefined === attributes.cataBlocksFlexGrow ) {
			delete attributes.cataBlocksFlexGrow;
			return <BlockListBlock {...props} />;
		}
	
		return (
			<BlockListBlock {...props} wrapperProps={ { style: { flexGrow: attributes.cataBlocksFlexGrow } } } />
		);
	}

}, 'withFlexGrowStyle' );

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

	if ( ! isFixedBlock( attributes ) || undefined === cataBlocksFlexGrow || null === cataBlocksFlexGrow ) {
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

/**
 * Is Fixed Block
 * 
 * @param {Object} attributes
 * 
 * @return {boolean} if block is fixed or not
 */
function isFixedBlock( attributes ) {

	const layoutStyle = attributes.style;

	if ( undefined !== layoutStyle && undefined !== layoutStyle.layout && 'fixed' === layoutStyle.layout.selfStretch ) {
		return true;
	}

}
