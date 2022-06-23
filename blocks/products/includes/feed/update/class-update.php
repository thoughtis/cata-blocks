<?php
/**
 * Update
 *
 * @package Cata\Blocks\Products\Feed
 * @since 0.6.0-beta1
 */

namespace Cata\Blocks\Products\Feed;

/**
 * Update
 */
class Update {

	const ACTION = 'cata_blocks_product_feed_update';

	/**
	 * Construct
	 */
	public function __construct() {
		add_action( self::ACTION, array( __CLASS__, 'do_scheduled_update' ), 10, 1 );
	}

	/**
	 * Do Scheduled Update
	 *
	 * @param string $url
	 */
	public static function do_scheduled_update( string $url ) : void {

		$fetch = new Fetch( $url );
		$cache = new Cache( $url );

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
