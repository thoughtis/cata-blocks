<?php
/**
 * Block Editor > Query Filters
 *
 * Custom Query Loop options for hybrid themes: inherit the main query (for a
 * Latest Posts page), or filter by the current request's taxonomy term.
 *
 * @package Cata\Blocks
 * @since 0.11.3
 */

namespace Cata\Blocks;

use WP_Block;
use WP_Term;

/**
 * Enqueue Scripts
 */
function cata_query_filters_enqueue_scripts(): void {

	$asset = require __DIR__ . '/build/index.asset.php';

	wp_enqueue_script(
		'cata-block-editor-query-filters',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\cata_query_filters_enqueue_scripts' );

/**
 * Inherit Query Render Block Data
 *
 * @param array $parsed_block
 * @return array $parsed_block Query updated to inherit from request.
 */
function cata_query_filters_inherit_query_render_block_data( array $parsed_block ): array {

	if ( 'core/query' !== $parsed_block['blockName'] ) {
		return $parsed_block;
	}

	if ( true !== ( $parsed_block['attrs']['cataInheritQuery'] ?? false ) ) {
		return $parsed_block;
	}

	$parsed_block['attrs']['query']['inherit'] = true;

	return $parsed_block;
}
add_filter( 'render_block_data', __NAMESPACE__ . '\\cata_query_filters_inherit_query_render_block_data', PHP_INT_MAX );


/**
 * Inherit Query Render Block Context
 *
 * Doing this in addition to the filter on render_block_data above.
 * On some systems ( WP VIP ) the render_block_data filter is ineffective.
 *
 * @param array $context
 * @param array $parsed_block
 * @param WP_Block|null $parent_block
 * @return array $context
 */
function cata_query_filters_inherit_query_render_block_context( array $context, array $parsed_block, WP_Block|null $parent_block ): array {

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
add_filter( 'render_block_context', __NAMESPACE__ . '\\cata_query_filters_inherit_query_render_block_context', 10, 3 );

/**
 * Term From Request Block Metadata
 *
 * Expose the core/query cataTermFromRequest attribute as context to the inner
 * blocks that build the query, so each one filters by the same term.
 *
 * @param array $metadata Block metadata.
 *
 * @return array $metadata
 */
function cata_query_filters_term_from_request_block_metadata( array $metadata ): array {

	if ( ! isset( $metadata['name'] ) ) {
		return $metadata;
	}

	if ( 'core/query' === $metadata['name'] ) {
		$metadata['attributes']['cataTermFromRequest'] = array(
			'type'    => 'boolean',
			'default' => false,
		);
		$metadata['attributes']['cataPinnedFallback'] = array(
			'type'    => 'boolean',
			'default' => false,
		);
		$metadata['attributes']['cataPinnedFallbackCategories'] = array(
			'type'    => 'array',
			'default' => array(),
			'items'   => array(
				'type' => 'number',
			),
		);
		$metadata['providesContext']['cataTermFromRequest']          = 'cataTermFromRequest';
		$metadata['providesContext']['cataPinnedFallback']           = 'cataPinnedFallback';
		$metadata['providesContext']['cataPinnedFallbackCategories'] = 'cataPinnedFallbackCategories';
	}

	$query_building_blocks = [
		'core/post-template',
		'core/query-pagination-numbers',
		'core/query-pagination-next',
		'core/query-no-results',
	];

	if ( in_array( $metadata['name'], $query_building_blocks, true ) ) {
		$metadata['usesContext'][] = 'cataTermFromRequest';
		$metadata['usesContext'][] = 'cataPinnedFallback';
		$metadata['usesContext'][] = 'cataPinnedFallbackCategories';
	}

	return $metadata;
}
add_filter( 'block_type_metadata', __NAMESPACE__ . '\\cata_query_filters_term_from_request_block_metadata' );

/**
 * Term From Request Query Vars
 *
 * When cataTermFromRequest is set, filter the loop by the term the host theme
 * returns for the current request. Runs only for non-inherited queries, which
 * honor offset.
 *
 * @param array    $query Query vars for the Query Loop block.
 * @param WP_Block $block Block instance.
 * @param int      $page  Current query page.
 * 
 * @return array $query
 */
function cata_query_filters_term_from_request_query_vars( array $query, WP_Block $block, int $page ): array {

	if ( true !== ( $block->context['cataTermFromRequest'] ?? false ) ) {
		return $query;
	}

	$term = apply_filters( 'cata_query_filters_term_from_request', get_queried_object() );

	if ( $term instanceof WP_Term ) {
		$query['tax_query'][] = array(
			'taxonomy' => $term->taxonomy,
			'terms'    => array( $term->term_id ),
		);
	}

	return $query;
}
add_filter( 'query_loop_block_query_vars', __NAMESPACE__ . '\\cata_query_filters_term_from_request_query_vars', 10, 3 );

/**
 * Whether at least one pinned post is published.
 *
 * Core's "Only pinned posts" Query Loop setting resolves an empty pin list to
 * `post__in => array( 0 )`, so the loop renders nothing. This check lets the
 * pinned-fallback filter distinguish "nothing pinned" (fall back) from
 * "pinned posts exist" (leave the query alone).
 *
 * @return bool
 */
function cata_query_filters_has_published_pinned_post(): bool {

	$sticky_ids = array_filter( array_map( 'absint', (array) get_option( 'sticky_posts', array() ) ) );

	if ( empty( $sticky_ids ) ) {
		return false;
	}

	$published = get_posts(
		array(
			'post__in'            => $sticky_ids,
			'post_type'           => 'post',
			'post_status'         => 'publish',
			'posts_per_page'      => 1,
			'fields'              => 'ids',
			'ignore_sticky_posts' => true,
			'no_found_rows'       => true,
		)
	);

	return ! empty( $published );
}

/**
 * Pinned Fallback Query Vars
 *
 * When cataPinnedFallback is set on a Query Loop configured to show only
 * pinned posts, and no published pinned post exists, swap the pin constraint
 * for the latest post that has a featured image — optionally scoped to
 * cataPinnedFallbackCategories — so the loop is never empty.
 *
 * @param array    $query Query vars for the Query Loop block.
 * @param WP_Block $block Block instance.
 * @param int      $page  Current query page.
 *
 * @return array $query
 */
function cata_query_filters_pinned_fallback_query_vars( array $query, WP_Block $block, int $page ): array {

	if ( true !== ( $block->context['cataPinnedFallback'] ?? false ) ) {
		return $query;
	}

	if ( cata_query_filters_has_published_pinned_post() ) {
		return $query;
	}

	unset( $query['post__in'] );
	$query['ignore_sticky_posts'] = true;
	// The fallback exists to keep a visual slot filled — skip art-less posts.
	$query['meta_key'] = '_thumbnail_id';

	$categories = array_filter( array_map( 'absint', (array) ( $block->context['cataPinnedFallbackCategories'] ?? array() ) ) );

	if ( ! empty( $categories ) ) {
		$query['category__in'] = $categories;
	}

	return $query;
}
add_filter( 'query_loop_block_query_vars', __NAMESPACE__ . '\\cata_query_filters_pinned_fallback_query_vars', 10, 3 );
