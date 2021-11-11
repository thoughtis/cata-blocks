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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {

	const blockProps = useBlockProps.save();

	const { attributes } = props;

	return (
		<div { ...blockProps }>
			<div 
				className={ `${attributes.classNameBase}__wrapper` }
				style={{
					position: "relative"
				}}
			>
				<img 
					className={ `${attributes.classNameBase}__bg-img` }
					alt={ attributes.mediaAltText }
					src={ attributes.mediaUrl }
					style={{
						position: "absolute",
						zIndex: -1,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						overflow: 'hidden',
						display: !attributes.mediaUrl && 'none' 
					}}
				/>
				<div className={ `${attributes.classNameBase}__inner` }>
					<div className={ `${attributes.classNameBase}__layout` }>
						<div className={ `${attributes.classNameBase}__start` }>
							<h3 className={ `${attributes.classNameBase}__title` }>
								{ attributes.title }
							</h3>
						</div>
						<div className={ `${attributes.classNameBase}__end` }>
							<p className={ `${attributes.classNameBase}__description` }>
								{attributes.description}
							</p>
							<form action={'' + attributes.mailchimpUrlBase + attributes.mailchimpUserId + attributes.mailchimpUrlAmp + attributes.mailchimpAudienceId} method="post" name="mc-embedded-subscribe-form" target="_blank" validate data-mailchimp data-mailchimp-success-message={attributes.successMessage}>
								<div className={ `${attributes.classNameBase}__response` }role="alert"></div>
								<fieldset className={ `${attributes.classNameBase}__fieldset` }>
									<label for="mce-EMAIL" className="screen-reader-text">
										Enter Your Email
									</label>
									<input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Enter Your Email" required/>
									<button className="button is-primary is-filled" type="submit">
										Subscribe
									</button>
									{/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
									<div style="position: absolute; left: -5000px;" aria-hidden="true">
										<input type="text" 
										name={"" + "b_" +  attributes.mailchimpUserId + '_' + attributes.mailchimpAudienceId} tabindex="-1" value=""/>
									</div>
								</fieldset>
							</form>
							<p className={ `${attributes.classNameBase}__details` }>
								{attributes.legalText}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
