<?php
/**
 * Plugin Name:       Infinite Scroll
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       infinite-scroll
 *
 * @package Cata
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cata_infinite_scroll_block_init() {
	if ( ! apply_filters( 'cata_blocks_support_infinite_scroll_block', false ) ) {
		return;
	}

	register_block_type( __DIR__ . '/build/infinite-scroll' );

	add_filter( 'should_load_block_assets_on_demand', '__return_false' );
}
add_action( 'init', 'cata_infinite_scroll_block_init' );

function cata_infinite_scroll_beacon_block_init() {
	if ( ! apply_filters( 'cata_blocks_support_infinite_scroll_block', false ) ) {
		return;
	}

	register_block_type( __DIR__ . '/build/infinite-scroll-beacon' );
}
add_action( 'init', 'cata_infinite_scroll_beacon_block_init' );

/**
 * Get Infinite Scroll Config
 * 
 * @return array
 */
function cata_blocks_get_infinite_scroll_config(): array {

	$options   = get_option( 'cata_blocks' );
	$next_post = get_post( absint( $options['post_id']) );
	$post_urls = is_a( $next_post, 'WP_Post' ) ? [get_permalink( $next_post )] : []; 

	return [
		'postUrls' => $post_urls
	];
}

function cata_blocks_get_infinite_scroll_active(): bool {
	$options = get_option( 'cata_blocks' );
	return true === ($options['active'] ?? false);
}
