<?php
/**
 * Store Enqueue Scripts
 *
 * @since 0.8.2
 */
function cata_blocks_store_enqueue_scripts() : void {
	$asset = require __DIR__ . '/build/index.asset.php';

	wp_enqueue_script(
		'cata-blocks-shopify-store',
		plugins_url( '/cata-blocks/blocks-store/build/index.js' ),
		$asset['dependencies'],
		$asset['version']
	);

	$data = array(
		'shopifyData' => get_option( 'cata_blocks_shopify_stores', array() ),
	);

	wp_localize_script(
		'cata-blocks-shopify-store',
		'cataBlocks',
		$data
	);
}
add_action( 'enqueue_block_editor_assets', 'cata_blocks_store_enqueue_scripts' );
