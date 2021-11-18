<?php
/**
 * Renderer
 * 
 * @package Cata\Blocks\Newsletter
 */

namespace Cata\Blocks\Newsletter;

use WP_Block;

class Renderer {
	
	const MAILCHIMP_POST_URL = "https://thoughtcatalog.us2.list-manage.com/subscribe/post";

	/**
	 * Attributes
	 * 
	 * @var array $attributes
	 */
	private $atttributes;

	/**
	 * Construct
	 * 
	 * @param array $block_attributes
	 */
	public function __construct( array $block_attributes ) {
		$this->attributes = $block_attributes;
	}
	
	/**
	 * Get Content
	 * 
	 * @return string
	 */
	public function get_content() : string {
	
		$background  = $this->get_background();
		$title       = $this->get_title();
		$form        = $this->get_form();
		$description = $this->get_description();
		$legal_text  = $this->get_legal_text();
		$classes     = $this->get_classes(
			array(
				'wp-block-cata-newsletter',
			)
		);

		return "<div class=\"${classes}\">
			${background}
			<div class=\"wp-block-cata-newsletter__inner\">
				<div class=\"wp-block-cata-newsletter__layout\">
					<div class=\"wp-block-cata-newsletter__start\">
						${title}
					</div>
					<div class=\"wp-block-cata-newsletter__end\">
						${description}
						${form}
						${legal_text}
					</div>
				</div>
			</div>
		</div>";
	}

	/**
	 * Get Background
	 * 
	 * @return string
	 */
	private function get_background() : string {
		$image_id = absint( $this->attributes['mediaId'] );

		if ( 0 === $image_id ) {
			return '';
		}

		if ( ! wp_attachment_is_image( $image_id ) ) {
			return '';
		}

		return wp_get_attachment_image(
			$image_id,
			'medium_large',
			false,
			array(
				'alt'   => 'ooooooooh so creepy background image',
				'class' => 'wp-block-cata-newsletter__background',
			)
		);
	}

	/**
	 * Get Title
	 * 
	 * @return string
	 */
	private function get_title() : string {
		$title = esc_html( $this->attributes['title'] );
		return "<h2 class=\"wp-block-cata-newsletter__title\">${title}</h2>";
	}

	/**
	 * Get Description
	 * 
	 * @return string
	 */
	private function get_description() : string {
		$description = wp_kses_post( $this->attributes['description'] );
		return "<p>${description}</p>";
	}

	/**
	 * Get Legal Text
	 * 
	 * @return string
	 */
	private function get_legal_text() : string {
		$legal_text = $this->attributes['legalText'];

		$privacy_policy = get_the_privacy_policy_link();

		if ( '' === $privacy_policy ) {
			$privacy_policy = 'privacy policy';
		}

		$legal_text = wp_kses_post(
			str_replace( '%%Privacy Policy%%', $privacy_policy, $legal_text )
		);

		return "<p><small>${legal_text}</small></p>";
	}

	/**
	 * Get Form
	 * 
	 * @return string
	 */
	private function get_form() : string {
		$user_id     = esc_attr( $this->attributes['mailchimpUserId'] );
		$audience_id = esc_attr( $this->attributes['mailchimpAudienceId'] );
		$action      = esc_url( $this->get_form_action( $user_id, $audience_id ) );
		$success     = esc_attr( $this->attributes['successMessage'] );
		
		return "<form method=\"post\" action=\"${action}\" data-mailchimp-success-message=\"${success}\" name=\"mc-embedded-subscribe-form\" target=\"_blank\" data-mailchimp validate>
			<div role=\"alert\"></div>
			<fieldset>
				<label class=\"screen-reader-text\" for=\"mce-EMAIL\">Enter your email</label>
				<input type=\"email\" name=\"EMAIL\" id=\"mce-EMAIL\" placeholder=\"Enter Your Email\" required>
				<button class=\"button is-primary is-filled\" type=\"submit\">Subscribe</button>
			</fieldset>
			<div class=\"position: relative; overflow:hidden\">
				<div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">
					<input type=\"text\" name=\"b_${user_id}_${audience_id}\" tabindex=\"-1\" value=\"\">
				</div>
			</div>
		</form>";
	}

	/**
	 * Get Form Action
	 * 
	 * @param string $user_id
	 * @param string $audience_id
	 * @return string
	 */
	private function get_form_action( string $user_id, string $audience_id ) : string {
		return add_query_arg(
			array(
				'u'  => $user_id,
				'id' => $audience_id
			),
			self::MAILCHIMP_POST_URL
		);
	}

	/**
	 * Get Classes
	 * 
	 * @param array $classes
	 * @return string
	 */
	private function get_classes( array $classes ) : string {
		if ( isset( $this->attributes['align'] ) ) {
			$classes[] = 'align' . sanitize_html_class( $this->attributes['align'], '' ); 
		}
		return implode( ' ', $classes );
	}
}
