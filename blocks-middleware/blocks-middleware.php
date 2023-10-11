<?php
/**
 * Blocks Middleware
 * 
 * @package Cata\Blocks
 * @since 0.8.1
 */

namespace Cata\Blocks;

/**
 * Enqueue Scripts
 */
function cata_blocks_middleware_enqueue_scripts() {
	do_action('qm/debug', 'middleware script enqueued');
	wp_enqueue_script( 
		'cata-blocks-middleware-module-app', 
		plugin_dir_url( __FILE__ ) . 'build/index.js', 
		array()
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_blocks_middleware_enqueue_scripts' );
