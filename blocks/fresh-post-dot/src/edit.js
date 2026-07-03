/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useMemo } from '@wordpress/element';

/**
 * Editor-only styles.
 */
import './editor.css';

const INNER_BLOCKS_TEMPLATE = [
	[
		'core/post-date',
		{
			format: 'human-diff',
			// Matches the "Post Date" variation — without this binding the
			// block renders as a custom date defaulting to the current time.
			metadata: {
				bindings: {
					datetime: {
						source: 'core/post-data',
						args: { field: 'date' },
					},
				},
			},
		},
	],
];

const ALLOWED_BLOCKS = [ 'core/post-date' ];

/**
 * The edit function renders a wrapper around InnerBlocks (core/post-date)
 * and conditionally applies the `is-fresh` class based on the post's age.
 *
 * @param {Object}   props               - Block props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Attribute setter.
 * @param {Object}   props.context       - Block context (postId, postType).
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, context } ) {
	const { thresholdHours } = attributes;
	const postType = context.postType || 'post';
	const postId = context.postId;
	const [ date ] = useEntityProp( 'postType', postType, 'date', postId );

	const now = useMemo( () => new Date(), [] );

	const postDate = date ? new Date( date ) : null;
	const diffHours = postDate
		? ( now.getTime() - postDate.getTime() ) / ( 1000 * 60 * 60 )
		: null;
	// Round like human_time_diff() so the indicator matches the
	// "N hours ago" label rendered by the inner post-date block.
	const isFresh =
		diffHours !== null &&
		diffHours >= 0 &&
		Math.round( diffHours ) <= thresholdHours;

	const blockProps = useBlockProps(
		isFresh ? { className: 'is-fresh' } : {}
	);

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			template: INNER_BLOCKS_TEMPLATE,
			allowedBlocks: ALLOWED_BLOCKS,
			templateLock: 'all',
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __(
						'Freshness Settings',
						'cata'
					) }
				>
					<RangeControl
						label={ __(
							'Threshold (hours)',
							'cata'
						) }
						help={ __(
							'Posts published within this many hours will show the freshness indicator.',
							'cata'
						) }
						value={ thresholdHours }
						onChange={ ( value ) =>
							setAttributes( { thresholdHours: value } )
						}
						min={ 1 }
						max={ 72 }
						step={ 1 }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
}