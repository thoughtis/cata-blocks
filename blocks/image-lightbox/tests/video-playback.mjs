/**
 * DOM lifecycle regression for the actual view script. Media/geometry are
 * stubbed; native decoding and Safari taps still require browser acceptance.
 * Run after PHP's CATA_LIGHTBOX_VIDEO_FIXTURE output:
 * node blocks/image-lightbox/tests/video-playback.mjs /path/video-gallery.html
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';

const fixture = fs.readFileSync(process.argv[2], 'utf8');
const source = fs.readFileSync(new URL('../src/view.js', import.meta.url), 'utf8');
let checks = 0;
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
const check = (condition, message) => { assert.ok(condition, message); checks++; };

function setup({ reduced = false, saveData = false, phone = false, manager = false } = {}) {
	const dom = new JSDOM(fixture, { url: 'https://example.test/article/', pretendToBeVisual: true, runScripts: 'outside-only' });
	const { window } = dom;
	const { document } = window;
	const queries = new Map();
	window.CloseWatcher = class {};
	window.matchMedia = query => {
		if (!queries.has(query)) {
			const media = new window.EventTarget();
			media.matches = query.includes('reduced-motion') ? reduced : phone;
			queries.set(query, media);
		}
		return queries.get(query);
	};
	const connection = new window.EventTarget();
	connection.saveData = saveData;
	Object.defineProperty(window.navigator, 'connection', { value: connection });
	window.scrollTo = () => {};
	window.HTMLElement.prototype.scrollBy = () => {};
	window.HTMLElement.prototype.scrollIntoView = () => {};
	window.HTMLDialogElement.prototype.showModal = function() { this.setAttribute('open', ''); };
	window.HTMLDialogElement.prototype.close = function() { this.removeAttribute('open'); this.dispatchEvent(new window.Event('close')); };
	window.HTMLImageElement.prototype.decode = () => Promise.resolve();
	Object.defineProperty(window.HTMLImageElement.prototype, 'complete', { get: () => true });
	const playing = new WeakSet();
	let hidden = false;
	Object.defineProperty(document, 'hidden', { get: () => hidden });
	const setHidden = value => { hidden = value; document.dispatchEvent(new window.Event('visibilitychange')); };
	const startPlaying = video => { playing.add(video); video.dispatchEvent(new window.Event('playing')); };
	Object.defineProperty(window.HTMLMediaElement.prototype, 'paused', { get() { return !playing.has(this); } });
	window.HTMLMediaElement.prototype.play = function() { playing.add(this); this.dispatchEvent(new window.Event('playing')); return Promise.resolve(); };
	window.HTMLMediaElement.prototype.pause = function() { const wasPlaying = playing.delete(this); if (wasPlaying) this.dispatchEvent(new window.Event('pause')); };
	const calls = [];
	if (manager) window.BecomingLoops = { setGalleryVideo: (...args) => calls.push(args) };
	const region = document.querySelector('.wp-block-cata-image-lightbox');
	const viewport = region.querySelector('.wp-block-cata-image-lightbox__viewport');
	const photo = viewport.querySelector('.wp-block-cata-image-lightbox__slide:not(.wp-block-cata-image-lightbox__slide--video)');
	for (let i = 0; i < 4; i++) viewport.append(photo.cloneNode(true));
	const ad = document.createElement('aside');
	ad.className = 'wp-block-cata-image-lightbox__ad';
	ad.id = 'test-ad';
	region.querySelector('.wp-block-cata-image-lightbox__panel').append(ad);
	window.eval(source);
	const videos = [...document.querySelectorAll('video')];
	const open = () => document.querySelector('.cata-image-lightbox-gallery-link button').click();
	const close = () => document.querySelector('dialog').close();
	return { window, document, dom, queries, videos, region, viewport, calls, connection, open, close, setHidden, startPlaying };
}

const page = setup({ phone: true });
check(page.videos.every(video => !video.hasAttribute('src')), 'Closed galleries must request no video bytes.');
const sequence = [...page.viewport.querySelectorAll('.wp-block-cata-image-lightbox__slide')];
const adIndex = sequence.findIndex(slide => slide.classList.contains('wp-block-cata-image-lightbox__slide--ad'));
check(sequence.slice(0, adIndex).filter(slide => !slide.classList.contains('wp-block-cata-image-lightbox__slide--video')).length === 4, 'The phone ad remains after four actual photos.');
page.open();
const video = page.videos[0];
const toggle = video.closest('figure').querySelector('.wp-block-cata-image-lightbox__motion-toggle');
check(!video.paused && video.muted && video.classList.contains('is-playing'), 'The current loop must play muted and fade in only after playing.');
check(page.videos.slice(1).every(item => item.paused && !item.hasAttribute('src')), 'Other loops must stay paused and inert.');
check(toggle.textContent === 'Pause motion' && !toggle.hidden, 'Playback exposes a real Pause motion control.');
toggle.click();
check(video.paused && toggle.textContent === 'Play motion', 'Pause must stop the loop and offer Play motion.');
page.close(); page.open();
check(video.paused, 'The reader pause survives close/reopen.');
toggle.click();
check(!video.paused, 'Play motion resumes the loop.');
page.document.querySelector('.wp-block-cata-image-lightbox__next').click();
await Promise.resolve();
check(video.paused, 'Navigation pauses the outgoing video.');
page.close();
check(page.videos.every(item => item.paused), 'Closing pauses every loop.');
page.startPlaying(video);
check(video.paused, 'Late playing after close must be stopped before revealing motion.');
page.open();
page.setHidden(true);
check(video.paused, 'Hidden tabs stop the fallback synchronously.');
page.setHidden(false);
check(!video.paused, 'Visible tabs can resume the active, unpaused loop.');
const reducedQuery = [...page.queries.values()][1];
reducedQuery.matches = true; reducedQuery.dispatchEvent(new page.window.Event('change'));
check(video.paused && toggle.hidden, 'A live reduced-motion change switches to a still.');
page.dom.window.close();

for (const option of ['reduced', 'saveData']) {
	const still = setup({ [option]: true });
	still.open();
	check(still.videos.every(item => item.paused && !item.hasAttribute('src')), `${option}: open gallery must keep video bytes inert.`);
	check(still.document.querySelector('.wp-block-cata-image-lightbox__motion-toggle').hidden, `${option}: no inactive playback control.`);
	still.dom.window.close();
}

const shared = setup({ manager: true });
shared.open();
check(shared.calls.some(([item, active, paused]) => item === shared.videos[0] && active && !paused), 'The shared theme manager receives the active gallery loop.');
check(shared.videos.every(item => !item.hasAttribute('src')), 'Plugin fallback must not compete with the shared manager.');
shared.document.querySelector('.wp-block-cata-image-lightbox__motion-toggle').click();
check(shared.calls.some(([item, active, paused, requested]) => item === shared.videos[0] && active && !paused && requested), 'Explicit Play must request a retry from the manager within the click gesture.');
shared.close();
check(shared.calls.slice(-shared.videos.length).every(([, active]) => !active), 'Closing releases every shared-manager gallery entry.');
shared.dom.window.close();

const late = setup();
late.open();
const transferred = [];
late.window.BecomingLoops = { setGalleryVideo: (...args) => transferred.push(args) };
late.document.dispatchEvent(new late.window.Event('becoming:loops:ready'));
check(late.videos.every(item => item.paused) && transferred.some(([, active]) => active), 'Late manager readiness pauses fallback before transferring active state.');
late.dom.window.close();
const denied = setup();
let tries = 0;
denied.window.HTMLMediaElement.prototype.play = function() {
	tries++;
	if (tries === 1) return Promise.reject(new Error('NotAllowedError'));
	denied.startPlaying(this);
	return Promise.resolve();
};
denied.open();
await tick();
const retry = denied.document.querySelector('.wp-block-cata-image-lightbox__motion-toggle');
check(denied.videos[0].paused && retry.textContent === 'Play motion', 'Denied autoplay must leave a still and a useful explicit Play action.');
retry.click();
check(!denied.videos[0].paused && tries === 2, 'Explicit Play retries native playback after autoplay denial.');
denied.dom.window.close();
console.log(`Video playback DOM: ${checks} checks passed.`);
