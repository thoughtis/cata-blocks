/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps, } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [ 'cata/network-link' ];

export default function Edit( props ) {
	const {
		attributes,
		isSelected,
	} = props;

	const NetworkPlaceholder = (
		<li className="wp-block-network-links__social-placeholder">
			<div className="wp-block-network-links__social-placeholder-icons">
				<div className="wp-block-network-link wp-block-network-link-thoughtcatalog"></div>
				<div className="wp-block-network-link wp-block-network-link-collectiveworld"></div>
				<div className="wp-block-network-link wp-block-network-link-creepycatalog"></div>
				<div className="wp-block-network-link wp-block-network-link-shopcatalog"></div>
			</div>
		</li>
	);

	const SelectedNetworkPlaceholder = (
		<li className="wp-block-cata-network-links__prompt">
			{ __( 'Click plus to add' ) }
		</li>
	);

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? SelectedNetworkPlaceholder : NetworkPlaceholder,
		templateLock: false,
		__experimentalAppenderTagName: 'li',
	} );

	return (
		<ul { ...innerBlocksProps } />
	);
}
