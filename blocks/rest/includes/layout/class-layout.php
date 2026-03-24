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
	public static function render_zodiac_links( stdClass $post ): string {
		
		if ( ! property_exists( $post, 'horoscopes' ) ) {
			return '';
		}

		if ( null === $post->horoscopes ) {
			return '';
		}

		$signs = self::get_zodiac_signs( $post->horoscopes );

		if ( empty( $signs ) ) {
			return '';
		}

		$zodiac_links = array_map(
			fn( $anchor, $text ) => self::render_zodiac_link( $anchor, $text, $post->link ),
			array_map( 'strtolower', $signs ),
			$signs,
		);
		
		return implode( '', $zodiac_links );
	}

	/**
	 * Render Zodiac Link
	 * 
	 * @param string $anchor
	 * @param string $text
	 * @param string $href
	 * @return string
	 */
	public static function render_zodiac_link( string $anchor, string $text, string $href ): string {
		$href     = esc_url( $href );
		$anchor   = esc_attr( $anchor );
		$text     = esc_html( wp_strip_all_tags( $text ) );
		$svg_path = __DIR__ . "/daily-horoscope/svg/{$anchor}.svg";
		$symbol   = file_exists( $svg_path ) ? file_get_contents( $svg_path ) : '';

		if ( empty( $text ) || empty( $anchor ) || empty( $symbol ) ) {
			return '';
		}

		$link = self::render_link( "{$href}#{$anchor}", "{$symbol}{$text}" );

		return "<li>{$link}</li>";
	}

	/**
	 * Render Zodiac Tab Button
	 * 
	 * @param string $sign_key
	 * @param string $text_content
	 * @param string $unique_id
	 * @param string $selected
	 * @return string
	 */
	public static function render_zodiac_tab_button( string $sign_key, string $text_content, string $unique_id, string $selected ): string {
		$svg_path = __DIR__ . "/daily-horoscope/svg/{$sign_key}.svg";
		$symbol   = file_exists( $svg_path ) ? file_get_contents( $svg_path ) : '';
		if ( empty( $symbol ) ) {
			return '';
		}
		return "<button type=\"button\" aria-controls=\"{$unique_id}-panel-{$sign_key}\" id=\"{$unique_id}-tab-{$sign_key}\" aria-selected=\"{$selected}\" role=\"tab\">{$symbol}{$text_content}</button>";
	}

	/**
	 * Get Zodiac Signs
	 * 
	 * @param array $horoscopes
	 * @return array
	 */
	public static function get_zodiac_signs( array $horoscopes ): array {
		return array_column( $horoscopes, 'sign' );
	}

	/**
	 * Render Zodiac Tab
	 *
	 * @param string $sign
	 * @param int $index
	 * @param string $unique_id
	 * @return string
	 */
	public static function render_zodiac_tab( string $sign, int $index, string $unique_id ): string {
		$sign_key = strtolower( $sign );
		$selected = $index === 0 ? "true" : "false";
		$button   = self::render_zodiac_tab_button( $sign_key, $sign, $unique_id, $selected );

		return "<li>{$button}</li>";
	}

	/**
	 * Render Zodiac Panel
	 *
	 * @param stdClass $horoscope
	 * @param int $index
	 * @param stdClass $post
	 * @param int $excerpt_length
	 * @param string $unique_id
	 * @param bool $horoscope_excerpt
	 * @return string
	 */
	public static function render_zodiac_panel( stdClass $horoscope, int $index, stdClass $post, int $excerpt_length, string $unique_id, bool $horoscope_excerpt ): string {
		$sign_key       = strtolower( $horoscope->sign );
		$horoscope_text = $horoscope_excerpt ? wp_trim_words( $horoscope->horoscope, $excerpt_length ) : $horoscope->horoscope;
		$url            = "{$post->link}#{$sign_key}";
		$link           = $horoscope_excerpt ? "<p><a href=\"{$url}\">Read Full {$horoscope->sign} Horoscope</a></p>" : "";
		$hidden         = $index === 0 ? "false" : "true";

		return "<div aria-labelledby=\"{$unique_id}-tab-{$sign_key}\" aria-hidden=\"{$hidden}\" id=\"{$unique_id}-panel-{$sign_key}\" role=\"tabpanel\"><p>{$horoscope_text}</p>{$link}</div>";
	}

	/**
	 * Render Horoscope Tabs
	 *
	 * @param stdClass $post
	 * @param bool $horoscope_excerpt
	 * @param int $excerpt_length
	 * @return string
	 */
	public static function render_horoscope_tabs( stdClass $post, bool $horoscope_excerpt, int $excerpt_length ): string {

		if ( ! property_exists( $post, 'horoscopes' ) ) {
			return '';
		}

		if ( null === $post->horoscopes ) {
			return '';
		}

		$signs = self::get_zodiac_signs( $post->horoscopes );

		if ( empty( $signs ) ) {
			return '';
		}

		$unique_id = wp_unique_id('horoscopes-');

		$tabs_array = array_map(
			fn( $sign, $index ) => self::render_zodiac_tab( $sign, $index, $unique_id ),
			$signs,
			array_keys( $signs )
		);

		$tabs = join( "\n", $tabs_array );

		$panels_array = array_map(
			fn( $horoscope, $index ) => self::render_zodiac_panel( $horoscope, $index, $post, $excerpt_length, $unique_id, $horoscope_excerpt ),
			$post->horoscopes,
			array_keys( $post->horoscopes )
		);

		$panels = join( "\n", $panels_array );

		return "<ul class=\"preview__zodiac-tabs\" role=\"tablist\">{$tabs}</ul><div>{$panels}</div>";
	}

	/**
	 * Get Category
	 * 
	 * @param stdClass $post
	 * @return null|stdClass
	 */
	public static function get_category( stdClass $post ) : ?stdClass {
		if ( ! isset( $post->_embedded ) || ! isset( $post->_embedded->{'wp:term'} ) ) {
			return null;
		}

		if ( ! is_array( $post->_embedded->{'wp:term'} ) || empty( $post->_embedded->{'wp:term'} ) ) {
			return null;
		}

		$taxonomies = array_values(
			array_filter(
				$post->_embedded->{'wp:term'},
				self::get_taxonomy_filter_function( 'category' )
			)
		);

		if ( empty( $taxonomies ) ) {
			return null;
		}

		$block_list = [
			'uncategorized',
			'collective-world',
			'project-oasis'
		];

		$categories = array_values(
			array_filter(
				current( $taxonomies ),
				function($cat) use ( $block_list ) {
					return ! in_array( $cat->slug, $block_list, true );
				}
			)
		);

		if ( empty( $categories ) ) {
			return null;
		}

		return current( $categories );
	}


	/**
	 * Get Taxonomy Filter Function
	 * 
	 * @param string $tax_slug
	 * @return callable
	 */
	public static function get_taxonomy_filter_function( string $tax_slug ) : callable {
		return function( $terms ) use ( $tax_slug ) : bool {
			return is_array( $terms ) && ! empty( $terms ) && isset( $terms[0]->taxonomy ) && $tax_slug === $terms[0]->taxonomy;
		};
	}

	/**
	 * Render Kicker
	 * 
	 * @param stdClass|null $category
	 * @return string
	 */
	public static function render_kicker( ?stdClass $category = null ) : string {
		if ( null === $category ) {
			return '';
		}
		$href = esc_url( $category->link );
		$name = esc_html( $category->name );
		$link = self::render_link( $href, "<strong>{$name}</strong>", ['rel' => 'category'] );
		return "<p class=\"preview__kicker\">{$link}</p>";
	}

	/**
	 * Get Image Sizes Attribute
	 * 
	 * @param string $layout
	 * @return string
	 */
	public static function get_image_sizes_attribute( string $layout ): string {
		return [
			'compact'         => '(max-width: 20em) 46.25vw, 13em',
			'compact-grid'    => '(max-width: 20em) 46.25vw, 13em',
			'daily-horoscope' => '',
			'network'         => '(max-width: 40em) 92.5vw, 36em',
			'stack'           => '',
			'stack-grid'      => '',
			'trending'        => ''
		][$layout] ?? '';
	}
}
