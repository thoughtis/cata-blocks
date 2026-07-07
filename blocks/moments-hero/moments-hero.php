<?php
/**
 * Blocks > Moments Hero
 *
 * @package Cata\Blocks
 * @since 0.13.0
 */

namespace Cata\Blocks;

require_once __DIR__ . '/includes/selection.php';

/**
 * Register Moments Hero block
 */
function register_moments_hero_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_moments_hero_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_moments_hero_block' );
