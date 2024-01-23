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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { TextControl, PanelBody } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {

	const blockProps = useBlockProps();

	const { attributes, setAttributes } = props;

	return (
		<div 
			{ ...blockProps } 
		>

			<InspectorControls>
				<PanelBody
					title='Set Mailchimp Audience ID'
					initialOpen={ false }
				>
					<p className={ `${attributes.classNameBase}__mailchimpId-display` }>
						Mailchimp campaign ID
					</p>

					<div>
						<TextControl 
							value={ attributes.mailchimpAudienceId } 
							onChange={ (mailchimpAudienceId) => setAttributes({ mailchimpAudienceId })}
							label="Mailchimp ID"
						/>
					</div>
				</PanelBody>

				<PanelBody
					title='Set Success Message'
					initialOpen={ false }
				>
					<p className={ `${attributes.classNameBase}__success-msg-display` }>
						Successful Signup response Message<br/>defaults to: <span>"Thanks for subscribing!"</span>
					</p>

					<div>
						<TextControl 
							value={ attributes.successMessage } 
							onChange={ (successMessage) => setAttributes({ successMessage })}
							label="Success Message"
						/>
					</div>
				</PanelBody>
			</InspectorControls>

			<div className={ `${attributes.classNameBase}__form-placeholder` }>
				<div className={ `${attributes.classNameBase}__fieldset` }>
					<input type="email" placeholder="Enter Your Email" readOnly/>
					<button className="button is-primary is-filled" type="button" disabled>
						Subscribe
					</button>
				</div>
			</div>
			<RichText
				tagName="p"
				value={ attributes.legalText }
				onChange={ ( legalText ) => setAttributes({ legalText }) }
				className={ `${attributes.classNameBase}__details` }
				placeholder='Unsubscribe at any time. By subscribing, you agree to the terms of our %%Privacy Policy%%.'
			/>
		</div>
	);
}
