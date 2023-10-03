<?php
/**
 * Network Links
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Network Links block
 *
 * @return void
 */
function register_network_links_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_network_links_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_network_links_block' );
