/**
 * Post Date Editor Fixes
 *
 * Since WordPress 6.9 the Post Date block gets its `datetime` from the
 * `core/post-data` block binding. Two problems with how the editor displays
 * that value are corrected here:
 *
 * 1. When there is no post in context, such as when editing a template in the
 *    Site Editor, the binding returns the field label ("Post Date" or
 *    "Post Modified Date") instead of a date and the block renders
 *    "Invalid date". Swap any unparseable value for a placeholder date so the
 *    template preview shows a real one.
 *
 * 2. With a post in context the binding returns the REST entity's value, a
 *    timezone-less local string like "2026-06-29T21:59:30". The block's edit
 *    component parses that in the browser's timezone before displaying it in
 *    the site's, shifting the date by the difference between the two, so
 *    evening dates render a day off. Append the site's UTC offset so the
 *    value parses as site-local time, matching the frontend.
 */
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { getSettings } from '@wordpress/date';

const PLACEHOLDER_DATETIME = new Date().toISOString();

const NAIVE_DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?(?:\.\d+)?$/;

/**
 * Format Offset
 *
 * @param {number} hours UTC offset in hours, e.g. -4 or 5.5.
 * @return {string} Offset designator, e.g. "-04:00".
 */
const formatOffset = ( hours ) => {
	const sign = hours < 0 ? '-' : '+';
	const absolute = Math.abs( hours );
	const hh = String( Math.floor( absolute ) ).padStart( 2, '0' );
	const mm = String( Math.round( ( absolute % 1 ) * 60 ) ).padStart( 2, '0' );
	return sign + hh + ':' + mm;
};

/**
 * Get Site Offset Designator
 *
 * Resolves the site's UTC offset for the given site-local datetime. When the
 * site uses a named timezone, derive the offset in effect on that date so
 * dates from the opposite daylight saving period stay correct. Otherwise fall
 * back to the site's fixed numeric offset.
 *
 * @param {string} datetime Timezone-less site-local datetime.
 * @return {string} Offset designator, e.g. "+00:00".
 */
const getSiteOffsetDesignator = ( datetime ) => {
	const { timezone } = getSettings();
	const numericOffset = formatOffset( Number( timezone.offset ) || 0 );

	if ( ! timezone.string ) {
		return numericOffset;
	}

	try {
		const approximateInstant = new Date( datetime + numericOffset );
		const timeZoneName = new Intl.DateTimeFormat( 'en-US', {
			timeZone: timezone.string,
			timeZoneName: 'longOffset',
		} )
			.formatToParts( approximateInstant )
			.find( ( part ) => 'timeZoneName' === part.type )?.value;

		// "GMT-04:00" for named offsets, plain "GMT" for UTC.
		const match = timeZoneName?.match( /[+-]\d{2}:\d{2}$/ );
		return match ? match[ 0 ] : '+00:00';
	} catch ( error ) {
		return numericOffset;
	}
};

const withPostDateEditorFixes = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { name, attributes } = props;

		if ( 'core/post-date' !== name ) {
			return <BlockEdit { ...props } />;
		}

		const { datetime } = attributes;

		if ( 'string' !== typeof datetime ) {
			return <BlockEdit { ...props } />;
		}

		if ( Number.isNaN( Date.parse( datetime ) ) ) {
			return (
				<BlockEdit
					{ ...props }
					attributes={ { ...attributes, datetime: PLACEHOLDER_DATETIME } }
				/>
			);
		}

		if ( NAIVE_DATETIME.test( datetime ) ) {
			return (
				<BlockEdit
					{ ...props }
					attributes={ {
						...attributes,
						datetime: datetime + getSiteOffsetDesignator( datetime ),
					} }
				/>
			);
		}

		return <BlockEdit { ...props } />;
	};
}, 'withPostDateEditorFixes' );

addFilter(
	'editor.BlockEdit',
	'cata/post-date-editor-fixes',
	withPostDateEditorFixes
);
