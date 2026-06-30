/**
 * Image Lightbox — frontend interactivity
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

// The <dialog> for the current lightbox. Set on init so the manually wired
// content-image listeners (which live outside the interactive region) can open it.
let dialog = null;

/**
 * Decorate a clickable content image with the gallery hints: a count badge in
 * the lower-left corner and a tooltip shown on hover.
 *
 * @param {HTMLImageElement} img   The clickable content image.
 * @param {number}           total Total number of images in the gallery.
 */
function addImageHints( img, total ) {
	// Wrap the image so the hints anchor to the image itself, regardless of
	// the surrounding theme markup.
	const wrapper = document.createElement( 'span' );
	wrapper.className = 'cata-image-lightbox-figure';
	img.parentNode.insertBefore( wrapper, img );
	wrapper.appendChild( img );

	const badge = document.createElement( 'span' );
	badge.className = 'cata-image-lightbox-badge';
	badge.setAttribute( 'aria-hidden', 'true' );
	badge.textContent = total;
	wrapper.appendChild( badge );

	const tooltip = document.createElement( 'span' );
	tooltip.className = 'cata-image-lightbox-tooltip';
	tooltip.setAttribute( 'role', 'tooltip' );
	tooltip.textContent = state.tooltip ?? '';
	wrapper.appendChild( tooltip );
}

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

				addImageHints( img, state.images.length );
			} );
		},
	},
} );
