<?php
/**
 * Block Editor
 *
 * @package Cata\Blocks
 * @since 0.8.16
 */

namespace Cata\Blocks;

/**
 * Enqueue Scripts
 */
function cata_block_editor_enqueue_scripts(): void {
	$asset = require __DIR__ . '/build/index.asset.php';
	wp_enqueue_script( 
		'cata-block-editor-module-app', 
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);

	wp_add_inline_style( 'wp-block-editor', 'body.has-active-dark-mode-element .block-editor-panel-color-gradient-settings__dropdown-content, body.has-active-dark-mode-element .block-editor-tools-panel-color-gradient-settings__dropdown { color-scheme: dark only; }');

}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_block_editor_enqueue_scripts' );
