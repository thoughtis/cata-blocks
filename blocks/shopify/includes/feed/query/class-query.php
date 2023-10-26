<?php
/**
 * Cata Shopify Feed Query
 * 
 * @package Cata\Blocks\Shopify\Feed
 * @since 0.1.0
 */

namespace Cata\Blocks\Shopify\Feed;

/**
 * Query
 */
class Query {
	/**
	 * Construct
	 * 
	 * @param string $store
	 */
	public function __construct(
		public array $options
	) {}

	/**
	 * Get URL
	 *
	 * @return string
	 */
	public function get_url() : string {
		return "https://{$this->options['store']}.myshopify.com/api/2023-01/graphql.json";
	}

	/**
	 * Get Body
	 *
	 * @return string
	 */
	public function get_body() : string {
		$tag = $this->options['tag'];

		$query = 'available_for_sale:true';
		$query .= $tag ? ' AND tag:'.$tag : '';

		$body = "{
			products(
				first: {$this->options['count']},
				reverse: true,
				query:\"{$query}\") {
				nodes {
					title
					onlineStoreUrl
					featuredImage {
						url
						altText
					}
					priceRange {
						minVariantPrice {
							amount
							currencyCode
						}
						maxVariantPrice {
							amount
							currencyCode
						}
					}
				}
			}
		}";
		return self::minify( $body );
	}

	/**
	 * Get Args
	 *
	 * @return array
	 */
	public function get_args() : array {
		return array(
			'body'    => $this->get_body(),
			'headers' => array(
				'X-Shopify-Storefront-Access-Token' => $this->get_access_token(),
				'Content-Type'                      => 'application/graphql',
				'Accept'                            => 'application/json',
			),
			'method'  => 'POST',
		);
	}

	public function get_access_token() {
		switch ( $this->options['store'] ) {
			case 'creepy-catalog':
				$access_token = '4a9a65d08b2b1382d32d135173cbc868';
				break;
			case 'shop-catalog':
				$access_token = '';
				break;
			default:
				$access_token = '';
		}

		return $access_token;
	}

	/**
	 * Simple Minify
	 *
	 * @param string $text
	 * @return string Text without tabs, line-breaks or multiple adjacent spaces
	 */
	public static function minify( string $text ) : string {
		return preg_replace( '/[\\s]+/', ' ', $text );
	}
}
