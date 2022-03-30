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

	// check if  user logged in first

	// in block editor, always make this call

	$url = $request->get_param( 'url' );

	// error_log( print_r( '$url', true ) );
	// error_log( print_r( $url, true ) );

	// hash the $url in order
	$hash = wp_hash( $url );

	// error_log( print_r( '$hash', true ) );
	// error_log( print_r( $hash, true ) );

	$response = wp_remote_get($url);

	$status = wp_remote_retrieve_response_code($response);

	if ( 200 !== $status ) {
		return new WP_Error( 'proxy_error', 'Error making remote request', array( 'status' => 404 ) );
	}

	// cache this response to be used by dynamic render function for front end
	// use transients to cache (using cache key made with hash)
	// cache key needs to be somehow extrapolated from URL (MD5 hash or CRC32 int rep of a string, or SHA1 hash)
	// probably don't want to store as a json encode, rather save it as a string as-is (check this)
	$body = wp_remote_retrieve_body( $response );

	// error_log( print_r( 'cata-blocks.php - proxy req results - json_decode( $body )[0]', true ) );
	// error_log( print_r( gettype( json_decode( $body ) ), true ) );
	// error_log( print_r( json_decode( $body )[0], true ) );


	set_transient( 'cata-blocks-shop-proxy-req-result-' . $hash, $body );
	// set_transient( 'cata-blocks-shop-proxy-req-result', array( $url, $body ), 60*60*72 );

	return new WP_REST_Response( json_decode( $body ), 200 );

}
