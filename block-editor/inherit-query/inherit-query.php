<?php
/**
 * Block Editor > Inherit Query
 *
 * For hybrid themes, provide the ability to inherit query,
 * specifically for use when making a Latest Posts page.
 *
 * @package Cata\Blocks
 * @since 0.11.3-beta1
 */

namespace Cata\Blocks;

use WP_Block;

/**
 * Enqueue Scripts
 */
function cata_inherit_query_enqueue_scripts(): void {
	if ( true === wp_is_block_theme() ) {
		return;
	}
	$asset = require __DIR__ . '/build/index.asset.php';
	wp_enqueue_script( 
		'cata-block-editor-inherit-query',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_inherit_query_enqueue_scripts' );

/**
 * Render Block Data
 * 
 * @param array $parsed_block
 * @return array $parsed_block Query updated to inherit from request.
 */
function cata_inherit_query_render_block_data( array $parsed_block ): array {
	if ( 'core/query' !== $parsed_block['blockName'] ) {
		return $parsed_block;
	}

	if ( true !== ( $parsed_block['attrs']['cataInheritQuery'] ?? false ) ) {
		return $parsed_block;
	}

	$parsed_block['attrs']['query']['inherit'] = true;

	return $parsed_block;
}
add_filter( 'render_block_data', __NAMESPACE__ . '\\cata_inherit_query_render_block_data', PHP_INT_MAX );


/**
 * Render Block Context
 * 
 * @param array $context
 * @param array $parsed_block
 * @param WP_Block|null $parent_block
 * @return array $context
 */
function cata_inherit_query_render_block_context( array $context, array $parsed_block, WP_Block|null $parent_block ): array {

	if ( ! in_array( $parsed_block['blockName'], ['core/query-pagination', 'core/post-template'] ) ) {
		return $context;
	}

	if ( null === $parent_block || 'core/query' !== $parent_block->parsed_block['blockName'] ) {
		return $context;
	}

	if ( true === ( $parent_block->parsed_block['attrs']['cataInheritQuery'] ?? false ) ) {
		$context['query']['inherit'] = true;
	}

	return $context;

}
add_filter( 'render_block_context', __NAMESPACE__ . '\\cata_inherit_query_render_block_context', 10, 3 );
