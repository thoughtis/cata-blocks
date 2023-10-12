<?php
/**
 * Feed
 * 
 * @package Cata\Blocks
 * @since 0.8.1
 */

namespace Cata\Blocks;

/**
 * Feed
 */
class Feed {

	public string $url;
	public Feed\Cache $cache;

	/**
	 * Construct
	 */
	public function __construct( Feed\Cache $cache, string $url ) {
		$this->cache = $cache;
		$this->url   = $url; 
	}

	/**
	 * Get Posts
	 *
	 * @return array
	 */
	public function get_posts() : array {

		$posts = $this->cache->get_data();

		if ( '' === $posts ) {
			return array();
		}

		return json_decode( $posts );
	}

	/**
	 * Get Posts, Allow Side Effects
	 *
	 * @return array
	 */
	public function get_posts_allow_side_effects() : array {

		$this->maybe_set_update_schedule();

		return $this->get_posts();
	}

	/**
	 * Maybe Set Update Schedule
	 */
	public function maybe_set_update_schedule() : void {
		if ( $this->should_schedule() ) {
			$this->set_update_schedule();
		}
	}

	/**
	 * Should Schedule
	 *
	 * @return bool Schedule an update if half of the cache duration has elapsed since the cache was updated.
	 */
	public function should_schedule() : bool {
		return ( $this->cache->duration / 2 ) <= ( time() - $this->cache->get_time() );
	}

	/**
	 * Set Update Schedule
	 */
	public function set_update_schedule() : void {
		$options = array(
			'url' => $this->url
		);
		if ( false !== wp_next_scheduled( Feed\Update::ACTION, $options ) ) {
			return;
		}
		wp_schedule_single_event(
			time(),
			Feed\Update::ACTION,
			$options
		);
	}

}
