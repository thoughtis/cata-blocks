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
	SelectControl,
	SVG,
	Rect,
	Path,
	PanelBody,
	PanelRow,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
		icon,
	},
	backdropColor,
	setBackdropColor,
	setAttributes,
	style,
	clientId
} ) => {

	const MODAL_TEMPLATE = [
		['core/cover', {}, [
			[ 'core/group', {}, [
				[ 'cata/advanced-modal-close', {} ],
				[ 'core/paragraph', { placeholder: 'Enter modal content here...' } ],
			] ]
		]]	
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

	const iconSelector = (
		<PanelBody title="Open Icon" initialOpen={true}>
			<PanelRow>
				<SelectControl
					label="Icon"
					value={ icon }
					onChange={(newIcon)=>{
						setAttributes( {
							icon: newIcon
						})
					}}
					options={[
						{ 'label': 'Default', 'value': '' },
						{ 'label': 'Hamburger', 'value': 'hamburger' },
						{ 'label': 'Search', 'value': 'search' },
					]}
				/>
			</PanelRow>
		</PanelBody>
	);

	let buttonIcon = (
		<SVG xmlns="http://www.w3.org/2000/svg" width="35" height="14" viewBox="0 0 35 14">
			<Rect width="35" height="2.80001"/>
			<Rect y="11.2001" width="35" height="2.80001"/>
		</SVG>
	);

	if ( 'search' === icon ) {
		buttonIcon = (
			<SVG viewBox="0 0 24.5 25" width="24.5" height="25" xmlns="http://www.w3.org/2000/svg">
				<Path d="M24.14,22.89l-6.29-6.27c1.5-1.76,2.4-4.03,2.4-6.52C20.25,4.53,15.71,0,10.13,0S0,4.53,0,10.1s4.54,10.1,10.13,10.1c2.2,0,4.23-.71,5.9-1.91l6.36,6.34c.24,.24,.56,.36,.88,.36s.63-.12,.88-.36c.48-.48,.48-1.27,0-1.75ZM2.48,10.1c0-4.2,3.43-7.62,7.64-7.62s7.64,3.42,7.64,7.62-3.43,7.62-7.64,7.62-7.64-3.42-7.64-7.62Z"/>
			</SVG>
		);
	}

	return (
		<>
			<InspectorControls group="settings">
				{ iconSelector }
			</InspectorControls>
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
					{ buttonIcon }
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
