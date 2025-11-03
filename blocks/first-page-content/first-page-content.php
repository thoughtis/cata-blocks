<?php
/**
 * Blocks > First Page Content
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Throwable;
use WP_Block;

/**
 * Register First Page Content Block
 */
function register_first_page_content_block() {
	if ( ! apply_filters( 'cata_blocks_support_first_page_content_block', true ) ) {
		return;
	}
	register_block_type( 
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_first_page_content_render_callback',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_first_page_content_block' );

/**
 * Render Callback
 * Calls the real render function, wrapping it in try/catch.
 *
 * @param array $attribute
 * @param string $content
 * @param WP_Block $block
 * 
 * @return string
 */
function cata_first_page_content_render_callback( array $attributes, string $content, WP_Block $block ): string {
	try {
		return cata_first_page_content_render_block( $attributes, $content, $block );
	} catch( Throwable $e ) {
		do_action( 'qm/debug', $e );
		return $content;
	}	
}

/**
 * Render Block
 * 
 * @param array $attribute
 * @param string $content
 * @param WP_Block $block
 * 
 * @return string
 */
function cata_first_page_content_render_block( array $attributes, string $content, WP_Block $block ): string {
	if ( is_paged() ) {
		return '';
	}

	return $content;
}
