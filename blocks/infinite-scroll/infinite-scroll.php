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
	register_block_type( __DIR__ . '/build/infinite-scroll' );

	add_filter( 'should_load_block_assets_on_demand', '__return_false' );

}
add_action( 'init', 'cata_infinite_scroll_block_init' );

function cata_infinite_scroll_beacon_block_init() {
	register_block_type( __DIR__ . '/build/infinite-scroll-beacon' );
}
add_action( 'init', 'cata_infinite_scroll_beacon_block_init' );
