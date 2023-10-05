export default function getImage( post ) {

	if ( ! ( '_embedded' in post ) || ! ( 'wp:featuredmedia' in post._embedded ) ) {
		return null;
	}

	if ( ! Array.isArray( post._embedded['wp:featuredmedia'] ) || 0 === post._embedded['wp:featuredmedia'].length ) {
		return null;
	}

	const images = post._embedded['wp:featuredmedia'].filter( ( media ) => {
		return ( 'media_type' in media ) && 'image' === media.media_type;
	} );

	if ( 0 === images.length ) {
		return null;
	}

	return images.shift();
}
