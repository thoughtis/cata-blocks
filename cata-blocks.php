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

use WP_REST_Request;
use WP_REST_Response;
use WP_Error;

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

add_action( 'rest_api_init', function () {
	register_rest_route( 'cata/v1', '/proxy/', array(
		'methods' => 'GET',
		'callback' => __NAMESPACE__ . '\\cata_blocks_proxy_request',
		'permission_callback' => __NAMESPACE__ .  '\\cata_blocks_proxy_req_permissions_check'
	) );
} );

/**
 * Cata Blocks Proxy Request User Permissions Check
 *
 * @return bool|WP_Error Error if user does not meet permissions requirement.
 */
function cata_blocks_proxy_req_permissions_check() {
    if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) {
        return true;
    }

    return new WP_Error( 'rest_forbidden', esc_html__( 'Sorry, you don\'t have permission to do that.' ), array( 'status' => 401 ) );
}


/**
 * Cata Block Proxy Request
 *
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error either an error or a json decoded api response body
 */
function cata_blocks_proxy_request( WP_REST_Request $request ) {

	$url = $request->get_param( 'url' );

	$hash = wp_hash( $url );

	$response = wp_remote_get($url);

	$status = wp_remote_retrieve_response_code($response);

	if ( 200 !== $status ) {
		return new WP_Error( 'proxy_error', 'Error making remote request', array( 'status' => 404 ) );
	}

	$body = wp_remote_retrieve_body( $response );

	// No expiration time
	set_transient( 'cata-blocks-shop-proxy-req-result-' . $hash, $body );

	return new WP_REST_Response( json_decode( $body ), 200 );

}

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

	$site_name = get_bloginfo( 'show' );

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
