<?php
/**
 * URLs
 *
 * @package Cata\Blocks
 * @since 0.10.8
 */

namespace Cata\Blocks;

/**
 * URLs
 */
class URLs {
	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'cata_blocks_get_standardized_rest_api_url', [ __CLASS__, 'conditionally_add_embed_to_url' ] );
		add_filter( 'cata_blocks_get_standardized_rest_api_url', 'html_entity_decode' );
		add_filter( 'cata_blocks_get_standardized_rest_api_url', 'urldecode' );
	}

	/**
	 * Conditionally Add Embed to URL
	 * 
	 * We want to add _embed to REST API request in a consistent manner,
	 * unless its changed on purpose in the editor.
	 *
	 * @param string $url A REST API URL
	 * @return string URL where _embed may have been added to the query string.
	 */
	public static function conditionally_add_embed_to_url( string $url ): string {

		$parsed_url = wp_parse_url( $url );

		// return original url, its weird.
		if ( ! is_array( $parsed_url ) ) {
			return $url;
		}

		$default = add_query_arg(
			[
				'_embed' => 'wp:featuredmedia,wp:term'
			],
			$url
		);

		// return original url with _embed added to query.
		if ( '' === ( $parsed_url['query'] ?? '' ) ) {
			return $default;
		}

		$qs = array();

		// parse query into $qs variable.
		wp_parse_str( $parsed_url['query'], $qs );

		// if $qs is still empty we're done.
		if ( empty( $qs ) ) {
			return $default;
		}

		// if _embed is already present we're done.
		if ( array_key_exists( '_embed', $qs ) ) {
			return $url;
		}

		// return original url with _embed added to query.
		return $default;
	}

	/**
	 * Get Standardized REST API URL
	 * 
	 * @param string $url Any REST API URL
	 * @return string $url Decoded URL with _embed parameter 
	 */
	public static function get_standardized_rest_api_url( string $url ): string {
		return apply_filters( 'cata_blocks_get_standardized_rest_api_url', $url );
	}
}
