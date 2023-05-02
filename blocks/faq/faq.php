<?php
/**
 * Blocks > FAQ
 * 
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register FAQ block
 */
function register_faq_block() {
	if( ! apply_filters( 'cata_blocks_support_faq_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_faq_block' );
