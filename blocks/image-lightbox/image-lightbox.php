<?php
/**
 * Blocks > Image Lightbox
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Throwable;
use WP_Block;
use WP_HTML_Tag_Processor;

/**
 * Register Image Lightbox Block
 */
function register_image_lightbox_block() {
	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return;
	}
	register_block_type( 
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_image_lightbox_render_callback',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_image_lightbox_block' );


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
function cata_image_lightbox_render_callback( array $attributes, string $content, WP_Block $block ): string {
	try {
		return cata_image_lightbox_render_block( $attributes, $content, $block );
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
function cata_image_lightbox_render_block( array $attributes, string $content, WP_Block $block ): string {
	if ( ! is_single() ) {
		return '';
	}

	$image_urls = [];

	$post_content = get_the_content( get_queried_object() );

	$tags = new WP_HTML_Tag_Processor( $post_content );

	while ( $tags->next_tag( 'img' ) ) {
		array_push( $image_urls, $tags->get_attribute( 'src' ) );
	}

	do_action('qm/debug', $image_urls);
	return 'Lightbox Here';
}
