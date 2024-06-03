<?php
/**
 * Blocks > Marquee
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Throwable;
use WP_HTML_Tag_Processor;

/**
 * Register Marquee Block
 */
function register_marquee_block() {
	if ( ! apply_filters( 'cata_blocks_support_marquee_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_marquee_render_callback',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_marquee_block' );

/**
 * Render Callback
 * Calls the real render function, wrapping it in try/catch.
 *
 * @param array $attribute
 * @param string $content
 * @return string
 */
function cata_marquee_render_callback( array $attributes, string $content ): string {
	try {
		return cata_marquee_render_block( $attributes, $content );
	} catch( Throwable $e ) {
		do_action( 'qm/debug', $e );
		return $content;
	}	
}

/**
 * Render Block
 * 
 * @param array $attribute
 * @param string $content
 * @return string
 */
function cata_marquee_render_block( array $attributes, string $content ): string {
	$title_text = '';
	$regex_title = '/<[hp][1-6]?.*>(.*?)<\/[hp][1-6]?>/i';

	if( preg_match( $regex_title, $content, $matches ) ) {
		$title_text = trim( wp_strip_all_tags( end( $matches ) ) );
	}

	if( '' === $title_text ) {
		return $content;
	}

	$content = new WP_HTML_Tag_Processor( $content );

	if ( ! $content->next_tag( array( 'class_name' => 'wp-block-cata-marquee' ) ) ) {
		return $content;
	}

	if ( $content->next_tag() ) {
		$content->add_class( 'wp-block-cata-marquee__inner' );
		$content->set_attribute( 'data-text', $title_text );
		$content->get_updated_html();
	}

	return $content;
}
