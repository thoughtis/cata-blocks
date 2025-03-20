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
			'strategy'  => 'async',
			'in_footer' => true,
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

	$attributes = array_merge(
		[
			'widgetId' => 'GS_1'
		],
		$attributes
	);

	$wrapper_attributes = get_block_wrapper_attributes(
		[
			'class'          => 'OUTBRAIN',
			'data-src'       => esc_url( wp_get_canonical_url() ),
			'data-widget-id' => esc_attr( $attributes['widgetId'] ),
		]
	);

	return "<div {$wrapper_attributes}></div>";
}
