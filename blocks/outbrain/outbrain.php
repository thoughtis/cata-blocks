<?php
/**
 * Blocks > Outbrain
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_Block;

/**
 * Register Outbrain Block
 */
function register_outbrain_block() {
	if ( ! apply_filters( 'cata_blocks_support_outbrain_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_outbrain_render_callback',
		)
	);
	wp_register_script(
		'cata-outbrain',
		'https://widgets.outbrain.com/outbrain.js',
		args: [
			'strategy' => 'async'
		]
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_outbrain_block' );

/**
 * Render Callback
 *
 * @param array    $attribute
 * @param string   $content
 * @param WP_Block $block
 * @return string
 */
function cata_outbrain_render_callback( array $attributes, string $content, WP_Block $block ): string {
	
	if ( ! is_singular( 'post' ) ) {
		return '';
	}

	wp_enqueue_script('cata-outbrain');

	$class          = 'OUTBRAIN'; 
	$data_src       = esc_url( wp_get_canonical_url() );
	$data_widget_id = 'GS_1';

	return "<div class=\"{$class}\" data-src=\"{$data_src}\" data-widget-id=\"{$data_widget_id}\"></div>";
}
