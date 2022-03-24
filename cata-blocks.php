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
		'permission_callback' => '__return_true'
	) );
} );

function cata_blocks_proxy_request( WP_REST_Request $request ) {

	$url = $request->get_param( 'url' );

	$response = wp_remote_get($url);

	$status = wp_remote_retrieve_response_code($response);

	if ( 200 !== $status ) {
		return new WP_Error( 'proxy_error', 'Error making remote request', array( 'status' => 404 ) );
	}

	$body = wp_remote_retrieve_body( $response );

	return new WP_REST_Response( json_decode( $body ), 200 );

}
