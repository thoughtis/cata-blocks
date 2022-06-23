<?php
/**
 * Fetch
 * 
 * @package Cata\Blocks\Products\Feed
 * @since 0.6.0-beta1
 */

namespace Cata\Blocks\Products\Feed;

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
	 * @param string $url
	 */
	public function __construct( string $url ) {
		$this->url = $url;
	}

	/**
	 * Validate
	 *
	 * @return bool URL is a URL and it's path starts with /wp-json/
	 */
	public function validate() : bool {

		if ( false === wp_http_validate_url( $this->url ) ) {
			return false;
		}

		$path = wp_parse_url( $this->url, PHP_URL_PATH );

		if ( 'string' !== gettype( $path ) ) {
			return false;
		}

		return '/wp-json/' === substr( $path, 0, 9 );
	}

	/**
	 * Get Posts
	 *
	 * @return array|WP_Error
	 */
	public function get_posts() {

		if ( function_exists( 'vip_safe_wp_remote_request' ) ) {
			$response = vip_safe_wp_remote_request( $this->url, '', 3, 3 );
		} else {
			$response = wp_remote_get(
				$this->url,
				array(
					'timeout' => 3
				)
			);
		}

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( ! is_array( $response ) ) {
			return new WP_Error(
				'cata-blocks',
				'Unable to fetch posts from remote.',
				array(
					'url' => $this->url,
				)
			);
		}

		$status = wp_remote_retrieve_response_code( $response );

		if ( '2' !== substr( (string) $status, 0, 1 ) ) {
			return new WP_Error(
				'cata-blocks',
				'Unable to fetch posts from remote.',
				array(
					'status' => $status,
					'url'    => $this->url,
				)
			);
		}

		$body = wp_remote_retrieve_body( $response );

		try {
			$decoded = json_decode( $body );
			if ( ! is_array( $decoded ) ) {
				return new WP_Error(
					'cata-blocks',
					'Unusable response from remove',
					array(
						'url' => $this->url,
					)
				);
			}
		} catch ( Exception $e ) {
			return new WP_Error(
				'cata-blocks',
				$e->getMessage(),
				array(
					'url' => $this->url,
				)
			);
		}

		return $decoded;
	}
}
