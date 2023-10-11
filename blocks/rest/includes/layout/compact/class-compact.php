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
			<div class=\"wp-block-cata-rest__layout is-layout-trending\">
				<div class=\"has-serif-font-family\">{$one}</div>
				<div class=\"has-serif-font-family\">{$two}</div>
				<div class=\"has-sans-serif-font-family\">{$three}</div>
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
		return "<div class=\"wp-block-cata-rest__list has-step-p-0-font-size line-height-2\">{$previews}</div>";
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
		$kicker = self::render_kicker(
			self::get_category( $post )
		);
		$byline = self::render_byline(
			self::get_author( $post )
		);

		return "<article class=\"preview is-layout-trending\">
			<figure class=\"preview__image-container\">
				<a rel=\"bookmark\" href=\"{$link}\">
					{$image}
				</a>
			</figure>
			<div class=\"preview__content\">
				{$kicker}
				<h3 class=\"preview__title has-step-4-font-size\">
					<a class=\"preview__permalink\" rel=\"bookmark\" href=\"{$link}\">{$title}</a>
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

		return "<p class=\"preview__byline\">
			{$image}
			<a rel=\"author\" href=\"{$href}\"><em>{$name}</em></a>
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

	/**
	 * Get Category
	 * 
	 * @param stdClass $post
	 * @return null|stdClass
	 */
	public static function get_category( stdClass $post ) : ?stdClass {
		if ( ! isset( $post->_embedded ) || ! isset( $post->_embedded->{'wp:term'} ) ) {
			return null;
		}

		if ( ! is_array( $post->_embedded->{'wp:term'} ) || empty( $post->_embedded->{'wp:term'} ) ) {
			return null;
		}

		$taxonomies = array_values(
			array_filter(
				$post->_embedded->{'wp:term'},
				self::get_taxonomy_filter_function( 'category' )
			)
		);

		if ( empty( $taxonomies ) ) {
			return null;
		}

		$block_list = [
			'uncategorized',
			'collective-world',
			'project-oasis'
		];

		$categories = array_values(
			array_filter(
				current( $taxonomies ),
				function($cat) use ( $block_list ) {
					return ! in_array( $cat->slug, $block_list, true );
				}
			)
		);

		if ( empty( $categories ) ) {
			return null;
		}

		return current( $categories );
	}

	/**
	 * Get Taxonomy Filter Function
	 * 
	 * @param string $tax_slug
	 * @return callable
	 */
	public static function get_taxonomy_filter_function( string $tax_slug ) : callable {
		return function( $terms ) use ( $tax_slug ) : bool {
			return is_array( $terms ) && ! empty( $terms ) && isset( $terms[0]->taxonomy ) && $tax_slug === $terms[0]->taxonomy;
		};
	}

	/**
	 * Render Kicker
	 * 
	 * @param stdClass|null $category
	 * @return string
	 */
	public static function render_kicker( ?stdClass $category = null ) : string {
		if ( null === $category ) {
			return '';
		}
		$link = esc_url( $category->link );
		$name = esc_html( $category->name );
		return "<p class=\"preview__kicker has-step-n-2-font-size\">
			<a rel=\"category\" href=\"{$link}\"><strong>{$name}</strong></a>
		</p>";
	}

}
