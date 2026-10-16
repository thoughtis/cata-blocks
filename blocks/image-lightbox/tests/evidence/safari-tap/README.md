# Safari tap verification, 2026-10-16

A touch tap on a body photo never opened the gallery in Safari on iPhone and
iPad. The opening `click` listener lived on `document`, and WebKit synthesizes
a click from a tap only when the tapped element, or an ancestor below `body`,
listens for clicks. 0.19.6 binds the same handler on each
`.cata-image-lightbox-figure`, plus the triggers of each article that infinite
scroll appends.

## Setup

Two WordPress Playgrounds (PHP 8.2, latest WordPress) with the same content:
the Creepy Catalog kit's 40 posts, "Eight Stills From Carrie…" (8 `core/image`
blocks, post 86) and a 7-photo article (post 87) set as `cata/infinite-scroll`'s
next post. A Twenty Twenty-Five child theme's `single.html` wraps the title and
content in `cata/infinite-scroll` with its beacon, and places
`cata/image-lightbox` after it, outside the wrapper, so an appended article's
gallery is imported onto the body. One Playground mounts this branch (0.19.6),
the other main (0.19.5).

Browsers: Playwright 1.52 WebKit 18.4 with `devices['iPhone 15']` and
`devices['iPad Pro 11']`, and Google Chrome 155 (desktop 1440×900 and Pixel 7
touch emulation). Twenty Twenty-Five shows the plugin's own counter, `3 / 8`;
Creepy Catalog's theme formats the same counter as `03 / 08`.

## Result: 55/55 checks pass ([verify.log](verify.log))

- **The bug, on main:** a WebKit tap on the 3rd photo fires `touchend` and
  `pointerup` but no `click`, and nothing opens, on both iPhone and iPad
  ([iphone-15-main-tap-nothing.jpg](iphone-15-main-tap-nothing.jpg)). The
  badge, a real `<button>`, opens it.
- **The fix, on the branch:** the same tap delivers a `click` to the image and
  opens the modal dialog at 3 / 8, with one `slideshow:open`
  ([iphone-15-fix-tap-open.jpg](iphone-15-fix-tap-open.jpg),
  [ipad-pro-11-fix-tap-open.jpg](ipad-pro-11-fix-tap-open.jpg)). Next gives
  4 / 8, Close closes it, a second tap reopens 3 / 8, the 1st photo opens
  1 / 8 and the 6th photo's badge opens 6 / 8.
- **Infinite scroll:** after the beacon appends post 87, a tap on its 3rd
  photo opens its own imported gallery (`#cata-image-lightbox-3-1`) at 3 / 7
  ([iphone-15-fix-infinite-open.jpg](iphone-15-fix-infinite-open.jpg)). With
  that article present, the first article's 3rd photo still opens the page
  gallery at 3 / 8. On desktop Chrome the appended photo opens 3 / 7 on main
  and on the branch alike.
- **Phone layout from #293 (iPhone 15):** every measured rect of the open
  gallery is identical to main's: panel, main column, photo viewport, photo,
  footer, close, dots and All photos. The photo sits at the viewport's top
  (0px above), the footer ends at 639 of 659px, `html` is `overflow: hidden`
  and nothing scrolls sideways. Next walks 3 / 8 → 4 / 8 → Ad → 5 / 8, and the
  hash stays on `#slide-4` across the ad break.
- **Desktop Chrome:** a mouse click opens 3 / 8. Keyboard: the 18th Tab
  focuses the 3rd photo's badge (18 on main too, so the tab order is
  unchanged), Enter opens 3 / 8, ArrowRight gives 4 / 8, Escape returns focus
  to that badge and Space reopens it
  ([desktop-chrome-fix-keyboard-open.jpg](desktop-chrome-fix-keyboard-open.jpg)).
  A badge click on the 5th photo opens 5 / 8. Chrome's touch tap opens 3 / 8.
  No page errors anywhere.

Keyboard access needed no new tab stop: each photo's badge is already a
focusable button that opens that photo's slide. Making the image focusable as
well would give every photo two tab stops that do the same thing.

## Not caused by this change

In this harness, WebKit sometimes answers the close's `history.back()` with a
full reload of the article, which resets the scroll to the top. It happens
identically on main and on the branch, from the badge as well as the photo,
and once from a bare `history.pushState()` + `history.back()` on the same page
with no gallery involved. It did not happen in Chrome, which kept the scroll
every time. The QA pass on the Creepy Catalog kit saw Close restore the
scroll in the same WebKit build, so treat it as a harness quirk until a device
shows otherwise.
