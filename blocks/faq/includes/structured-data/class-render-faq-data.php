<?php
/**
 * Render FAQ Data
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Render FAQ Data
 */
class Render_FAQ_Data {
	private FAQ_Data_Collector $collector;

	/**
	 * Construct
	 */
	public function __construct( FAQ_Data_Collector $collector ) {
		$this->collector = $collector;

		add_action('wp_footer', array($this, 'render_faq_data'));
	}

	/**
	 * Render FAQ Data
	 */
	public function render_faq_data() {

		$faqs = $this->collector->get_faq_data();

		if ( empty( $faqs ) ) {
			return;
		}

		$faq_schemas = array_map( array(__CLASS__, 'faq_data_to_schema' ), $faqs );

		$schema = array(
			'@context'   => 'https://schema.org/',
			'@type'      => 'FAQPage',
			'mainEntity' => [
				$faq_schemas,
			],
		);

		echo '<script type="application/ld+json">';
		echo wp_json_encode( $schema );
		echo '</script>' . "\n";
	}

	/**
	 * Render FAQ Data
	 * 
	 * @param array $faq
	 * @return array
	 */
	public static function faq_data_to_schema( array $faq ) : array {

		$faq_array = [
			'@type' => 'Question',
			'name' => reset($faq),
			'answerCount' => 1,
			'acceptedAnswer' => [ 
				'@type' => 'Answer', 
				'text' => end($faq), 
			],
		];

		return $faq_array;
	}

}
