<?php
/**
 * Formats > Overhang
 *
 * @package Cata\Formats
 */

 namespace Cata\Formats;

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
add_action( 'init', function() {
	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'cata-block-editor-format-overhang',
		plugins_url( '/build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
} );

/**
 * Enqueue block editor assets for this example.
 */
add_action(
	'enqueue_block_editor_assets',
	function() {
		wp_enqueue_script( 'cata-block-editor-format-overhang' );
	}
);