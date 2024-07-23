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
		$date = esc_html( self::get_date_string( $post->date ) );
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
}
