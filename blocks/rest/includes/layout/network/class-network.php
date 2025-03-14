<?php
/**
 * Network
 * 
 * @package Cata\Blocks\Rest\Layout
 * @since
 */

namespace Cata\Blocks\Rest\Layout;

use Cata\Blocks\Rest\Layout;
use stdClass;

/**
 * Network
 */
class Network extends Layout {
	/**
	 * Render
	 * 
	 * @param string $content
	 * @param array $posts
	 * @return string
	 */
	public static function render( string $content, array $posts, ?bool $display_zodiac_links = false, ?string $aspect_ratio = '' ): string {
	
		if ( empty( $posts ) ) {
			return $content;
		}

		$open = self::get_opening_tag( $content );

		$previews = implode(
			PHP_EOL,
			array_map(
				fn( $post ) => self::render_preview( $post, $display_zodiac_links, $aspect_ratio ),
				$posts
			)
		);

		return "{$open}
			<div class=\"wp-block-cata-rest__layout is-layout-network\">
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
	public static function render_preview( stdClass $post, bool $display_zodiac_links, string $aspect_ratio ): string {
		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'       => '(max-width: 40em) 92.5vw, 36em',
				'srcset'      => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
				'aspectRatio' => $aspect_ratio,
			)
		);

		$href       = esc_url( $post->link );
		$title      = esc_html( $post->title->rendered );
		$excerpt    = wp_kses_post( $post->excerpt->rendered );
		$domain     = wp_parse_url( $post->link, PHP_URL_HOST );
		$image_link = self::render_link( $href, $image );
		$title_link = self::render_link( $href, $title, ['rel' => 'bookmark', 'class' => 'preview__permalink' ] );

		if ( $display_zodiac_links ) {
			$links = self::get_zodiac_links( $post );
			$extra = "<ul class=\"preview__zodiac-signs\">{$links}</ul>";
		} else {
			$extra = "<p class=\"preview__domain\">{$domain}</p>";
		}

		return "<article class=\"preview is-layout-network\">
			<div class=\"preview__layout\">
				<div class=\"preview__start\">
					<figure class=\"preview__image-container\">
						{$image_link}
					</figure>
				</div>
				<div class=\"preview__end\">
					<h3 class=\"preview__title\">
						{$title_link}
					</h3>
					<div class=\"preview__excerpt\">{$excerpt}</div>
					{$extra}
				</div>
			</div>
		</article>";
	}
}
