/**
 * Image Lightbox Exclude
 *
 * Adds an excludeFromLightbox attribute to the core image block with an
 * inspector toggle, so an image can render normally in the content while
 * staying out of the image lightbox.
 */

import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

addFilter(
	'blocks.registerBlockType',
	'cata/add-exclude-from-lightbox-attribute',
	addExcludeFromLightboxAttribute
);

addFilter(
	'editor.BlockEdit',
	'cata/exclude-from-lightbox-control',
	withExcludeFromLightboxControl
);

/**
 * Add Exclude From Lightbox Attribute
 *
 * @param {Object} settings
 * @param {string} name
 *
 * @return {Object} updated settings
 */
function addExcludeFromLightboxAttribute( settings, name ) {

	if ( 'core/image' !== name || undefined === settings.attributes ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		excludeFromLightbox: {
			type: 'boolean',
			default: false,
		},
	} );

	return settings;
}

/**
 * With Exclude From Lightbox Control
 *
 * @param {Object} BlockEdit
 *
 * @return {Function} updated block in editor with the exclusion toggle
 */
function withExcludeFromLightboxControl( BlockEdit ) {
	return ( props ) => {

		const { name, attributes, setAttributes, isSelected } = props;

		if ( 'core/image' !== name ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<>
				<BlockEdit { ...props } />
				{ isSelected &&
					<InspectorControls>
						<PanelBody title={ __( 'Image Lightbox', 'cata' ) }>
							<ToggleControl
								label={ __( 'Exclude from image lightbox', 'cata' ) }
								help={ __( 'The image still displays in the content, but is left out of the lightbox gallery.', 'cata' ) }
								checked={ Boolean( attributes.excludeFromLightbox ) }
								onChange={ ( excludeFromLightbox ) => {
									setAttributes( { excludeFromLightbox } );
								} }
							/>
						</PanelBody>
					</InspectorControls>
				}
			</>
		);
	};
}
