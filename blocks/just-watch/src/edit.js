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
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes }) {
	const { max_offers, theme, url } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}>
					<PanelRow>
						<SelectControl
							label="Theme"
							value={ theme }
							onChange={(nextTheme) => {
								setAttributes( {
									theme: nextTheme
								})
							}}
							options={[
								{"label":"Dark", "value": "dark"},
								{"label":"Light", "value":"light"}
							]}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Maxiumum Offers"
							value={ max_offers }
							type="number"
							onChange={(nextMaxOffers) => {
								setAttributes( {
									max_offers: nextMaxOffers
								})
							}}
							help="Set to 0 for no maximum."
							min={0}
							max={10}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<TextControl
					label={__( 'JustWatch URL', 'cata' )}
					help={<span><a href="https://www.justwatch.com/" target="_blank" rel="nofollow">Search on JustWatch</a> ↗️</span>}
					placeholder="https://www.justwatch.com/us/movie/example-movie-name"
					type="url"
					value={url}
					onChange={(nextUrl) => {setAttributes({url: nextUrl})}}
				/>
			</div>
		</>
	);
}
