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
 * Compact
 */
class Compact extends Layout {

	/**
	 * Render
	 * 
	 * @param string $content
	 * @param array $posts
	 * @return string
	 */
	public static function render( string $content, array $posts ) : string {
	
		if ( empty( $posts ) ) {
			return $content;
		}

		$open = self::get_opening_tag( $content );

		$previews = implode(
			PHP_EOL,
			array_map( array( __CLASS__, 'render_preview' ), $posts )
		);

		return "{$open}
			<div class=\"wp-block-cata-rest__layout is-layout-compact\">
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
	public static function render_preview( stdClass $post ) : string {
		$title  = esc_html( $post->title->rendered );
		$link   = esc_url( $post->link );
		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'  => '(max-width: 20em) 46.25vw, 13em',
				'srcset' => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
			)
		);

		return "<article class=\"preview is-layout-compact\">
			<figure class=\"preview__image-container\">
				<a rel=\"bookmark\" href=\"{$link}\">
					{$image}
				</a>
			</figure>
			<div class=\"preview__content\">
				<h3 class=\"preview__title\">
					<a class=\"preview__permalink\" rel=\"bookmark\" href=\"{$link}\">{$title}</a>
				</h3>
			</div>
		</article>";
	}
}
