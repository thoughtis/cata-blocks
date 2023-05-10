<?php
/**
 * Blocks > FAQ
 * 
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Scheduled Content block
 */
function register_scheduled_content_block() {
	if( ! apply_filters( 'cata_blocks_support_scheduled_content_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_scheduled_content_block' );
