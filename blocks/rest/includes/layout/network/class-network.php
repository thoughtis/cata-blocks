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
	public static function render_preview( stdClass $post ) : string {

		$image_data = self::get_image( $post );
		$image = self::render_image(
			$image_data,
			array(
				'sizes'  => '(max-width: 40em) 92.5vw, 36em',
				'srcset' => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
			)
		);

		$link    = esc_url( $post->link );
		$title   = esc_html( $post->title->rendered );
		$excerpt = wp_kses_post( $post->excerpt->rendered );
		$domain  = wp_parse_url( $post->link, PHP_URL_HOST );

		return "<article class=\"preview is-layout-network\">
			<div class=\"preview__layout\">
				<div class=\"preview__start\">
					<figure class=\"preview__image-container\">
						<a rel=\"bookmark\" href=\"{$link}\">
							{$image}
						</a>
					</figure>
				</div>
				<div class=\"preview__end\">
					<h3 class=\"preview__title has-step-5-font-size has-sans-serif-font-family\">
						<a class=\"preview__permalink\" rel=\"bookmark\" href=\"{$link}\">
							{$title}
						</a>
					</h3>
					<div class=\"preview__excerpt has-sans-serif-font-family\">{$excerpt}</div>
					<p class=\"preview__domain has-step-n-1-font-size has-serif-font-family\">{$domain}</p>
				</div>
			</div>
		</article>";
	}

}
