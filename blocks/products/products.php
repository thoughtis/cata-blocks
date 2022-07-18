<?php
/**
 * Products
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function init_products_block() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\render_products_block',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\init_products_block' );

/**
 * Render Block
 *
 * @param array  $attributes
 * @param string $content
 * @return string $new_content
 */
function render_products_block( array $attributes, string $content ) : string {

	$attributes = wp_parse_args(
		$attributes,
		array(
			'display_byline' => true,
		)
	);

	$url = isset( $attributes['query_url'] ) ? $attributes['query_url'] : '';

	if ( ! wp_http_validate_url( $url ) ) {
		return $content;
	}

	$products = convert_url_to_products( $url );

	if ( empty( $products ) ) {
		return $content;
	}

	$new_content = Products\render_products( $attributes, $products );

	if ( '' === $new_content ) {
		return $content;
	}

	return $new_content;

}

/**
 * Convert URL to Products
 *
 * @param string $url
 * @return array
 */
function convert_url_to_products( string $url ) : array {
	error_log( 'setup cache in render' );
	return ( new Products\Feed( new Products\Feed\Cache( $url ), $url ) )->get_posts_allow_side_effects();
}
