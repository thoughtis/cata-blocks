/**
 * SVG URL Control
 */

/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { 
	ToolbarButton,
	Popover,
	MenuGroup
} from '@wordpress/components';
import { 
	LinkControl,
	BlockControls
} from '@wordpress/block-editor';
import { link as linkIcon } from '@wordpress/icons';
import {
	useEffect,
	useState,
	useMemo,
} from '@wordpress/element';
import { prependHTTP } from '@wordpress/url';

/**
 * Main
 */
export default function main() {
	addFilter(
		'blocks.registerBlockType',
		'cata/add-svg-link-color-support',
		addSvgLinkColorSupport
	);

	addFilter(
		'blocks.registerBlockType',
		'cata/add-svg-url-attribute',
		addSvgUrlAttribute
	);

	addFilter(
		'editor.BlockEdit',
		'cata/svg-url-control',
		withSvgUrlControl
	);
}

/**
 * Add SVG Link Color Support
 * 
 * @param {Object} settings
 * @param {string} name
 * 
 * @return {Object} updated settings
 */
function addSvgLinkColorSupport( settings, name ) {
	if ( 'safe-svg/svg-icon' !== name ) {
		return settings;
	}

	if ( undefined === settings.attributes ) {
		return settings;
	}

	Object.assign( settings.supports.color, {
		...settings.supports.color,
		link: true,
	} );

	return settings;}

/**
 * Add Flex Grow Attribute
 * 
 * @param {Object} settings
 * @param {string} name
 * 
 * @return {Object} updated settings
 */
function addSvgUrlAttribute( settings, name ) {
	if ( 'safe-svg/svg-icon' !== name ) {
		return settings;
	}

	if ( undefined === settings.attributes ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		url: {
			type: 'string',
		},
		linkTarget: {
			type: 'string',
		}
	} );

	return settings;
}

/**
 * With Flex Grow Control
 * 
 * @param {Object} BlockEdit
 * 
 * @return {function} updated block in editor with flex grow control
 */
const withSvgUrlControl = createHigherOrderComponent( ( BlockEdit ) => {	
	return ( props ) => {
		const { attributes, setAttributes, isSelected, name } = props;

		if ( 'safe-svg/svg-icon' !== name ) {
			return <BlockEdit { ...props }/>
		}

		const {
			url,
			linkTarget,
		} = attributes;

		const [ isEditingURL, setIsEditingURL ] = useState( false );
		const opensInNewTab = linkTarget === '_blank';

		function startEditing( event ) {
			event.preventDefault();
			setIsEditingURL( true );
		}
	
		function unlink() {
			setAttributes( {
				url: undefined,
				linkTarget: undefined,
			} );
			setIsEditingURL( false );
		}
	
		useEffect( () => {
			if ( ! isSelected ) {
				setIsEditingURL( false );
			}
		}, [ isSelected ] );

		// Memoize link value to avoid overriding the LinkControl's internal state.
		// This is a temporary fix. See https://github.com/WordPress/gutenberg/issues/51256.
		const linkValue = useMemo(
			() => ( { url, opensInNewTab } ),
			[ url, opensInNewTab ]
		);

		return (
			<>
				<BlockEdit { ...props }/>
				{ isSelected &&
					<>
						<BlockControls>
							<ToolbarButton
								name="link"
								icon={ linkIcon }
								title={ __( 'Link' ) }
								onClick={ startEditing }
							/>
							{ isEditingURL &&
								<Popover
									placement="bottom-start"
									onClose={ () => {
										setIsEditingURL( false );
									} }
								>
									<MenuGroup>
										<LinkControl
											value={ linkValue }
											onChange={ ( {
												url: newURL,
												opensInNewTab: newOpensInNewTab,
											} ) =>
												setAttributes(
													getUpdatedLinkAttributes( {
														url: newURL,
														opensInNewTab: newOpensInNewTab,
													} )
												)
											}
											onRemove={ () => {
												unlink();
											} }
										/>
									</MenuGroup>
								</Popover>
							}	
						</BlockControls>
					</>
				}
			</>
		);
	};
}, 'withSvgUrlControl' );

/**
 * Get Updated Link Attributes
 * 
 * @param {string} url 
 * @param {boolean} opensInNewTab 
 * @returns {Object}
 */
function getUpdatedLinkAttributes( {
	url = '',
	opensInNewTab,
} ) {
	let newLinkTarget;

	if ( opensInNewTab ) {
		newLinkTarget = '_blank';
	}

	return {
		url: prependHTTP( url ),
		linkTarget: newLinkTarget,
	};
}
