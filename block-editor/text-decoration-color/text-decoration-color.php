<?php
/**
 * Block Editor > Text Decoration Color
 *
 * @package Cata\Blocks
 * @since
 */

namespace Cata\Blocks;

/**
 * Enqueue Scripts
 */
function cata_text_decoration_color_enqueue_scripts(): void {
	if ( true !== apply_filters( 'cata_blocks_theme_supports_text_decoration_color', false ) ) {
		return;
	}
	$asset = require __DIR__ . '/build/index.asset.php';
	wp_enqueue_script( 
		'cata-block-editor-text-decoration-color', 
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_text_decoration_color_enqueue_scripts' );
