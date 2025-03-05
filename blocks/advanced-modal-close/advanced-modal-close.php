<?php
/**
 * Advanced Modal Close
 * Server-side rendering of the `cata/advanced-modal-close` block.
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_Block;

/**
 * Register Advanced Modal Close block
 */
function register_advanced_modal_close_block() {
	if ( ! apply_filters( 'cata_blocks_support_advanced_modal_close_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_advanced_modal_close_block' );
