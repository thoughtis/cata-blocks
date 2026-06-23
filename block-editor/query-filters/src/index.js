import { InspectorControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';

addFilter(
	'blocks.registerBlockType',
	'cata/queryFilters',
	addQueryFilterAttributes
);

addFilter(
	'editor.BlockEdit',
	'cata/queryFilters',
	withQueryFilters
);

/**
 * Add Query Filter Attributes
 *
 * @param {Object} settings
 * @param {string} name
 *
 * @return {Object} updated settings
 */
function addQueryFilterAttributes( settings, name ) {

	if ( undefined === settings.attributes || 'core/query' !== name ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		cataInheritQuery: {
			type: 'boolean',
			default: false
		},
		cataTermFromRequest: {
			type: 'boolean',
			default: false
		}
	} );

	return settings;
}

/**
 * With Query Filters
 *
 * @param {Object} BlockEdit
 */
function withQueryFilters( BlockEdit ) {

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
