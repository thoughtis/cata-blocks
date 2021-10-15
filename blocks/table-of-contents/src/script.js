/**
 * Table of Contents
 * Create a table of contents for a post from its h2s.
 */
function parse_post() {
	const entryContent = document.getElementById('main');

	if ( null === entryContent ) {
		return;
	}

	const insertPoint = entryContent.querySelector( '#toc-entry-point' );

	if ( null === insertPoint ) {
		return;
	}

	const headings = entryContent.querySelectorAll( 'h2' );

	if ( 0 === headings.length ) {
		return;
	}

	const links = Array.from( headings )
		.map( ensureId )
		.map( simplifyObject )
		.filter( validate )
		.map( renderLink )
		.map( renderListItem );

	appendToc( insertPoint, links );
}

/**
 * Append TOC
 *
 * @param {HTMLElement} insertPoint
 * @param {Array} links A elements.
 */
function appendToc( insertPoint, links ) {
	if ( 0 === links.length ) {
		return;
	}

	const toc = renderToc( [
		renderSummary(),
		renderNav(
			[
				renderList( links ),
			]
		),
	] );

	insertPoint.insertAdjacentElement( 'afterend', toc );
}

/**
 * Render Nav
 *
 * @param {Array} children
 * @return {HTMLElement} nav
 */
function renderNav( children ) {
	const nav = document.createElement( 'nav' );
	children.forEach( ( child ) => {
		nav.appendChild( child );
	} );
	return nav;
}

/**
 * Render Toc
 *
 * @param {Array} children
 * @return {HTMLElement} toc
 */
function renderToc( children ) {
	const toc = document.createElement( 'details' );
	toc.classList.add( 'entry-toc' );
	children.forEach( ( child ) => {
		toc.appendChild( child );
	} );
	return toc;
}

/**
 * Render Toc Heading
 *
 * @return {HTMLElement} sum
 */
function renderSummary() {
	const sum = document.createElement( 'summary' );
	sum.textContent = 'Table of Contents';
	return sum;
}

/**
 * Render List
 *
 * @param {Array} children HTMLElements
 * @return {HTMLElement} list
 */
function renderList( children ) {
	const list = document.createElement( 'ul' );

	children.forEach( ( child ) => {
		list.appendChild( child );
	} );

	return list;
}

/**
 * Render List Item
 *
 * @param {HTMLElement} child
 * @return {HTMLElement} listItem
 */
function renderListItem( child ) {
	const listItem = document.createElement( 'li' );
	listItem.appendChild( child );
	return listItem;
}

/**
 * Insert Link
 *
 * @param {Object} articleHeading
 * @return {HTMLElement} link
 */
function renderLink( articleHeading ) {
	const link = document.createElement( 'a' );
	link.href = '#' + articleHeading.id;
	link.textContent = articleHeading.textContent;
	return link;
}

/**
 * Validate
 *
 * @param {Object} heading
 * @return {boolean} Whether heading has an ID and text content.
 */
function validate( heading ) {
	return 0 < heading.id.length && 0 < heading.textContent.length;
}

/**
 * Simplify Object
 *
 * @param {HTMLElement} headingElement
 * @return {Object} Simplified object with only id and textContent.
 */
function simplifyObject( headingElement ) {
	return {
		id: headingElement.id,
		textContent: headingElement.textContent,
	};
}

/**
 * Ensure Id
 * Either use the exising ID or create one.
 *
 * @param {HTMLElement} articleHeading
 * @return {Object} articleHeading
 */
function ensureId( articleHeading ) {
	if ( 'string' === typeof articleHeading.id && '' !== articleHeading.id ) {
		return articleHeading;
	}

	const newId = createId( articleHeading.textContent );

	if ( '' === newId ) {
		return articleHeading;
	}

	articleHeading.setAttribute( 'id', newId );

	return articleHeading;
}

/**
 * Create Id
 *
 * @param {string} textContent
 * @return {string} A usable ID or an empty string.
 */
function createId( textContent ) {
	return textContent
		.toLowerCase()
		.replace( /\s+/g, ' ' )
		.replace( /[^a-z0-9\-]/g, '-' )
		.replace( /-+/g, '-' )
		.replace( /-$/, '' )
		.substring( 0, 64 );
}

parse_post();