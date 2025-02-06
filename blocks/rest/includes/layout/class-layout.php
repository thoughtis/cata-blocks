<?php
/**
 * Layout
 * 
 * @package Cata\Blocks\Rest
 * @since
 */

namespace Cata\Blocks\Rest;

use stdClass;

/**
 * Layout
 */
abstract class Layout {

	/**
	 * Get Image
	 * 
	 * @param stdClass $post
	 * @return null|stdClass
	 */
	public static function get_image( stdClass $post ) : ?stdClass {
		if (
			! isset( $post->_embedded ) ||
			! isset( $post->_embedded->{'wp:featuredmedia'} ) ||
			! is_array( $post->_embedded->{'wp:featuredmedia'} ) ||
			empty( $post->_embedded->{'wp:featuredmedia'} )
		) {
			return null;
		}

		$images = array_values(
			array_filter(
				$post->_embedded->{'wp:featuredmedia'},
				function ( $item ) {
					return isset( $item->media_type ) && 'image' === $item->media_type;
				}
			)
		);

		if ( empty( $images ) ) {
			return null;
		}

		return current( $images );
	}

	/**
	 * Get Image Dimensions
	 * 
	 * @param stdClass|null $image
	 * @param float|null $aspect_ratio 
	 */
	public static function get_image_dimensions( stdClass|null $image, float|null $aspect_ratio, array $target_widths ) : array {
		if ( null === $image ) {
			return [[0,0]];
		}

		$width  = $image->media_details->width;
		$height = $image->media_details->height;

		$aspect_ratio  = null === $aspect_ratio ? ($width / $height) : $aspect_ratio;
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
					round( ( $target_width / $aspect_ratio ) )
				);
			},
			$valid_widths
		);

		return $dimensions;
	}

	/**
	 * Render Image
	 * 
	 * @param stdClass|null $image
	 * @param array $options
	 * @return string
	 */
	public static function render_image( stdClass|null $image, array $options ) : string {
		if ( null === $image ) {
			return '';
		}

		if ( ! isset( $image->source_url ) ) {
			return '';
		}

		$attributes = array(
			'loading' => 'lazy',
			'alt' => esc_attr( isset( $image->alt_text ) ? $image->alt_text : '' ),
			'src' => esc_url(
				add_query_arg(
					array(
						'resize' => implode( ',', $options['srcset'][0] ),
					),
					$image->source_url
				)
			),
			'width'  => esc_attr( $options['srcset'][0][0] ),
			'height' => esc_attr( $options['srcset'][0][1] ),
			'sizes'  => esc_attr( $options['sizes'] ),
			'srcset' => implode( ', ', array_map(
				self::get_srcset_function( $image->source_url ),
				$options['srcset']
			) ),
		);

		$aspect_ratio = $options['aspectRatio'] ?? '';
		if ( '' !== $aspect_ratio ) {
			$attributes['style'] = esc_attr( "aspect-ratio: $aspect_ratio; object-fit: cover;" );
		}

		if ( isset( $options['class'] ) ) {
			$attributes['class'] = esc_attr( $options['class'] );
		}

		$attributes_string = self::render_attribute_string( $attributes );

		return "<img {$attributes_string}>";
	}

	/**
	 * Get Opening Tag
	 * Avoid stomping on any HTML attributes set in the editor and saved to the DB.
	 *
	 * @regexplainer
	 *   <div
	 *   1 or more of anything other than >
	 *   >
	 * @param string $content
	 * @return string Opening tag from the content as saved in the database.
	 */
	public static function get_opening_tag( string $content ) : string {

		$has_matches = preg_match('/<div[^>]+>/', $content, $matches );

		if ( 1 !== $has_matches ) {
			return '<div class="wp-block-cata-rest">';
		}

		return current( $matches );
	}

	/**
	 * Get Srcset Function
	 * 
	 * @param string $src
	 * @return callable
	 */
	public static function get_srcset_function( string $src ) {
		return function( $set ) use ( $src ) {
			$resized_src = esc_url(
				add_query_arg(
					array(
						'resize' => implode( ',', $set ),
					),
					$src
				)
			);
			return "{$resized_src} {$set[0]}w";
		};
	}

	/**
	 * Render Link
	 * 
	 * @param string $href
	 * @param string $content
	 * @param null|array $other_attributes
	 */
	public static function render_link( string $href, string $content, ?array $other_attributes = array() ): string {

		$attributes = array(
			...$other_attributes,
			'href' => $href,
		);

		if ( ! str_starts_with( $href, home_url() ) ) {
			$attributes['target'] = '_blank';
		}

		$attributes_string = self::render_attribute_string( $attributes );

		return "<a {$attributes_string}>{$content}</a>";
	}

	/**
	 * Render Attribute String
	 *
	 * @param array $attributes
	 */
	public static function render_attribute_string( array $attributes ): string {
		return implode(
			' ',
			array_map(
				fn( $key, $value ) => "{$key}=\"{$value}\"",
				array_keys($attributes),
				array_values($attributes)
			)
		);
	}

	/**
	 * Get Date String
	 * 
	 * @param string $date
	 * @param null|string $format
	 * @return string
	 */
	public static function get_date_string( string $date, ?string $format = 'l, F j, Y' ): string {
		return date_format( date_create( $date ), $format );
	}

	/**
	 * Get Zodiac Links
	 * 
	 * @param stdClass $post
	 * @return string
	 */
	public static function get_zodiac_links( stdClass $post ): string {
		$headings = self::get_zodiac_headings( $post->content->rendered );

		if ( empty( $headings ) ) {
			return '';
		}

		$zodiac_links = array_map(
			fn( $anchor, $text ) => self::get_zodiac_link( $anchor, $text, $post->link ),
			array_keys( $headings ),
			array_values( $headings ),
		);
		
		return implode( '', $zodiac_links );
	}

	/**
	 * Get Zodiac Link
	 * 
	 * @param string $anchor
	 * @param string $text
	 * @param string $href
	 * @return string
	 */
	public static function get_zodiac_link( string $anchor, string $text, string $href ): string {
		$href     = esc_url( $href );
		$anchor   = esc_attr( $anchor );
		$text     = esc_html( wp_strip_all_tags( $text ) );
		$svg_path = __DIR__ . "/daily-horoscope/svg/$anchor.svg";
		$symbol   = file_exists( $svg_path ) ? file_get_contents( $svg_path ) : '';

		if ( empty( $text ) || empty( $anchor ) || empty( $symbol ) ) {
			return '';
		}

		$link = self::render_link( "{$href}#{$anchor}", "{$symbol}{$text}" );

		return "<li>{$link}</li>";
	}

	/**
	 * Get Zodiac Headings
	 * 
	 * @param string $post_content
	 * @return array
	 */
	public static function get_zodiac_headings( string $post_content ): array {
		$regex = '/<h2[^>]*id="([^"]*)"[^>]*>(.*)<\/h2>/im';

		if ( preg_match_all( $regex, $post_content, $matches ) ) {
			return array_combine( $matches[1], $matches[2] );
		}

		return array();
	}
}
