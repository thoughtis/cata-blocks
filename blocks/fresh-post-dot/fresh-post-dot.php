<?php
/**
 * Blocks > Fresh Post Dot
 *
 * @package Cata\Blocks
 * @since 0.12.14-beta1
 */

namespace Cata\Blocks;

/**
 * Register Fresh Post Dot block
 */
function register_fresh_post_dot_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_fresh_post_dot_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_fresh_post_dot_block' );
