/**
 * Table of Contents
 */
document.querySelectorAll( '.wp-block-cata-toc' ).forEach( handleBlock );
document.dispatchEvent( new CustomEvent( 'tocBlocksRendered' ) );

/**
 * Handle Block
 * Create a table of contents for a post from its h2s.
 * If there are no headings, remove the TOC.
 *
 * @param {HTMLElement} block
 */
function handleBlock( block ) {

	const headings = getHeadings(
		getContent( block )
	);

	if ( 0 === headings.length ) {
		return (block.parentNode.removeChild(block));
	}

	const regexPattern = block.dataset?.regexPattern ? block.dataset.regexPattern : '';
	const regexAppend = block.dataset?.regexAppend ? block.dataset.regexAppend : '';

	/**
	 * Data
	 * headings -> objects -> textContent w/ regex -> id
	 */
	const data = headings
		.map(heading => ({heading}))
		.map(setTextContent)
		.map(getRegexFunction( regexPattern ))
		.map(setId)
		.filter(validate);

	/**
	 * Fail
	 */
	if ( 0 === data.length ) {
		return;
	}

	/**
	 * Side Effect
	 * set id on headings without them
	 */
	data.forEach( d => {
		if ( ! headingHasId( d.heading ) ) {
			d.heading.id = d.id;
		}
	});


	/**
	 * Render
	 * data -> links -> listItems -> list -> nav
	 */
	const nav = renderNav([
		renderList( data.map( renderLink ).map( renderListItem( regexAppend ) ) )
	]);

	/**
	 * Append
	 */
	appendNav( block, nav );
}

/**
 * Get Content
 * 
 * @param {HTMLElement|null} block
 * @return {HTMLElement|null}
 */
function getContent( block ) {
	if ( null === block ) {
		return null;
	}
	return block.closest( '.wp-site-blocks,.entry__content' );
}

/**
 * Get Headings
 * 
 * @param {HTMLElement|null} content
 * @return {HTMLHeadingElement[]}
 */
function getHeadings( content ) {
	if ( null === content ) {
		return [];
	}
	return [...content.querySelectorAll( 'h2' )];
}


/**
 * Append Nav
 *
 * @param {HTMLElement} block
 * @param {Array} links A elements.
 */
function appendNav( block, nav ) {

	const details = block.firstElementChild;

	if ( null !== details ) {
		// After v0.7.6 <details> is server-side generated
		details.append( nav );
	} else {
		// Previous to v0.7.6 <details> was client-side generated
		block.append(renderDetails( [
			renderSummary(),
			nav,
		] ));
	}
}

/**
 * Render Nav
 *
 * @param {HTMLElement[]} children
 * @return {HTMLElement} nav
 */
function renderNav( children ) {
	const nav = document.createElement( 'nav' );
	nav.append(...children);
	return nav;
}

/**
 * Render Toc
 *
 * @param {HTMLElement[]} children
 * @return {HTMLElement} toc
 */
function renderDetails( children ) {
	const toc = document.createElement( 'details' );
	toc.setAttribute( 'open', 'open' );
	toc.append(...children);
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
 * @param {HTMLElement[]} children HTMLElements
 * @return {HTMLElement} list
 */
function renderList( children ) {
	const list = document.createElement( 'ul' );
	list.append(...children)
	return list;
}

/**
 * Render List Item
 *
 * @param {HTMLElement} child
 * @return {HTMLElement} listItem
 */
function renderListItem( regexAppend ) {
	return (child) => {
		const listItem = document.createElement( 'li' );
		const appendText = getAppendText( regexAppend, child.textContent );
		
		if( appendText ) {
			child.textContent = child.textContent.replace(appendText, "");
			listItem.append(document.createTextNode( appendText ));
		}
		
		listItem.prepend( child );

		return listItem;
	}
}

/**
 * Insert Link
 *
 * @param {Object} heading
 * @return {HTMLElement} link
 */
function renderLink( heading ) {
	const link = document.createElement( 'a' );
	link.href = '#' + heading.id;
	link.textContent = heading.textContent;
	return link;
}

/**
 * Validate
 *
 * @param {Object} heading
 * @return {boolean} Whether heading has an ID and text content.
 */
function validate( heading ) {
	return isNonEmptyString( heading.id ) && isNonEmptyString( heading.textContent );
}

/**
 * Set Text Content
 *
 * @param {Object} data
 * @return {Object}
 */
function setTextContent( data ) {
	return {
		...data,
		textContent: data.heading.hasChildNodes ? getElementTextContent( data.heading ) : ''
	}
}

/**
 * Get Regex Function
 *
 * @param {String} regexPattern
 * @return {Function}
 */
function getRegexFunction( regexPattern ) {
	if ( ! isNonEmptyString( regexPattern ) ) {
		return data => data;
	}
	return ( data ) => {
		const result = (new RegExp( regexPattern, 'mi' )).exec( data.textContent );
		if ( ! Array.isArray( result ) ) {
			return data
		}
		return {
			...data,
			textContent: result.pop()
		};
	}
}

/**
 * Get Append Text
 *
 * @param {String} regexAppend
 * @param {String} textContent
 * @return {String}
 */
function getAppendText( regexAppend, textContent ) {		
	if( isNonEmptyString( regexAppend ) ) {
		return (new RegExp( regexAppend, 'mi' )).exec( textContent );
	}
	return '';
}

/**
 * Set Id
 * 
 * @param {Object} data
 */
function setId( data ) {
	return {
		...data,
		id: getId( data.heading.id, data.textContent )
	}
}

/**
 * Heading Needs Id
 * 
 * @param {HTMLHeadingElement} headingElement
 */
function headingHasId( headingElement ) {
	return isNonEmptyString( headingElement.id );
}

/**
 * Get Element Text Content
 * 
 * @param {HTMLElement} element
 */
function getElementTextContent( element ) {
	return getChildNodesTextContent( element.childNodes ).flat().join(' ').replace(/\s+/g, ' ');
}

/**
 * Get Child Nodes Text Content
 *
 * @param {NodeList} nodes 
 * @return {Array}
 */
function getChildNodesTextContent( nodes ) {
	return [...nodes].map( ( n ) => {
		if ( n.hasChildNodes() ) {
		  return getChildNodesTextContent( n.childNodes );
		}
		return n.textContent;
	} );
}

/**
 * Is Non-Empty String
 * 
 * @param {string} maybeString
 * @return {boolean}
 */
function isNonEmptyString( maybeString ) {
	return 'string' === typeof maybeString && 0 < maybeString.length;
}

/**
 * Get Id
 * 
 * @param {string} originalId
 * @return {string}
 */
function getId( originalId, headingTextContent ) {
	return isNonEmptyString( originalId ) ? originalId : createId( headingTextContent );
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
		.replace( /[^a-z0-9\-]/g, '-' )
		.replace( /-+/g, '-' )
		.replace( /-$/, '' )
		.substring( 0, 64 );
}
