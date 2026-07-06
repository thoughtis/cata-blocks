import { InspectorControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import {
	TextControl,
	ToggleControl,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

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
		},
		cataPinnedFallback: {
			type: 'boolean',
			default: false
		},
		cataPinnedFallbackCategories: {
			type: 'array',
			default: []
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
		const cataPinnedFallback = attributes.cataPinnedFallback ?? false;
		const cataPinnedFallbackCategories = attributes.cataPinnedFallbackCategories ?? [];

		// Draft text for the category IDs field, so in-progress input
		// (trailing commas, partial numbers) is not normalized away mid-keystroke.
		const [ fallbackCategoriesDraft, setFallbackCategoriesDraft ] = useState( null );

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
						<PanelRow>
							<ToggleControl
							__nextHasNoMarginBottom
							label="Fallback when nothing is pinned"
							help="For loops showing only pinned posts: when no pinned post is published, show the latest post that has a featured image instead"
							checked={ cataPinnedFallback }
							onChange={ (newValue) => {
								setAttributes( { cataPinnedFallback: newValue } );
							} }
							/>
						</PanelRow>
						{ cataPinnedFallback && (
							<PanelRow>
								<TextControl
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								label="Fallback category IDs"
								help="Optional comma-separated category IDs that scope the fallback post"
								value={ fallbackCategoriesDraft ?? cataPinnedFallbackCategories.join( ',' ) }
								onChange={ (newValue) => {
									setFallbackCategoriesDraft( newValue );
									setAttributes( {
										cataPinnedFallbackCategories: newValue
											.split( ',' )
											.map( ( id ) => parseInt( id.trim(), 10 ) )
											.filter( ( id ) => Number.isInteger( id ) && id > 0 ),
									} );
								} }
								onBlur={ () => setFallbackCategoriesDraft( null ) }
								/>
							</PanelRow>
						) }
					</PanelBody>
				</InspectorControls>
			</>
		)
	};
}
