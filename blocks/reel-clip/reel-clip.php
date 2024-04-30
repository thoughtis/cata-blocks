<?php
/**
 * Reel Clip
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Reel Clip Block
 * 
 * @return void
 */
function register_reel_clip_block(): void {
	if ( ! apply_filters( 'cata_blocks_support_reel_clip_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_reel_clip_block' );
