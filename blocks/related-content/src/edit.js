/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * The cards are rendered entirely server-side against the live 30-day
 * publishing window, so the editor shows a static placeholder for them —
 * only the heading is editable here.
 *
 * @param {Object}   props               - Block props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Attribute setter.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<RichText
				tagName="h2"
				className="cata-related-content__heading"
				value={ attributes.heading }
				onChange={ ( heading ) => setAttributes( { heading } ) }
				placeholder={ __( 'Add heading…', 'cata' ) }
				allowedFormats={ [] }
			/>
			<Placeholder
				icon="excerpt-view"
				label={ __( 'Related Content', 'cata' ) }
				instructions={ __(
					'Shows 1–2 recently published posts that share a headline subject with this post. Renders on the front end only when matches exist. Clear the heading to render the cards without one.',
					'cata'
				) }
			/>
		</div>
	);
}
