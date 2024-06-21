<?php
/**
 * Token
 *
 * @package Cata\Blocks\Just_Watch\Options
 * @since
 */

namespace Cata\Blocks\Just_Watch\Options;

/**
 * Token
 */
class Token {

	/**
	 * Setting Name
	 * Unique key for a single option/setting, stored in DB.
	 */
	const SETTING_NAME = 'cata_blocks_just_watch_token';

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
				'sanitize_callback' => fn( string $token ): string => sanitize_text_field( $token ),
				'show_in_rest'      => false,
				'default'           => '',
			)
		);

		add_settings_field(
			self::SETTING_NAME,
			'JustWatch Token',
			array( __CLASS__, 'field_callback' ),
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
	 * Field Callback
	 * 
	 * @param array $args Everything you need for an input.
	 */
	public static function field_callback( array $args ): void {
		?>
		<input
			id="<?php echo esc_attr( $args['id'] ); ?>"
			name="<?php echo esc_attr( $args['name'] ); ?>"
			type="text"
			value="<?php echo esc_attr( get_option( self::SETTING_NAME, '' ) );?>"
		>
		<p class="description">This token is public.</p>
		<?php
	}
}
