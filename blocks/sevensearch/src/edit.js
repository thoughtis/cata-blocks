/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { 
	TextControl, 
	__experimentalNumberControl as NumberControl, 
	SelectControl,
	PanelBody, 
	PanelRow, 
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const { adId, adType, layout } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="7Search Ad Options" initialOpen={true}>
					<PanelRow>
						<TextControl
							label={ __('Ad ID', 'cata') }
							type="text"
							value={ adId }
							onChange={ ( nextAdId ) => setAttributes( { adId: nextAdId } ) }
						/>	
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={ __('Ad Type', 'cata') }
							value={ adType }
							options={ [
								{ label: 'Text', value: 'text' },
								{ label: 'Banner', value: 'banner' },
								{ label: 'Native', value: 'native' },
							] }
							onChange={ ( newAdType ) => setAttributes( { adType: newAdType } ) }
						/>
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={ __('Layout Option', 'cata') }
							value={ layout }
							onChange={ ( nextLayout ) => setAttributes( { layout: nextLayout } ) }
						/>	
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				{ __( 'Placeholder for a 7Search Widget', 'cata' ) }
			</div>
		</>
	);
}
