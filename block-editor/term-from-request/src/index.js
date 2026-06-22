import { InspectorControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';

addFilter(
	'blocks.registerBlockType',
	'cata/termFromRequest',
	addTermFromRequestAttribute
);

addFilter(
	'editor.BlockEdit',
	'cata/termFromRequest',
	withTermFromRequest
);

/**
 * Add Term From Request Attribute
 *
 * @param {Object} settings
 * @param {string} name
 *
 * @return {Object} updated settings
 */
function addTermFromRequestAttribute( settings, name ) {

	if ( undefined === settings.attributes || 'core/query' !== name ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		cataTermFromRequest: {
			type: 'boolean',
			default: false
		}
	} );

	return settings;
}

/**
 * With Term From Request
 *
 * @param {Object} BlockEdit
 */
function withTermFromRequest( BlockEdit ) {

	return ( props ) => {

		if ( 'core/query' !== props.name ) {
			return <BlockEdit key="edit" { ...props } />;
		}

		const { setAttributes, attributes } = props;
		const cataTermFromRequest = attributes.cataTermFromRequest ?? false;

		return (
			<>
				<BlockEdit key="edit" { ...props } />
				<InspectorControls>
					<PanelBody title="Custom Term From Request">
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
