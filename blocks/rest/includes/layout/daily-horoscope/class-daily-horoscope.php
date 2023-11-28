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
			array_map( array( __CLASS__, 'render_preview' ), $posts, [ $display_zodiac_links ] )
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

		$link         = esc_url( $post->link );
		$title        = esc_html( $post->title->rendered );
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
					<div class=\"preview__excerpt\">{$excerpt}</div>
					{$zodiac_links}
				</div>
			</div>
		</article>";
	}

	/**
	 * Get Zodiac Links
	 * 
	 * @param string $post_link
	 * @return string
	 */
	public static function get_zodiac_links( stdClass $post ): string {
		$tags = new WP_HTML_Tag_Processor( $post->content->rendered );
		$links_html = '<ul class="preview__zodiac-links">';

		while ( $tags->next_tag() ) {
			if ( 'H2' === $tags->get_tag() ) {
				$heading_id = $tags->get_attribute( 'id' );
				$zodiac_name = ucfirst( $heading_id );
				$links_html .= "<li><a href=\"{$post->link}#{$heading_id}\">{$zodiac_name}</a></li>";
			}
		}

		return $links_html . '</ul>';
	}
}
