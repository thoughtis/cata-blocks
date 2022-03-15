<?php
/**
 * Blocks > Kicker
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Kicker block
 */
function register_kicker_block() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_kicker_block' );
