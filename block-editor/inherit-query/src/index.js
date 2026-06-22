import { InspectorControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';

addFilter(
	'blocks.registerBlockType',
	'cata/inheritQuery',
	addInheritQueryAttribute
);

addFilter(
	'editor.BlockEdit',
	'core/inheritQuery',
	withInheritQuery
);

/**
 * Add Inherit Query Attribute
 * 
 * @param {Object} settings
 * @param {string} name
 * 
 * @return {Object} updated settings
 */
function addInheritQueryAttribute( settings, name ) {

	if ( undefined === settings.attributes || 'core/query' !== name ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		cataInheritQuery: {
			type: 'boolean',
			default: false
		}
	} );

	return settings;
}

/**
 * With Inherit Query
 *
 * @param {Object} BlockEdit 
 */
function withInheritQuery( BlockEdit ) {

	return ( props ) => {

		if ( 'core/query' !== props.name ) {
			return <BlockEdit key="edit" { ...props } />;
		}

		const { setAttributes, attributes } = props;
		const cataInheritQuery = attributes.cataInheritQuery ?? false;
		const cataTermFromRequest = attributes.cataTermFromRequest ?? false;

		return (
			<>
				<BlockEdit key="edit" { ...props } />
				<InspectorControls>
					<PanelBody title="Custom Query Filters">
						<PanelRow>
							<ToggleControl
							__nextHasNoMarginBottom
							label="Inherit Query"
							help="Only use this for the latest / posts page"
							checked={ cataInheritQuery }
							onChange={ (newValue) => {
								setAttributes( { cataInheritQuery: newValue } );
							} }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
							__nextHasNoMarginBottom
							label="Filter by current term"
							help="Filter this query by the current request's taxonomy term"
							checked={ cataTermFromRequest }
							onChange={ (newValue) => {
								setAttributes( { cataTermFromRequest: newValue } );
							} }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</>
		)
	};
}


