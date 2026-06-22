import { addFilter } from '@wordpress/hooks';

addFilter(
	'blocks.registerBlockType',
	'cata/termFromRequest',
	addTermFromRequestAttribute
);

/**
 * Add Term From Request Attribute
 *
 * The "Filter by current term" toggle that controls this attribute is rendered
 * alongside the Inherit Query toggle in the shared "Custom Query Filters" panel
 * (see block-editor/inherit-query/src/index.js).
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
