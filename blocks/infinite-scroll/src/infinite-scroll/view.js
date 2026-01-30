import {  getElement, store, useState, useEffect } from '@wordpress/interactivity';

/**
 * UID
 * Unique ID - But Not Universal Unique ID
 *
 * @type {Object}
 */
const uid = {
	value: 0
};

Object.defineProperty( uid, 'next', {
	get: function() {
		return this.value++;
	}
});

/**
 * Create Page Index
 *
 * @return {integer} index
 */
function createPageIndex() {
	return uid.next;
}

window.history.scrollRestoration = "manual";

window.addEventListener("popstate", (event) => {
	if ( null !== event?.state?.title ?? null ) {
		window.document.title = event.state.title;
	}

	if ( null !== event?.state?.index ?? null ) {
		document.querySelector(`[data-cata-infinite-scroll="${event.state.index}"]`).scrollIntoView();
	}
});

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

				const response = await fetch( state.postUrls[0] );
				const data     = await response.text();
				const doc      = (new DOMParser()).parseFromString( data, 'text/html' );

				const element = doc.querySelector( '[data-wp-interactive="cata-blocks-infinite-scroll"]');

				const styles = doc.querySelector( '#core-block-supports-inline-css' );

				if ( null !== styles && ( 'CSSScopeRule' in window ) ) {

					const scopedStyle = document.createElement( 'style' );

					scopedStyle.textContent = `@scope { ${styles.textContent} }`;

					element.insertBefore( scopedStyle, element.firstElementChild );

					styles.remove();
				}

				ref.parentElement.insertBefore( element, ref );

				element.dataset.cataInfiniteScroll = createPageIndex();

				const title = getTitle( doc );

				// Change title early, before pushstate in hopes Google Analytics sees correct title.
				window.document.title = title;

				window.history.pushState(
					{
						title,
						index: element.dataset.cataInfiniteScroll
					},
					'',
					state.postUrls[0]
				);
				
			}, [isInView] );
		},
	},
})

/**
 * Get Title
 * 
 * @param {HTMLDocument} doc HTMLDocument about to be inserted with Infinite Scroll
 * @return {string} title
 */
function getTitle( doc ) {
	return doc.head.querySelector('title').textContent;
}
