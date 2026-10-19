/**
 * Actual gallery DOM navigation with PHP-rendered end content. Geometry/media
 * are stubbed; the native browser acceptance remains a separate check.
 * node blocks/image-lightbox/tests/end-card.mjs /path/end-gallery.html
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';

const fixture = fs.readFileSync(process.argv[2], 'utf8');
const source = fs.readFileSync(process.env.CATA_LIGHTBOX_VIEW_SOURCE || new URL('../src/view.js', import.meta.url), 'utf8');
let checks = 0;
const check = (condition, message) => { assert.ok(condition, message); checks++; };
const tick = () => new Promise(resolve => setTimeout(resolve, 0));

function setup({ phone = true, end = true, extraPhotos = 0, ad = false } = {}) {
	const dom = new JSDOM(fixture, { url: 'https://example.test/article/', pretendToBeVisual: true, runScripts: 'outside-only' });
	const { window } = dom;
	const { document } = window;
	window.CloseWatcher = class {};
	window.matchMedia = query => ({ matches: query.includes('reduced-motion') || phone, addEventListener() {} });
	window.scrollTo = () => {};
	window.HTMLElement.prototype.scrollBy = () => {};
	window.HTMLElement.prototype.scrollIntoView = () => {};
	window.HTMLElement.prototype.getBoundingClientRect = () => ({ width: 390, height: 620, left: 0, right: 390, top: 0, bottom: 620 });
	window.HTMLDialogElement.prototype.showModal = function() { this.setAttribute('open', ''); };
	window.HTMLDialogElement.prototype.close = function() { this.removeAttribute('open'); this.dispatchEvent(new window.Event('close')); };
	window.HTMLImageElement.prototype.decode = () => Promise.resolve();
	Object.defineProperty(window.HTMLImageElement.prototype, 'complete', { get: () => true });
	window.HTMLMediaElement.prototype.pause = () => {};
	const region = document.querySelector('.wp-block-cata-image-lightbox');
	const viewport = region.querySelector('.wp-block-cata-image-lightbox__viewport');
	const endSlide = region.querySelector('.wp-block-cata-image-lightbox__slide--end');
	if (!end) endSlide.remove();
	const photo = viewport.querySelector('.wp-block-cata-image-lightbox__slide:not(.wp-block-cata-image-lightbox__slide--video)');
	for (let i = 0; i < extraPhotos; i++) viewport.insertBefore(photo.cloneNode(true), end ? endSlide : null);
	if (ad) {
		const slot = document.createElement('aside'); slot.className = 'wp-block-cata-image-lightbox__ad'; slot.id = 'test-ad';
		region.querySelector('.wp-block-cata-image-lightbox__panel').append(slot);
	}
	const events = [];
	for (const name of ['slideshow:slidechange', 'slideshow:adslide', 'slideshow:endslide']) document.addEventListener(name, event => events.push({ name, detail: event.detail }));
	window.eval(source);
	const dialog = document.querySelector('dialog');
	const next = () => region.querySelector('.wp-block-cata-image-lightbox__next').click();
	const prev = () => region.querySelector('.wp-block-cata-image-lightbox__prev').click();
	const active = () => viewport.querySelector('.wp-block-cata-image-lightbox__slide.is-active');
	const counter = () => region.querySelector('.wp-block-cata-image-lightbox__counter').textContent;
	const key = key => dialog.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
	const swipe = direction => {
		for (const [type, clientX] of [['pointerdown', 200], ['pointermove', 200 + direction * 140], ['pointerup', 200 + direction * 140]]) {
			const event = new window.Event(type, { bubbles: true, cancelable: true });
			Object.assign(event, { pointerType: 'touch', pointerId: 1, clientX, clientY: 100 }); viewport.dispatchEvent(event);
		}
	};
	document.querySelector('.cata-image-lightbox-gallery-link button').click();
	return { dom, window, document, region, viewport, endSlide, dialog, events, next, prev, active, counter, key, swipe };
}

for (const phone of [true, false]) {
	const page = setup({ phone });
	for (let i = 0; i < 3; i++) page.next();
	check(page.counter() === '4 / 4', 'The last media item must keep the original exact total.');
	page.next();
	check(page.active() === page.endSlide && page.counter() === 'End of gallery', 'Next after the last item must show the end card without an out-of-range counter.');
	check(page.region.classList.contains('is-cata-image-lightbox-end-slide') && !page.region.classList.contains('is-cata-image-lightbox-ad-slide'), 'End state must be distinct from an ad.');
	check(!page.region.querySelector('.wp-block-cata-image-lightbox__dot.is-active') && !page.region.querySelector('.wp-block-cata-image-lightbox__thumb.is-active'), 'The end card must not impersonate a numbered media dot or thumbnail.');
	check(page.window.location.hash === '#slide-4', 'The end card must not advance the media-only URL hash.');
	const event = page.events.at(-1);
	check(event.name === 'slideshow:endslide' && event.detail.totalSlides === 4 && event.detail.currentIndex === 3, 'The end event must retain the real media count and last position.');
	check(page.events.filter(event => event.name === 'slideshow:adslide').length === 0, 'End navigation must never fire an ad refresh event.');
	page.next();
	check(phone ? page.active() === page.endSlide : page.counter() === '1 / 4', 'Phone ends must stay bounded; desktop must retain wrapping.');
	if (!phone) for (let i = 0; i < 4; i++) page.next();
	page.prev();
	check(page.counter() === '4 / 4', 'Previous from the end card must return to the final media item.');
	page.key('ArrowRight');
	check(page.active() === page.endSlide, 'ArrowRight must reach the end card.');
	page.key('ArrowLeft');
	check(page.counter() === '4 / 4', 'ArrowLeft must leave the end card for the last item.');
	page.swipe(-1);
	await tick();
	check(page.active() === page.endSlide, 'A touch swipe must reach the end card.');
	page.swipe(1);
	await tick();
	check(page.counter() === '4 / 4', 'A reverse swipe must return to the last item.');
	page.next();
	const restart = page.endSlide.querySelector('[data-cata-image-lightbox-restart]');
	restart.focus(); restart.click();
	check(page.counter() === '1 / 4' && page.dialog.open, 'Back to start must return to the first media item without closing.');
	check(page.document.activeElement === page.region.querySelector('.wp-block-cata-image-lightbox__panel'), 'Restart must move focus out of the now-hidden end card.');
	page.region.querySelector('.wp-block-cata-image-lightbox__close').click();
	check(!page.dialog.open, 'The existing Close control must still close the gallery.');
	page.dom.window.close();
}

for (const phone of [true, false]) {
	const page = setup({ phone, end: false });
	for (let i = 0; i < 4; i++) page.next();
	check(page.counter() === (phone ? '4 / 4' : '1 / 4') && !page.events.some(event => event.name === 'slideshow:endslide'), 'Without end content, existing phone bounds and desktop wrapping must remain unchanged.');
	page.dom.window.close();
}

const fourPhotos = setup({ extraPhotos: 2, ad: true });
check(!fourPhotos.viewport.querySelector('.wp-block-cata-image-lightbox__slide--ad'), 'Four photos plus an end card must not falsely qualify for an in-stream ad.');
fourPhotos.dom.window.close();
const fivePhotos = setup({ extraPhotos: 3, ad: true });
const sequence = [...fivePhotos.viewport.querySelectorAll('.wp-block-cata-image-lightbox__slide')];
const adIndex = sequence.findIndex(slide => slide.classList.contains('wp-block-cata-image-lightbox__slide--ad'));
check(adIndex === 6 && sequence.at(-1) === fivePhotos.endSlide, 'An eligible ad must remain after four photos and before the final photo/end card.');
for (let i = 0; i < sequence.length - 1; i++) fivePhotos.next();
check(fivePhotos.counter() === 'End of gallery' && fivePhotos.events.at(-1).detail.totalSlides === 7, 'Ad and end destinations must both stay outside the media total.');
fivePhotos.dom.window.close();

// Real touch uses implicit capture on the hit child, then transfers to the
// viewport at direction lock. Its bubbling loss is not a lost gallery drag.
for (const loseViewportCapture of [false, true]) {
	const page = setup();
	for (let i = 0; i < 3; i++) page.next();
	const zone = page.region.querySelector('.wp-block-cata-image-lightbox__navzone--next');
	const dispatch = (target, type, clientX) => {
		const event = new page.window.Event(type, { bubbles: true, cancelable: true });
		Object.assign(event, { pointerType: 'touch', pointerId: 1, clientX, clientY: 100 });
		target.dispatchEvent(event);
	};
	dispatch(zone, 'pointerdown', 310);
	dispatch(zone, 'pointermove', 270);
	dispatch(loseViewportCapture ? page.viewport : zone, 'lostpointercapture', 225);
	dispatch(page.viewport, 'pointermove', 65);
	dispatch(page.viewport, 'pointerup', 65);
	await tick();
	check(loseViewportCapture ? page.counter() === '4 / 4' : page.active() === page.endSlide, loseViewportCapture ? 'Losing the viewport capture must cancel the drag.' : 'Transferring implicit child capture to the viewport must preserve touch navigation.');
	page.dom.window.close();
}
console.log(`End-card DOM: ${checks} checks passed.`);
