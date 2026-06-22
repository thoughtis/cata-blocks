import { addFilter } from '@wordpress/hooks';

addFilter(
	'blocks.registerBlockType',
	'cata/termFromRequest',
	addTermFromRequestAttribute
);

/**
 * Add Term From Request Attribute
 *
 * Registers the attribute on core/query. The toggle that controls it lives in
 * the shared "Custom Query Filters" panel.
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
