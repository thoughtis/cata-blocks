<?php
/**
 * Update
 *
 * @package Cata\Blocks\Shopify\Feed
 * @since 0.8.2
 */

namespace Cata\Blocks\Shopify\Feed;

/**
 * Update
 */
class Update {

	const ACTION = 'cata_blocks_shopify_feed_update';

	/**
	 * Construct
	 */
	public function __construct() {
		add_action( self::ACTION, array( __CLASS__, 'do_scheduled_update' ), 10, 2 );
	}

	/**
	 * Do Scheduled Update
	 *
	 * @param array $options
	 */
	public static function do_scheduled_update( array $options ) : void {
		$query = new Query( $options );
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
