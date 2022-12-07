<?php
/**
 * Blocks > Kicker
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Kicker block
 */
function register_kicker_block() {
	if ( ! apply_filters( 'cata_blocks_support_kicker_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_kicker_block' );
