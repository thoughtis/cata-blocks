<?php
/**
 * Blocks > Art Direction
 *
 * @package Cata\Blocks
 * @since 0.13.0
 */

namespace Cata\Blocks;

require_once __DIR__ . '/includes/selection.php';
require_once __DIR__ . '/includes/rest.php';

/**
 * Register Art Direction block
 */
function register_art_direction_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_art_direction_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_art_direction_block' );
