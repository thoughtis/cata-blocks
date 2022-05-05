<?php
/**
 * Plugin Name:       Products
 * Description:       Dynamic Block which renders a block of Shop Catalog Products.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.2.0-beta01
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
	register_block_type( __DIR__ . '/build', array(
		'render_callback' => __NAMESPACE__ . '\\Products\\products_block_render_callback',
	) );
}
add_action( 'init', __NAMESPACE__ . '\\create_block_shop_block_init' );
