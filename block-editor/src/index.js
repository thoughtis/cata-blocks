/**
 * Flex Grow Control
 */


/**
 * Add Flex Grow Attribute
 */
function addFlexGrowAttribute( settings, name ) {
	if ( 'undefined' === typeof settings.attributes ) {
		return settings;
	}

	if ( name !== 'core/group' ) {
		return settings;
	}
	
	settings.attributes = Object.assign( settings.attributes, {
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
 */
const flexGrowControl = wp.compose.createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { __ } = wp.i18n;
		const { Fragment } = wp.element;
		const { __experimentalNumberControl } = wp.components;
		const { InspectorControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		const layoutStyle = attributes.style;
		let isFixed = false;

		if ( undefined !== layoutStyle && undefined !== layoutStyle.layout ) {
			isFixed = 'fixed' === layoutStyle.layout.selfStretch;
		}

		return (
			<Fragment>
				<BlockEdit { ...props }/>
				{ isSelected && ( props.name == 'core/group' ) && isFixed &&
					<InspectorControls group="dimensions">
						<__experimentalNumberControl
							label={ __( 'Flex Grow', 'cata' ) }
							value={ attributes.cataBlocksFlexGrow }
							onChange={ ( newFlexGrow ) => {
								setAttributes( { cataBlocksFlexGrow: newFlexGrow } )
							} }
						/>
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, 'flexGrowControl' );
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'cata/flex-grow-control',
	flexGrowControl
);

/**
 * Flex Grow Editor Style
 */
function flexGrowEditorStyle( BlockListBlock ) {

	return ( props ) => {
		const { block, attributes } = props;
	
		if ( 'core/group' !== block.name || 0 === attributes.cataBlocksFlexGrow ) {
			return <BlockListBlock {...props} />;
		}
	
		return (
			<BlockListBlock {...props} wrapperProps={ { style: { flexGrow: attributes.cataBlocksFlexGrow } } } />
		);
	}

}
  
wp.hooks.addFilter(
	'editor.BlockListBlock',
	'cata/flex-grow-editor-style',
	flexGrowEditorStyle
);

/**
 * Apply Flex Grow Attribute
 */
function applyFlexGrowAttribute( props, blockType, attributes ) {
	if ( blockType.name !== 'core/group' ) {
		return props;
	}

	const { cataBlocksFlexGrow } = attributes;

	if ( cataBlocksFlexGrow === undefined ) {
		return props;
	}

	Object.assign( props, { style: { ...props.style, flexGrow: cataBlocksFlexGrow } } );

	return props;
}
 
wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'cata/apply-flex-grow-attribute',
	applyFlexGrowAttribute
);
