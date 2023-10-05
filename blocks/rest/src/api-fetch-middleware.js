/**
 * API Fetch Middleware
 */

const cache = {};

/**
 * Cache
 *
 * @param {object} options
 * @param {function} next
 * @returns 
 */
export function cacheMiddleware( options, next ) {
	// Skip Cache
	if ( true !== options?.cata?.useCache ) {
		return next( options );
	}
	// Data in Cache
	if ( options.path in cache ) {
		return new Promise( ( resolve ) => {
			resolve( cache[options.path] );
		});
	}
	// Proceed with query, set in cache.
	cache[options.path] = next( options );
	return cache[options.path];
}

/**
 * Proxy
 *
 * @param {object} options
 * @param {function} next
 */
export function proxyMiddleware( options, next ) {
	if ( true !== options?.cata?.useProxy ) {
		return next( options );
	}
	return next( {
		...options,
		path: getProxyUrl( options.path )
	});
}

/**
 * Get Proxy URL
 * 
 * @param {string} url
 * @return {string}
 */
export function getProxyUrl( url ) {
	return `/cata/v1/proxy/?url=${encodeURIComponent( url )}`;
}
