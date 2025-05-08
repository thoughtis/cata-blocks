<?php
/**
 * Standard
 * 
 * @package Cata\Blocks\Rest\Layout
 * @since 0.8.1
 */

namespace Cata\Blocks\Rest\Layout;

use Cata\Blocks\Rest\Layout;
use stdClass;

/**
 * Standard
 */
class Standard extends Layout {
	/**
	 * Render
	 * 
	 * @param string $content
	 * @param array $posts
	 * @return string
	 */
	public static function render( string $content, array $posts, array $display, string $layout, ?string $aspect_ratio = '' ): string {
	
		if ( empty( $posts ) ) {
			return $content;
		}

		$open = self::get_opening_tag( $content );

		$previews = implode(
			PHP_EOL,
			array_map( 
				fn( $post ) => self::render_preview( $post, $display, $layout, $aspect_ratio ), $posts
			)
		);

		return "{$open}
			<div class=\"wp-block-cata-rest__layout is-layout-{$layout}\">
				{$previews}
			</div>
		</div>";
	}

	/**
	 * Render Preview
	 * 
	 * @param stdClass $post
	 * @param string $image
	 * @return string
	 */
	public static function render_preview( stdClass $post, array $display, string $layout, string $aspect_ratio ) : string {
		$title  = esc_html( $post->title->rendered );
		$href   = esc_url( $post->link );
		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'       => self::get_image_sizes_attribute( $layout ),
				'srcset'      => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
				'aspectRatio' => $aspect_ratio,
			)
		);

		$image_link = self::render_link( $href, $image );
		$title_link = self::render_link( $href, $title, ['rel' => 'bookmark', 'class' => 'preview_permalink'] );

		$date = esc_html( self::get_date_string( $post->date ) );
		$date = ! $display['date'] ? '' : "<p class=\"preview__date\">{$date}</p>";

		$kicker = ! $display['category'] ? '' : self::render_kicker(
			self::get_category( $post )
		);

		$start = ! $display['image'] ? '' : "<div class=\"preview__start\"><figure class=\"preview__image-container\">{$image_link}</figure></div>";
		$title = ! $display['title'] ? '' : "<h3 class=\"preview__title\">{$title_link}</h3>";

		$excerpt = wp_kses_post( $post->excerpt->rendered );
		$excerpt = ! $display['excerpt'] ? '' : "<div class=\"preview__excerpt\">{$excerpt}</div>";

		$zodiac = self::get_zodiac_links( $post );
		$zodiac = ! $display['zodiac'] ? '' : "<ul class=\"preview__zodiac-signs\">{$zodiac}</ul>";	

		$domain = wp_parse_url( $post->link, PHP_URL_HOST );
		$domain = ! $display['domain'] ? '' : "<p class=\"preview__domain\">{$domain}</p>";

		return "<article class=\"preview is-layout-{$layout}\">
			<div class=\"preview__layout\">
				{$start}
				<div class=\"preview__end\">
					{$kicker}
					{$date}
					{$title}
					{$excerpt}
					{$zodiac}
					{$domain}
				</div>
			</div>
		</article>";
	}
}
