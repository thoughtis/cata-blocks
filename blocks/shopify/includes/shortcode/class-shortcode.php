<?php
/**
 * Shortcode
 * 
 * @package Cata\Blocks\Shopify
 * @since 0.1.0
 */

namespace Cata\Blocks\Shopify;

use Cata\Blocks\Shopify\Feed;
use Cata\Blocks\Shopify\Feed\Cache;
use Cata\Blocks\Shopify\Feed\Query;
use Cata\Blocks\Shopify\Options;
use Cata\Blocks\Shopify\Shortcode\Render;

/**
 * Shortcode
 */
class Shortcode {

	const TAG = 'cata-shopify-products';
	const DEFAULT_ATTRIBUTES = array(
		'count' => 6,
	);

	/**
	 * Construct
	 */
	public function __construct() {
		add_shortcode( self::TAG, array( __CLASS__, 'handle_shortcode' ) );
	}

	/**
	 * Handle Shortcode
	 * 
	 * @param string|array
	 * @return string
	 */
	public static function handle_shortcode( string|array $attributes ) : string {

		$attributes = shortcode_atts(
			self::DEFAULT_ATTRIBUTES,
			$attributes,
			self::TAG
		);

		$attributes = array_merge(
			$attributes,
			array(
				'store'        => get_option( Options\Settings\Store::SETTING_NAME, '' ),
				'access_token' => get_option( Options\Settings\Access_Token::SETTING_NAME, '' ),
			)
		);

		$query = new Query( ...$attributes );
		$cache = new Cache( $query );
		$feed  = new Feed( $cache, $query );

		return Render::render_products(
			$feed->get_posts_allow_side_effects()
		);
	}
}
