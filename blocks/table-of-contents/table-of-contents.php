<?php
/**
 * Plugin Name:       Table Of Contents
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       table-of-contents
 *
 * @package           Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Table of Contents block
 *
 * @return void
 */
function register_toc_block() {
	register_block_type_from_metadata( __DIR__, '/build' );
}

add_action( 'init', __NAMESPACE__ . '\\register_toc_block' );

/**
 * Add defer attribute to Table of Contents script tag
 * 
 * The script enqueued by the block editor runs before the DOM is fully built; this deferment ensures the script can parse the DOM after it's built.
 *
 * @param [type] $tag - The <script> tag of the enqueued script being filtered.
 * @param [type] $handle - The registered handle of the enqueued script being filtered.
 * @param [type] $src - The src URL of the enqueued script being filtered.
 * @return string - Returns the script tag either unmodified or, if it is the Table of Contents script it adds the defer tag.
 */
function add_defer_to_toc_script( $tag, $handle, $src ) {
	if ( 'cata-toc-script' !== $handle ) {
		return $tag;
	}
	return '<script defer="defer" type="text/javascript" src="' . $src . '"></script>';
}

add_filter( 'script_loader_tag', __NAMESPACE__ . '\\add_defer_to_toc_script', 10, 3 );

/**
 * Remove Table of Contents from Block Editor
 * 
 * Prevents Table of Contents script from running in the block editor without affecting the front end execution.
 *
 * @return void
 */
function remove_editor_toc_script() {
	wp_dequeue_script( 'cata-toc-script' );
	wp_deregister_script( 'cata-toc-script' );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\remove_editor_toc_script', 10, 0 );

/**
 * Conditionally Remove Script
 * Remove block script if the post or page does not contain it.
 */
function conditionally_remove_script() : void {
	// singular includes a page used as front-page, single does not.
	if ( ! is_singular() ) {
		return;
	}
	if ( has_block( 'cata/toc' ) ) {
		return;
	}
	wp_dequeue_script( 'cata-toc-script' );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__. '\\conditionally_remove_script' ); 