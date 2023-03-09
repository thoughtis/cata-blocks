<?php
/**
 * Moodboard
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function moodboard_block_init() {
	if ( ! apply_filters( 'cata_blocks_support_moodboard_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\moodboard_block_init' );
