<?php
/**
 * Filters
 *
 * @package Cata\Blocks
 * @since 0.10.12
 */

namespace Cata\Blocks;

use WP_HTML_Tag_Processor;

/**
 * Filters
 */
class Filters {
	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'render_block', array( __CLASS__, 'add_flex_grow_to_featured_image_block' ), 10, 2 );
	}

	/**
	 * Add Flex Grow to Featured Image Block
	 * 
	 * @param string $block_content
	 * @param array $block
	 * 
	 * @return string
	 */
	public static function add_flex_grow_to_featured_image_block( string $block_content, array $block ) {
		if ( 'core/post-featured-image' !== $block['blockName'] ) {
			return $block_content;
		}

		$flex_grow = $block['attrs']['cataBlocksFlexGrow'] ?? 0;

		if ( 0 === (int)$flex_grow ) {
			return $block_content;
		}

		$block_content = new WP_HTML_Tag_Processor( $block_content );
	
		if ( ! $block_content->next_tag( array( 'tag_name' => 'figure' ) ) ) {
			return $block_content;
		}

		$style = $block_content->get_attribute( 'style' );

		if ( str_contains( $style ?? '', 'flex-grow' ) ) {
			return $block_content;
		}

		$block_content->set_attribute( 'style', $style . 'flex-grow:' . $flex_grow . ';');
		$block_content->get_updated_html();

		return $block_content;
	}
}
