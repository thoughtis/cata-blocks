<?php
/**
 * Access Token
 * 
 * @package Cata\Blocks\Shopify\Options\Settings
 * @since 0.1.0
 */

namespace Cata\Blocks\Shopify\Options\Settings;

/**
 * Access Token
 */
class Access_Token {

	/**
	 * Setting Name
	 * Unique key for a single option/setting, stored in DB.
	 */
	const SETTING_NAME = 'cata_shopify_access_token';
	
	/**
	 * Register
	 * 
	 * @param string $option_group
	 */
	public static function register( string $option_group ) : void {

		register_setting(
			$option_group,
			self::SETTING_NAME,
			array(
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
				'show_in_rest'      => false,
				'default'           => '',
			)
		);

		add_settings_field(
			self::SETTING_NAME,
			'Shopify Storefront API Access Token',
			array( __CLASS__, 'settings_field_callback' ),
			$option_group,
			$option_group . '_section',
			array(
				'label_for' => self::SETTING_NAME,
				'id'        => self::SETTING_NAME,
				'name'      => self::SETTING_NAME,
			)
		);
	}

	/**
	 * Settings Field Callback
	 * 
	 * @param array $args Everything you need for an input.
	 */
	public static function settings_field_callback( array $args ) : void {
		?>
		<input id="<?php echo esc_attr( $args['id'] ); ?>" name="<?php echo esc_attr( $args['name'] ); ?>" type="text" value="<?php echo esc_attr( get_option( self::SETTING_NAME, '' ) ); ?>">
		<p class="description">This access token is stored in plain text. It should have public read-only permissions. See <a target="_blank" href="https://shopify.dev/docs/api/storefront#authentication">Storefront API Documentation</a>.</p>
		<?php
	}
}
