<?php
/**
 * Table Of Contents
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Table of Contents block
 *
 * @return void
 */
function register_toc_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_table-of-contents_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
	add_filter( 'block_editor_settings_all', __NAMESPACE__ . '\\enabled_generate_anchors' );
}
add_action( 'init', __NAMESPACE__ . '\\register_toc_block' );

/**
 * Enable Generate Anchors
 *
 * @link https://github.com/WordPress/gutenberg/pull/38780#issuecomment-1122412396
 * @param array $settings
 * @return array
 */
function enabled_generate_anchors( array $settings ) : array {			
	return array_merge(
		$settings,
		array(
			'generateAnchors' => true,
		)
	);
}
