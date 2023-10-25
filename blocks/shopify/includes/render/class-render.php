<?php
/**
 * Render
 * 
 * @package Cata\Blocks\Shopify
 * @since 0.1.0
 */

namespace Cata\Blocks\Shopify;

use stdClass;

/**
 * Render
 */
class Render {

	/**
	 * Render Products
	 * 
	 * @param array $products
	 * @return string 
	 */
	public static function render_products( array $products ) : string {

		$products_html = array_map(
			array( __CLASS__, 'render_product' ),
			$products
		);

		$products_html_string = implode( "\n", $products_html );

		return "<div class=\"wp-block-cata-shopify is-style-default alignwide\">
			<div class=\"wp-block-cata-shopify__layout\">
				{$products_html_string}
			</div>
		</div>";
	}

	/**
	 * Render Products
	 * 
	 * @param stdClass $product
	 */
	public static function render_product( stdClass $product ) : string {
		$title = esc_html( $product->title );
		$href  = esc_url( $product->onlineStoreUrl );
		$image = self::render_image(
			$product,
			array(
				'sizes'  => '(max-width: 576px) 92.5vw, 576px',
				'srcset' => array( 384, 768, 1152 ),
			)
		);
		$price = self::wrap_price( self::render_price( $product->priceRange ) );

		return "<article class=\"wp-block-cata-shopify-product\">
			<div class=\"wp-block-cata-shopify-product__layout tappable-card\">
				{$image}
				<h3 class=\"wp-block-cata-shopify-product__title\">
					<a class=\"wp-block-cata-shopify-product__link tappable-card-anchor\" href=\"{$href}\">
						{$title}
					</a>
				</h3>
				{$price}
			</div>
		</article>";
	}

	/**
	 * Render Image
	 * 
	 * @param stdClass $product
	 * @param array    $options
	 * @return string
	 */
	public static function render_image( stdClass $product, array $options ) : string {

		if ( ! isset( $product->featuredImage ) || ! is_object( $product->featuredImage ) ) {
			return '';
		}

		if ( ! isset( $product->featuredImage->url ) || ! is_string( $product->featuredImage->url ) || empty( $product->featuredImage->url ) ) {
			return '';
		}

		$url = $product->featuredImage->url;
		$alt = esc_attr( $product->featuredImage->altText || $product->title );
		$src = esc_url(
			add_query_arg(
				array(
					'width' => $options['srcset'][0],
				),
				$url
			)
		);

		$width  = esc_attr( $options['srcset'][0] );
		$height = esc_attr( $options['srcset'][0] );
		$sizes  = esc_attr( $options['sizes'] );
		$srcset = array_map(
			self::get_srcset_function( $url ),
			$options['srcset']
		);
		$srcset = esc_attr( implode( ', ', $srcset ) );

		return "<figure class=\"wp-block-cata-shopify-product__image\">
			<img loading=\"lazy\" src=\"{$src}\" alt=\"{$alt}\" width=\"{$width}\" height=\"{$height}\" sizes=\"{$sizes}\" srcset=\"{$srcset}\">
		</figure>";
	}

	/**
	 * Get Srcset Function
	 * 
	 * @param string $src
	 * @return Callable
	 */
	public static function get_srcset_function( string $src ) {
		return function( $set ) use ( $src ) {
			$resized_src = esc_url(
				add_query_arg(
					array(
						'width' => $set,
					),
					$src
				)
			);
			return "{$resized_src} {$set}w";
		};
	}


	/**
	 * Render Price
	 * 
	 * @param stdClass $product
	 * @return string
	 */
	public static function render_price( stdClass $price_range ) : string {

		$min = $price_range->minVariantPrice->amount;
		$max = $price_range->maxVariantPrice->amount;

		$min_price = self::render_price_amount( $min );

		if ( $min === $max ) {
			return $min_price;
		}

		$max_price = self::render_price_amount( $max );

		return "{$min_price} - {$max_price}";

	}

	/**
	 * Render Price Amount
	 * 
	 * @param string $amount
	 * @return string
	 */
	public static function render_price_amount( string $amount ) {
		return '<span><span>$</span>' . esc_html( number_format( (float) $amount, 2 ) ) . '</span>';
	}

	/**
	 * Wrap Price
	 * 
	 * @param string $price_html
	 * @return string
	 */
	public static function wrap_price( string $price_html ) : string {
		return "<div class=\"wp-block-cata-shopify-product__price\">{$price_html}</div>";
	}
}
