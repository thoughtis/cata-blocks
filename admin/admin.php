<?php
/**
 * Cata Block: Unadorned Announcement Bar
 */

function cata_blocks_settings_page() {
    add_options_page(
        __( 'Cata Blocks', 'cata' ),
        __( 'Cata Blocks', 'cata' ),
        'manage_options',
        'cata-blocks',
        'cata_blocks_settings_page_html'
    );
}

add_action( 'admin_menu', 'cata_blocks_settings_page' );

function cata_blocks_settings_page_html() {
    printf(
        '<div class="wrap" id="cata-blocks-settings">%s</div>',
        esc_html__( 'Loading…', 'cata' )
    );
}

function cata_blocks_settings_page_enqueue_style_script( $admin_page ) {
    if ( 'settings_page_cata-blocks' !== $admin_page ) {
        return;
    }

    $asset_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    if ( ! file_exists( $asset_file ) ) {
        return;
    }

    $asset = include $asset_file;

    wp_enqueue_script(
        'cata-blocks-admin',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset['dependencies'],
        $asset['version'],
        array(
            'in_footer' => true,
        )
    );

	wp_enqueue_style(
        'cata-blocks-admin',
        plugins_url( 'build/index.css', __FILE__ ),
        array_filter(
            $asset['dependencies'],
            function ( $style ) {
                return wp_style_is( $style, 'registered' );
            }
        ),
        $asset['version'],
    );

}
add_action( 'admin_enqueue_scripts', 'cata_blocks_settings_page_enqueue_style_script' );

function cata_blocks_settings() {
    $default = array(
		'active'  => false,
        'post_id' => 0,
    );
    $schema  = array(
        'type'       => 'object',
        'properties' => array(
            'active' => array(
                'type' => 'boolean',
            ),
			'post_id' => array(
                'type' => 'integer',
            )
        ),
    );

    register_setting(
        'options',
        'cata_blocks',
        array(
            'type'         => 'object',
            'default'      => $default,
            'show_in_rest' => array(
                'schema' => $schema,
            ),
        )
    );
}

add_action( 'init', 'cata_blocks_settings' );