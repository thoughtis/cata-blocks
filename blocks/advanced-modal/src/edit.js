/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { 
	InnerBlocks, 
	InspectorControls,
	useBlockProps,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';
import { 
	Button,
	RangeControl,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
*
* @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
*
* @return {WPElement} Element to render.
*/
const Edit = ( {
	attributes: {
		customBackdropColor,
		backdropOpacity,
	},
	backdropColor,
	setBackdropColor,
	setAttributes,
	style,
	clientId
} ) => {

	const MODAL_TEMPLATE = [
		[ 'core/group', { "style": { "border": { "bottom": { "color": "#f1f1f1", "width":"2px" } },"color":{"background":"#ffffff"} } }, [
			[ 'cata/advanced-modal-close', {} ],
			[ 'core/paragraph', { placeholder: 'Enter modal content here...' } ],
		] ]
	];

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const blockProps = useBlockProps( {
		style: {
			...style,
			'--cata-advanced-modal-backdrop-color': backdropColor.slug
					? `var( --wp--preset--color--${ backdropColor.slug } )`
					: customBackdropColor,
			'--cata-advanced-modal-backdrop-opacity': backdropOpacity,
		}
	} );

	const backdropColorDropdown = (
		<ColorGradientSettingsDropdown
			settings={ [ {
				label: __( 'Backdrop', 'devblog' ),
				colorValue: backdropColor.color || customBackdropColor,
				onColorChange: ( value ) => {
					setBackdropColor( value );
	
					setAttributes( {
						customBackdropColor: value
					} );
				}
			} ] }
			panelId={ clientId }
			hasColorsOrGradients={ true }
			disableCustomColors={ false }
			__experimentalIsRenderedInSidebar
			{ ...colorGradientSettings }
		/>
	);

	const backdropOpacitySlider = (
		<ToolsPanelItem
			hasValue={ () => backdropOpacity !== 70 }
			onDeselect={ () =>
				setAttributes( { backdropOpacity: 70 } )
			}
			isShownByDefault
			panelId={ clientId }
		>
			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Overlay Opacity' ) }
				value={ backdropOpacity }
				onChange={ ( newBackdropOpacity ) =>
					setAttributes( {
						backdropOpacity: newBackdropOpacity 
					} )
				}
				min={ 0 }
				max={ 100 }
				step={ 5 }
				required
				__next40pxDefaultSize
			/>
		</ToolsPanelItem>
	);

	return (
		<>
			<InspectorControls group="color">
				{ backdropColorDropdown }
				{ backdropOpacitySlider }
			</InspectorControls>
			<div { ...blockProps } >
				<Button 
					onClick={ (e) => {
						e.currentTarget.nextSibling.show();
					} } 
				>
					Open
				</Button>
				<dialog>
					<InnerBlocks
						template={ MODAL_TEMPLATE }
					/>
				</dialog>
			</div>
		</>
	);
};

export default withColors( {
	backdropColor: 'backdrop-color'
} )( Edit );
