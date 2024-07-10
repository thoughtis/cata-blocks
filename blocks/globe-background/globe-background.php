<?php
/**
 * Blocks > Globe Background
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Throwable;
use WP_HTML_Tag_Processor;

/**
 * Register Globe Background Block
 */
function register_globe_animation_block() {
	if ( ! apply_filters( 'cata_blocks_support_globe_animation_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_globe_animation_block' );
