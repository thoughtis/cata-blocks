/**
 * WordPress dependencies
 */
import {
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [ 'cata/network-link' ];

export default function Edit( props ) {
	const {
		attributes,
		isSelected,
	} = props;

	const SocialPlaceholder = (
		<li className="wp-block-network-links__social-placeholder">
			<div className="wp-block-network-links__social-placeholder-icons">
				<div className="wp-block-network-link wp-block-network-link-twitter"></div>
				<div className="wp-block-network-link wp-block-network-link-facebook"></div>
				<div className="wp-block-network-link wp-block-network-link-instagram"></div>
			</div>
		</li>
	);

	const SelectedSocialPlaceholder = (
		<li className="wp-block-cata-network-links__prompt">
			{ __( 'Click plus to add' ) }
		</li>
	);

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? SelectedSocialPlaceholder : SocialPlaceholder,
		templateLock: false,
		orientation: attributes.layout?.orientation ?? 'horizontal',
		__experimentalAppenderTagName: 'li',
	} );

	return (
		<ul { ...innerBlocksProps } />
	);
}
