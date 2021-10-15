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

function register_toc_block() {
	register_block_type_from_metadata( __DIR__ );
}

add_action( 'init', __NAMESPACE__ . '\\register_toc_block' );

add_filter( 'script_loader_tag', __NAMESPACE__ . '\\add_defer_to_toc_script', 10, 3 );
function add_defer_to_toc_script( $tag, $handle, $src ) {
	if ( 'cata-table-of-contents-script' !== $handle ) {
			return $tag;
		}
	return '<script defer="defer" type="text/javascript" src="' . $src . '"></script>';
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\remove_editor_toc_script', 10, 0 );
function remove_editor_toc_script() {
	wp_dequeue_script( 'cata-table-of-contents-script' );
	wp_deregister_script( 'cata-table-of-contents-script' );
}
