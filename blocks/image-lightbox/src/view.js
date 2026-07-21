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

// How long the open event waits, in milliseconds, so the ad request it triggers
// doesn't compete with the active slide image download.
const OPEN_EVENT_DELAY = 300;

// Galleries for articles added after page load, keyed by the element holding
// the content images that open them.
const galleries = new Map();

// Every wired gallery, keyed by its block wrapper, so a gallery found in the
// DOM is recognized rather than wired a second time.
const regions = new WeakMap();

// The gallery each content image opens, so the lookup runs once per image.
const triggerGalleries = new WeakMap();

// How many articles have been given a gallery, so each one's ids stay unique.
let articleCount = 0;

// The gallery that rendered with the page, serving every content image that
// isn't inside an article added later.
let pageGallery = null;

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
	document.addEventListener( 'pointerover', onTriggerWarm, { passive: true } );
	document.addEventListener( 'touchstart', onTriggerWarm, { passive: true } );
	document.addEventListener( 'cata-blocks:infinite-scroll:load', onArticleLoad );
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
		region = document.body.appendChild( document.importNode( fetched, true ) );
	}

	const gallery = adoptGallery( region );

	if ( ! gallery ) {
		return;
	}

	galleries.set( article, gallery );
	warnWhenUnwired( gallery, article );
}

/**
 * Wire a gallery that arrived after the page did.
 *
 * @param {HTMLElement} region The gallery's block wrapper.
 *
 * @return {Object|null} The gallery, or null when the region has no dialog.
 */
function adoptGallery( region ) {
	articleCount++;
	renameIds( region, articleCount );

	return createGallery( region );
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
	region.querySelectorAll( '[id]' ).forEach( ( element ) => {
		element.id = `${ element.id }-${ suffix }`;
	} );
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
			`Image Lightbox: a content image asked for slide ${ index + 1 } of ${ gallery.total }.`
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
	const known = triggerGalleries.get( figure );

	if ( known ) {
		return known;
	}

	const gallery =
		registeredGallery( figure ) ?? nearestGallery( figure ) ?? pageGallery;

	// A content image never changes article, so the answer holds for the rest
	// of the session.
	if ( gallery ) {
		triggerGalleries.set( figure, gallery );
	}

	return gallery;
}

/**
 * Find the gallery an article announced when it loaded.
 *
 * @param {HTMLElement} figure The badge wrapper around a content image.
 *
 * @return {Object|null} The gallery, or null when no article claims the image.
 */
function registeredGallery( figure ) {
	for ( const [ article, gallery ] of galleries ) {
		if ( article.contains( figure ) ) {
			return gallery;
		}
	}

	return null;
}

/**
 * Find the gallery for an article that arrived without announcing itself.
 *
 * A theme running its own infinite scroll inserts the article with its gallery
 * already inside it and dispatches no load event, so there is nothing to react
 * to at insertion. Walking up from the content image finds that gallery the
 * first time one of the article's images is used, and finds the right one: the
 * article's own container is reached before any ancestor holding more than one
 * gallery.
 *
 * @param {HTMLElement} figure The badge wrapper around a content image.
 *
 * @return {Object|null} The gallery, or null when no ancestor holds one.
 */
