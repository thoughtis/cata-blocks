/**
 * Image Lightbox — frontend interactivity
 *
 * Galleries are wired up here rather than with Interactivity API directives.
 * Directives only bind while the page hydrates, so an article appended later by
 * infinite scroll would show its badges but never open anything.
 */

// Horizontal distance, in pixels, a touch must travel before it counts as a
// swipe rather than a tap or a vertical scroll.
const SWIPE_THRESHOLD = 50;

// Horizontal distance, in pixels, before a gesture commits to being a swipe
// (vs. a vertical scroll) and starts blocking the page's own touch handling.
const DIRECTION_LOCK = 10;

// A phone drag commits after a deliberate distance or a short, fast flick.
// The minimum keeps tiny motions from qualifying on velocity alone.
const DRAG_COMMIT_RATIO = 0.2;
const DRAG_MIN_DISTANCE = 20;
const DRAG_FLICK_VELOCITY = 0.35;

// Matches the transform transition in style.scss; the small buffer is a
// fallback for browsers that fail to deliver transitionend.
const DRAG_SNAP_DURATION = 220;
const DRAG_SNAP_BUFFER = 50;

// Instagram-style pagination stays legible by showing only this many visual
// positions; the exact counter remains the source of truth.
const DOT_WINDOW_SIZE = 7;

// How long the open event waits, in milliseconds, so the ad request it triggers
// doesn't compete with the active slide image download.
const OPEN_EVENT_DELAY = 300;

// How many photos a phone reader sees before the in-stream ad break.
const AD_SLIDE_AFTER = 4;

// Viewports this narrow get the in-stream gallery: the ad becomes a slide of
// its own instead of a box stacked under the photo. Matches the stylesheet's
// phone breakpoint.
const PHONE_QUERY = '( max-width: 599px )';

const REDUCED_MOTION_QUERY = '( prefers-reduced-motion: reduce )';

// The overlay starts from its established 4:3 crop and may grow continuously
// toward square to spend a tall slot. It never turns portrait, so rotation can
// improve coverage without making the same index feel like a different crop
// system. Size limits are structural shares of the slot: two columns is the
// ceiling (no tile owns more than half), while four columns is the readable
// floor. Past that floor the grid scrolls instead of turning photos into dots.
const THUMB_GRID_WIDEST_ASPECT_RATIO = 4 / 3;
const THUMB_GRID_SQUARE_ASPECT_RATIO = 1;
const THUMB_GRID_MIN_COLUMNS = 2;
const THUMB_GRID_MAX_COLUMNS = 4;
const THUMB_GRID_COLUMNS_PROPERTY = '--cata-image-lightbox-grid-columns';
const THUMB_GRID_ASPECT_PROPERTY = '--cata-image-lightbox-grid-aspect-ratio';

// Galleries belonging to infinitely scrolled articles, keyed by the article
// element their content images live in.
const galleries = new Map();

// How many articles have been given a gallery, so each one's ids stay unique.
let articleCount = 0;

// The gallery that rendered with the page, serving every content image that
// isn't inside an article added later.
let pageGallery = null;

/**
 * Choose the largest slot-derived thumbnail that fits every row, bounded by
 * the grid's two-to-four-column density range. Column count is the discrete
 * structure; CSS derives the continuous tile dimensions from the slot.
 *
 * When even four columns cannot fit, keeping four is the scrolling policy: a
 * phone-width tile remains roughly one quarter of its own component instead
 * of shrinking with an arbitrary pixel minimum.
 *
 * @param {number} inlineSize Available content-box width.
 * @param {number} blockSize  Available content-box height.
 * @param {number} columnGap  Horizontal gap between tiles.
 * @param {number} rowGap     Vertical gap between tiles.
 * @param {number} count      Number of rendered thumbnail buttons.
 *
 * @return {Object|null} Column count, aspect ratio, and tile width, or null
 *                       when unsolved.
 */
function solveThumbnailGrid( inlineSize, blockSize, columnGap, rowGap, count ) {
	if ( inlineSize <= 0 || blockSize <= 0 || count <= 0 ) {
		return null;
	}

	const firstCandidate = THUMB_GRID_MIN_COLUMNS;
	// A gallery can render fewer buttons than photos when Photon cannot make a
	// thumbnail. Preserve the half-slot ceiling even when only one survives.
	const lastCandidate = Math.max(
		firstCandidate,
		Math.min( THUMB_GRID_MAX_COLUMNS, count )
	);

	for ( let columns = firstCandidate; columns <= lastCandidate; columns++ ) {
		const tileInlineSize =
			( inlineSize - columnGap * ( columns - 1 ) ) / columns;
		const rows = Math.ceil( count / columns );
		const contentBlockSize =
			( tileInlineSize / THUMB_GRID_WIDEST_ASPECT_RATIO ) * rows +
			rowGap * ( rows - 1 );

		if ( contentBlockSize <= blockSize ) {
			// Grow 4:3 rows into unused height, but stop at square: any space
			// beyond that is a deliberate crop limit rather than an accidental cap.
			const fillingBlockSize =
				( blockSize - rowGap * ( rows - 1 ) ) / rows;
			const tileBlockSize = Math.min(
				tileInlineSize / THUMB_GRID_SQUARE_ASPECT_RATIO,
				fillingBlockSize
			);

			return {
				columns,
				aspectRatio: tileInlineSize / tileBlockSize,
				tileInlineSize,
			};
		}
	}

	return {
		columns: lastCandidate,
		aspectRatio: THUMB_GRID_WIDEST_ASPECT_RATIO,
		tileInlineSize:
			( inlineSize - columnGap * ( lastCandidate - 1 ) ) / lastCandidate,
	};
}

wire();

/**
 * Wire the page's own gallery and listen for the articles infinite scroll adds.
 *
 * The badges and trigger classes are rendered server-side, so a few delegated
 * listeners cover every content image on the page, however it arrived.
 */
function wire() {
	pageGallery = createGallery(
		document.querySelector( '.wp-block-cata-image-lightbox' )
	);

	warnWhenUnwired( pageGallery, document );

	document.addEventListener( 'click', onTriggerClick );
	document.addEventListener( 'pointerover', onTriggerWarm, {
		passive: true,
	} );
	document.addEventListener( 'touchstart', onTriggerWarm, { passive: true } );
	document.addEventListener(
		'cata-blocks:infinite-scroll:load',
		onArticleLoad
	);
}

/**
 * Give an infinitely scrolled article a gallery of its own.
 *
 * The lightbox block usually renders outside the infinite scroll wrapper, so
 * the article arrives with its badges but without its slides; those come from
 * the fetched document before it is discarded. Its badge indices count from its
 * own first image, so the article needs a gallery of its own rather than a
 * place in the page's.
 *
 * @param {CustomEvent} event The infinite scroll load event.
 */
function onArticleLoad( event ) {
	const { article, source } = event.detail ?? {};

	if ( ! article || ! source ) {
		return;
	}

	let region = article.querySelector( '.wp-block-cata-image-lightbox' );

	if ( ! region ) {
		const fetched = source.querySelector( '.wp-block-cata-image-lightbox' );

		// An article with too few images renders no gallery, and no badges to
		// open one with either.
		if ( ! fetched ) {
			return;
		}

		// The gallery goes on the body rather than into the article: it is a
		// modal, and an empty wrapper in the article's flow would take on the
		// content area's block spacing.
		region = document.body.appendChild(
			document.importNode( fetched, true )
		);
	}

	articleCount++;
	renameIds( region, articleCount );

	const gallery = createGallery( region );

	if ( ! gallery ) {
		return;
	}

	galleries.set( article, gallery );
	warnWhenUnwired( gallery, article );
}

