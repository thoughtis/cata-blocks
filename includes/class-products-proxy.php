<?php
/**
 * Shop Catalog Products External Request Proxy
 *
 * @package Cata\Blocks
 * @since 0.4.0
 */

namespace Cata\Blocks;

use WP_REST_Request;
use WP_REST_Response;
use WP_Error;

/**
 * External Products REST API Request Proxy
 */
class Products_Proxy {
	/**
	 * Construct
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( __CLASS__, 'register_route_proxy' ), 10, 0 );
	}

	/**
	 * Register Route Proxy
	 *
	 * @return void
	 */
	public static function register_route_proxy() {
		register_rest_route( 'cata/v1', '/proxy/', array(
			'methods' => 'GET',
			'callback' => array( __CLASS__, 'cata_blocks_proxy_request' ),
			'permission_callback' => array(  __CLASS__ ,  'cata_blocks_proxy_req_permissions_check' )
		) );
	}

	/**
	 * Cata Blocks Proxy Request User Permissions Check
	 *
	 * @return bool|WP_Error Error if user does not meet permissions requirement.
	 */
	public static function cata_blocks_proxy_req_permissions_check() {
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
	public static function cata_blocks_proxy_request( WP_REST_Request $request ) {
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
}
