<?php
/**
 * Block Editor > Color Scheme
 *
 * @package Cata\Blocks
 * @since
 */

namespace Cata\Blocks;

/**
 * Enqueue Scripts
 */
function cata_color_scheme_enqueue_scripts(): void {
	if ( true !== apply_filters( 'cata_blocks_theme_supports_color_scheme', false ) ) {
		return;
	}
	$asset = require __DIR__ . '/build/index.asset.php';
	wp_enqueue_script( 
		'cata-block-editor-color-scheme', 
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);

	wp_add_inline_style( 'wp-block-editor', 'body.has-active-dark-mode-element .block-editor-panel-color-gradient-settings__dropdown-content, body.has-active-dark-mode-element .block-editor-tools-panel-color-gradient-settings__dropdown { color-scheme: dark only; }');
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_color_scheme_enqueue_scripts' );
