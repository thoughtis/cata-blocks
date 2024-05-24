<?php
/**
 * Blocks > Marquee
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Throwable;
use WP_HTML_Tag_Processor;

/**
 * Register Marquee Block
 */
function register_marquee_block() {
	if ( ! apply_filters( 'cata_blocks_support_marquee_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_marquee_block' );

