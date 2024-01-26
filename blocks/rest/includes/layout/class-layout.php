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
			) )
		);

		if ( isset( $options['class'] ) ) {
			$attributes['class'] = esc_attr( $options['class'] );
		}

		$attributes_string = implode( ' ', array_map(
			function( $key, $value ) {
				return "{$key}=\"{$value}\"";
			},
			array_keys($attributes), 
			array_values($attributes)
		) );

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
			return "${resized_src} {$set[0]}w";
		};
	}
}
