<?php
/**
 * Rest
 *
 * @package Cata\Blocks
 * @since 0.8.1
 */

namespace Cata\Blocks;

use Throwable;

/**
 * Register REST block
 */
function register_rest_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_rest_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_rest_render_callback',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_rest_block' );

/**
 * Render Callback
 * Calls the real render function, wrapping it in try/catch.
 *
 * @param array $attribute
 * @param string $content
 * @return string
 */
function cata_rest_render_callback( array $attributes, string $content ) : string {
	try {
		return cata_rest_render_block( $attributes, $content );
	} catch( Throwable $e ) {
		do_action( 'qm/debug', $e );
		return $content;
	}	
}

/**
 * Render Block
 * 
 * @param array $attribute
 * @param string $content
 * @return string
 */
function cata_rest_render_block( array $attributes, string $content ) : string {

	$layout  = isset( $attributes['layout'] ) ? $attributes['layout'] : '';
	$sorting = isset( $attributes['sorting'] ) ? $attributes['sorting'] : ''; 
	$urls    = $attributes['urls'];

	if ( empty( $urls ) ) {
		return $content;
	}

	$safe_urls = array_values(
		array_filter( $urls, 'wp_http_validate_url' )
	);

	if ( empty( $safe_urls ) ) {
		return $content;
	}

	$posts = convert_urls_to_posts( $attributes['urls'] );

	if ( empty( $posts ) ) {
		return $content;
	}

	if ( '' !== $sorting ) {
		usort( $posts, get_sorting_function( $sorting ) );
	}

	$new_content = get_layout_renderer( $layout )( $content, $posts );

	if ( '' === $new_content ) {
		return $content;
	}

	return $new_content;
}

/**
 * Convert URLs to Posts
 * 
 * @param array $urls
 * @return array $posts
 */
function convert_urls_to_posts( array $urls ) : array {
	return array_reduce(
		array_map( __NAMESPACE__ . '\\convert_url_to_posts', $urls ),
		function( array $previous, array $current ) : array {
			return array_merge( $previous, $current );
		},
		array()
	);
}

/**
 * Convert URL to Posts
 * 
 * @param string $url
 * @return array $posts
 */
function convert_url_to_posts( string $url ) : array {
	return (new Feed( new Feed\Cache( $url ), $url ) )->get_posts_allow_side_effects();
}

/**
 * Get Layout Renderer
 * 
 * @param string $key
 * @return callable
 */
function get_layout_renderer( string $key ) : callable {
	$render_classes = array(
		'network'  => 'Cata\\Blocks\\Rest\\Layout\\Network::render',
		'trending' => 'Cata\\Blocks\\Rest\\Layout\\Trending::render'
	);
	if ( '' === $key ) {
		$key = key( $render_classes );
	}
	if ( is_callable( $render_classes[$key] ) ) {
		return $render_classes[$key];
	}
	return '__return_empty_string';
}

/**
 * Get Sorting function
 * 
 * @param string $key
 * @return callable
 */
function get_sorting_function( string $key ) : callable {
	$sorting_functions = array(
		'default'          => '__return_zero',
		'published:newest' => 'Cata\\Blocks\\Rest\\Sorting\\published_newest',
	);

	if ( '' === $key ) {
		$key = key( $sorting_functions );
	}

	return $sorting_functions[$key];
}
