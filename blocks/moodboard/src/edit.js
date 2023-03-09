/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, useInnerBlocksProps, __experimentalGetGapCSSValue, InspectorControls, useSetting } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import { __experimentalUseCustomUnits as useCustomUnits, PanelBody, __experimentalUnitControl as UnitControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const allowedBlocks = [
	'core/image',
	'core/video'
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const { blockSize } = attributes
	const gap = __experimentalGetGapCSSValue( attributes.style?.spacing?.blockGap );

	const units = useCustomUnits( {
		availableUnits: useSetting( 'spacing.units' ) || [
			'px',
			'em',
			'rem'
		],
	} );

	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		{ ...useBlockProps( { style: { gap, '--wp-block-cata-moodboard-block-size': blockSize } } ), orientation: 'horizontal' },
		{ allowedBlocks }
	);

	return (
		<>
		<div { ...innerBlocksProps }>
			{ children }
		</div>
		<InspectorControls>
			<PanelBody title={ __( 'Moodboard Item Settings' ) }>
				<UnitControl
					label={ __( 'Block Size' ) }
					labelPosition="edge"
					value={ blockSize || '' }
					onChange={ ( nextBlockSize ) => {
						nextBlockSize =
							0 > parseFloat( nextBlockSize ) ? '0' : nextBlockSize;
						setAttributes( { blockSize: nextBlockSize } );
					} }
					units={ units }
				/>
			</PanelBody>
		</InspectorControls>
		</>
	);
}
