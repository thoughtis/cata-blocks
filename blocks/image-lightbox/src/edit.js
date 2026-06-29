/**
 * Edit
 */

import {
	InspectorControls,
	useBlockProps,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';
import {
	RangeControl,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

/**
 * Edit
 *
 * Panel text/background use native colour supports; only the backdrop (the dim
 * overlay) and its opacity need custom controls.
 *
 * @return {WPElement} Edit
 */
const Edit = ( {
	attributes: { customBackdropColor, backdropOpacity },
	backdropColor,
	setBackdropColor,
	setAttributes,
	clientId,
} ) => {
	const blockProps = useBlockProps();
	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	return (
		<>
			<InspectorControls group="color">
				<ColorGradientSettingsDropdown
					settings={ [
						{
							label: __( 'Backdrop', 'cata' ),
							colorValue: backdropColor.color || customBackdropColor,
							onColorChange: ( value ) => {
								setBackdropColor( value );
								setAttributes( { customBackdropColor: value } );
							},
						},
					] }
					panelId={ clientId }
					hasColorsOrGradients
					disableCustomColors={ false }
					__experimentalIsRenderedInSidebar
					{ ...colorGradientSettings }
				/>
				<ToolsPanelItem
					hasValue={ () => backdropOpacity !== 80 }
					onDeselect={ () => setAttributes( { backdropOpacity: 80 } ) }
					label={ __( 'Backdrop opacity', 'cata' ) }
					isShownByDefault
					panelId={ clientId }
				>
					<RangeControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'Backdrop opacity', 'cata' ) }
						value={ backdropOpacity }
						onChange={ ( value ) =>
							setAttributes( { backdropOpacity: value } )
						}
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</ToolsPanelItem>
			</InspectorControls>
			<div { ...blockProps }>
				{ __(
					'Image Lightbox: in-content image blocks open in a modal slider on the front end when clicked.',
					'cata'
				) }
			</div>
		</>
	);
};

export default withColors( {
	backdropColor: 'backdrop-color',
} )( Edit );
