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
		// The badges and trigger classes are rendered server-side, so a few
		// delegated listeners on the content container wire them all.
		init() {
			const { ref } = getElement();
			dialog = ref.querySelector( 'dialog' );

			slideImages = Array.from(
				ref.querySelectorAll( '.wp-block-cata-image-lightbox__slide' )
			).map( ( slide ) =>
				slide.querySelector( '.wp-block-cata-image-lightbox__image' )
			);

			const content = document.querySelector( state.contentSelector ) ?? document;

			// Start the slide image downloading as soon as a click looks
			// likely, so it's warm by the time the lightbox opens.
			const warmTrigger = ( event ) => {
				const index = triggerIndex( event.target, ref );

				if ( null !== index ) {
					warm( slideImages[ index ], 'high' );
				}
			};
			content.addEventListener( 'pointerover', warmTrigger, { passive: true } );
			content.addEventListener( 'touchstart', warmTrigger, { passive: true } );

			content.addEventListener( 'click', ( event ) => {
				const index = triggerIndex( event.target, ref );

				if ( null === index ) {
					return;
				}

				const figure = event.target.closest( '.cata-image-lightbox-figure' );

				actions.open( index, figure.querySelector( 'img' ) );
			} );
		},
	},
} );

/**
 * Read the slide index from the badge wrapper around an event's target.
 *
 * @param {EventTarget} target Event target inside the content container.
 * @param {HTMLElement} ref    The block wrapper, so its own markup is skipped.
 *
 * @return {number|null} The slide index, or null when the target isn't a trigger.
 */
function triggerIndex( target, ref ) {
	const figure = target.closest?.( '.cata-image-lightbox-figure' );

	if ( ! figure || ref.contains( figure ) ) {
		return null;
	}

	const index = Number( figure.dataset.cataImageLightboxIndex );

	return Number.isInteger( index ) ? index : null;
}

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
