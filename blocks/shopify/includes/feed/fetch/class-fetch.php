<?php
/**
 * Fetch
 * 
 * @package Cata\Blocks\Shopify\Feed
 * @since 0.1.0
 */

namespace Cata\Blocks\Shopify\Feed;

use Exception;
use WP_Error;

/**
 * Fetch
 */
class Fetch {

	/**
	 * URL
	 *
	 * @var string $url
	 */
	public string $url;

	/**
	 * Construct
	 *
	 * @param Query $query
	 */
	public function __construct(
		private Query $query
	) {}

	/**
	 * Validate
	 *
	 * @return bool URL is a URL and it's path starts with /wp-json/
	 */
	public function validate() : bool {
		return wp_http_validate_url( $this->query->get_url() );
	}

	/**
	 * Get Posts
	 *
	 * @return array|WP_Error
	 */
	public function get_posts() {

		if ( function_exists( 'vip_safe_wp_remote_request' ) ) {
			$response = vip_safe_wp_remote_request(
				url: $this->query->get_url(),
				timeout: 3,
				args: $this->query->get_args()
			);
		} else {
			$response = wp_remote_post(
				$this->query->get_url(),
				$this->query->get_args()
			);
		}

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( ! is_array( $response ) ) {
			return new WP_Error(
				'cata-shopify',
				'Unable to fetch posts from remote.',
				array(
					'url'  => $this->query->get_url(),
					'args' => $this->query->get_args(),
				)
			);
		}

		$status = wp_remote_retrieve_response_code( $response );

		if ( '2' !== substr( (string) $status, 0, 1 ) ) {
			return new WP_Error(
				'cata-shopify',
				'Unable to fetch posts from remote.',
				array(
					'status' => $status,
					'url'    => $this->query->get_url(),
					'args'   => $this->query->get_args(),
				)
			);
		}

		$body = wp_remote_retrieve_body( $response );

		try {
			$decoded = json_decode( $body );

			if ( ! is_object( $decoded ) || ! isset( $decoded->data ) ) {
				return new WP_Error(
					'cata-shopify',
					'Unusable response from remote',
					array(
						'url' => $this->query->get_url(),
					)
				);
			}
		} catch ( Exception $e ) {
			return new WP_Error(
				'cata-shopify',
				$e->getMessage(),
				array(
					'url' => $this->query->get_url(),
				)
			);
		}

		return $decoded->data->products->nodes;
	}
}
