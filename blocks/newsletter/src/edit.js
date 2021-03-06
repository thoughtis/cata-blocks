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

import { Button, ResponsiveWrapper, TextControl, PanelBody } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck, InspectorControls, RichText } from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";

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

	const { attributes, setAttributes, media } = props;

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaWidth: media.width,
			mediaHeight: media.height
		});
	}

	const removeMedia = () => {
		setAttributes({
			mediaId: 0,
			mediaUrl: '',
			mediaWidth: 0,
			mediaHeight: 0
		});
    }

	return (
		<div 
			{ ...blockProps } 
			style={{
				border: "2px solid black",
				backgroundColor: attributes.mediaUrl ? 'transparent' : '#7E7D83',
				backgroundImage: attributes.mediaUrl ? 'url(' + attributes.mediaUrl + ')' : 'none',
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat"
			}}
		>

			<InspectorControls>
				<PanelBody
					title='Select Newsletter Background Image'
					initialOpen={ false }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={attributes.mediaId}
							allowedTypes={ [ 'image' ] }
							render={({open}) => (
								<Button 
									onClick={open}
									className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
								>

									{attributes.mediaId == 0 && 'Choose an image'}
									{props.media != undefined && 
										<ResponsiveWrapper
											naturalWidth={ attributes.mediaWidth }
											naturalHeight={ attributes.mediaHeight }
										>
											<img 
												src={props.media.source_url}
												alt={props.media.alt_text ? props.media.alt_text : attributes.mediaAltText }
												style={{
													position: 'absolute',
													zIndex: '-1',
													width: '100%',
													height: '100%',
													objectFit: 'cover',
													overflow: 'hidden'
												}}
											/>
										</ResponsiveWrapper>
									}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					<div className={ `${attributes.classNameBase}__panel-button-wrapper` }>
						{attributes.mediaId != 0 && 
							<MediaUploadCheck>
								<MediaUpload
									title='Replace image'
									value={attributes.mediaId}
									onSelect={onSelectMedia}
									allowedTypes={ [ 'image' ] }
									render={({open}) => (
										<Button onClick={open} variant="secondary">
											Replace image
										</Button>
									)}
								/>
							</MediaUploadCheck>
						}

						{attributes.mediaId != 0 && 
							<MediaUploadCheck>
								<Button onClick={removeMedia} isDestructive>
									Remove Image
								</Button>
							</MediaUploadCheck>
						}
					</div>
				</PanelBody>

				<PanelBody
					title='Set Mailchimp Audience ID'
					initialOpen={ false }
				>
					<p className={ `${attributes.classNameBase}__mailchimpId-display` }>
						Mailchimp campaign ID<br/>defaults to: <span>"829754e1b3"</span> <br/>which is the CreepyCatalog Streaming Guide
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
						Successful Signup response Message<br/>defaults to: <span>"Thanks and stay spooky!"</span>
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

			<div className={ `${attributes.classNameBase}__wrapper` }>
				<div className={ `${attributes.classNameBase}__inner` }>
					<div className={ `${attributes.classNameBase}__layout` }>
						<div className={ `${attributes.classNameBase}__start` }>
							<RichText
								tagName="h3"
								value={ attributes.title }
								onChange={ ( title ) => setAttributes({ title }) }
								className={ `${attributes.classNameBase}__title` }
								placeholder='apply to the newsletter'
							/>
						</div>
						<div className={ `${attributes.classNameBase}__end` }>
							<RichText
									tagName="p"
									value={ attributes.description }
									onChange={ ( description ) => setAttributes({ description }) }
									className={ `${attributes.classNameBase}__description` }
									placeholder='Join our free newsletter for weekly updates about what TV shows and movies are streaming online.'
								/>
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
								placeholder='Unsubscribe at any time. By subscribing, you agree to the terms of our %%Privacy Policy%%'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
