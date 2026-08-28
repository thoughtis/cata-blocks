<?php
/**
 * Block Editor > Post Date
 *
 * @package Cata\Blocks
 * @since 0.19.3
 */

namespace Cata\Blocks;

/**
 * Enqueue Scripts
 */
function cata_post_date_enqueue_scripts(): void {
	$asset = require __DIR__ . '/build/index.asset.php';
	wp_enqueue_script(
		'cata-block-editor-post-date',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_post_date_enqueue_scripts' );
