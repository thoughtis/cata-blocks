/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Placeholder, RangeControl } from '@wordpress/components';
import { starFilled } from '@wordpress/icons';

/**
 * Editor-only styles.
 */
import './editor.css';

/**
 * The hero resolves its post (Nth newest pinned post) and layout (by the
 * art the post carries) server-side on every request, so the editor shows
 * a descriptive placeholder rather than a stale snapshot.
 *
 * @param {Object}   props               - Block props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Attribute setter.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { slot, thresholdHours } = attributes;
	const blockProps = useBlockProps( { className: 'cata-moments-hero-editor' } );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Moments Hero', 'cata' ) }>
					<RangeControl
						label={ __( 'Slot (Nth newest pinned post)', 'cata' ) }
						min={ 1 }
						max={ 3 }
						value={ slot }
						onChange={ ( value ) => setAttributes( { slot: value } ) }
					/>
					<RangeControl
						label={ __( 'Fresh dot threshold (hours)', 'cata' ) }
						min={ 1 }
						max={ 24 }
						value={ thresholdHours }
						onChange={ ( value ) =>
							setAttributes( { thresholdHours: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<Placeholder
				icon={ starFilled }
				label={ sprintf(
					/* translators: %d: hero slot number. */
					__( 'Moments Hero — slot %d', 'cata' ),
					slot
				) }
				instructions={ __(
					'Shows the Nth newest pinned post. Layout is chosen automatically from the post’s images: diptych for slot 2, 2×2 collage when a post carries four good same-orientation photos, single image otherwise.',
					'cata'
				) }
			/>
		</div>
	);
}
