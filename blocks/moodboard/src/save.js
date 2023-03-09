/**
 * Save
 */
import { useBlockProps, useInnerBlocksProps, __experimentalGetGapCSSValue } from '@wordpress/block-editor';

/**
 * Save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	const style = {
		gap: __experimentalGetGapCSSValue( attributes.style?.spacing?.blockGap ),
		'--wp-block-cata-moodboard-block-size': attributes.blockSize
	};

	return (
		<div { ...useInnerBlocksProps.save( useBlockProps.save( { style } ) ) } />
	);
}
