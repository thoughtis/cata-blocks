<?php
/**
 * Compact
 * 
 * @package Cata\Blocks\Rest\Layout
 * @since 0.8.1
 */

namespace Cata\Blocks\Rest\Layout;

use Cata\Blocks\Rest\Layout;
use stdClass;

/**
 * Compact Grid
 */
class Compact_Grid extends Layout {

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
				fn( $post ) => self::render_preview( $post, $aspect_ratio ), $posts
			)
		);

		return "{$open}
			<div class=\"wp-block-cata-rest__layout is-layout-compact-grid\">
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
	public static function render_preview( stdClass $post, string $aspect_ratio ) : string {
		$title  = esc_html( $post->title->rendered );
		$href   = esc_url( $post->link );
		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'       => '(max-width: 20em) 46.25vw, 13em',
				'srcset'      => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
				'aspectRatio' => $aspect_ratio,
			)
		);

		$image_link = self::render_link( $href, $image );
		$title_link = self::render_link( $href, $title, ['rel' => 'bookmark', 'class' => 'preview_permalink'] );

		$kicker = self::render_kicker(
			self::get_category( $post )
		);

		return "<article class=\"preview is-layout-compact\">
			<div class=\"preview__layout\">
				<div class=\"preview__start\">
					<figure class=\"preview__image-container\">
						{$image_link}
					</figure>
				</div>
				<div class=\"preview__end\">
					{$kicker}
					<h3 class=\"preview__title\">
						{$title_link}
					</h3>
				</div>
			</div>
		</article>";
	}

}
