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
function register_overhang_format() {
	if ( ! apply_filters( 'cata_blocks_support_overhang_format', true ) ) {
		return;
	}
	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'cata-block-editor-format-overhang',
		plugins_url( '/build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_overhang_format_assets' );
}
add_action( 'init', __NAMESPACE__ . '\\register_overhang_format' );

/**
 * Enqueue Overhang Format Assets
 */
function enqueue_overhang_format_assets() {
	wp_enqueue_script( 'cata-block-editor-format-overhang' );
}
