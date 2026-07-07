<?php
/**
 * Block Editor > Image Lightbox Exclude
 *
 * Adds the excludeFromLightbox attribute and its inspector toggle to the core
 * image block, so individual images can opt out of the image lightbox.
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Enqueue Scripts
 */
function cata_image_lightbox_exclude_enqueue_scripts(): void {

	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return;
	}

	$asset = require __DIR__ . '/build/index.asset.php';

	wp_enqueue_script(
		'cata-block-editor-image-lightbox-exclude',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_image_lightbox_exclude_enqueue_scripts' );
