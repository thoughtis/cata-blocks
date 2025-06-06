<?php
/**
 * Trending
 * 
 * @package Cata\Blocks\Rest\Layout
 * @since
 */

namespace Cata\Blocks\Rest\Layout;

use Cata\Blocks\Rest\Layout;
use stdClass;

/**
 * Trending
 */
class Trending extends Layout {

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
			<div class=\"wp-block-cata-rest__layout is-layout-trending\">
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
		$title = esc_html( $post->title->rendered );
		$href  = esc_url( $post->link );
		$link  = self::render_link( $href, $title );
		return "<p>{$link}</p>";
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
		$href   = esc_url( $post->link );
		$kicker = self::render_kicker(
			self::get_category( $post )
		);
		$byline = self::render_byline(
			self::get_author( $post )
		);

		$link_one = self::render_link( $href, $image, ['rel' => 'bookmark'] );
		$link_two = self::render_link( $href, $title, ['rel' =>  'bookmark', 'class' => 'preview__permalink'] );

		return "<article class=\"preview is-layout-trending\">
			<figure class=\"preview__image-container\">
				{$link_one}
			</figure>
			<div class=\"preview__content\">
				{$kicker}
				<h3 class=\"preview__title\">
					{$link_two}
				</h3>
				{$byline}
			</div>
		</article>";
	}

	/**
	 * Get Author
	 * 
	 * @param stdClass $post
	 * @return null|stdClass
	 */
	public static function get_author( stdClass $post ) : ?stdClass {
		if ( ! isset( $post->_embedded ) || ! isset( $post->_embedded->{'wp:term'} ) ) {
			return null;
		}

		if ( ! is_array( $post->_embedded->{'wp:term'} ) || empty( $post->_embedded->{'wp:term'} ) ) {
			return null;
		}

		$taxonomies = array_values(
			array_filter(
				$post->_embedded->{'wp:term'},
				self::get_taxonomy_filter_function( 'author' )
			)
		);

		if ( empty( $taxonomies ) ) {
			return null;
		}

		return $taxonomies[0][0]->profile;
	}

	/**
	 * Render Byline
	 * 
	 * @param null|stdClass $author
	 * @return string
	 */
	public static function render_byline( ?stdClass $author ) : string {
		if ( null === $author ) {
			return '';
		}

		$href = esc_url( $author->link );
		$name = esc_html( $author->display_name );

		$image_data = isset( $author->media[0] ) ? $author->media[0] : null;
		$image = self::render_image(
			$image_data,
			array(
				'class'  => 'preview__avatar',
				'sizes'  => '2.25em',
				'srcset' => self::get_image_dimensions( $image_data, 1, [ 288, 144, 72, 36 ] ),
			)
		);

		$link = self::render_link( $href, "<em>{$name}</em>", ['rel' => 'author'] );

		return "<p class=\"preview__byline\">
			{$image}
			{$link}
		</p>";
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
				'srcset' => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
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
				'srcset' => self::get_image_dimensions( $image_data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] ),
			)
		);
		return self::render_preview( $post, $image );
	}
}
