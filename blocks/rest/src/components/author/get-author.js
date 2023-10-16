/**
 * Get Author
 */
export default function getAuthor( post ) {

	if ( ! ( '_embedded' in post ) || ! ( 'wp:term' in post._embedded ) ) {
		return null;
	}

	if ( ! Array.isArray( post._embedded['wp:term'] ) || 0 === post._embedded['wp:term'].length ) {
		return null;
	}

	const taxonomies = post._embedded['wp:term'].filter( isAuthorArray );

	if ( 0 === taxonomies.length ) {
		return null;
	}

	return Object.assign( {}, taxonomies[0][0].profile );
}

/**
 * Is Author Array
 * 
 * @param {array} terms
 */
function isAuthorArray( terms ) {
	return Array.isArray( terms ) && 0 < terms.length && ( 'taxonomy' in terms[0] ) && 'author' === terms[0].taxonomy;
}