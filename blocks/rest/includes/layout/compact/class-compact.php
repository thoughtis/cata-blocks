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
	
		if ( empty( $posts ) || 3 >= count( $posts ) ) {
			return $content;
		}

		$open  = self::get_opening_tag( $content );
		$one   = self::render_preview_medium( $posts[0] );
		$two   = self::render_preview_large( $posts[1] );
		$three = self::render_section_three( array_slice( $posts, 2, 6 ) );

		return "{$open}
			<div class=\"wp-block-cata-rest__layout is-layout-compact\">
				<div>{$one}</div>
				<div>{$two}</div>
				<div>{$three}</div>
			</div>
		</div>";
	}

	/**
	 * Render Section Three
	 * 
	 * @param array $posts
	 * @return string
	 */
	public static function render_section_three( array $posts ) : string {
		$previews = implode(
			PHP_EOL,
			array_map(
				array( __CLASS__, 'render_preview_small' ),
				$posts
			)
		);
		return "<div class=\"wp-block-cata-rest__list line-height-2\">{$previews}</div>";
	}

	/**
	 * Render Preview Small
	 * 
	 * @param stdClass $post
	 */
	public static function render_preview_small( stdClass $post ) : string {
		$title  = esc_html( $post->title->rendered );
		$link   = esc_url( $post->link );
		$anchor = "<a href=\"{$link}\">{$title}</a>";
		return "<p>{$anchor}</p>";
	}

	/**
	 * Render Preview
	 * 
	 * @param stdClass $post
	 * @param string $image
	 * @return string
	 */
	public static function render_preview( stdClass $post, ?string $image = '' ) : string {
		$title  = esc_html( $post->title->rendered );
		$link   = esc_url( $post->link );

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

	/**
	 * Render Preview Medium
	 * 
	 * @param stdClass $post
	 * @return string
	 */
	public static function render_preview_medium( stdClass $post ) : string {
		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'  => '(max-width: 15em) 92.5vw, 15em',
				'srcset' => self::get_image_dimensions( $image_data, (3 / 2), [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
			)
		);
		return self::render_preview( $post, $image );
	}

	/**
	 * Render Preview Large
	 * 
	 * @param stdClass $post
	 * @return string
	 */
	public static function render_preview_large( stdClass $post ) : string {
		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'  => '(max-width: 20em) 92.5vw, 20em',
				'srcset' => self::get_image_dimensions( $image_data, (4 / 5), [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
			)
		);
		return self::render_preview( $post, $image );
	}
}
