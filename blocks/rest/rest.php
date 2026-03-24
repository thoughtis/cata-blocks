<?php
/**
 * Rest
 *
 * @package Cata\Blocks
 * @since 0.8.1
 */

namespace Cata\Blocks;

use Throwable;
use WP_Block;

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
 * Remove View Script Module from Metadata
 * Prevents WordPress from auto-enqueuing the view script module on every
 * block render. We register it manually and enqueue it conditionally instead.
 *
 * @param array $metadata
 * @return array
 */
function remove_rest_view_script_module_from_metadata( array $metadata ) : array {
	if ( 'cata/rest' === ( $metadata['name'] ?? '' ) ) {
		unset( $metadata['viewScriptModule'] );
	}
	return $metadata;
}
add_filter( 'block_type_metadata', __NAMESPACE__ . '\\remove_rest_view_script_module_from_metadata' );

/**
 * Register View Script Module
 * Registers the module so it can be conditionally enqueued during rendering.
 *
 * @return void
 */
function register_rest_view_script_module() : void {
	$asset = require __DIR__ . '/build/view.asset.php';
	wp_register_script_module(
		'cata-rest-view-script-module',
		plugins_url( 'build/view.js', __FILE__ ),
		$asset['dependencies'],
		$asset['version']
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_rest_view_script_module' );

/**
 * Render Callback
 * Calls the real render function, wrapping it in try/catch.
 *
 * @param array $attribute
 * @param string $content
 * @return string
 */
function cata_rest_render_callback( array $attributes, string $content, WP_Block $block ) : string {
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

	// We only need the view script for horoscope tabs.
	if ( true === $attributes['display']['horoscope_tabs'] ) {
		wp_enqueue_script_module( 'cata-rest-view-script-module' );
	}

	$args = [
		$content,
		$posts,
		$attributes['display'],
		$layout,
		$attributes['aspect_ratio'],
		$attributes['horoscope_excerpt'],
		$attributes['excerpt_length']
	];

	$new_content = get_layout_renderer( $layout )( ...$args );

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
	$decoded_url = URLs::get_standardized_rest_api_url( $url );
	return (new Feed( new Feed\Cache( $decoded_url ), $decoded_url ) )->get_posts_allow_side_effects();
}

/**
 * Get Layout Renderer
 * 
 * @param string $key
 * @return callable
 */
function get_layout_renderer( string $key ) : callable {
	$render_classes = array(
		'standard'        => 'Cata\\Blocks\\Rest\\Layout\\Standard::render',
		'trending'        => 'Cata\\Blocks\\Rest\\Layout\\Trending::render',
	);
	if ( ! array_key_exists( $key, $render_classes ) ) {
		$key = 'standard';
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
