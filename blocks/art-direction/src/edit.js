/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	Placeholder,
	SelectControl,
	Spinner,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { gallery } from '@wordpress/icons';

/**
 * Editor-only styles.
 */
import './editor.css';

const LAYOUT_OPTIONS = [
	{ label: __( 'Auto', 'cata' ), value: 'auto' },
	{ label: __( 'Single', 'cata' ), value: 'single' },
	{ label: __( 'Diptych', 'cata' ), value: 'diptych' },
	{ label: __( 'Collage (2×2)', 'cata' ), value: 'collage' },
];

const LAYOUT_LABELS = {
	single: __( 'Single', 'cata' ),
	diptych: __( 'Diptych', 'cata' ),
	collage: __( 'Collage (2×2)', 'cata' ),
};

/**
 * Resolve a layout preference against the REST field data, mirroring the
 * server's resolve_layout(): the field already holds the exact images each
 * layout would use, so this only checks availability.
 *
 * @param {string} layout Preference attribute.
 * @param {Object} data   cata_art_direction field value.
 * @return {Object} Resolved layout and images.
 */
function resolvePreview( layout, data ) {
	const { featured = null, diptych = [], collage = [] } = data ?? {};

	if ( 'diptych' === layout && featured && diptych.length ) {
		return { layout: 'diptych', images: diptych };
	}

	if ( [ 'collage', 'auto' ].includes( layout ) && 4 === collage.length ) {
		return { layout: 'collage', images: collage };
	}

	return { layout: 'single', images: [] };
}

/**
 * Preview image, cropped the same way the render template crops.
 *
 * @param {Object} props             - Component props.
 * @param {Object} props.image       - Image data from the REST field.
 * @param {string} props.aspectRatio - Optional aspect ratio, e.g. "8/7".
 * @return {Element} Element to render.
 */
function PreviewImage( { image, aspectRatio = '' } ) {
	return (
		<img
			className="cata-art-direction__image"
			src={ image.src }
			alt={ image.alt }
			style={
				aspectRatio
					? { aspectRatio, objectFit: 'cover' }
					: undefined
			}
		/>
	);
}

/**
 * The block renders server-side; the editor previews the layout using the
 * post's cata_art_direction REST field, which shares selection logic with
 * the render template.
 *
 * @param {Object}   props               - Block props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Attribute setter.
 * @param {Object}   props.context       - Block context (postId, postType).
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, context } ) {
	const { layout } = attributes;
	const { postId, postType } = context;
	const blockProps = useBlockProps( { className: 'cata-art-direction-editor' } );

	const { record, isResolving } = useSelect(
		( select ) => {
			if ( ! postId || ! postType ) {
				return { record: null, isResolving: false };
			}

			const args = [ 'postType', postType, postId ];

			return {
				record: select( coreStore ).getEntityRecord( ...args ),
				isResolving: select( coreStore ).isResolving(
					'getEntityRecord',
					args
				),
			};
		},
		[ postId, postType ]
	);

	const data = record?.cata_art_direction ?? null;
	const resolved = data ? resolvePreview( layout, data ) : null;

	let help = '';

	if ( resolved ) {
		if ( 'auto' === layout ) {
			help = sprintf(
				/* translators: %s: layout name. */
				__( 'Auto renders this post as: %s', 'cata' ),
				LAYOUT_LABELS[ resolved.layout ]
			);
		} else if ( layout !== resolved.layout ) {
			help = __(
				'This post does not carry enough usable images — renders as Single.',
				'cata'
			);
		}
	}

	let preview = null;

	if ( ! postId ) {
		preview = (
			<Placeholder
				icon={ gallery }
				label={ __( 'Art Direction', 'cata' ) }
				instructions={ __(
					'Place this block inside a Query Loop post template (or any post context) to preview a post’s art.',
					'cata'
				) }
			/>
		);
	} else if ( ! data && isResolving ) {
		preview = (
			<Placeholder
				icon={ gallery }
				label={ __( 'Art Direction', 'cata' ) }
			>
				<Spinner />
			</Placeholder>
		);
	} else if ( ! data ) {
		preview = (
			<Placeholder
				icon={ gallery }
				label={ __( 'Art Direction', 'cata' ) }
				instructions={ __(
					'Art direction data is unavailable for this post.',
					'cata'
				) }
			/>
		);
	} else if ( 'diptych' === resolved.layout ) {
		preview = (
			<div className="cata-art-direction__media cata-art-direction__media--diptych">
				<span className="cata-art-direction__panel">
					<PreviewImage image={ data.featured } aspectRatio="8/7" />
				</span>
				<span className="cata-art-direction__panel">
					<PreviewImage
						image={ resolved.images[ 0 ] }
						aspectRatio="8/7"
					/>
				</span>
			</div>
		);
	} else if ( 'collage' === resolved.layout ) {
		const cellRatio =
			'portrait' === resolved.images[ 0 ].orientation ? '3/4' : '3/2';

		preview = (
			<div className="cata-art-direction__media cata-art-direction__media--collage">
				{ resolved.images.map( ( image ) => (
					<span
						key={ image.id }
						className="cata-art-direction__cell"
					>
						<PreviewImage
							image={ image }
							aspectRatio={ cellRatio }
						/>
					</span>
				) ) }
			</div>
		);
	} else if ( data.featured ) {
		preview = (
			<span className="cata-art-direction__media cata-art-direction__media--single">
				<PreviewImage image={ data.featured } />
			</span>
		);
	} else {
		preview = (
			<Placeholder
				icon={ gallery }
				label={ __( 'Art Direction', 'cata' ) }
				instructions={ __(
					'No featured image — this block renders nothing for this post, leaving a text-only card.',
					'cata'
				) }
			/>
		);
	}

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Art Direction', 'cata' ) }>
					<SelectControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'Layout', 'cata' ) }
						options={ LAYOUT_OPTIONS }
						value={ layout }
						onChange={ ( value ) =>
							setAttributes( { layout: value } )
						}
						help={
							help ||
							__(
								'Layouts degrade to Single when the post lacks the images they need. Auto prefers the collage.',
								'cata'
							)
						}
					/>
				</PanelBody>
			</InspectorControls>
			{ preview }
		</div>
	);
}
