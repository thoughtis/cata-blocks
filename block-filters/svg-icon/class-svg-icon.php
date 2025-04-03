<?php
/**
 * SVG Icon
 * 
 * @package Cata_Blocks\Block_Filters
 */

namespace Cata\Blocks\Block_Filters;

use WP_Block;

/**
 * SVG Icon
 */
class SVG_Icon {
	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'render_block_safe-svg/svg-icon',  array( __CLASS__, 'add_link_to_svg_icon' ), accepted_args: 3 );
	}

	/**
	 * Add link to SVG icon
	 * 
	 * @param string $block_content
	 * @param array $block
	 * @param WP_Block $instance
	 * 
	 * @return string
	 */
	public static function add_link_to_svg_icon( string $block_content, array $block, WP_Block $instance ): string {
		$link = $block['attrs']['url'] ?? '';

		if ( '' === $link ) {
			return $block_content;
		}

		$target = $block['attrs']['linkTarget'] ?? '';

		if ( '' !== $target ) {
			$target = " target=\"$target\"";
		}

		$regex = '/<svg.*<\/svg>/i';

		preg_match( $regex, $block_content, $matches );

		$svg = $matches[0] ?? '';

		if ( '' === $svg ) {
			return $block_content;
		}

		$link = "<a href=\"$link\"$target>$svg</a>";
		
		return preg_replace( $regex, $link, $block_content );
	}
}
