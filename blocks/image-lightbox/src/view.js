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

// The ad slot's element id, included in event details. Set on init.
let adContainerId = null;

// Pending timer for the delayed open event; cleared when the dialog closes
// before it fires.
let openEventTimer = null;

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

			// Delay the open event so the ad request it triggers doesn't
			// compete with the active slide image download.
			openEventTimer = setTimeout( () => {
				openEventTimer = null;
				dispatchLightboxEvent( 'slideshow:open' );
			}, 300 );
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

			adContainerId =
				ref.querySelector( '.wp-block-cata-image-lightbox__ad' )?.id ?? null;

			// The dialog's native close event covers the close button,
			// backdrop clicks, and Escape.
			dialog?.addEventListener( 'close', () => {
				clearTimeout( openEventTimer );
				openEventTimer = null;
				dispatchLightboxEvent( 'slideshow:close' );
			} );

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

				actions.open( index, triggerImage( figure ) );
			} );

			const triggers = wireDetachedTriggers( ref, content );

			// A matching regression fails silently — slides render but
			// nothing opens them — so make it observable.
			if ( state.images.length > 0 && 0 === triggers ) {
				// eslint-disable-next-line no-console
				console.warn(
					`Image Lightbox: ${ state.images.length } slide(s) rendered but no triggers were wired.`
				);
			}

			wireSwipeNavigation(
				ref.querySelector( '.wp-block-cata-image-lightbox__viewport' )
			);
		},
	},
} );

// Horizontal distance, in pixels, a touch must travel before it counts as a
// swipe rather than a tap or a vertical scroll.
const SWIPE_THRESHOLD = 50;

// Horizontal distance, in pixels, before a gesture commits to being a swipe
// (vs. a vertical scroll) and starts blocking the page's own touch handling.
const DIRECTION_LOCK = 10;

/**
 * Wire swipe-to-navigate on the slide viewport.
 *
 * Touch and pen only — mouse users already have the tap-to-navigate zones,
 * the arrow buttons, and the arrow keys, and a mouse-drag gesture would
 * collide with selecting the caption text. `touch-action: pan-y` on the
 * viewport (see style.scss) leaves vertical scrolling (for a slide taller
 * than the viewport) to the browser and hands horizontal movement to this
 * gesture instead of the OS's edge-swipe-back gesture.
 *
 * Swipe direction follows the arrow buttons' fixed left-to-right sense
 * (swipe left = next, swipe right = previous), not text direction.
 *
 * @param {HTMLElement} viewport The slide viewport element.
 */
function wireSwipeNavigation( viewport ) {
	if ( ! viewport ) {
		return;
	}

	let pointerId = null;
	let startX = 0;
	let startY = 0;
	let horizontal = false;

	viewport.addEventListener( 'pointerdown', ( event ) => {
		if ( 'touch' !== event.pointerType && 'pen' !== event.pointerType ) {
			return;
		}

		// A second finger landing mid-gesture (e.g. a pinch) abandons the swipe
		// rather than reading its position as a continuation of the first.
		if ( null !== pointerId ) {
			return;
		}

		pointerId = event.pointerId;
		startX = event.clientX;
		startY = event.clientY;
		horizontal = false;
	} );

	viewport.addEventListener( 'pointermove', ( event ) => {
		if ( event.pointerId !== pointerId ) {
			return;
		}

		const dx = event.clientX - startX;
		const dy = event.clientY - startY;

		if ( ! horizontal && Math.abs( dx ) > DIRECTION_LOCK && Math.abs( dx ) > Math.abs( dy ) ) {
			horizontal = true;
		}

		// Once committed to a horizontal swipe, stop the browser from also
		// rubber-banding or interpreting the same gesture as edge-swipe-back.
		if ( horizontal && event.cancelable ) {
			event.preventDefault();
		}
	} );

	const release = ( event ) => {
		if ( event.pointerId !== pointerId ) {
			return;
		}

		const dx = event.clientX - startX;

		pointerId = null;

		if ( ! horizontal || Math.abs( dx ) < SWIPE_THRESHOLD ) {
			return;
		}

		if ( dx < 0 ) {
			actions.next();
		} else {
			actions.prev();
		}
	};

	viewport.addEventListener( 'pointerup', release );
	viewport.addEventListener( 'pointercancel', () => {
		pointerId = null;
	} );
}

/**
 * Wire badge wrappers that render outside the content container.
 *
 * The featured image's wrapper sits above the content the delegated listeners
 * scan, so it gets its own listeners. Returns the total trigger count, wired
 * here or covered by the delegation.
 *
 * @param {HTMLElement} ref     The block wrapper, so its own markup is skipped.
 * @param {HTMLElement} content The container the delegated listeners cover.
 *
 * @return {number} How many triggers are wired in total.
 */
function wireDetachedTriggers( ref, content ) {
	let wired = 0;

	document
		.querySelectorAll( '.cata-image-lightbox-figure' )
		.forEach( ( figure ) => {
			if ( ref.contains( figure ) ) {
				return;
			}

			wired++;

			// The delegated listeners already cover the content container.
			if ( content.contains( figure ) ) {
				return;
			}

			const index = Number( figure.dataset.cataImageLightboxIndex );

			if ( ! Number.isInteger( index ) ) {
				return;
			}

			const warmSlide = () => warm( slideImages[ index ], 'high' );
			figure.addEventListener( 'pointerover', warmSlide, { passive: true } );
			figure.addEventListener( 'touchstart', warmSlide, { passive: true } );

			figure.addEventListener( 'click', ( event ) => {
				event.preventDefault();
				actions.open( index, triggerImage( figure ) );
			} );
		} );

	return wired;
}

/**
 * Get the trigger image to seed the target slide from.
 *
 * An excluded image opens the gallery without having a slide of its own, so
 * seeding from it would paint the wrong image; those triggers return null.
 *
 * @param {HTMLElement} figure The badge wrapper that was clicked.
 *
 * @return {HTMLImageElement|null} The image to seed from, or null.
 */
function triggerImage( figure ) {
	if ( figure.closest( '.cata-image-lightbox-exclude' ) ) {
		return null;
	}

	return figure.querySelector( 'img' );
}

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
	if ( index === state.currentIndex ) {
		return;
	}

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
	dispatchLightboxEvent( 'slideshow:slidechange' );
}

/**
 * Notify outside integrations, such as the ad script, of lightbox activity.
 *
 * @param {string} name Event name, e.g. 'slideshow:open'.
 */
function dispatchLightboxEvent( name ) {
	document.dispatchEvent(
		new CustomEvent( name, {
			detail: {
				currentIndex: state.currentIndex,
				totalSlides: state.images.length,
				galleryId: dialog?.id || null,
				adContainerId,
			},
		} )
	);
}
