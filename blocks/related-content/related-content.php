<?php
/**
 * Blocks > Related Content
 *
 * @package Cata\Blocks
 * @since 0.14.0
 */

namespace Cata\Blocks;

require_once __DIR__ . '/includes/matching.php';

/**
 * Register Related Content block
 */
function register_related_content_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_related_content_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_related_content_block' );
