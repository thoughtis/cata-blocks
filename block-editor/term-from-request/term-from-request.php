<?php
/**
 * Block Editor > Term From Request
 *
 * Filter a Query Loop by the current request's taxonomy term without
 * hardcoding the term into the saved block markup.
 *
 * @package Cata\Blocks
 * @since 0.12.2
 */

namespace Cata\Blocks;

use WP_Block;
use WP_Term;

/**
 * Enqueue Scripts
 */
function cata_term_from_request_enqueue_scripts(): void {
	if ( true === wp_is_block_theme() ) {
		return;
	}
	$asset = require __DIR__ . '/build/index.asset.php';
	wp_enqueue_script(
		'cata-block-editor-term-from-request',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_term_from_request_enqueue_scripts' );

/**
 * Block Type Metadata
 *
 * The query is built from the inner post-template and pagination blocks, so
 * expose the core/query cataTermFromRequest attribute to them as context.
 *
 * @param array $metadata Block metadata.
 * @return array $metadata
 */
function cata_term_from_request_block_metadata( array $metadata ): array {

	if ( ! isset( $metadata['name'] ) ) {
		return $metadata;
	}

	if ( 'core/query' === $metadata['name'] ) {
		$metadata['attributes']['cataTermFromRequest'] = array(
			'type'    => 'boolean',
			'default' => false,
		);
		$metadata['providesContext']['cataTermFromRequest'] = 'cataTermFromRequest';
	}

	if ( in_array( $metadata['name'], ['core/post-template', 'core/query-pagination'], true ) ) {
		$metadata['usesContext'][] = 'cataTermFromRequest';
	}

	return $metadata;
}
add_filter( 'block_type_metadata', __NAMESPACE__ . '\\cata_term_from_request_block_metadata' );

/**
 * Query Loop Block Query Vars
 *
 * When cataTermFromRequest is set, filter the loop by the term the host theme
 * returns for the current request. Runs only for non-inherited queries, which
 * honor offset.
 *
 * @param array    $query Query vars for the Query Loop block.
 * @param WP_Block $block Block instance.
 * @param int      $page  Current query page.
 * @return array $query
 */
function cata_term_from_request_query_vars( array $query, WP_Block $block, int $page ): array {

	if ( true !== ( $block->context['cataTermFromRequest'] ?? false ) ) {
		return $query;
	}

	$term = apply_filters( 'cata_term_from_request', null );

	if ( $term instanceof WP_Term ) {
		$query['tax_query'][] = array(
			'taxonomy' => $term->taxonomy,
			'terms'    => array( $term->term_id ),
		);
	}

	return $query;
}
add_filter( 'query_loop_block_query_vars', __NAMESPACE__ . '\\cata_term_from_request_query_vars', 10, 3 );
