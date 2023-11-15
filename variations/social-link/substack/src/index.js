import { registerBlockVariation } from '@wordpress/blocks';
import { Path, SVG } from '@wordpress/primitives';
import { addFilter } from '@wordpress/hooks';
import './index.css';

export const SubstackIcon = () => (
    <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">   
		<Path d="M20.8,6.5H3.2v2.4h17.6V6.5z M3.2,11v11l8.8-4.9l8.8,4.9V11H3.2z M20.8,2H3.2v2.4h17.6V2z"/>
    </SVG>
);

const substackSocialLink = {
	name: 'substack',
	attributes: { service: 'substack' },
	title: 'Substack',
	icon: SubstackIcon,
	isActive: ( blockAttributes, variationAttributes ) => blockAttributes.service === variationAttributes.service
}

addFilter(
	'blocks.registerBlockType',
	'substack-social-icon',
	function( settings, name ) {
		if ( 'core/social-link' === name ) {
			if ( settings.variations.length ) {
				settings.variations.push( substackSocialLink );
			}
		}
		return settings;
	}
);

registerBlockVariation( 'core/social-link', substackSocialLink );
