/**
 * Image Lightbox — frontend interactivity
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

// The <dialog> for the current lightbox. Set on init so the manually wired
// content-image listeners (which live outside the interactive region) can open it.
let dialog = null;

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
		open( index ) {
			state.currentIndex = index;
			dialog?.showModal();
		},
		close() {
			dialog?.close();
		},
		next() {
			state.currentIndex = ( state.currentIndex + 1 ) % state.images.length;
		},
		prev() {
			state.currentIndex =
				( state.currentIndex - 1 + state.images.length ) % state.images.length;
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

				img.classList.add( 'is-cata-image-lightbox-trigger' );
				img.addEventListener( 'click', () => actions.open( index ) );

				const badge = addImageHints( img, state.images.length );
				badge.addEventListener( 'click', () => actions.open( index ) );
			} );
		},
	},
} );

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
