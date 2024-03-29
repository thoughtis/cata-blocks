<?php
/**
 * Daily Horoscope
 * 
 * @package Cata\Blocks\Rest\Layout
 * @since 0.8.8
 */

namespace Cata\Blocks\Rest\Layout;

use Cata\Blocks\Rest\Layout;
use stdClass;

/**
 * Daily Horoscope
 */
class Daily_Horoscope extends Layout {
	/**
	 * Render
	 * 
	 * @param string $content
	 * @param array $posts
	 * @return string
	 */
	public static function render( string $content, array $posts, bool $display_zodiac_links ): string {
		if ( empty( $posts ) ) {
			return $content;
		}

		$open = self::get_opening_tag( $content );

		$previews = implode(
			PHP_EOL,
			array_map( array( __CLASS__, 'render_preview' ), $posts, array( $display_zodiac_links ) )
		);

		return "{$open}
			<div class=\"wp-block-cata-rest__layout is-layout-daily-horoscope\">
				{$previews}
			</div>
		</div>";
	}

	/**
	 * Render Preview
	 * 
	 * @param stdClass $post
	 * @return string
	 */
	public static function render_preview( stdClass $post, bool $display_zodiac_links ): string {
		$date         = date_create( $post->date );
		$date         = esc_html( date_format( $date, 'l, F j, Y' ) );
		$link         = esc_url( $post->link );
		$excerpt      = wp_kses_post( $post->excerpt->rendered );
		$domain       = wp_parse_url( $post->link, PHP_URL_HOST );
		$zodiac_links = $display_zodiac_links ? self::get_zodiac_links( $post ) : '';

		return "<article class=\"preview is-layout-daily-horoscope\">
			<div class=\"preview__layout\">
				<p>{$date}</p>
				<ul class=\"preview__zodiac-signs\">
					{$zodiac_links}
				</ul>
			</div>
		</article>";
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
	 * @param string $link
	 * @return string
	 */
	public static function get_zodiac_link( string $anchor, string $text, string $link ): string {
		$link     = esc_url( $link );
		$anchor   = esc_attr( $anchor );
		$text     = esc_html( wp_strip_all_tags( $text ) );
		$svg_path = __DIR__ . "/svg/$anchor.svg";
		$symbol   = file_exists( $svg_path ) ? file_get_contents( $svg_path ) : '';

		if ( empty( $text ) || empty( $anchor ) || empty( $symbol ) ) {
			return '';
		}

		return "<li><a href=\"{$link}#{$anchor}\">{$symbol}{$text}</a></li>";
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
