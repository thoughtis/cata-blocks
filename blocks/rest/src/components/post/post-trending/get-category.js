const PRIVATE_CATEGORIES = [
	'uncategorized',
	'collective-world',
	'project-oasis'
];

/**
 * Get Category
 */
export default function getCategory( post ) {

	if ( ! ( '_embedded' in post ) || ! ( 'wp:term' in post._embedded ) ) {
		return null;
	}

	if ( ! Array.isArray( post._embedded['wp:term'] ) || 0 === post._embedded['wp:term'].length ) {
		return null;
	}

	const taxonomies = post._embedded['wp:term'].filter( isCategoryArray );

	if ( 0 === taxonomies.length ) {
		return null;
	}

	const categories = taxonomies[0].filter((tax) => {
		return ! PRIVATE_CATEGORIES.includes( tax.slug );
	});

	if ( 0 === categories.length ) {
		return null;
	}

	return Object.assign( {}, categories[0] );
}

/**
 * Is Catrgoty Array
 * 
 * @param {array} terms
 */
function isCategoryArray( terms ) {
	return Array.isArray( terms ) && 0 < terms.length && ( 'taxonomy' in terms[0] ) && 'category' === terms[0].taxonomy;
}
