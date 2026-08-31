<?php
/**
 * Extended Modified Date Post Date Variation
 *
 * @package Cata\Blocks
 * @since 0.19.3
 */

namespace Cata\Blocks\Variations;

const EXTENDED_MODIFIED_DATE_CLASS_NAME = 'wp-block-post-date__extended-modified-date';

/**
 * Enqueue Extended Modified Date Editor Assets
 */
function enqueue_extended_modified_date_editor_assets(): void {
	$asset = require __DIR__ . '/build/index.asset.php';
	wp_enqueue_script(
		'cata-extended-modified-date-variation',
		plugins_url( '/build/index.js', __FILE__ ),
		$asset['dependencies'],
		$asset['version'],
		true
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_extended_modified_date_editor_assets' );

/**
 * Render Block Extended Modified Date
 *
 * Prepends how long ago the post was updated to the rendered date, e.g.
 * "3 days ago, Aug 25, 2026". The datetime comes from the block's `modified`
 * binding, so it already reflects the published date fallback.
 *
 * @param string $content Rendered block content.
 * @param array  $block   Parsed block.
 * @return string
 */
function render_block_extended_modified_date( string $content, array $block ): string {
	if ( '' === $content ) {
		return $content;
	}

	$class_names = explode( ' ', $block['attrs']['className'] ?? '' );

	if ( ! in_array( EXTENDED_MODIFIED_DATE_CLASS_NAME, $class_names, true ) ) {
		return $content;
	}

	$matches = array();

	if ( 1 !== preg_match( '/<time\b[^>]*\bdatetime="([^"]*)"[^>]*>/', $content, $matches ) ) {
		return $content;
	}

	$timestamp = strtotime( $matches[1] );

	if ( false === $timestamp ) {
		return $content;
	}

	// translators: %s: human-readable time difference.
	$time_ago = sprintf( __( '%s ago', 'cata' ), human_time_diff( $timestamp ) );

	return str_replace(
		$matches[0],
		$matches[0] . esc_html( $time_ago ) . ', ',
		$content
	);
}
add_filter( 'render_block_core/post-date', __NAMESPACE__ . '\\render_block_extended_modified_date', 10, 2 );
