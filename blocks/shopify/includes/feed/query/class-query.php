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
	 * @param int    $count
	 * @param string $access_token
	 * @param string $store
	 */
	public function __construct(
		public int $count,
		private string $access_token,
		public string $store
	) {}

	/**
	 * Get URL
	 *
	 * @return string
	 */
	public function get_url() : string {
		return "https://{$this->store}.myshopify.com/api/2023-01/graphql.json";
	}

	/**
	 * Get Body
	 *
	 * @return string
	 */
	public function get_body() : string {
		$body = "{
			products(
				first:{$this->count},
				reverse: true,
				query:\"available_for_sale:true\") {
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
				'X-Shopify-Storefront-Access-Token' => $this->access_token,
				'Content-Type'                      => 'application/graphql',
				'Accept'                            => 'application/json',
			),
			'method'  => 'POST',
		);
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
