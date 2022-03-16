/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';


import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import { more } from '@wordpress/icons';

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
export default function Edit( { attributes, setAttributes } ) {
	
	
	
	return (
		<Fragment>
			<p { ...useBlockProps() }>
				{ __( 'Shop – hello from the editor!', 'cata' ) }
			</p>
			<InspectorControls>
				<PanelBody title="Hello panel" icon={more} initialOpen={false}>
					<TextControl
						label="WP REST API URL"
						onChange={(url) => setAttributes({url})}
						type="url"
						value={attributes.url}
						help="URL should return an array of Shop Catalog products."
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}
