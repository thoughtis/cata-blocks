<?php
/**
 * Blocks > Aside
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Aside Block
 */
function register_aside_block() {
	if ( ! apply_filters( 'cata_blocks_support_aside_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_aside_block' );
