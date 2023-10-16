/**
 * Sort Default
 * Don't change sort order
 *
 * @return 0
 */
function sortDefault() {
	return 0;
}

/**
 * Sort Published Newest
 *
 * @param {object} a 
 * @param {object} b 
 * @return {number}
 */
function sortPublishedNewest(a, b) {
	return Math.sign( Date.parse( b.date_gmt ) - Date.parse( a.date_gmt ) );
}

/**
 * Get Sorting Function
 * 
 * @param {string} sortingKey
 * @return {function}
 */
export function getSortingFunction( sortingKey ) {
	switch( sortingKey ) {
		case 'published:newest':
			return sortPublishedNewest;
			break;
		default:
			return sortDefault;
	}
}
