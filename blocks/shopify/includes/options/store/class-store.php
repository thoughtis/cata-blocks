<?php
/**
 * Store
 *
 * @package Cata\Blocks\Shopify\Options
 * @since 0.8.2
 */

namespace Cata\Blocks\Shopify\Options;

use Cata\Blocks\Shopify\Options\Add_Store;

/**
 * Store
 */
class Store {

	/**
	 * Setting Name
	 * Unique key for a single option/setting, stored in DB.
	 */
	const SETTING_NAME = 'cata_blocks_shopify_stores';

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
				'type'              => 'array',
				'sanitize_callback' => array( __CLASS__, 'sanitize_settings' ),
				'show_in_rest'      => array(
					'schema' => array(
						'items' => array(
							'type' => 'array',
							'subdomain'    => 'string',
							'access_token' => 'string',
						),
					),
				),
				'default' => array(),
			)
		);

		add_settings_field(
			self::SETTING_NAME,
			'Shopify Stores',
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
	 * Sanitize Settings
	 * 
	 * @param array $array
	 * @return array
	 */
	public static function sanitize_settings( $array ) : array {
		if ( empty( $array ) ) {
			return array();
		}

		$array = map_deep( $array, 'sanitize_text_field' );

		$array = array_filter( $array, function( $value ) {
			return ! empty( $value['subdomain'] ) && ! empty( $value['access_token'] );
		} );

		return $array;
	}

	/**
	 * Field Callback
	 * 
	 * @param array $args Everything you need for an input.
	 */
	public static function field_callback( array $args ) : void {
		$key = 0;
		$num_options = count( get_option( self::SETTING_NAME, array() ) );

		?>
			<div id="<?php echo esc_attr( self::SETTING_NAME ) . '_wrapper'; ?>" style="margin-bottom: 2em;">
		<?php
			do {
				$option = array_key_exists( $key, get_option( self::SETTING_NAME, array() ) ) ? get_option( self::SETTING_NAME, array() )[$key] : array();
				$subdomain = is_array( $option ) && array_key_exists( 'subdomain', $option ) ? $option['subdomain'] : '';
				$access_token = is_array( $option ) && array_key_exists( 'access_token', $option ) ? $option['access_token'] : '';
				echo $key > 0 ? '<br>' : '';
				?>
					<fieldset id="<?php echo esc_attr( self::SETTING_NAME . '_' . $key ); ?>" data-key="<?php echo esc_attr( $key ); ?>">
						<p><strong>Store <?php echo esc_html( $key + 1 ); ?></strong></p>
						<br>
						<label for="<?php echo esc_attr( $args['id'] . '_subdomain_' . $key );?>" style="min-width: 8em;">Subdomain</label>
						<input 
							id="<?php echo esc_attr( $args['id'] . '_subdomain_' . $key ); ?>" 
							name="<?php echo esc_attr( $args['name'] . '[' . $key . '][subdomain]' ); ?>" 
							type="text"
							value="<?php echo esc_attr( $subdomain ); ?>"
						>
						<p class="description">My Shopify subdomain from URL, example: https://storename.myshopify.com</p>
						<br>
						<label for="<?php echo esc_attr( $args['id'] . '_access_token_' . $key ); ?>" style="min-width: 8em;">Access Token</label>
						<input 
							id="<?php echo esc_attr( $args['id'] . '_access_token_' . $key ); ?>" 
							name="<?php echo esc_attr( $args['name'] . '[' . $key . '][access_token]' ); ?>" 
							type="text" 
							value="<?php echo esc_attr( $access_token ); ?>"
						>
						<p class="description">Access tokens are stored in plain text. It should have public read-only permissions. See <a target="_blank" href="https://shopify.dev/docs/api/storefront#authentication">Storefront API Documentation</a>.</p>
					</fieldset>
				<?php
				$key++;
			} while ( $key < $num_options );
		?>
			</div>
		<?php
		
		Add_Store::render( self::SETTING_NAME, $args );
	}
}
