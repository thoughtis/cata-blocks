<?php
/**
 * Block Editor > Term From Request
 *
 * For hybrid themes, provide the ability to filter a Query Loop by the
 * current request's taxonomy term, without hardcoding the term into the
 * saved block markup. Unlike inheriting the query, this keeps the loop
 * non-inherited so it continues to honor offset.
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
 * Expose cataTermFromRequest through block context the WordPress-native way.
 * query_loop_block_query_vars receives the inner core/post-template and
 * core/query-pagination blocks, not the core/query block where the attribute
 * lives. Registering the attribute on core/query, providing it as context, and
 * consuming it on those children lets core propagate the value down so the
 * query vars filter can read it from $block->context.
 *
 * @param array $metadata Parsed block.json metadata for the block being registered.
 * @return array $metadata Metadata with the term-from-request context wired up.
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
 * Runs only for non-inherited Query Loop blocks (added in WP 6.1), which is
 * what we want, since non-inherited loops honor offset. When the toggle is on,
 * inject a tax_query for the term returned by the host theme.
 *
 * @param array    $query The query vars for the Query Loop block.
 * @param WP_Block $block The Query Loop block instance (post-template / pagination).
 * @param int      $page  The current query page.
 * @return array $query Query vars, filtered by the current term when applicable.
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
