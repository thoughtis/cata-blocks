<?php
/**
 * Proxy
 *
 * @package Cata\Blocks
 * @since 0.8.1
 */

namespace Cata\Blocks;

use Cata\Blocks\Feed\Cache;
use Cata\Blocks\Feed\Fetch;
use WP_REST_Request;
use WP_REST_Response;
use WP_Error;

/**
 * Proxy
 */
class Proxy {
	/**
	 * Construct
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( __CLASS__, 'register_route_proxy' ) );
	}

	/**
	 * Register Route Proxy
	 */
	public static function register_route_proxy() {
		register_rest_route(
			'cata/v1',
			'/proxy/',
			array(
				'methods'             => 'GET',
				'callback'            => array( __CLASS__, 'handle_request' ),
				'permission_callback' => array( __CLASS__, 'permissions' ),
			)
		);
	}

	/**
	 * Permissions
	 *
	 * @return bool|WP_Error Error if user does not meet permissions requirement.
	 */
	public static function permissions() : bool|WP_Error {
		if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) {
			return true;
		}
		return new WP_Error(
			'rest_forbidden',
			esc_html__( 'Sorry, you don\'t have permission to do that.' ),
			array(
				'status' => 401
			)
		);
	}

	/**
	 * Handle Request
	 *
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error either an error or a json decoded api response body
	 */
	public static function handle_request( WP_REST_Request $request ) : WP_REST_Response|WP_Error {

		$url = URLs::get_standardized_rest_api_url(
			$request->get_param( 'url' )
		);

		$fetch = new Fetch( $url );
		$cache = new Cache( $url );

		if ( false === $fetch->validate() ) {
			return new WP_Error(
				'cata-blocks',
				'Proxy URL paths must start with /wp-json/',
				array(
					'status' => 400
				)
			);
		}

		$posts = $fetch->get_posts();

		if ( is_wp_error( $posts ) ) {
			return $posts;
		}

		$cache->set_data( wp_json_encode( $posts ) );

		return new WP_REST_Response( $posts, 200 );
	}
}
