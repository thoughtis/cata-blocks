/**
 * Image Lightbox — frontend interactivity
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

// The <dialog> for the current lightbox. Set on init so the manually wired
// content-image listeners (which live outside the interactive region) can open it.
let dialog = null;

// Slide <img> elements, ordered to match state.images. Set on init.
let slideImages = [];

// Bumped on every open/navigation so a slow decode can't reveal a stale slide.
let navigation = 0;

const { state, actions } = store( 'cata-blocks-image-lightbox', {
	state: {
		get hasMultiple() {
			return state.images.length > 1;
		},
		get position() {
			return `${ state.currentIndex + 1 } / ${ state.images.length }`;
		},
	},
	actions: {
		open( index, trigger ) {
			// Warm first so the slide's load is no longer deferred, then paint
			// the rendition the reader is already looking at while the
			// full-size candidate downloads.
			warmAround( index );
			seedSlide( slideImages[ index ], trigger?.currentSrc );
			navigation++;
			state.currentIndex = index;
			dialog?.showModal();
		},
		close() {
			dialog?.close();
		},
		next() {
			showSlide( ( state.currentIndex + 1 ) % state.images.length );
		},
		prev() {
			showSlide(
				( state.currentIndex - 1 + state.images.length ) % state.images.length
			);
		},
		onKeydown( event ) {
			if ( 'ArrowRight' === event.key ) {
				actions.next();
			} else if ( 'ArrowLeft' === event.key ) {
				actions.prev();
			}
		},
		onBackdropClick( event ) {
			if ( event.target === dialog ) {
				actions.close();
			}
		},
	},
	callbacks: {
		// Bound via data-wp-class--is-active on each slide. Runs when block
		// loads in browser and again whenever currentIndex changes.
		isActive() {
			return getContext().index === state.currentIndex;
		},
		// Runs once via data-wp-init when the block loads in browser.
		// Wires the content images that open the lightbox.
		init() {
			const { ref } = getElement();
			dialog = ref.querySelector( 'dialog' );

			slideImages = Array.from(
				ref.querySelectorAll( '.wp-block-cata-image-lightbox__slide' )
			).map( ( slide ) =>
				slide.querySelector( '.wp-block-cata-image-lightbox__image' )
			);

			// Map each slide source to its index so a clicked content image
			// opens the matching slide, independent of theme markup.
			const indexBySrc = new Map();
			state.images.forEach( ( image, index ) => {
				if ( ! indexBySrc.has( image.src ) ) {
					indexBySrc.set( image.src, index );
				}
			} );

			const content = document.querySelector( state.contentSelector ) ?? document;

			content.querySelectorAll( 'img' ).forEach( ( img ) => {
				// Skip the lightbox's own slide images, in case the block is
				// rendered inside the content it reads from.
				if ( ref.contains( img ) ) {
					return;
				}

				// Leave images that already have their own click behavior set:
				// a link or "enlarge on click"
				if (
					img.closest( 'a' ) ||
					img.closest( 'figure' )?.querySelector( '.lightbox-trigger' )
				) {
					return;
				}

				const index = indexBySrc.get( img.getAttribute( 'src' ) );

				if ( undefined === index ) {
					return;
				}

				// Start the slide image downloading as soon as a click looks
				// likely, so it's warm by the time the lightbox opens.
				const warmTarget = () => warm( slideImages[ index ], 'high' );
				img.addEventListener( 'pointerenter', warmTarget, { once: true } );
				img.addEventListener( 'touchstart', warmTarget, {
					once: true,
					passive: true,
				} );

				img.classList.add( 'is-cata-image-lightbox-trigger' );
				img.addEventListener( 'click', () => actions.open( index, img ) );

				const badge = addImageHints( img, state.images.length );
				badge.addEventListener( 'pointerenter', warmTarget, { once: true } );
				badge.addEventListener( 'click', () => actions.open( index, img ) );
			} );
		},
	},
} );

/**
 * Resume a slide image's deferred lazy load, optionally at high priority.
 *
 * @param {HTMLImageElement} img      The slide image.
 * @param {string}           priority Fetch priority; pass 'high' for the slide
 *                                    about to be shown.
 */
