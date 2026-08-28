/**
 * Extended Modified Date
 *
 * A Post Date variation bound to the post's modified date. On render,
 * extended-modified.php prepends how long ago the post was updated, keyed on
 * the variation's class name, e.g. "3 days ago, Aug 25, 2026".
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const CLASS_NAME = 'wp-block-post-date__extended-modified-date';

const extendedModifiedDate = {
	name: 'post-date-extended-modified',
	title: __( 'Extended Modified Date', 'cata' ),
	description: __( 'Display how long ago a post was updated along with its last updated date.', 'cata' ),
	attributes: {
		metadata: {
			bindings: {
				datetime: {
					source: 'core/post-data',
					args: { field: 'modified' },
				},
			},
		},
		className: CLASS_NAME,
	},
	scope: [ 'inserter', 'transform' ],
	isActive: ( blockAttributes ) =>
		blockAttributes?.metadata?.bindings?.datetime?.source === 'core/post-data' &&
		blockAttributes?.metadata?.bindings?.datetime?.args?.field === 'modified' &&
		( blockAttributes?.className ?? '' ).split( ' ' ).includes( CLASS_NAME ),
};

/**
 * Core's Modified Date variation also matches blocks bound to the modified
 * field, and the first matching variation wins. Add this one ahead of it so
 * the editor labels the block "Extended Modified Date" rather than
 * "Modified Date".
 */
addFilter(
	'blocks.registerBlockType',
	'cata/post-date-extended-modified',
	( settings, name, deprecation ) => {
		if ( 'core/post-date' !== name || null !== deprecation ) {
			return settings;
		}

		return {
			...settings,
			variations: [ extendedModifiedDate, ...( settings.variations ?? [] ) ],
		};
	}
);
