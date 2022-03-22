<?php
/**
 * Plugin Name:       Shop
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cata
 *
 * @package           Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_shop_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\create_block_shop_block_init' );

function wpHeadersFilterCallback( $headers, $wp ) {
	error_log( print_r( 'wpHeadersFilterCallback() - $headers', true ) );
	error_log( print_r( $headers, true ) );
	// error_log( print_r( 'wpHeadersCallback() - $wp', true ) );
	// error_log( print_r( $wp, true ) );

	unset( $headers['X-WP-nonce'] );

	return $headers;
}
add_filter( 'wp_headers', __NAMESPACE__ . '\\wpHeadersFilterCallback', 999, 2 );

// function wpHeadersActionCallback( $wp) {
// 	error_log( print_r( 'wpHeadersActionCallback() - $wp', true ) );
// 	error_log( print_r( $wp, true ) );
// }
// add_action( 'send_headers', __NAMESPACE__ . '\\wpHeadersActionCallback', 10, 1 );
