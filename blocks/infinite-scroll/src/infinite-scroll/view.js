import {  getElement, store, useState, useEffect } from '@wordpress/interactivity';

import createPageIndex from './imports/create-page-index';

/**
 * Set scroll restoration to manual,
 * On popstate, scroll the element passed in the event state into view.
 */

window.history.scrollRestoration = 'manual';
window.addEventListener( 'popstate', onPopState );

/**
 * On PopState
 *
 * @param {Event} event
 */
function onPopState( event ) {
	if ( null !== event?.state?.title ?? null ) {
		window.document.title = event.state.title;
	}
	if ( null !== event?.state?.index ?? null ) {
		document.querySelector(`[data-cata-infinite-scroll="${event.state.index}"]`).scrollIntoView();
	}
}

const useInView = () => {
    const [ inView, setInView ] = useState( false );

    useEffect( () => {
		const { ref } = getElement();
        const observer = new IntersectionObserver( ( [ entry ] ) => {
            setInView( entry.isIntersecting );
			// only intersect once
			if ( true === entry.isIntersecting ) (
				ref && observer.unobserve( ref )
			)
        } );
        observer.observe( ref );
        return () => ref && observer.unobserve( ref );
    }, [] );
    return inView;
};

const { state } = store('cata-blocks-infinite-scroll', {
	actions: {
		init: function() {

			const { ref } = getElement();

			ref.dataset.cataInfiniteScroll = createPageIndex();

			window.history.replaceState(
				{
					title: window.document.title,
					index: ref.dataset.cataInfiniteScroll
				},
				'',
				window.location.href
			);
		},
	},
	callbacks: {
		onInView: () => {
			const isInView = useInView();
			const { ref } = getElement();
			useEffect( async () => {
				if ( ! isInView ) {
					return;
				}

				if ( 0 === state?.postUrls?.length ?? 0 ) {
					return;
				}

				try {
					await doInfiniteScroll( state.postUrls[0], ref )
				} catch ( error ) {
					console.error( err );
				}				
			}, [isInView] );
		},
	},
});

/**
 * Do Infinite Scroll
 *
 * @param {string} url 
 * @param {HTMLElement} beaconElement 
 */
async function doInfiniteScroll( url, beaconElement ) {

	const response = await fetch( url );
	const data     = await response.text();
	const doc      = (new DOMParser()).parseFromString( data, 'text/html' );
	const element  = doc.querySelector( '[data-wp-interactive="cata-blocks-infinite-scroll"]');

	/**
	 * If there are any styles unique to this content,
	 * get them from the new document and insert them in the existing DOM,
	 * scoped to the new content element.
	 */

	const styles  = doc.querySelector( '#core-block-supports-inline-css' );

	if ( null !== styles && ( 'CSSScopeRule' in window ) ) {
		const scopedStyle = document.createElement( 'style' );
		scopedStyle.textContent = `@scope { ${styles.textContent} }`;
		element.insertBefore( scopedStyle, element.firstElementChild );
		styles.remove();
	}

	beaconElement.parentElement.insertBefore( element, beaconElement );

	element.dataset.cataInfiniteScroll = createPageIndex();

	// Change title early, before pushstate in hopes Google Analytics sees correct title.
	window.document.title = getTitle( doc );

	window.history.pushState(
		{
			title: window.document.title,
			index: element.dataset.cataInfiniteScroll
		},
		'',
		url
	);
} 

/**
 * Get Title
 * 
 * @param {HTMLDocument} doc HTMLDocument about to be inserted with Infinite Scroll
 * @return {string} title
 */
function getTitle( doc ) {
	return doc.head.querySelector('title').textContent;
}
