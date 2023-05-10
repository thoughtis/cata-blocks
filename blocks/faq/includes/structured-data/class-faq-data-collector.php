<?php
/**
 * FAQ Data Collector
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * FAQ Data Collector
 */
class FAQ_Data_Collector {
	private $faq_data_array = array();

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
	public function collect_faq_data( string $block_content, array $block ) : string {
		if ( 'cata/faq' !== $block['blockName']  ) {
			return $block_content;
		}

		$regex_question = '/<h[1-6].*wp-block-cata-faq__question.*>(.*?)<\/h[1-6]>/is';
		
		if( preg_match( $regex_question, $block_content, $matches ) ) {
			$question = trim( wp_strip_all_tags( reset( $matches ) ) );
			
			$answer = trim( str_replace( array( "\r", "\n", reset( $matches ) ), '', $block_content ) );
			$answer = $this->strip_faq_tags( $answer );
			
			array_push( $this->faq_data_array, array( $question, $answer ) );
		}

		return $block_content;
	}

	/**
	 * Get FAQ Data
	 * 
	 * @return array
	 */
	public function get_faq_data() : array {
		return $this->faq_data_array;
	}

	/**
	 * Strip FAQ Tags
	 * 
	 * @param string $html
	 * @return string
	 */
	public static function strip_faq_tags( string $html ) : string {
		$allowed_tags = array(
			'h1' => true,
			'h2' => true,
			'h3' => true,
			'h4' => true,
			'h5' => true,
			'h6' => true,
			'p' => true,
			'a' => array(
				'href' => true,
			),
			'ol' => true,
			'ul' => true,
			'li' => true,
			'b' => true,
			'strong' => true,
			'i' => true,
			'em' => true,
			'br' => true,
		);

		return wp_kses( $html, $allowed_tags );
	}
}
