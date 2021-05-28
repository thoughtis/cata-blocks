<?php
/**
 * Blocks > Aside
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Aside Block
 */
function register_aside_block() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', __NAMESPACE__ . '\\register_aside_block' );
