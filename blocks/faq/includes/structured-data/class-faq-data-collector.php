<?php
/**
 * Collect Structured Data
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_HTML_Tag_Processor;

/**
 * Collect Structured Data
 */
class FAQ_Data_Collector {
	private $faq_structured_data_array = array();

	/**
	 * Construct
	 */
	public function __construct() {
		add_action( 'render_block', array( $this, 'collect_faq_data' ), 10, 2 );
	}

	/**
	 * Collect FAQ Data
	 * 
	 * @param string $block_content
	 * @param array $block
	 * @return string
	 */
	public function collect_faq_data( string $block_content, array $block ) {
		if ( 'cata/faq' !== $block['blockName']  ) {
			return $block_content;
		}

		$faq_html = strip_tags( $block_content, '<h1><h2><h3><h4><h5><h6><p><a><ol><ul><li><b><strong><i><em><br>' );
		
		$regex_question = '/<h[1-6].*wp-block-cata-faq__question.*>(.*?)<\/h[1-6]>/is';

		if( preg_match( $regex_question, $faq_html, $matches ) ) {
			$question = trim( wp_strip_all_tags( end( $matches ) ) );
			$answer = trim( str_replace( array( "\r", "\n", reset( $matches ) ), '', $faq_html ) );
			
			array_push( $this->faq_structured_data_array, array( $question, $answer ) );
		}

		return $block_content;
	}

	/**
	 * Get FAQ Data
	 * 
	 * @return string
	 */
	public function get_faq_data() {
		return $this->faq_structured_data_array;
	}
}