function nearestGallery( figure ) {
	let root = figure.parentElement;

	// The body is left out: a gallery found there is the page's own, which is
	// what the caller falls back to anyway.
	while ( root && root !== document.body ) {
		const region = root.querySelector( '.wp-block-cata-image-lightbox' );

		if ( region ) {
			return regions.get( region ) ?? adoptGallery( region );
		}

		root = root.parentElement;
	}

	return null;
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

	const slides = Array.from(
		region.querySelectorAll( '.wp-block-cata-image-lightbox__slide' )
	);

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

	// The ad slot's element id, included in event details.
	const adContainerId =
		region.querySelector( '.wp-block-cata-image-lightbox__ad' )?.id ?? null;

	let currentIndex = 0;

	// Bumped on every open/navigation so a slow decode can't reveal a stale slide.
	let navigation = 0;

	// Pending timer for the delayed open event; cleared when the dialog closes
	// before it fires.
	let openEventTimer = null;

	/**
	 * Open the gallery on a slide.
	 *
	 * @param {number}                index   Slide index to open on.
	 * @param {HTMLImageElement|null} trigger The content image that was clicked.
	 */
	function open( index, trigger ) {
		// Warm first so the slide's load is no longer deferred, then paint the
		// rendition the reader is already looking at while the full-size
		// candidate downloads.
		warmAround( index );
		seedSlide( images[ index ], trigger?.currentSrc );
		showPlaceholder( index );
		navigation++;
		show( index );
		dialog.showModal();

		// Delay the open event so the ad request it triggers doesn't compete
		// with the active slide image download.
		openEventTimer = setTimeout( () => {
			openEventTimer = null;
			dispatchLightboxEvent( 'slideshow:open' );
		}, OPEN_EVENT_DELAY );
	}

	/**
	 * Close the gallery.
	 */
	function close() {
		dialog.close();
	}

	/**
	 * Step forward one slide, wrapping at the end.
	 */
	function next() {
		showSlide( ( currentIndex + 1 ) % slides.length );
	}

	/**
	 * Step back one slide, wrapping at the start.
	 */
	function prev() {
		showSlide( ( currentIndex - 1 + slides.length ) % slides.length );
	}

	/**
	 * Make a slide the current one.
	 *
	 * @param {number} index Slide index.
	 */
	function show( index ) {
		currentIndex = index;

		slides.forEach( ( slide, position ) =>
			slide.classList.toggle( 'is-active', position === index )
		);

		if ( counter ) {
			counter.textContent = `${ index + 1 } / ${ slides.length }`;
		}
	}

	/**
	 * Navigate to a slide, waiting for its image so the outgoing slide stays
	 * visible until the incoming one can paint — a crossfade, not a blank flash.
	 *
	 * @param {number} index Slide index to show.
	 */
	async function showSlide( index ) {
		if ( index === currentIndex ) {
			return;
		}

		warmAround( index );
		showPlaceholder( index );

		const token = ++navigation;
		const img = images[ index ];

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

		show( index );
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
			warm( images[ ( index + 1 ) % total ] );
			warm( images[ ( index - 1 + total ) % total ] );
		}
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
	 * Notify outside integrations, such as the ad script, of gallery activity.
	 *
	 * Also mirrors the current slide into the URL hash as an ad refresh signal,
	 * not a deep link. replaceState keeps history.state intact and adds no
	 * entries, so back-button behavior — including infinite scroll's own
	 * history entries — is unaffected.
	 *
	 * @param {string} name Event name, e.g. 'slideshow:open'.
	 */
	function dispatchLightboxEvent( name ) {
		if ( 'slideshow:close' === name ) {
			history.replaceState(
				history.state,
				'',
				window.location.pathname + window.location.search
			);
		} else {
			history.replaceState( history.state, '', `#slide-${ currentIndex + 1 }` );
		}

		document.dispatchEvent(
			new CustomEvent( name, {
				detail: {
					currentIndex,
					totalSlides: slides.length,
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
		dispatchLightboxEvent( 'slideshow:close' );
	} );

	dialog.addEventListener( 'keydown', ( event ) => {
		if ( 'ArrowRight' === event.key ) {
			next();
		} else if ( 'ArrowLeft' === event.key ) {
			prev();
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

	region
		.querySelectorAll(
			'.wp-block-cata-image-lightbox__prev, .wp-block-cata-image-lightbox__navzone--prev'
		)
		.forEach( ( element ) => element.addEventListener( 'click', prev ) );

	region
		.querySelectorAll(
			'.wp-block-cata-image-lightbox__next, .wp-block-cata-image-lightbox__navzone--next'
		)
		.forEach( ( element ) => element.addEventListener( 'click', next ) );

	wireSwipeNavigation(
		region.querySelector( '.wp-block-cata-image-lightbox__viewport' ),
		next,
		prev
	);

	const gallery = {
		open,
		total: slides.length,
		warmSlide: ( index ) => warm( images[ index ], 'high' ),
	};

	regions.set( region, gallery );

	return gallery;
}

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
 * @param {Function}    next     Step forward one slide.
 * @param {Function}    prev     Step back one slide.
 */
function wireSwipeNavigation( viewport, next, prev ) {
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

	viewport.addEventListener( 'pointerup', ( event ) => {
		if ( event.pointerId !== pointerId ) {
			return;
		}

		const dx = event.clientX - startX;

		pointerId = null;

		if ( ! horizontal || Math.abs( dx ) < SWIPE_THRESHOLD ) {
			return;
		}

		if ( dx < 0 ) {
			next();
		} else {
			prev();
		}
	} );

	viewport.addEventListener( 'pointercancel', () => {
		pointerId = null;
	} );
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