/**
 * Namespace a newly arrived gallery's ids.
 *
 * The markup comes from a page where it was the only gallery, so its dialog and
 * ad container ids repeat the ones already in the document.
 *
 * @param {HTMLElement} region The gallery's block wrapper.
 * @param {number}      suffix Number that makes this article's ids its own.
 */
function renameIds( region, suffix ) {
	const renamed = new Map();

	region.querySelectorAll( '[id]' ).forEach( ( element ) => {
		const oldId = element.id;
		const newId = `${ oldId }-${ suffix }`;

		renamed.set( oldId, newId );
		element.id = newId;
	} );

	// Imported disclosure controls still point at the source page's ids unless
	// every IDREF token is namespaced along with its target. Multiple ids are
	// valid in labelledby/describedby, so rewrite token-by-token.
	[ 'aria-controls', 'aria-labelledby', 'aria-describedby' ].forEach(
		( attribute ) => {
			region
				.querySelectorAll( `[${ attribute }]` )
				.forEach( ( element ) => {
					const value = element.getAttribute( attribute );

					if ( ! value ) {
						return;
					}

					element.setAttribute(
						attribute,
						value
							.trim()
							.split( /\s+/ )
							.map( ( id ) => renamed.get( id ) ?? id )
							.join( ' ' )
					);
				} );
		}
	);
}

/**
 * Open the gallery a clicked content image belongs to.
 *
 * @param {MouseEvent} event A click anywhere on the page.
 */
function onTriggerClick( event ) {
	const figure = event.target.closest?.( '.cata-image-lightbox-figure' );

	if ( ! figure ) {
		return;
	}

	const gallery = galleryFor( figure );
	const index = triggerIndex( figure );

	if ( ! gallery || null === index ) {
		return;
	}

	// An index past the end means the image was matched to the wrong article's
	// gallery, which would otherwise open silently on the wrong slide.
	if ( index >= gallery.total ) {
		// eslint-disable-next-line no-console
		console.warn(
			`Image Lightbox: a content image asked for slide ${
				index + 1
			} of ${ gallery.total }.`
		);
		return;
	}

	event.preventDefault();
	gallery.open( index, triggerImage( figure ) );
}

/**
 * Start the slide image downloading as soon as a click looks likely, so it's
 * warm by the time the lightbox opens.
 *
 * @param {Event} event A pointer or touch event anywhere on the page.
 */
function onTriggerWarm( event ) {
	const figure = event.target.closest?.( '.cata-image-lightbox-figure' );

	if ( ! figure ) {
		return;
	}

	const gallery = galleryFor( figure );
	const index = triggerIndex( figure );

	if ( gallery && null !== index ) {
		gallery.warmSlide( index );
	}
}

/**
 * Find the gallery a content image opens.
 *
 * @param {HTMLElement} figure The badge wrapper around a content image.
 *
 * @return {Object|null} The gallery, or null when the page has none.
 */
function galleryFor( figure ) {
	for ( const [ article, gallery ] of galleries ) {
		if ( article.contains( figure ) ) {
			return gallery;
		}
	}

	return pageGallery;
}

/**
 * Read the slide index off a content image's badge wrapper.
 *
 * @param {HTMLElement} figure The badge wrapper around a content image.
 *
 * @return {number|null} The slide index, or null when the wrapper has none.
 */
function triggerIndex( figure ) {
	const index = Number( figure.dataset.cataImageLightboxIndex );

	return Number.isInteger( index ) ? index : null;
}

/**
 * A matching regression fails silently — slides render but nothing opens
 * them — so make it observable.
 *
 * @param {Object|null}          gallery The gallery wired for this root.
 * @param {Document|HTMLElement} root    Where its content images should be.
 */
function warnWhenUnwired( gallery, root ) {
	if ( ! gallery || 0 === gallery.total ) {
		return;
	}

	if ( root.querySelector( '.cata-image-lightbox-figure' ) ) {
		return;
	}

	// eslint-disable-next-line no-console
	console.warn(
		`Image Lightbox: ${ gallery.total } slide(s) rendered but no content images open them.`
	);
}

/**
 * Wire a lightbox region into a working gallery.
 *
 * @param {HTMLElement|null} region The block wrapper holding the dialog.
 *
 * @return {Object|null} The gallery, or null when the region has no dialog.
 */
