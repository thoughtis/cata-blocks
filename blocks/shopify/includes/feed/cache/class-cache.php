<?php
/**
 * Cata Shopify Feed Cache
 * 
 * @package Cata\Blocks\Shopify\Feed
 * @since 0.8.2
 */

namespace Cata\Blocks\Shopify\Feed;

use Cata\Blocks\Shopify\Feed\Query;

/**
 * Cache
 */
class Cache {

	/**
	 * Data Key Base
	 * 
	 * @var string $data_key_base
	 */
	private static $data_key_base = 'cata-shopify-feed-data-';

	/**
	 * Time Key Base
	 * 
	 * @var string $time_key_base
	 */
	private static $time_key_base = 'cata-shopify-feed-time-';

	/**
	 * Autoload
	 * 
	 * @var bool $autload Whether options should be autolaoded.
	 */
	private static $autoload = false;

	/**
	 * Hash
	 *
	 * @var string $hash
	 */
	public string $hash;

	/**
	 * Data Key
	 *
	 * @var string $data_key 
	 */
	public string $data_key;

	/**
	 * Time Key
	 * 
	 * @var string $time_key
	 */
	public string $time_key;

	/**
	 * Duration
	 * 
	 * @var int $duration
	 */
	public int $duration;

	/**
	 * Construct
	 * 
	 * @param Query $query
	 */
	public function __construct( Query $query ) {
		$this->hash = wp_hash(
			wp_json_encode(
				array(
					$query->get_url(),
					$query->get_args(),
				)
			)
		);

		$this->data_key = self::$data_key_base . $this->hash;
		$this->time_key = self::$time_key_base . $this->hash;
		$this->duration = HOUR_IN_SECONDS;
	}

	/**
	 * Get Data
	 * 
	 * @return string Default to empty string.
	 */
	public function get_data() : string {
		return get_option( $this->data_key, '' );
	}

	/**
	 * Set Data
	 * Side Effect! This also sets time.
	 * 
	 * @param string $data
	 */
	public function set_data( string $data ) : void {
		update_option( $this->data_key, $data, self::$autoload );
		$this->set_time();
	}

	/**
	 * Get Time
	 * 
	 * @return int $time Default to zero.
	 */
	public function get_time() : int {
		return absint( get_option( $this->time_key, 0 ) );
	}

	/**
	 * Set Time
	 * 
	 * @param int|null $time
	 */
	public function set_time( ?int $time = null ) : void {
		update_option( $this->time_key, ( null === $time ? time() : $time ), self::$autoload );
	}

	/**
	 * Set Fail
	 *
	 * @param null|string $data
	 * @return void
	 */
	public function set_fail( ?string $data = '[]' ) : void {
		$this->set_data( $data );
	}
}
