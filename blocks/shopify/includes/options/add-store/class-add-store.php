<?php
/**
 * Add Store
 * 
 * @package Cata\Blocks\Shopify\Options
 * @since 0.8.2
 */

namespace Cata\Blocks\Shopify\Options;

/**
 * Add Store
 */
class Add_Store {
	
	/**
	 * Render
	 * 
	 * @param string $setting_name
	 * @param array  $args
	 */
	public static function render( string $setting_name, array $args ) : void {
		?>
			<input type="button" onClick="addStore()" class="button button-secondary" value="Add Store">

			<script>
				function addStore() {
					const storesWrapper = document.getElementById('cata_blocks_shopify_stores_wrapper');
					const settingName   = '<?php echo esc_attr( $setting_name ); ?>';
					const fieldId       = '<?php echo esc_attr( $args['id'] ); ?>';
					const fieldName     = '<?php echo esc_attr( $args['name'] ); ?>';
					let lastFieldset    = storesWrapper.lastElementChild;
					let newKey          = parseInt( lastFieldset.dataset.key ) + 1;

					let html = `
						<fieldset id="${fieldName}_${newKey}" data-key="${newKey}" style="margin-bottom: 2em;">
							<p><strong>Store ${newKey + 1}</strong></p>
							<br>
							<label for="${fieldId}_subdomain" style="min-width: 8em;">Subdomain</label>
							<input 
								id="${fieldId}_subdomain" 
								name="${fieldName}[${newKey}][subdomain]" 
								type="text"
								value=""
							>
							<p class="description">My Shopify subdomain from URL, example: https://storename.myshopify.com</p>
							<br>
							<label for="${fieldId}_access_token" style="min-width: 8em;">Access Token</label>
							<input 
								id="${fieldId}_access_token" 
								name="${fieldName}[${newKey}][access_token]" 
								type="text" 
								value=""
							>
							<p class="description">Access tokens are stored in plain text. It should have public read-only permissions. See <a target="_blank" href="https://shopify.dev/docs/api/storefront#authentication">Storefront API Documentation</a>.</p>
						</fieldset>
					`;

					storesWrapper.insertAdjacentHTML( 'beforeend', html );
				}
			</script>
		<?php
	}
}
