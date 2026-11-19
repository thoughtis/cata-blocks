/**
 * Table of Contents Deprecations
 */

import { createBlock } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const supports = {
	html: false,
	reusable: false,
	customClassName: false,
};

/**
 * Migrate the summary text into the paragraph inner block.
 *
 * @param {Object} attributes
 * @return {Array} Attributes and inner blocks.
 */
function migrateSummary( attributes ) {
	const summary = attributes.summary || 'Table of Contents';
	return [
		{ ...attributes, summary },
		[ createBlock( 'core/paragraph', { content: summary } ) ],
	];
}

/**
 * v0.7.11, summary attribute with an open/close behavior.
 */
const v3 = {
	supports,
	attributes: {
		summary: {
			type: 'string',
			source: 'html',
			selector: 'summary,.wp-block-cata-toc__summary',
			default: 'Table of Contents',
		},
		behavior: {
			type: 'string',
			default: 'alwaysOpen',
		},
	},
	save( { attributes } ) {
		const DetailsElement = 'alwaysOpen' === attributes.behavior ? 'div' : 'details';
		return (
			<div { ...useBlockProps.save() } id="toc-entry-point">
				<DetailsElement open={ 'startOpen' === attributes.behavior ? 'true' : null }>
					<RichText.Content
						tagName={ 'alwaysOpen' === attributes.behavior ? 'p' : 'summary' }
						value={ attributes.summary || 'Table of Contents' }
						className="wp-block-cata-toc__summary"
					/>
				</DetailsElement>
			</div>
		);
	},
	migrate: migrateSummary,
};

/**
 * v0.7.6, summary attribute in an open details element.
 */
const v2 = {
	supports,
	attributes: {
		summary: {
			type: 'string',
			source: 'html',
			selector: 'summary',
			default: 'Table of Contents',
		},
	},
	save( { attributes } ) {
		return (
			<div { ...useBlockProps.save() } id="toc-entry-point">
				<details open>
					<RichText.Content tagName="summary" value={ attributes.summary } />
				</details>
			</div>
		);
	},
	migrate( attributes ) {
		return migrateSummary( { ...attributes, behavior: 'startOpen' } );
	},
};

/**
 * v0.7.5 and earlier, an empty div filled in by the view script.
 * The view script rendered an open details element, so migrate to startOpen.
 */
const v1 = {
	supports,
	attributes: {},
	save() {
		return <div { ...useBlockProps.save() } id="toc-entry-point"></div>;
	},
	migrate() {
		return migrateSummary( { behavior: 'startOpen' } );
	},
};

export default [ v3, v2, v1 ];
