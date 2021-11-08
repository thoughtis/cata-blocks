/**
 * Webpack Config
 */

const config = require( '@wordpress/scripts/config/webpack.config' );

/**
 * Find DependencyExtractionWebpackPlugin, set injectPolyfill:false
 * injectPolyfill is no longer true by default in the main branch,
 * but that hasn't made it to a tagged release yet.
 * 
 * @link https://github.com/WordPress/gutenberg/pull/35436
 */
const index = config.plugins.findIndex( ( plugin ) => {
	return 'DependencyExtractionWebpackPlugin' === plugin.constructor.name
});

if ( -1 !== index ) {
	config.plugins[index].options.injectPolyfill = false;
}

module.exports = config;
