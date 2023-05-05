<?php
/**
 * Blocks > FAQ
 * 
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

require_once  plugin_dir_path( __FILE__ ) . '/includes/structured-data/class-faq-data-collector.php';
require_once  plugin_dir_path( __FILE__ ) . '/includes/structured-data/class-render-faq-data.php';

/**
 * Register FAQ block
 */
function register_faq_block() {
	if( ! apply_filters( 'cata_blocks_support_faq_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_faq_block' );

/**
 * Register FAQ Block Styles
 */
function register_faq_block_styles() {
	register_block_style(
		'cata/faq',
		array(
			'name'         => 'inline',
			'label'        => __( 'Inline', 'cata' ),
			'is_default'   => false,
			'inline_style' => 'is-style-inline',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_faq_block_styles' );

/**
 * FAQ Block Queue
 */
function faq_block_queue() {
	if ( ! has_block('cata/faq') ) {
		return;
	}

	new Render_FAQ_Data( new FAQ_Data_Collector() );
}
add_action( 'wp_body_open', __NAMESPACE__ . '\\faq_block_queue' );
