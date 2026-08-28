/**
 * Post Date Placeholder
 *
 * Since WordPress 6.9 the Post Date block gets its `datetime` from the
 * `core/post-data` block binding. When there is no post in context, such as
 * when editing a template in the Site Editor, the binding returns the field
 * label ("Post Date" or "Post Modified Date") instead of a date and the block
 * renders "Invalid date". Swap any unparseable value for a placeholder date so
 * the template preview shows a real one.
 */
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

const PLACEHOLDER_DATETIME = new Date().toISOString();

const withPostDatePlaceholder = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { name, attributes } = props;

		if ( 'core/post-date' !== name ) {
			return <BlockEdit { ...props } />;
		}

		const { datetime } = attributes;

		if ( 'string' !== typeof datetime || ! Number.isNaN( Date.parse( datetime ) ) ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<BlockEdit
				{ ...props }
				attributes={ { ...attributes, datetime: PLACEHOLDER_DATETIME } }
			/>
		);
	};
}, 'withPostDatePlaceholder' );

addFilter(
	'editor.BlockEdit',
	'cata/post-date-placeholder',
	withPostDatePlaceholder
);
