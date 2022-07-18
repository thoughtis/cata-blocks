<?php
/**
 * Cache
 * 
 * @package Cata\Blocks\Products\Feed
 * @since 0.6.0-beta1
 */

namespace Cata\Blocks\Products\Feed;

/**
 * Cache
 */
class Cache {

	static $data_key_base = 'cata-products-feed-data-';
	static $time_key_base = 'cata-products-feed-time-';
	static $autoload = false;

	/**
	 * URL
	 *
	 * @var string $url
	 */
	public string $url;

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
	 * @param string $url
	 */
	public function __construct( string $url ) {
		$this->url = $url;
		$this->hash = md5( $url );
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
