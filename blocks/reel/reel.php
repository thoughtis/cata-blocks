<?php
/**
 * Reel
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Reel Block
 * 
 * @return void
 */
function register_reel_block(): void {
	if ( ! apply_filters( 'cata_blocks_support_reel_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_reel_block' );
