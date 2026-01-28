/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any 
 * JavaScript running in the front-end, then you should delete this file and remove 
 * the `viewScript` property from `block.json`. 
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
 
import {  getElement, store, useState, useEffect, getContext, withScope } from '@wordpress/interactivity';

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

// Unlike `data-wp-init` and `data-wp-watch`, you can use any hooks inside
// `data-wp-run` callbacks.
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
		logInView: () => {
			const isInView = useInView();
			const { ref } = getElement();
			useEffect( async () => {
				if ( isInView ) {
					console.log( 'In view' );

					const response = await fetch( state.postUrls[0] );
					const data     = await response.text();
					const doc      = (new DOMParser()).parseFromString( data, 'text/html' );

					const { title } = setTitle( doc );

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

					window.history.pushState( { title, index: element.dataset.cataInfiniteScroll }, '', state.postUrls[0] );
					
				} else {
					console.log( 'Not in view' );
				}
			}, [isInView] );
		},
	},
})


function setTitle( doc ) {

	const title = doc.head.querySelector('title').textContent

	window.document.title = title;

	return { title };
}
