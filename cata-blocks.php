<?php
/**
 * Cata Blocks
 *
 * @package   Cata\Blocks
 * @author    Thought & Expression Co. <devjobs@thought.is>
 * @copyright 2019 Thought & Expression Co.
 * @license   GNU GENERAL PUBLIC LICENSE
 *
 * @wordpress-plugin
 * Plugin Name: Cata Blocks
 * Description: Block Editor components for use with the Cata theme.
 * Author:      Thought & Expression Co. <devjobs@thought.is>
 * Author URI:  https://thought.is
 * Version:     0.4.0
 * License:     GPL v3 or later
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace Cata\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/blocks/aside/aside.php';
require_once __DIR__ . '/blocks/kicker/kicker.php';
require_once __DIR__ . '/blocks/newsletter/includes/class-renderer.php';
require_once __DIR__ . '/blocks/newsletter/newsletter.php';
require_once __DIR__ . '/blocks/shop/shop.php';
require_once __DIR__ . '/blocks/table-of-contents/table-of-contents.php';
require_once __DIR__ . '/patterns/trivia/trivia.php';
require_once __DIR__ . '/includes/class-shop-proxy.php';

/**
 * Instantiate Classes
 */
new Shop_Proxy();

/**
 * Add UTMs to Product Block links
 *
 * @param string $link Link to be modified.
 * @return string $new_link Modified product link.
 */
function cata_add_product_link_utm( string $link ) {
	if ( is_front_page() ) {
		$type = 'frontpage';
	} elseif ( is_single() && 'post' === get_post_type() ) {
		$type = 'post';
	} else {
		return $link;
	}

	// get current site name and get rid of any spaces/linebreaks/ and make lowercase
	$site_name = strtolower( preg_replace("/\s+/", "", get_bloginfo( 'show' ) ) );

	$new_link = add_query_arg( 
		array(
			'utm_campaign' => $site_name,
			'utm_medium'   => 'web',
			'utm_source'   => $type,
		),
		$link
	);

	return $new_link;
}
add_filter( 'cata_product_block_link', __NAMESPACE__ . '\\cata_add_product_link_utm', 10, 1 );
