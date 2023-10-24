<?php
/**
 * Update
 *
 * @package Cata\Blocks\Shopify\Feed
 * @since 0.1.0
 */

namespace Cata\Blocks\Shopify\Feed;

use Cata\Blocks\Shopify\Options\Settings\Access_Token;
use Cata\Blocks\Shopify\Options\Settings\Store;

/**
 * Update
 */
class Update {

	const ACTION = 'cata_shopify_feed_update';

	/**
	 * Construct
	 */
	public function __construct() {
		add_action( self::ACTION, array( __CLASS__, 'do_scheduled_update' ), 10, 2 );
	}

	/**
	 * Do Scheduled Update
	 *
	 * @param int $count
	 */
	public static function do_scheduled_update( int $count ) : void {

		$access_token = get_option( Access_Token::SETTING_NAME, '' );
		$store        = get_option( Store::SETTING_NAME, '' );

		if ( '' === $access_token || '' === $store ) {
			return;
		}

		$query = new Query(
			count: $count,
			store: $store,
			access_token: $access_token
		);

		$cache = new Cache( $query );
		$fetch = new Fetch( $query );

		if ( ! $fetch->validate() ) {
			$cache->set_fail();
			return;
		}

		$posts = $fetch->get_posts();

		if ( is_wp_error( $posts ) || empty( $posts ) ) {
			$cache->set_fail();
			return;
		}

		$cache->set_data( wp_json_encode( $posts ) );
	}
}
