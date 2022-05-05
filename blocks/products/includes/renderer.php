<?php 
/**
 * @package Cata\Blocks
 * @since   0.4.0
 */

namespace Cata\Blocks\Products;

use stdClass;

/**
 * Products Block Render Callback
 * 
 * @param array $block_attributes
 * @return string
 */
function products_block_render_callback( $block_attributes) {
	$url_hash = "";
	$decoded_results = [];
	$transient = "";

	if ( empty( $block_attributes['query_url'] )  ) {
		return;
	} else {
		$url_hash = wp_hash( $block_attributes['query_url'] );
	}

	if ( empty( $url_hash ) ) {
		return;
	} else {
		$transient = get_transient( "cata-blocks-shop-proxy-req-result-" . $url_hash );
	}

	if ( empty( $transient ) ) {
		return;
	} else {
		$decoded_results = json_decode( $transient );
	}

	if ( empty( $decoded_results ) ) {
		return;
	}

	// fallback to displaying byline in case value not set which may happen where a block was previously placed and saved before this update?
	if ( ! isset( $block_attributes['display_byline'] ) ) {
		$block_attributes['display_byline'] = true;
	}

	$products = array_map(
		__NAMESPACE__ . '\\render_product',
		$decoded_results,
		array_fill( 0, count($decoded_results), $block_attributes['display_byline'] )
	);

	$products_string = implode( "\n", $products );

	$classnames = get_classnames('wp-block-cata-products', $block_attributes);

	return "<div class=\"${classnames}\">
		<div class=\"wp-block-cata-products__layout\">${products_string}</div>
	</div>";
}

/**
 * Render Product
 * 
 * @param stdClass $product
 * @param bool $display_byline
 * @return string
 */
function render_product( stdClass $product , bool $display_byline) : string {
	$link   = esc_url( apply_filters( 'cata_product_block_link', $product->permalink ) );
	$title  = esc_html( $product->name );
	$price  = render_price( $product );
	$byline = true === $display_byline ? render_byline( $product ) : '';
	$image  = render_image(
		current( $product->images ),
		array(
			'sizes'  => '(max-width: 576px) 92.5vw, 576px',
			'srcset' => array(
				array( 384, 384 ),
				array( 768, 768 ),
				array( 1152, 1152 ),
			),
		)
	);
	return "<article class=\"wp-block-cata-product\">
		<div class=\"wp-block-cata-product__layout tappable-card\">
			<figure class=\"wp-block-cata-product__image\">
				${image}
			</figure>
			<h3 class=\"wp-block-cata-product__title\">
				<a class=\"wp-block-cata-product__link tappable-card-anchor\" href=\"${link}\">${title}</a>
			</h3>
			${byline}
			<div class=\"wp-block-cata-product__price\">${price}</div>
		</div>
	</article>";
}

/**
 * Render Byline
 * 
 * @param stdClass $product
 * @param bool $display_byline
 * @return string
 */
function render_byline( stdClass $product ) : string {
	$byline_start = '<div class=\"wp-block-cata-product__byline\">';
	$byline_end   = '</div>';

	if ( is_array( $product->cap_guest_authors ) && ! empty( $product->cap_guest_authors ) ) {
		return $byline_start . 'by ' . esc_html( implode( ', ', array_column( $product->cap_guest_authors, 'display_name' ) ) ) . $byline_end;
	}
	if ( is_array( $product->brands ) && ! empty( $product->brands ) ) {
		return $byline_start .  'from ' . esc_html( implode( ', ', array_column( $product->brands, 'name' ) ) ) . $byline_end;
	}
	return '';
}

/**
 * Get Classnames
 * 
 * @param string $block_class
 * @param array  $block_attributes
 * @return string
 */
function get_classnames( string $block_class, array $block_attributes ) : string {
	$classes = array( $block_class );

	if ( isset( $block_attributes['align'] ) ) {
		$classes[] = 'align' . sanitize_html_class( $block_attributes['align'], '' );
	}

	return implode( ' ', $classes );
}

/**
 * Render Image
 * 
 * @param stdClass $image
 * @param array    $options
 * @return string
 */
function render_image( stdClass $image, array $options ) : string {
	$alt = esc_attr( $image->alt );
	$src = esc_url(
		add_query_arg(
			array(
				'resize' => implode( ',', $options['srcset'][0] ),
			),
			$image->src
		)
	);

	$width  = esc_attr( $options['srcset'][0][0] );
	$height = esc_attr( $options['srcset'][0][1] );
	$sizes  = esc_attr( $options['sizes'] );
	$srcset = array_map(
		get_srcset_function( $image->src ),
		$options['srcset']
	);
	$srcset = esc_attr( implode( ', ', $srcset ) );

	return "<img loading=\"lazy\" src=\"${src}\" alt=\"${alt}\" width=\"${width}\" height=\"${height}\" sizes=\"${sizes}\" srcset=\"${srcset}\">";
}

/**
 * Get Srcset Function
 * 
 * @param string $src
 * @return Callable
 */
function get_srcset_function( string $src ) {
	return function( $set ) use ( $src ) {
		$resized_src = esc_url(
			add_query_arg(
				array(
					'resize' => implode( ',', $set ),
				),
				$src
			)
		);
		return "${resized_src} {$set[0]}w";
	};
}

	/**
 * Render Price
 * 
 * @param stdClass $product
 * @return string
 */
function render_price( stdClass $product ) : string {

	$regular_price = render_price_amount( $product->regular_price );

	if ( true === $product->on_sale ) {
		$sale_price = render_price_amount( $product->sale_price );
		return "<del>${regular_price}</del> <ins>${sale_price}</ins>";
	}

	if ( $product->price !== $product->regular_price ) {
		$low_price = render_price_amount( $product->price );
		return "${low_price} - ${regular_price}";
	}

	return $regular_price;
}

/**
 * Render Price Amount
 * 
 * @param string $price
 * @return string
 */
function render_price_amount( string $price ) {
	return '<span><span>$</span>' . esc_html( $price ) . '</span>';
}
