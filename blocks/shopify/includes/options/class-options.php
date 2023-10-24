<?php
/**
 * Options
 * 
 * @package Cata\Blocks\Shopify
 * @since 0.1.0
 */

namespace Cata\Blocks\Shopify;

use Cata\Blocks\Shopify\Options\Settings\Access_Token;
use Cata\Blocks\Shopify\Options\Settings\Store;

/**
 * Options
 */
class Options {

	/**
	 * Option Group
	 * Unique key for the page, not stored in DB.
	*/
	const OPTION_GROUP = 'cata-shopify';

	/**
	 * Construct
	 */
	public function __construct() {
		// Add a submenu page for our settings.
		add_action( 'admin_menu', array( __CLASS__, 'add_submenu_page' ) );
		// Add the settings and sections for the settings page.
		add_action( 'admin_init', array( __CLASS__, 'init_settings' ) );
	}

	/**
	 * Add Submenu Page
	 */
	public static function add_submenu_page() : void {
		add_submenu_page(
			// parent slug.
			'options-general.php',
			// title on page.
			'Shopify API',
			// title in menu.
			'Shopify API',
			// required capability.
			'manage_options',
			// unique slug.
			self::OPTION_GROUP,
			// function to produce options page.
			array( __CLASS__, 'submenu_page_content' )
		);
	}

	/**
	 * Menu Page Content
	 */
	public static function submenu_page_content() : void {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		settings_errors( self::OPTION_GROUP );
		?>
		<div class="wrap">
			<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
			<form action="options.php" method="post">
				<?php settings_fields( self::OPTION_GROUP ); ?>
				<?php do_settings_sections( self::OPTION_GROUP ); ?>
				<?php submit_button( 'Save Settings' ); ?>
			</form>
		</div>
		<?php
	}

	/**
	 * Init Settings
	 */
	public static function init_settings() : void {
		add_settings_section(
			self::OPTION_GROUP . '_section',
			__( 'Shopify Storefront API', 'creepycatalog' ),
			null,
			self::OPTION_GROUP
		);
		Access_Token::register( self::OPTION_GROUP );
		Store::register( self::OPTION_GROUP );
	}
}