function warm( img, priority = 'auto' ) {
	if ( ! img ) {
		return;
	}

	img.loading = 'eager';

	if ( 'high' === priority ) {
		img.setAttribute( 'fetchpriority', 'high' );
	}
}

/**
 * Warm a slide image and its neighbors so next/prev is instant.
 *
 * @param {number} index Slide index about to be shown.
 */
function warmAround( index ) {
	const total = state.images.length;

	warm( slideImages[ index ], 'high' );

	if ( total > 1 ) {
		warm( slideImages[ ( index + 1 ) % total ] );
		warm( slideImages[ ( index - 1 + total ) % total ] );
	}
}

/**
 * Seed a slide image from the clicked content image's current source.
 *
 * The content rendition is already in the browser cache, so it paints
 * immediately; restoring the srcset afterwards lets the browser upgrade to
 * the full-size candidate in place.
 *
 * @param {HTMLImageElement} img The slide image.
 * @param {string}           src The clicked image's currentSrc.
 */
function seedSlide( img, src ) {
	if ( ! img || ! src || img.complete ) {
		return;
	}

	const srcset = img.srcset;

	// Without a srcset there is no larger rendition to upgrade to.
	if ( ! srcset ) {
		return;
	}

	img.srcset = '';
	img.src = src;
	img
		.decode()
		.catch( () => {} )
		.finally( () => {
			img.srcset = srcset;
		} );
}

/**
 * Make a slide current, waiting for its image so the outgoing slide stays
 * visible until the incoming one can paint — a crossfade, not a blank flash.
 *
 * @param {number} index Slide index to show.
 */
async function showSlide( index ) {
	warmAround( index );

	const token = ++navigation;
	const img = slideImages[ index ];

	if ( img && ! img.complete ) {
		try {
			await img.decode();
		} catch ( error ) {
			// A failed load still switches slides; the alt text shows instead.
		}
	}

	// A newer navigation superseded this one while the image was decoding.
	if ( token !== navigation ) {
		return;
	}

	state.currentIndex = index;
}

/**
 * Adds an image count badge that doubles as an accessible modal trigger,
 * plus a native tooltip for clarity
 *
 * @param {HTMLImageElement} img   The clickable content image.
 * @param {number}           total Total number of images in the gallery.
 *
 * @return {HTMLButtonElement} The badge button that can open the lightbox.
 */
function addImageHints( img, total ) {
	// A plain wrapper anchors the badge to the image's lower-left corner.
	const wrapper = document.createElement( 'span' );
	wrapper.className = 'cata-image-lightbox-figure';
	img.parentNode.insertBefore( wrapper, img );
	wrapper.appendChild( img );

	// The badge is a button so keyboard users can open the lightbox
	const badge = document.createElement( 'button' );
	badge.type = 'button';
	badge.className = 'cata-image-lightbox-badge';

	// Icon & count on one line
	const count = document.createElement( 'span' );
	count.className = 'cata-image-lightbox-badge__count';
	count.innerHTML = state.badgeIcon ?? '';

	const number = document.createElement( 'span' );
	number.className = 'cata-image-lightbox-badge__number';
	number.textContent = `+${ total }`;
	count.appendChild( number );

	badge.appendChild( count );

	// Optional text below the icon and count. Rendered only when a filter
	// supplies it.
	if ( state.badgeText ) {
		const text = document.createElement( 'span' );
		text.className = 'cata-image-lightbox-badge__text';
		text.textContent = state.badgeText;
		badge.appendChild( text );
	}

	if ( state.tooltip ) {
		badge.title = state.tooltip;
		badge.setAttribute( 'aria-label', state.tooltip );
		// Native tooltip on the image itself for mouse users.
		img.title = state.tooltip;
	}

	wrapper.appendChild( badge );

	return badge;
}
