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
import { useState, Fragment } from "@wordpress/element";

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

	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaWidth: media.width,
			mediaHeight: media.height
		});
	}

	const removeMedia = () => {
		props.setAttributes({
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
				backgroundColor: props.attributes.mediaUrl ? 'transparent' : '#7E7D83',
				backgroundImage: props.attributes.mediaUrl ? 'url(' + props.attributes.mediaUrl + ')' : 'none',
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat"
			}}
		>

			<div className="newsletter-signup-block__panel-wrapper">
				<Fragment>
					<InspectorControls>
						<PanelBody
							title='Select Newsletter Background Image'
							initialOpen={ false }
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectMedia}
									value={props.attributes.mediaId}
									allowedTypes={ [ 'image' ] }
									render={({open}) => (
										<Button 
											onClick={open}
											className={props.attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
										>

											{props.attributes.mediaId == 0 && 'Choose an image'}
											{props.media != undefined && 
												<ResponsiveWrapper
													naturalWidth={ props.attributes.mediaWidth }
													naturalHeight={ props.attributes.mediaHeight }
												>
													<img 
														src={props.media.source_url}
														alt={props.media.alt_text ? props.media.alt_text : props.attributes.mediaAltText }
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

							<div className="newsletter-signup-block__panel-button-wrapper">
								{props.attributes.mediaId != 0 && 
									<MediaUploadCheck>
										<MediaUpload
											title='Replace image'
											value={props.attributes.mediaId}
											onSelect={onSelectMedia}
											allowedTypes={ [ 'image' ] }
											render={({open}) => (
												<Button onClick={open} isDefault isLarge>
													Replace image
												</Button>
											)}
										/>
									</MediaUploadCheck>
								}

								{props.attributes.mediaId != 0 && 
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
							<p className="newsletter-signup-block__mailchimpId-display">
								Mailchimp campaign ID<br/>defaults to: <span>"829754e1b3"</span> <br/>which is the CreepyCatalog Streaming Guide
							</p>

							<div>
								<TextControl 
									value={ props.attributes.mailchimpAudienceId } 
									onChange={ (mailchimpAudienceId) => props.setAttributes({ mailchimpAudienceId })}
									label="New Mailchimp ID"
								/>
							</div>
						</PanelBody>
					</InspectorControls>
				</Fragment>
			</div>


			<div class="cata-block-streaming-guide-newsletter">
				<div class="cata-block-streaming-guide-newsletter__inner">
					<div class="cata-block-streaming-guide-newsletter__layout">
						<div class="cata-block-streaming-guide-newsletter__start">
							<RichText
								tagName="h3"
								value={ props.attributes.title }
								onChange={ ( title ) => props.setAttributes({ title }) }
								className='cata-block-streaming-guide-newsletter__title'
								placeholder='apply to the newsletter'
								keepPlaceholderOnFocus={ true }
							/>
						</div>
						<div class="cata-block-streaming-guide-newsletter__end">
							<RichText
									tagName="P"
									value={ props.attributes.description }
									onChange={ ( description ) => props.setAttributes({ description }) }
									className='cata-block-streaming-guide-newsletter__description'
									placeholder='Join our free newsletter for weekly updates about what TV shows and movies are streaming online.'
									keepPlaceholderOnFocus={ true }
								/>
							<div class="cata-block-streaming-guide-newsletter__form-placeholder">
								<div class="cata-block-streaming-guide-newsletter__fieldset">
									<label for="mce-EMAIL" class="screen-reader-text">
										Enter Your Email
									</label>
									<input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Enter Your Email" required/>
									<button class="button is-primary is-filled" type="submit">
										Subscribe
									</button>
								</div>
							</div>
							<RichText
								tagName="p"
								value={ props.attributes.legalText }
								onChange={ ( legalText ) => props.setAttributes({ legalText }) }
								className='cata-block-streaming-guide-newsletter__details'
								placeholder='Unsubscribe at any time. By subscribing, you agree to the terms of our %%Privacy Policy%%'
								keepPlaceholderOnFocus={ true }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
