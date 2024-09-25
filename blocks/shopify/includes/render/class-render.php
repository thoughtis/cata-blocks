<?php
/**
 * Render
 * 
 * @package Cata\Blocks\Shopify
 * @since 0.8.2
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
	 * @param array $attributes
	 * @param array $products
	 * 
	 * @return string 
	 */
	public static function render_products( array $attributes, array $products ): string {
		if ( empty( $products ) ) {
			return '';
		}

		$aspect_ratios = array_fill( 0, count($products), $attributes['aspect_ratio'] );

		$products_html = array_map(
			array( __CLASS__, 'render_product' ),
			$products,
			array_fill( 0, count($products), $attributes['display_price'] ),
			array_fill( 0, count($products), $attributes['aspect_ratio'] )
		);

		$wrapper_attributes = get_block_wrapper_attributes();

		$products_html_string = implode( "\n", $products_html );

		return sprintf(
			'<div %1$s><div class="wp-block-cata-shopify__layout">%2$s</div></div>',
			$wrapper_attributes,
			$products_html_string
		);
	}

	/**
	 * Render Product
	 * 
	 * @param stdClass $product
	 * @param bool     $display_price
	 * @param string   $aspect-ratio
	 * 
	 * @return string
	 */
	public static function render_product( stdClass $product, bool $display_price, string $aspect_ratio ): string {
		$title = esc_html( $product->title );
		$href  = esc_url( apply_filters( 'cata_product_block_link', $product->onlineStoreUrl ) );
		$price = true === $display_price ? self::wrap_price( self::render_price( $product->priceRange ) ) : '';
		$srcset = self::get_image_dimensions( $product->featuredImage, $aspect_ratio, [ 2560, 1920, 1280, 960, 640, 480, 320 ] );
		$image = self::render_image(
			$product,
			array(
				'sizes'  => '(max-width: 576px) 92.5vw, 576px',
				'aspect-ratio' => $aspect_ratio,
				'srcset' => $srcset,
			)
		);

		return "<article class=\"wp-block-cata-shopify-product\">
			<div class=\"wp-block-cata-shopify-product__layout tappable-card\">
				<div class=\"wp-block-cata-shopify-product__start\">
					{$image}
				</div>
				<div class=\"wp-block-cata-shopify-product__end\">
					<h3 class=\"wp-block-cata-shopify-product__title\">
						<a class=\"wp-block-cata-shopify-product__link tappable-card-anchor\" href=\"{$href}\">
							{$title}
						</a>
					</h3>
					{$price}
				</div>
			</div>
		</article>";
	}

	/**
	 * Render Image
	 * 
	 * @param stdClass $product
	 * @param array    $options
	 * 
	 * @return string
	 */
	public static function render_image( stdClass $product, array $options ): string {
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
					'width' => $options['srcset'][0][0],
					'height' => $options['srcset'][0][1],
					'crop' => 'center',
				),
				$url
			)
		);

		$width        = esc_attr( $options['srcset'][0][0] );
		$height       = esc_attr( $options['srcset'][0][1] );
		$sizes        = esc_attr( $options['sizes'] );
		$aspect_ratio = esc_attr( $options['aspect-ratio'] );

		$srcset = array_map(
			self::get_srcset_function( $url ),
			$options['srcset']
		);
		$srcset = esc_attr( implode( ', ', $srcset ) );

		return "<figure class=\"wp-block-cata-shopify-product__image\">
			<img loading=\"lazy\" src=\"{$src}\" alt=\"{$alt}\" width=\"{$width}\" height=\"{$height}\" sizes=\"{$sizes}\" srcset=\"{$srcset}\" style=\"aspect-ratio: {$aspect_ratio};\">
		</figure>";
	}

	/**
	 * Get Srcset Function
	 * 
	 * @param string $src
	 * 
	 * @return Callable
	 */
	public static function get_srcset_function( string $src ): Callable {
		return function( $set ) use ( $src ) {
			$resized_src = esc_url(
				add_query_arg(
					array(
						'width' => $set[0],
						'height' => $set[1],
						'crop' => 'center',
					),
					$src
				)
			);

			return "{$resized_src} {$set[0]}w";
		};
	}

	/**
	 * Get Image Dimensions
	 * 
	 * @param stdClass|null $image
	 * @param string $aspect_ratio 
	 * @param array $target_widths
	 * 
	 * @return array
	 */
	public static function get_image_dimensions( stdClass|null $image, string $aspect_ratio, array $target_widths ): array {		
		if ( null === $image ) {
			return [[0,0]];
		}

		$width  = $image->width;
		$height = $image->height;

		$valid_widths  = array_values(
			array_filter(
				$target_widths,
				function( $target ) use ( $width ) {
					return $target <= $width;
				}
			)
		);

		$dimensions = array_map(
			function( $target_width ) use ( $aspect_ratio ) {
				return array(
					$target_width,
					round( ( $target_width / self::aspect_ratio_to_float( $aspect_ratio ) ) )
				);
			},
			$valid_widths
		);

		return $dimensions;
	}

	/**
	 * Render Price
	 * 
	 * @param stdClass $price_range
	 * 
	 * @return string
	 */
	public static function render_price( stdClass $price_range ): string {
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
	 * Aspect Ratio To Float
	 * 
	 * @param string $aspect_ratio
	 * 
	 * @return float
	 */
	public static function aspect_ratio_to_float( string $aspect_ratio ): float {
		$ratio_values = explode( '/', $aspect_ratio );

		if ( 2 !== count( $ratio_values ) ) {
			return 1;
		}

		$numerator = (int)$ratio_values[0];
		$denominator = (int)$ratio_values[1];

		if ( 0 === $numerator || 0 === $denominator ) {
			return 1;
		}

		return $ratio_values[0] / $ratio_values[1];
	}

	/**
	 * Render Price Amount
	 * 
	 * @param string $amount
	 * 
	 * @return string
	 */
	public static function render_price_amount( string $amount ): string {
		return '<span><span>$</span>' . esc_html( number_format( (float) $amount, 2 ) ) . '</span>';
	}

	/**
	 * Wrap Price
	 * 
	 * @param string $price_html
	 * 
	 * @return string
	 */
	public static function wrap_price( string $price_html ): string {
		return "<div class=\"wp-block-cata-shopify-product__price\">{$price_html}</div>";
	}
}