function createGallery( region ) {
	const dialog = region?.querySelector(
		'.wp-block-cata-image-lightbox__dialog'
	);

	if ( ! dialog ) {
		return null;
	}

	const phoneMedia = window.matchMedia( PHONE_QUERY );

	// Ad placement is an immutable wiring-time decision. This is the only call
	// that may move the container; later breakpoint changes update controls but
	// never reparent a potentially filled iframe.
	const adSlidePosition = insertAdSlide( region, phoneMedia.matches );

	region.classList.toggle(
		'has-cata-image-lightbox-ad-slide',
		adSlidePosition >= 0
	);

	const slides = Array.from(
		region.querySelectorAll( '.wp-block-cata-image-lightbox__slide' )
	);

	// Photos only; the counter, hash, thumbnails, badges, and events all speak
	// photo numbers, so the ad break never shifts anything the reader can see.
	const photoCount = slides.length - ( adSlidePosition >= 0 ? 1 : 0 );

	// Slide images and their tiny blurred previews, ordered to match the slides.
	const images = slides.map( ( slide ) =>
		slide.querySelector( '.wp-block-cata-image-lightbox__image' )
	);
	const placeholders = slides.map( ( slide ) =>
		slide.querySelector( '.wp-block-cata-image-lightbox__placeholder' )
	);

	const counter = region.querySelector(
		'.wp-block-cata-image-lightbox__counter'
	);

	const panel = region.querySelector(
		'.wp-block-cata-image-lightbox__panel'
	);
	const viewport = region.querySelector(
		'.wp-block-cata-image-lightbox__viewport'
	);
	const prevButton = region.querySelector(
		'.wp-block-cata-image-lightbox__prev'
	);
	const nextButton = region.querySelector(
		'.wp-block-cata-image-lightbox__next'
	);
	const prevZone = region.querySelector(
		'.wp-block-cata-image-lightbox__navzone--prev'
	);
	const nextZone = region.querySelector(
		'.wp-block-cata-image-lightbox__navzone--next'
	);
	const dots = Array.from(
		region.querySelectorAll( '.wp-block-cata-image-lightbox__dot' )
	);

	// Thumbnail strip, keyed by the slide index each thumbnail carries rather
	// than by position: an image the CDN can't resize renders no thumbnail.
	const strip = region.querySelector(
		'.wp-block-cata-image-lightbox__thumbs'
	);
	const thumbs = new Map(
		Array.from(
			region.querySelectorAll( '.wp-block-cata-image-lightbox__thumb' )
		).map( ( thumb ) => [
			Number( thumb.dataset.cataImageLightboxIndex ),
			thumb,
		] )
	);
	const thumbEntries = Array.from( thumbs.entries() ).sort(
		( [ first ], [ second ] ) => first - second
	);
	const thumbnailImages = thumbEntries
		.map( ( [ , thumb ] ) =>
			thumb.querySelector( '.wp-block-cata-image-lightbox__thumb-image' )
		)
		.filter( Boolean );
	const thumbnailWidths = new Map(
		thumbnailImages.map( ( image ) => [
			image,
			( image.dataset.cataImageLightboxWidths || '' )
				.split( ',' )
				.map( Number )
				.filter( ( width ) => Number.isFinite( width ) && width > 0 ),
		] )
	);
	const allPhotosButton = region.querySelector(
		'.wp-block-cata-image-lightbox__all-photos'
	);
	const captionsById = new Map(
		Array.from(
			region.querySelectorAll(
				'.wp-block-cata-image-lightbox__caption[id]'
			)
		).map( ( caption ) => [ caption.id, caption ] )
	);
	const infoPanels = new Map(
		Array.from(
			region.querySelectorAll( '.wp-block-cata-image-lightbox__info' )
		).map( ( button ) => [
			button,
			captionsById.get( button.getAttribute( 'aria-controls' ) ) ?? null,
		] )
	);

	// The ad slot's element id, included in event details.
	const adContainerId =
		region.querySelector( '.wp-block-cata-image-lightbox__ad' )?.id ?? null;

	let currentIndex = 0;

	// Bumped on every open/navigation so a slow decode can't reveal a stale slide.
	let navigation = 0;

	// Pending timer for the delayed open event; cleared when the dialog closes
	// before it fires.
	let openEventTimer = null;

	// Whether this gallery owns a history entry pushed on open, so the back
	// gesture closes the lightbox instead of leaving the article.
	let historyEntry = false;

	// Where the article stood when the gallery opened, put back once that entry
	// is unwound.
	let openScrollY = 0;

	// The photo most recently shown, so events fired from the ad break can
	// still report a real photo position.
	let currentPhotoIndex = 0;

	// Phone-only disclosure state. Keeping this separate from slide state makes
	// breakpoint changes reversible without touching the fixed ad placement.
	let indexOpen = false;
	let openInfoButton = null;

	// Gesture state is deliberately separate from slide state. Only the
	// current slide and its immediate sequence neighbors ever receive live
	// layout classes; the ad's own always-laid-out rule remains untouched.
	const reducedMotion = window.matchMedia( REDUCED_MOTION_QUERY );
	let dragWindow = null;
	let dragTimer = null;
	let dragTransitionSlide = null;
	let dragTransitionEnd = null;
	let finishDragPromise = null;
	let finishDragResolve = null;
	let swipeNavigation = null;

	/**
	 * Slide position of a photo index; positions at or past the ad break sit
	 * one further along.
	 *
	 * @param {number} photoIndex Photo index, as badges and thumbnails carry.
	 *
	 * @return {number} Slide position.
	 */
	function slidePositionFor( photoIndex ) {
		if ( adSlidePosition >= 0 && photoIndex >= adSlidePosition ) {
			return photoIndex + 1;
		}

		return photoIndex;
	}

	/**
	 * Photo index of a slide position, or -1 for the ad break.
	 *
	 * @param {number} position Slide position.
	 *
	 * @return {number} Photo index, or -1.
	 */
	function photoIndexFor( position ) {
		if ( adSlidePosition < 0 || position < adSlidePosition ) {
			return position;
		}

		if ( position === adSlidePosition ) {
			return -1;
		}

		return position - 1;
	}

	/**
	 * Update the visual, non-interactive dot window for a photo.
	 *
	 * @param {number} photoIndex Photo index, or -1 for the ad break.
	 */
	function updateDots( photoIndex ) {
		const windowStart = Math.min(
			Math.max( photoIndex - Math.floor( DOT_WINDOW_SIZE / 2 ), 0 ),
			Math.max( photoCount - DOT_WINDOW_SIZE, 0 )
		);

		dots.forEach( ( dot, slot ) => {
			const representedIndex = windowStart + slot;
			const active = photoIndex >= 0 && representedIndex === photoIndex;

			dot.classList.toggle( 'is-active', active );
			dot.classList.toggle(
				'is-overflow-start',
				photoIndex >= 0 && 0 === slot && windowStart > 0 && ! active
			);
			dot.classList.toggle(
				'is-overflow-end',
				photoIndex >= 0 &&
					slot === dots.length - 1 &&
					windowStart + dots.length < photoCount &&
					! active
			);
		} );
	}

	/**
	 * Disable bounded phone controls at the sequence ends. Desktop wrapping is
	 * restored whenever the live media query no longer matches.
	 */
	function updatePhoneNavigation() {
		const atStart = phoneMedia.matches && 0 === currentIndex;
		const atEnd = phoneMedia.matches && currentIndex === slides.length - 1;

		if ( prevButton ) {
			prevButton.disabled = atStart;
		}

		if ( nextButton ) {
			nextButton.disabled = atEnd;
		}

		region.classList.toggle( 'is-cata-image-lightbox-at-start', atStart );
		region.classList.toggle( 'is-cata-image-lightbox-at-end', atEnd );
	}

	/**
	 * Find the rendered thumbnail nearest a photo index. Some images have no
	 * thumbnail URL, so an exact button is not guaranteed.
	 *
	 * @param {number} photoIndex Photo index.
	 *
	 * @return {HTMLButtonElement|null} Closest thumbnail button.
	 */
	function nearestThumb( photoIndex ) {
		if ( 0 === thumbEntries.length ) {
			return null;
		}

		return thumbEntries.reduce( ( nearest, entry ) =>
			Math.abs( entry[ 0 ] - photoIndex ) <
			Math.abs( nearest[ 0 ] - photoIndex )
				? entry
				: nearest
		)[ 1 ];
	}

	/**
	 * Move the thumbnail index's one keyboard tab stop without selecting a
	 * photo. Selection remains expressed separately by aria-current.
	 *
	 * @param {HTMLButtonElement|null} target Thumbnail receiving the tab stop.
	 */
	function setThumbTabStop( target ) {
		thumbs.forEach( ( thumb ) => {
			thumb.tabIndex = thumb === target ? 0 : -1;
		} );
	}

	/**
	 * Point each thumbnail at the smallest honest rendition that covers its
	 * device-pixel width. Sources only grow after their first choice, so rotation
	 * never pays for a second, smaller download.
	 *
	 * @param {number} inlineSize Rendered tile width in CSS pixels.
	 */
	function updateThumbnailSources( inlineSize ) {
		if ( inlineSize <= 0 ) {
			return;
		}

		const requiredWidth = Math.ceil( inlineSize * window.devicePixelRatio );

		thumbnailWidths.forEach( ( widths, image ) => {
			if ( 0 === widths.length ) {
				return;
			}

			const nextWidth =
				widths.find( ( width ) => width >= requiredWidth ) ??
				widths[ widths.length - 1 ];
			let source;

			try {
				source = new URL(
					image.getAttribute( 'src' ),
					window.location.href
				);
			} catch ( error ) {
				return;
			}

			const currentWidth = Number( source.searchParams.get( 'w' ) );

			if (
				Number.isFinite( currentWidth ) &&
				currentWidth >= nextWidth
			) {
				return;
			}

			source.searchParams.set( 'w', String( nextWidth ) );
			image.src = source.toString();
		} );
	}

	/**
	 * Upgrade the fixed desktop strip after showModal() gives it geometry. The
	 * layout itself stays at its established 72x52px; only DPR can raise its
	 * selected source above the 144px server fallback.
	 */
	function updateDesktopThumbnailSources() {
		if (
			phoneMedia.matches ||
			! dialog.open ||
			0 === thumbEntries.length
		) {
			return;
		}

		updateThumbnailSources(
			thumbEntries[ 0 ][ 1 ].getBoundingClientRect().width
		);
	}

	/**
	 * Solve the phone index from its own rendered content box. Padding and gaps
	 * come from computed CSS so themes can restyle the slot without making the
	 * JavaScript's geometry stale.
	 */
	function layoutThumbnailGrid() {
		if (
			! phoneMedia.matches ||
			! indexOpen ||
			! strip ||
			0 === thumbEntries.length
		) {
			return;
		}

		const styles = window.getComputedStyle( strip );
		const pixels = ( value ) => {
			const parsed = Number.parseFloat( value );

			return Number.isFinite( parsed ) ? parsed : 0;
		};
		const inlineSize =
			strip.clientWidth -
			pixels( styles.paddingLeft ) -
			pixels( styles.paddingRight );
		const blockSize =
			strip.clientHeight -
			pixels( styles.paddingTop ) -
			pixels( styles.paddingBottom );
		const layout = solveThumbnailGrid(
			inlineSize,
			blockSize,
			pixels( styles.columnGap ),
			pixels( styles.rowGap ),
			thumbEntries.length
		);

		if ( layout ) {
			strip.style.setProperty(
				THUMB_GRID_COLUMNS_PROPERTY,
				String( layout.columns )
			);
			strip.style.setProperty(
				THUMB_GRID_ASPECT_PROPERTY,
				String( layout.aspectRatio )
			);

			// This runs synchronously in the task that reveals the lazy grid, so
			// the first request uses the solved device-pixel width rather than the
			// 144px desktop fallback.
			updateThumbnailSources( layout.tileInlineSize );
		}
	}

	/**
	 * Close the on-demand phone index.
	 *
	 * @param {boolean} restoreFocus Whether focus returns to its disclosure.
	 *
	 * @return {boolean} Whether an open index was closed.
	 */
	function closeIndex( restoreFocus = false ) {
		if ( ! indexOpen ) {
			return false;
		}

		indexOpen = false;
		region.classList.remove( 'is-cata-image-lightbox-index-open' );
		allPhotosButton?.setAttribute( 'aria-expanded', 'false' );
		setThumbTabStop( nearestThumb( currentPhotoIndex ) );

		if ( restoreFocus && dialog.open ) {
			allPhotosButton?.focus( { preventScroll: true } );
		}

		return true;
	}

	/**
	 * Open the phone thumbnail grid and focus its current (or nearest) photo.
	 */
	function openIndex() {
		if ( ! phoneMedia.matches || ! strip || ! allPhotosButton ) {
			return;
		}

		closeInfo();
		indexOpen = true;
		region.classList.add( 'is-cata-image-lightbox-index-open' );
		allPhotosButton.setAttribute( 'aria-expanded', 'true' );
		// Adding the class gives the absolute grid its real slot immediately; the
		// forced read inside the solve prevents a frame of fallback-sized tiles.
		layoutThumbnailGrid();

		const thumb = nearestThumb( currentPhotoIndex );
		setThumbTabStop( thumb );

		// The grid has no geometry until its open class paints. Focus and center
		// after that layout exists, without letting the dialog itself scroll.
		window.requestAnimationFrame( () => {
			if ( ! indexOpen || ! thumb ) {
				return;
			}

			strip.scrollTop = Math.max(
				0,
				thumb.offsetTop -
					( strip.clientHeight - thumb.offsetHeight ) / 2
			);
			thumb.focus( { preventScroll: true } );
		} );
	}

	/**
	 * Close the active photo's Info sheet.
	 *
	 * @param {boolean} restoreFocus Whether focus returns to the Info button.
	 *
	 * @return {boolean} Whether an open sheet was closed.
	 */
	function closeInfo( restoreFocus = false ) {
		if ( ! openInfoButton ) {
			return false;
		}

		const button = openInfoButton;
		const caption = infoPanels.get( button );

		openInfoButton = null;
		button.setAttribute( 'aria-expanded', 'false' );
		button.textContent = button.dataset.cataOpenLabel || 'Info';
		button
			.closest( '.wp-block-cata-image-lightbox__slide' )
			?.classList.remove( 'is-info-open' );

		if ( caption ) {
			caption.classList.remove( 'is-open' );
			caption.hidden = phoneMedia.matches;
		}

		if ( restoreFocus && dialog.open ) {
			button.focus( { preventScroll: true } );
		}

		return true;
	}

	/**
	 * Reveal a photo's full sanitized caption/credit sheet.
	 *
	 * @param {HTMLButtonElement} button The photo's Info disclosure.
	 */
	function openInfo( button ) {
		const caption = infoPanels.get( button );

		if ( ! phoneMedia.matches || ! caption ) {
			return;
		}

		closeIndex();
		closeInfo();
		openInfoButton = button;
		button.setAttribute( 'aria-expanded', 'true' );
		button.textContent = button.dataset.cataCloseLabel || 'Close info';
		button
			.closest( '.wp-block-cata-image-lightbox__slide' )
			?.classList.add( 'is-info-open' );
		caption.hidden = false;
		caption.classList.add( 'is-open' );
	}

	/**
	 * Close phone overlays before a slide change. If focus lives in content
	 * that is about to disappear, put it on the stable panel first.
	 */
	function closeOverlaysForNavigation() {
		const activeElement = dialog.ownerDocument.activeElement;
		const focusWillDisappear =
			slides[ currentIndex ]?.contains( activeElement ) ||
			( indexOpen && strip?.contains( activeElement ) );

		closeInfo();
		closeIndex();

		if ( focusWillDisappear ) {
			panel?.focus( { preventScroll: true } );
		}
	}

	/**
	 * Apply the live phone control mode without reconsidering ad placement.
	 */
	function syncPhoneMode() {
		if ( ! phoneMedia.matches ) {
			swipeNavigation?.cancel();
			closeIndex();
			closeInfo();
		}

		infoPanels.forEach( ( caption, button ) => {
			if ( ! caption ) {
				return;
			}

			caption.hidden = phoneMedia.matches && button !== openInfoButton;
		} );

		updatePhoneNavigation();
		updateDesktopThumbnailSources();
	}

	/**
	 * Open the gallery on a slide.
	 *
	 * @param {number}                photoIndex Photo index to open on.
	 * @param {HTMLImageElement|null} trigger    The content image that was clicked.
	 */
	function open( photoIndex, trigger ) {
		const index = slidePositionFor( photoIndex );

		swipeNavigation?.cancel();
		closeIndex();
		closeInfo();

		// Warm first so the slide's load is no longer deferred, then paint the
		// rendition the reader is already looking at while the full-size
		// candidate downloads.
		warmAround( index );
		seedSlide( images[ index ], trigger?.currentSrc );
		showPlaceholder( index );
		navigation++;
		show( index );
		openScrollY = window.scrollY;
		dialog.showModal();
		updateDesktopThumbnailSources();
		pushHistoryEntry();

		// showModal() focuses the first focusable element, which is the close
		// button: an Enter-opener pressing Enter again would close what they
		// just opened, and the ring would show for mouse and touch readers too.
		panel?.focus();

		// The strip has no geometry until the dialog is displayed, so the
		// opening slide's thumbnail is centered here rather than in show().
		scrollThumbIntoView( photoIndex, 'instant' );

		// Delay the open event so the ad request it triggers doesn't compete
		// with the active slide image download.
		openEventTimer = setTimeout( () => {
			openEventTimer = null;
			setSlideHash();
			dispatchLightboxEvent( 'slideshow:open' );
		}, OPEN_EVENT_DELAY );
	}

	/**
	 * Push a history entry the back gesture can pop to close the gallery.
	 *
	 * Without one, iOS Safari's back swipe leaves the article entirely while
	 * the lightbox is open. Browsers with CloseWatcher already treat a back
	 * gesture as a close request and dismiss the dialog themselves, so adding
	 * an entry there would cost those readers a second back press to leave.
	 */
	function pushHistoryEntry() {
		if ( 'CloseWatcher' in window ) {
			return;
		}

		// Carry the existing state forward so infinite scroll's own title and
		// article index survive on the entry this one sits above.
		window.history.pushState( { ...window.history.state }, '' );
		historyEntry = true;
	}

	/**
	 * Put the article back where it stood before the gallery opened.
	 *
	 * Unwinding the pushed entry hands infinite scroll a popstate of its own,
	 * which it answers by scrolling that article to the top of the viewport —
	 * so closing the gallery would otherwise lose the reader's place. Deferred
	 * a frame so it lands after every popstate listener has had its turn.
	 */
	function restoreScroll() {
		window.requestAnimationFrame( () => window.scrollTo( 0, openScrollY ) );
	}

	/**
	 * Close the gallery.
	 */
	function close() {
		dialog.close();
	}

	/**
	 * Step forward one slide. Phones stop at the end; desktop keeps wrapping.
	 */
	function next() {
		if ( phoneMedia.matches && currentIndex === slides.length - 1 ) {
			return;
		}

		showSlide( ( currentIndex + 1 ) % slides.length );
	}

	/**
	 * Step back one slide. Phones stop at the start; desktop keeps wrapping.
	 */
	function prev() {
		if ( phoneMedia.matches && 0 === currentIndex ) {
			return;
		}

		showSlide( ( currentIndex - 1 + slides.length ) % slides.length );
	}

	/**
	 * Make a slide the current one.
	 *
	 * @param {number} index Slide index.
	 */
	function show( index ) {
		currentIndex = index;

		const photoIndex = photoIndexFor( index );

		if ( photoIndex >= 0 ) {
			currentPhotoIndex = photoIndex;
		}

		slides.forEach( ( slide, position ) =>
			slide.classList.toggle( 'is-active', position === index )
		);

		// The ad break drops the whole-image tap zones (see stylesheet) so the
		// creative is tappable; swipe and the nav row still navigate.
		region.classList.toggle(
			'is-cata-image-lightbox-ad-slide',
			photoIndex < 0
		);

		if ( counter ) {
			counter.textContent =
				photoIndex < 0
					? region.dataset.cataAdCounter || 'Ad'
					: `${ photoIndex + 1 } / ${ photoCount }`;
		}

		updateDots( photoIndex );
		updatePhoneNavigation();
		markThumb( photoIndex );
		scrollThumbIntoView( photoIndex );
	}

	/**
	 * Move the strip's marker and its single tab stop to a thumbnail.
	 *
	 * @param {number} index Slide index.
	 */
	function markThumb( index ) {
		// Arrowing through slides while a thumbnail has focus would otherwise
		// drop that focus as its tab stop moves away.
		const focused = strip?.contains( dialog.ownerDocument.activeElement );
		const tabStop = nearestThumb( index >= 0 ? index : currentPhotoIndex );

		thumbs.forEach( ( thumb, position ) => {
			const active = position === index;

			thumb.classList.toggle( 'is-active', active );

			if ( ! indexOpen ) {
				thumb.tabIndex = thumb === tabStop ? 0 : -1;
			}

			if ( active ) {
				thumb.setAttribute( 'aria-current', 'true' );
			} else {
				thumb.removeAttribute( 'aria-current' );
			}
		} );

		if ( focused ) {
			// The scroll is ours to do; the browser's would move the panel too.
			tabStop?.focus( { preventScroll: true } );
		}
	}

	/**
	 * Center a thumbnail in the strip, scrolling the strip alone.
	 *
	 * @param {number} index    Slide index.
	 * @param {string} behavior Scroll behavior. The default defers to the
	 *                          stylesheet, which eases only when the reader
	 *                          hasn't asked for reduced motion; pass 'instant'
	 *                          to jump regardless.
	 */
	function scrollThumbIntoView( index, behavior = 'auto' ) {
		const thumb = thumbs.get( index );

		if ( ! strip || ! thumb || ( phoneMedia.matches && ! indexOpen ) ) {
			return;
		}

		// Scrolled by a measured delta rather than to an absolute offset: where
		// scrollLeft reads zero depends on the writing direction, but the
		// distance between two boxes doesn't.
		const thumbBox = thumb.getBoundingClientRect();
		const stripBox = strip.getBoundingClientRect();

		strip.scrollBy( {
			left:
				thumbBox.left -
				stripBox.left -
				( stripBox.width - thumbBox.width ) / 2,
			behavior,
		} );
	}

	/**
	 * Navigate to a slide, waiting for its image so the outgoing slide stays
	 * visible until the incoming one can paint — a crossfade, not a blank flash.
	 *
	 * @param {number}  index                Slide index to show.
	 * @param {Object}  options              Navigation behavior.
	 * @param {boolean} options.waitForImage Keep the outgoing slide until decode.
	 * @param {boolean} options.fromDrag     Whether a live snap owns cleanup.
	 */
	async function showSlide(
		index,
		{ waitForImage = true, fromDrag = false } = {}
	) {
		if ( ! fromDrag ) {
			swipeNavigation?.cancel();
		}

		closeOverlaysForNavigation();

		if ( index === currentIndex ) {
			return;
		}

		warmAround( index );
		showPlaceholder( index );

		const token = ++navigation;
		const img = images[ index ];

		if ( waitForImage && img && ! img.complete ) {
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

		show( index );

		if ( photoIndexFor( index ) < 0 ) {
			// Its own event, not slidechange: photo analytics stay photo-pure,
			// and the ad script gets an unambiguous refresh moment to adopt.
			dispatchLightboxEvent( 'slideshow:adslide' );
			return;
		}

		setSlideHash();
		dispatchLightboxEvent( 'slideshow:slidechange' );
	}

	/**
	 * Warm a slide image and its neighbors so next/prev is instant.
	 *
	 * @param {number} index Slide index about to be shown.
	 */
	function warmAround( index ) {
		const total = slides.length;

		warm( images[ index ], 'high' );

		if ( total > 1 ) {
			warmNeighbor( index, 1, total );
			warmNeighbor( index, -1, total );
		}
	}

	/**
	 * Warm the nearest photo in a direction, stepping past the imageless ad
	 * break so approaching it never leaves the photo beyond it cold.
	 *
	 * @param {number} index     Slide position warming happens around.
	 * @param {number} direction 1 for next, -1 for previous.
	 * @param {number} total     Slide count.
	 */
	function warmNeighbor( index, direction, total ) {
		let neighbor = index + direction;

		if ( phoneMedia.matches && ( neighbor < 0 || neighbor >= total ) ) {
			return;
		}

		neighbor = ( neighbor + total ) % total;

		if ( ! images[ neighbor ] ) {
			neighbor += direction;

			if ( phoneMedia.matches && ( neighbor < 0 || neighbor >= total ) ) {
				return;
			}

			neighbor = ( neighbor + total ) % total;
		}

		warm( images[ neighbor ] );
	}

	/**
	 * Show a tiny blurred preview behind a slide's image while it loads, so
	 * navigating to an unloaded slide reveals a soft preview instead of a blank
	 * gap on a slow connection. Clears itself once the full image is ready.
	 *
	 * @param {number} index Slide index.
	 */
	function showPlaceholder( index ) {
		const placeholder = placeholders[ index ];
		const img = images[ index ];

		if ( ! placeholder || ! img || img.complete ) {
			return;
		}

		if ( ! placeholder.src ) {
			const tiny = tinyPreviewSrc( img.getAttribute( 'src' ) );

			if ( ! tiny ) {
				return;
			}

			placeholder.src = tiny;
		}

		placeholder.classList.add( 'is-visible' );

		img.decode()
			.catch( () => {} )
			.finally( () => placeholder.classList.remove( 'is-visible' ) );
	}

	/**
	 * Lay out the current slide and only its immediate sequence neighbors for a
	 * direct phone drag. Other photo slides retain display:none and no geometry;
	 * the ad retains its independent visibility-based measurability contract.
	 *
	 * @return {Object|null} The live window, or null when layout is unavailable.
	 */
	function startDragWindow() {
		if ( ! viewport || dragWindow ) {
			return null;
		}

		const width =
			viewport.getBoundingClientRect().width || viewport.clientWidth;

		if ( width <= 0 ) {
			return null;
		}

		// A direct gesture supersedes a button navigation still waiting on decode.
		navigation++;
		closeOverlaysForNavigation();

		const previousIndex = currentIndex > 0 ? currentIndex - 1 : null;
		const nextIndex =
			currentIndex < slides.length - 1 ? currentIndex + 1 : null;

		dragWindow = {
			currentIndex,
			previousIndex,
			nextIndex,
			width,
			neighborState: new Map(),
		};

		slides[ currentIndex ].classList.add(
			'is-cata-image-lightbox-drag-current'
		);

		[ previousIndex, nextIndex ].forEach( ( index, direction ) => {
			if ( null === index ) {
				return;
			}

			dragWindow.neighborState.set( index, {
				ariaHidden: slides[ index ].getAttribute( 'aria-hidden' ),
				inert: slides[ index ].inert,
			} );
			slides[ index ].setAttribute( 'aria-hidden', 'true' );
			slides[ index ].inert = true;
			slides[ index ].classList.add(
				0 === direction
					? 'is-cata-image-lightbox-drag-previous'
					: 'is-cata-image-lightbox-drag-next'
			);
			warm( images[ index ] );
			showPlaceholder( index );
		} );

		viewport.style.setProperty(
			'--cata-image-lightbox-drag-offset',
			'0px'
		);
		viewport.classList.add( 'is-cata-image-lightbox-dragging' );

		return dragWindow;
	}

	/**
	 * Track a horizontal pointer within the live slide window, with a small
	 * resistance at bounded sequence ends.
	 *
	 * @param {number} offset Raw distance from pointer-down, in CSS pixels.
	 */
	function moveDragWindow( offset ) {
		if ( ! viewport || ! dragWindow ) {
			return;
		}

		let constrained = offset;

		if (
			( offset > 0 && null === dragWindow.previousIndex ) ||
			( offset < 0 && null === dragWindow.nextIndex )
		) {
			constrained *= 0.22;
		}

		constrained = Math.max(
			-dragWindow.width,
			Math.min( dragWindow.width, constrained )
		);
		viewport.style.setProperty(
			'--cata-image-lightbox-drag-offset',
			`${ constrained }px`
		);
	}

	/**
	 * Remove transition listeners/timers for the active snap.
	 */
	function clearDragTransition() {
		clearTimeout( dragTimer );
		dragTimer = null;

		if ( dragTransitionSlide && dragTransitionEnd ) {
			dragTransitionSlide.removeEventListener(
				'transitionend',
				dragTransitionEnd
			);
		}

		dragTransitionSlide = null;
		dragTransitionEnd = null;
	}

	/**
	 * Remove every temporary live-window class without touching is-active or
	 * the ad slide's permanent layout rule.
	 */
	function cleanDragWindow() {
		if ( ! viewport || ! dragWindow ) {
			return;
		}

		const windowIndices = [
			dragWindow.currentIndex,
			dragWindow.previousIndex,
			dragWindow.nextIndex,
		];

		windowIndices.forEach( ( index ) => {
			if ( null === index ) {
				return;
			}

			const neighborState = dragWindow.neighborState.get( index );

			if ( neighborState ) {
				if ( null === neighborState.ariaHidden ) {
					slides[ index ].removeAttribute( 'aria-hidden' );
				} else {
					slides[ index ].setAttribute(
						'aria-hidden',
						neighborState.ariaHidden
					);
				}

				slides[ index ].inert = neighborState.inert;
			}

			slides[ index ].classList.remove(
				'is-cata-image-lightbox-drag-current',
				'is-cata-image-lightbox-drag-previous',
				'is-cata-image-lightbox-drag-next'
			);
		} );

		viewport.classList.remove(
			'is-cata-image-lightbox-dragging',
			'is-cata-image-lightbox-snapping'
		);
		viewport.style.removeProperty( '--cata-image-lightbox-drag-offset' );
		dragWindow = null;
	}

	/**
	 * Complete or cancel a snap, resolving the pointer engine's settling state.
	 *
	 * @param {number|null} targetIndex Target slide, or null for snap-back.
	 */
	function completeDragWindow( targetIndex ) {
		const resolve = finishDragResolve;

		clearDragTransition();
		finishDragPromise = null;
		finishDragResolve = null;

		if ( null !== targetIndex ) {
			showSlide( targetIndex, {
				waitForImage: false,
				fromDrag: true,
			} );
		}

		cleanDragWindow();
		resolve?.();
	}

	/**
	 * Snap a tracked drag to its neighbor or back to the current slide.
	 *
	 * @param {number} offset   Raw distance from pointer-down.
	 * @param {number} velocity Recent horizontal velocity in pixels/ms.
	 *
	 * @return {Promise<void>} Resolves when the live window is cleaned up.
	 */
	function finishDragWindow( offset, velocity ) {
		if ( ! viewport || ! dragWindow ) {
			return Promise.resolve();
		}

		const farEnough =
			Math.abs( offset ) >= dragWindow.width * DRAG_COMMIT_RATIO;
		const fastEnough =
			Math.abs( offset ) >= DRAG_MIN_DISTANCE &&
			Math.abs( velocity ) >= DRAG_FLICK_VELOCITY;
		let targetIndex = null;

		if ( farEnough || fastEnough ) {
			targetIndex =
				offset < 0 ? dragWindow.nextIndex : dragWindow.previousIndex;
		}

		let targetOffset = 0;

		if ( null !== targetIndex ) {
			targetOffset = offset < 0 ? -dragWindow.width : dragWindow.width;
		}

		viewport.classList.remove( 'is-cata-image-lightbox-dragging' );
		viewport.classList.add( 'is-cata-image-lightbox-snapping' );

		if ( reducedMotion.matches ) {
			moveDragWindow( targetOffset );
			completeDragWindow( targetIndex );
			return Promise.resolve();
		}

		// Flush the tracked position before enabling the snap transition. This is
		// important for a fast flick whose pointermove and pointerup share a frame.
		slides[ dragWindow.currentIndex ].getBoundingClientRect();

		finishDragPromise = new Promise( ( resolve ) => {
			finishDragResolve = resolve;
		} );
		dragTransitionSlide = slides[ dragWindow.currentIndex ];
		dragTransitionEnd = ( event ) => {
			if ( 'transform' === event.propertyName ) {
				completeDragWindow( targetIndex );
			}
		};
		dragTransitionSlide.addEventListener(
			'transitionend',
			dragTransitionEnd
		);
		dragTimer = setTimeout(
			() => completeDragWindow( targetIndex ),
			DRAG_SNAP_DURATION + DRAG_SNAP_BUFFER
		);
		window.requestAnimationFrame( () => moveDragWindow( targetOffset ) );

		return finishDragPromise;
	}

	/**
	 * Immediately abandon any direct drag/snap without changing slides.
	 */
	function cancelDragWindow() {
		if ( ! dragWindow ) {
			return;
		}

		const resolve = finishDragResolve;

		clearDragTransition();
		finishDragPromise = null;
		finishDragResolve = null;
		cleanDragWindow();
		resolve?.();
	}

	/**
	 * Mirror the current slide into the URL hash as an ad refresh signal, not a
	 * deep link. replaceState keeps history.state intact and adds no entries, so
	 * it leaves both the entry pushed on open and infinite scroll's own entries
	 * alone.
	 */
	function setSlideHash() {
		window.history.replaceState(
			window.history.state,
			'',
			`#slide-${ currentPhotoIndex + 1 }`
		);
	}

	/**
	 * Drop the slide hash, restoring the article's own URL.
	 */
	function clearSlideHash() {
		window.history.replaceState(
			window.history.state,
			'',
			window.location.pathname + window.location.search
		);
	}

	/**
	 * Notify outside integrations, such as the ad script, of gallery activity.
	 *
	 * @param {string} name Event name, e.g. 'slideshow:open'.
	 */
	function dispatchLightboxEvent( name ) {
		document.dispatchEvent(
			new CustomEvent( name, {
				detail: {
					currentIndex: currentPhotoIndex,
					totalSlides: photoCount,
					galleryId: dialog.id || null,
					adContainerId,
				},
			} )
		);
	}

	// The dialog's native close event covers the close button, backdrop clicks,
	// and Escape.
	dialog.addEventListener( 'close', () => {
		clearTimeout( openEventTimer );
		openEventTimer = null;
		swipeNavigation?.cancel();
		closeIndex();
		closeInfo();

		if ( historyEntry ) {
			// Unwind the entry pushed on open, which also restores the URL the
			// article had before the hash started tracking the slide.
			historyEntry = false;
			window.history.back();
			restoreScroll();
		} else {
			clearSlideHash();
		}

		dispatchLightboxEvent( 'slideshow:close' );
	} );

	// The back gesture pops the entry open() pushed; close the gallery rather
	// than let the reader leave the article. Closing any other way clears the
	// flag first, so the popstate that follows history.back() is a no-op.
	window.addEventListener( 'popstate', () => {
		if ( ! historyEntry ) {
			return;
		}

		historyEntry = false;

		if ( dialog.open ) {
			dialog.close();
		}

		restoreScroll();
	} );

	dialog.addEventListener( 'keydown', ( event ) => {
		if ( 'Escape' === event.key ) {
			if ( closeIndex( true ) || closeInfo( true ) ) {
				event.preventDefault();
				event.stopPropagation();
			}
			return;
		}

		// The grid owns arrow keys while open. Caption links and scrollable text
		// likewise keep their native arrow behavior.
		if (
			indexOpen ||
			event.target.closest?.( '.wp-block-cata-image-lightbox__caption' )
		) {
			return;
		}

		if ( 'ArrowRight' === event.key ) {
			next();
		} else if ( 'ArrowLeft' === event.key ) {
			prev();
		}
	} );

	// Some browsers surface Escape as dialog cancel without a useful keydown.
	// Consume it when an inner disclosure is open so the gallery stays open.
	dialog.addEventListener( 'cancel', ( event ) => {
		if ( closeIndex( true ) || closeInfo( true ) ) {
			event.preventDefault();
		}
	} );

	// The panel covers the rest of the dialog, so a click that lands on the
	// dialog itself landed on the backdrop.
	dialog.addEventListener( 'click', ( event ) => {
		if ( event.target === dialog ) {
			close();
		}
	} );

	region
		.querySelector( '.wp-block-cata-image-lightbox__close' )
		?.addEventListener( 'click', close );

	[ prevButton, prevZone ].forEach( ( element ) =>
		element?.addEventListener( 'click', prev )
	);

	[ nextButton, nextZone ].forEach( ( element ) =>
		element?.addEventListener( 'click', next )
	);

	allPhotosButton?.addEventListener( 'click', () => {
		if ( indexOpen ) {
			closeIndex();
		} else {
			openIndex();
		}
	} );

	infoPanels.forEach( ( caption, button ) => {
		if ( ! caption ) {
			return;
		}

		button.addEventListener( 'click', () => {
			if ( button === openInfoButton ) {
				closeInfo( true );
			} else {
				openInfo( button );
			}
		} );
	} );

	// Delegated so the strip stays one listener however many photos it holds.
	strip?.addEventListener( 'click', ( event ) => {
		const thumb = event.target.closest(
			'.wp-block-cata-image-lightbox__thumb'
		);

		if ( thumb ) {
			const photoIndex = Number( thumb.dataset.cataImageLightboxIndex );

			if ( ! Number.isInteger( photoIndex ) ) {
				return;
			}

			const restoreFocus = indexOpen;
			closeIndex( restoreFocus );
			showSlide( slidePositionFor( photoIndex ) );
		}
	} );

	strip?.addEventListener( 'keydown', ( event ) => {
		if ( ! phoneMedia.matches || ! indexOpen ) {
			return;
		}

		const thumb = event.target.closest(
			'.wp-block-cata-image-lightbox__thumb'
		);
		const position = thumbEntries.findIndex(
			( [ , candidate ] ) => candidate === thumb
		);

		if ( position < 0 || ! event.key.startsWith( 'Arrow' ) ) {
			return;
		}

		const firstTop = thumbEntries[ 0 ][ 1 ].offsetTop;
		const firstDifferentRow = thumbEntries.findIndex(
			( [ , candidate ] ) => candidate.offsetTop !== firstTop
		);
		const columns =
			firstDifferentRow < 0 ? thumbEntries.length : firstDifferentRow;
		let nextPosition = position;

		if ( 'ArrowLeft' === event.key ) {
			nextPosition--;
		} else if ( 'ArrowRight' === event.key ) {
			nextPosition++;
		} else if ( 'ArrowUp' === event.key ) {
			nextPosition -= columns;
		} else if ( 'ArrowDown' === event.key ) {
			nextPosition += columns;
		}

		nextPosition = Math.min(
			Math.max( nextPosition, 0 ),
			thumbEntries.length - 1
		);
		event.preventDefault();
		event.stopPropagation();

		const nextThumb = thumbEntries[ nextPosition ][ 1 ];
		setThumbTabStop( nextThumb );
		nextThumb.focus( { preventScroll: true } );
		nextThumb.scrollIntoView( { block: 'nearest', inline: 'nearest' } );
	} );

	swipeNavigation = wireSwipeNavigation(
		viewport,
		next,
		prev,
		( event ) =>
			indexOpen ||
			Boolean(
				event.target.closest?.(
					'.wp-block-cata-image-lightbox__caption, .wp-block-cata-image-lightbox__info'
				)
			),
		{
			enabled: () => phoneMedia.matches,
			busy: () => Boolean( dragWindow ),
			start: startDragWindow,
			move: moveDragWindow,
			finish: finishDragWindow,
			cancel: cancelDragWindow,
		}
	);

	phoneMedia.addEventListener( 'change', syncPhoneMode );

	// The grid owns a slot, not the window. Observe that box directly so browser
	// chrome, rotation, and any surrounding layout change all trigger the same
	// solve without guessing which global resize event caused it.
	const thumbnailGridObserver =
		strip && 'ResizeObserver' in window
			? new window.ResizeObserver( layoutThumbnailGrid )
			: null;

	thumbnailGridObserver?.observe( strip );

	// ResizeObserver is the exact path; this fallback keeps older engines usable.
	if ( ! thumbnailGridObserver ) {
		window.addEventListener( 'resize', layoutThumbnailGrid );
	}

	syncPhoneMode();

	return {
		open,
		total: photoCount,
		warmSlide: ( index ) =>
			warm( images[ slidePositionFor( index ) ], 'high' ),
	};
}

/**
 * Move the ad into the slide sequence as a phone reader's ad break.
 *
 * Runs once at wiring time, before the ad script has filled anything, so the
 * container moves while it is still an empty box — reparenting a filled ad
 * iframe would reload it blank. The break sits after the fourth photo and
 * never first or last; galleries too short for that keep the stacked layout.
 *
 * @param {HTMLElement} region      The gallery's block wrapper.
 * @param {boolean}     useInStream Whether wiring began in phone mode.
 *
 * @return {number} The ad break's slide position, or -1 when there is none.
 */
function insertAdSlide( region, useInStream ) {
	if ( ! useInStream ) {
		return -1;
	}

	const ad = region.querySelector( '.wp-block-cata-image-lightbox__ad' );
	const viewport = region.querySelector(
		'.wp-block-cata-image-lightbox__viewport'
	);

	if ( ! ad || ! viewport ) {
		return -1;
	}

	const slides = viewport.querySelectorAll(
		'.wp-block-cata-image-lightbox__slide'
	);

	if ( slides.length <= AD_SLIDE_AFTER ) {
		return -1;
	}

	const figure = document.createElement( 'figure' );
	figure.className =
		'wp-block-cata-image-lightbox__slide wp-block-cata-image-lightbox__slide--ad';

	const label = document.createElement( 'div' );
	label.className = 'wp-block-cata-image-lightbox__ad-label';
	label.textContent = region.dataset.cataAdLabel || 'Advertisement';

	figure.append( label, ad );
	viewport.insertBefore( figure, slides[ AD_SLIDE_AFTER ] );

	return AD_SLIDE_AFTER;
}

/**
 * Wire touch/pen navigation on the slide viewport.
 *
 * Phones use a direct, finger-tracking live window supplied by `drag`; wider
 * layouts retain the original threshold-then-crossfade swipe. Touch and pen
 * only — mouse drag would collide with selecting caption text. `touch-action:
 * pan-y pinch-zoom` leaves vertical scrolling and pinch zoom to the browser.
 *
 * Swipe direction follows the arrow buttons' fixed left-to-right sense
 * (swipe left = next, swipe right = previous), not text direction.
 *
 * @param {HTMLElement} viewport     The slide viewport element.
 * @param {Function}    next         Step forward one slide.
 * @param {Function}    prev         Step back one slide.
 * @param {Function}    shouldIgnore Whether an origin belongs to an overlay.
 * @param {Object}      drag         Direct-drag lifecycle callbacks.
 *
 * @return {Object|undefined} A controller that can abandon active gesture UI.
 */
function wireSwipeNavigation( viewport, next, prev, shouldIgnore, drag = {} ) {
	if ( ! viewport ) {
		return;
	}

	let pointerId = null;
	let startX = 0;
	let startY = 0;
	let lastX = 0;
	let lastTime = 0;
	let velocity = 0;
	let horizontal = false;
	let direct = false;
	let dragStarted = false;
	let suppressClick = false;
	let suppressClickTimer = null;

	/**
	 * Release capture defensively; a browser may already have canceled it.
	 *
	 * @param {number|null} id Pointer id to release.
	 */
	function releasePointer( id ) {
		if ( null === id || ! viewport.releasePointerCapture ) {
			return;
		}

		try {
			if (
				! viewport.hasPointerCapture ||
				viewport.hasPointerCapture( id )
			) {
				viewport.releasePointerCapture( id );
			}
		} catch ( error ) {
			// Pointer capture can disappear between the guard and release.
		}
	}

	/**
	 * Clear the tracked pointer, optionally abandoning direct-drag layout.
	 *
	 * @param {boolean} cancelDrag Whether the live slide window is canceled.
	 */
	function resetPointer( cancelDrag = false ) {
		const id = pointerId;

		pointerId = null;
		releasePointer( id );

		if ( cancelDrag && dragStarted ) {
			drag.cancel?.();
		}

		horizontal = false;
		direct = false;
		dragStarted = false;
		velocity = 0;
	}

	/**
	 * Prevent the compatibility click after a horizontal drag from also
	 * activating a whole-photo tap zone.
	 */
	function suppressCompatibilityClick() {
		suppressClick = true;
		clearTimeout( suppressClickTimer );
		suppressClickTimer = setTimeout( () => {
			suppressClick = false;
			suppressClickTimer = null;
		}, 0 );
	}

	viewport.addEventListener( 'pointerdown', ( event ) => {
		if ( 'touch' !== event.pointerType && 'pen' !== event.pointerType ) {
			return;
		}

		// A second finger means pinch zoom. Drop the first pointer and its live
		// window immediately so neither custom movement nor snapping fights it.
		if ( null !== pointerId ) {
			resetPointer( true );
			return;
		}

		if ( shouldIgnore?.( event ) ) {
			return;
		}

		if ( drag.busy?.() ) {
			return;
		}

		pointerId = event.pointerId;
		startX = event.clientX;
		startY = event.clientY;
		lastX = event.clientX;
		lastTime = event.timeStamp;
		velocity = 0;
		horizontal = false;
		direct = Boolean( drag.enabled?.() );
		dragStarted = false;
	} );

	viewport.addEventListener( 'pointermove', ( event ) => {
		if ( event.pointerId !== pointerId ) {
			return;
		}

		const dx = event.clientX - startX;
		const dy = event.clientY - startY;

		// Once a gesture is clearly vertical, stop observing it and leave its
		// entire lifetime to native scrolling.
		if (
			! horizontal &&
			Math.abs( dy ) > DIRECTION_LOCK &&
			Math.abs( dy ) >= Math.abs( dx )
		) {
			resetPointer();
			return;
		}

		if (
			! horizontal &&
			Math.abs( dx ) > DIRECTION_LOCK &&
			Math.abs( dx ) > Math.abs( dy )
		) {
			horizontal = true;

			if ( direct ) {
				dragStarted = Boolean( drag.start?.() );

				if ( ! dragStarted ) {
					resetPointer();
					return;
				}
			}

			try {
				viewport.setPointerCapture?.( pointerId );
			} catch ( error ) {
				// Cancellation between lock and capture is harmless.
			}
		}

		if ( ! horizontal ) {
			return;
		}

		const elapsed = event.timeStamp - lastTime;

		if ( elapsed > 0 && elapsed <= 100 ) {
			velocity = ( event.clientX - lastX ) / elapsed;
		} else if ( elapsed > 100 ) {
			velocity = 0;
		}

		lastX = event.clientX;
		lastTime = event.timeStamp;

		if ( direct ) {
			drag.move?.( dx );
		}

		// Once committed to a horizontal swipe, stop the browser from also
		// rubber-banding or interpreting the same gesture as edge-swipe-back.
		if ( event.cancelable ) {
			event.preventDefault();
		}
	} );

	viewport.addEventListener( 'pointerup', ( event ) => {
		if ( event.pointerId !== pointerId ) {
			return;
		}

		const dx = event.clientX - startX;
		const elapsed = event.timeStamp - lastTime;
		const wasHorizontal = horizontal;
		const wasDirect = direct;
		const hadDragWindow = dragStarted;

		if ( elapsed > 100 ) {
			velocity = 0;
		} else if ( elapsed > 0 && event.clientX !== lastX ) {
			velocity = ( event.clientX - lastX ) / elapsed;
		}

		const releaseVelocity = velocity;
		resetPointer();

		if ( ! wasHorizontal ) {
			return;
		}

		suppressCompatibilityClick();

		if ( wasDirect && hadDragWindow ) {
			Promise.resolve( drag.finish?.( dx, releaseVelocity ) ).catch( () =>
				drag.cancel?.()
			);
			return;
		}

		if ( Math.abs( dx ) < SWIPE_THRESHOLD ) {
			return;
		}

		if ( dx < 0 ) {
			next();
		} else {
			prev();
		}
	} );

	viewport.addEventListener( 'pointercancel', ( event ) => {
		if ( event.pointerId === pointerId ) {
			resetPointer( true );
		}
	} );

	viewport.addEventListener( 'lostpointercapture', ( event ) => {
		if ( event.pointerId === pointerId ) {
			resetPointer( true );
		}
	} );

	viewport.addEventListener(
		'click',
		( event ) => {
			if ( ! suppressClick ) {
				return;
			}

			suppressClick = false;
			clearTimeout( suppressClickTimer );
			suppressClickTimer = null;
			event.preventDefault();
			event.stopPropagation();
		},
		true
	);

	return {
		cancel: () => {
			resetPointer( true );
			drag.cancel?.();
			suppressClick = false;
			clearTimeout( suppressClickTimer );
			suppressClickTimer = null;
		},
	};
}

/**
 * Get the content image to seed the target slide from.
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
	img.decode()
		.catch( () => {} )
		.finally( () => {
			img.srcset = srcset;
		} );
}

/**
 * Build a tiny, low-cost preview URL from a Photon-served image URL by
 * overriding its width — works regardless of the source's own srcset/sizes.
 *
 * @param {string|null} src Full-size image URL.
 *
 * @return {string|null} A ~24px-wide variant of the same URL, or null if
 *                       `src` isn't a URL Photon can resize.
 */
function tinyPreviewSrc( src ) {
	if ( ! src ) {
		return null;
	}

	try {
		const url = new URL( src, window.location.href );
		url.searchParams.set( 'w', '24' );
		return url.toString();
	} catch ( error ) {
		return null;
	}
}
