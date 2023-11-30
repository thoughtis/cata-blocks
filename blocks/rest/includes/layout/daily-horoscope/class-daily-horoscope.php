<?php
/**
 * Daily Horoscope
 * 
 * @package Cata\Blocks\Rest\Layout
 * @since
 */

namespace Cata\Blocks\Rest\Layout;

use Cata\Blocks\Rest\Layout;
use stdClass;
use WP_HTML_Tag_Processor;

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
		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'  => '(max-width: 40em) 92.5vw, 36em',
				'srcset' => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
			)
		);

		$date_title   = self::get_post_date_and_title( $post->title->rendered );
		$title        = esc_html( $date_title[0] );
		$date         = array_key_exists( '1', $date_title ) ? '<p class="preview__date">'.esc_html( $date_title[1] ).'</p>' : '';
		$link         = esc_url( $post->link );
		$excerpt      = wp_kses_post( $post->excerpt->rendered );
		$domain       = wp_parse_url( $post->link, PHP_URL_HOST );
		$zodiac_links = $display_zodiac_links ? self::get_zodiac_links( $post ) : '';

		return "<article class=\"preview is-layout-daily-horoscope\">
			<div class=\"preview__layout\">
				<div class=\"preview__start\">
					<figure class=\"preview__image-container\">
						<a rel=\"bookmark\" href=\"{$link}\">
							{$image}
						</a>
					</figure>
				</div>
				<div class=\"preview__end\">
					<h3 class=\"preview__title\">
						<a class=\"preview__permalink\" rel=\"bookmark\" href=\"{$link}\">
							{$title}
						</a>
					</h3>
					{$date}
					<ul class=\"preview__zodiac-signs\">
						{$zodiac_links}
					</ul>
				</div>
			</div>
		</article>";
	}

	/**
	 * Get Post Date And Title
	 * 
	 * @param string $post_title
	 * @return array
	 */
	public static function get_post_date_and_title( string $post_title ): array {
		$text_array = explode( ': ', $post_title );
		return $text_array;
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
		$text     = esc_html( $text );
		$svg_path = __DIR__ . "/svg/$anchor.svg";
		$symbol   = file_exists( $svg_path ) ? file_get_contents( $svg_path ) : '';

		if ( empty( $text ) || empty( $anchor ) || empty( $symbol ) ) {
			return '';
		}

		return "<li>{$symbol}<a href=\"{$link}#{$anchor}\">{$text}</a></li>";
	}

	/**
	 * Get Zodiac Headings
	 * 
	 * @param string $post_content
	 * @return array
	 */
	public static function get_zodiac_headings( string $post_content ): array {
		$regex = '/<h2.*id="(.*)".*>(.*?)<\/h2>/im';

		if ( preg_match_all( $regex, $post_content, $matches ) ) {
			return array_combine( $matches[1], $matches[2] );
		}

		return array();
	}

	/**
	 * Get SVG Allowed HTML
	 * 
	 * @return array
	 */
	public static function get_svg_allowed_html(): array {
		return array(
			'svg'     => array(
				'class'   => true,
				'fill'    => true,
				'height'  => true,
				'viewbox' => true,
				'width'   => true,
				'xmlns'   => true,
			),
			'symbol'  => array(
				'id'      => true,
				'viewbox' => true,
			),
			'title'   => true,
			'desc'    => true,
			'defs'    => true,
			'g'       => array(
				'stroke'       => true,
				'stroke-width' => true,
				'fill'         => true,
				'fill-rule'    => true,
				'transform'    => true,
				'clip-path'    => true,
			),
			'path'    => array(
				'd'               => true,
				'id'              => true,
				'fill'            => true,
				'stroke'          => true,
				'stroke-width'    => true,
				'stroke-linejoin' => true,
			),
			'rect'    => array(
				'x'         => true,
				'y'         => true,
				'width'     => true,
				'height'    => true,
				'rx'        => true,
				'class'     => true,
				'fill'      => true,
				'transform' => true,
			),
			'circle'  => array(
				'cx'   => true,
				'cy'   => true,
				'r'    => true,
				'fill' => true,
			),
			'polygon' => array(
				'points' => true,
			),
			'use'     => array(
				'xlink:href' => true,
				'href'       => true,
			),
		);
	}
}
