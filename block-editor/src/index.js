/**
 * Flex Grow Control
 */

/**
 * Add Flex Grow Attribute
 * 
 * @param {Object} settings
 * @param {string} name
 * 
 * @return {Object} updated settings
 */
function addFlexGrowAttribute( settings, name ) {

	if ( 'core/group' !== name ) {
		return settings;
	}

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

wp.hooks.addFilter(
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
const withFlexGrowControl = wp.compose.createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {
		const { __ } = wp.i18n;
		const { __experimentalNumberControl: NumberControl } = wp.components;
		const { InspectorControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		const layoutStyle = attributes.style;

		if ( undefined === layoutStyle || undefined === layoutStyle.layout ) {
			return <BlockEdit { ...props }/>
		}

		return (
			<>
				<BlockEdit { ...props }/>
				{ isSelected && ( 'core/group' === props.name ) && ( 'fixed' === layoutStyle.layout.selfStretch ) &&
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

wp.hooks.addFilter(
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
const withFlexGrowStyle = wp.compose.createHigherOrderComponent( ( BlockListBlock ) => {

	return ( props ) => {
		const { block, attributes } = props;
	
		if ( 'core/group' !== block.name || null === attributes.cataBlocksFlexGrow || undefined === attributes.cataBlocksFlexGrow ) {
			return <BlockListBlock {...props} />;
		}
	
		return (
			<BlockListBlock {...props} wrapperProps={ { style: { flexGrow: attributes.cataBlocksFlexGrow } } } />
		);
	}

}, 'withFlexGrowStyle' );

wp.hooks.addFilter(
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

	if ( 'core/group' !== blockType.name ) {
		return props;
	}

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

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'cata/apply-flex-grow-attribute',
	applyFlexGrowAttribute
);
