<?php
/**
 * Plugin Name:       Just Watch
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       just-watch
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
function cata_just_watch_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'cata_just_watch_block_init' );

/**
 * Register Script
 */
function cata_just_watch_register_script(): void {
	wp_register_script(
		'cata-blocks-just-watch',
		'https://widget.justwatch.com/justwatch_widget.js',
		array(),
		args: array(
			'strategy' => 'defer',
		)
	);
}
add_action( 'wp_enqueue_scripts', 'cata_just_watch_register_script' );

/**
 * Get Asset URL
 *
 * @param string $filename
 * @return string URL for asset in plugin directory.
 */
function cata_just_watch_get_asset_url( string $filename ): string {
	return plugins_url( "/assets/{$filename}", __FILE__ );
}

/**
 * Get API Token
 */
function cata_just_watch_get_api_token(): string {
	return get_option( Cata\Blocks\Just_Watch\Options\Token::SETTING_NAME, '' );
}
