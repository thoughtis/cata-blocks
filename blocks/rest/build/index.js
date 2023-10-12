/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/author/Author.jsx":
/*!******************************************!*\
  !*** ./src/components/author/Author.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Author; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-content/TextContent */ "./src/components/text-content/TextContent.jsx");
/* harmony import */ var _image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/Image */ "./src/components/image/Image.jsx");
/* harmony import */ var _image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/get-dimensions */ "./src/components/image/get-dimensions.js");




function Author(_ref) {
  let {
    author
  } = _ref;
  const image = 0 < author.media.length ? author.media[0] : null;
  const dimensions = (0,_image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"])(image, 1, [320, 160, 80]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "preview__byline"
  }, null !== image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: image,
    sizes: "6em",
    dimensions: dimensions,
    className: "preview__avatar"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "author",
    href: author.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: author.display_name
  }))));
}

/***/ }),

/***/ "./src/components/author/get-author.js":
/*!*********************************************!*\
  !*** ./src/components/author/get-author.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getAuthor; }
/* harmony export */ });
/**
 * Get Author
 */
function getAuthor(post) {
  if (!('_embedded' in post) || !('wp:term' in post._embedded)) {
    return null;
  }

  if (!Array.isArray(post._embedded['wp:term']) || 0 === post._embedded['wp:term'].length) {
    return null;
  }

  const taxonomies = post._embedded['wp:term'].filter(isAuthorArray);

  if (0 === taxonomies.length) {
    return null;
  }

  return Object.assign({}, taxonomies[0][0].profile);
}
/**
 * Is Author Array
 * 
 * @param {array} terms
 */

function isAuthorArray(terms) {
  return Array.isArray(terms) && 0 < terms.length && 'taxonomy' in terms[0] && 'author' === terms[0].taxonomy;
}

/***/ }),

/***/ "./src/components/image/Image.jsx":
/*!****************************************!*\
  !*** ./src/components/image/Image.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function getSrcSetString(source_url, dimension) {
  const src = new URL(source_url);
  src.searchParams.set('resize', dimension.join(','));
  return `${src.href.toString()} ${dimension[0]}w`;
}

function Image(_ref) {
  let {
    data,
    sizes,
    dimensions,
    className
  } = _ref;

  if (!('source_url' in data)) {
    return null;
  }

  const src = new URL(data.source_url);
  src.searchParams.set('resize', dimensions[0].join(','));
  const srcset = dimensions.map(getSrcSetString.bind(null, data.source_url));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    width: dimensions[0][0],
    height: dimensions[0][1],
    src: src.href.toString(),
    sizes: sizes,
    srcSet: srcset.join(','),
    className: className,
    loading: "lazy"
  });
}

/***/ }),

/***/ "./src/components/image/get-dimensions.js":
/*!************************************************!*\
  !*** ./src/components/image/get-dimensions.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getDimensions; }
/* harmony export */ });
/**
 * Filter Target by Width
 *
 * @return {bool} Based on the real image width, can we support this target image width?
 */
function filterTargetByWidth(width, targetWidth) {
  return targetWidth <= width;
}
/**
 * Map Target to Dimensions
 * 
 * @param {float} aspectRatio
 * @param {number} targetWidth
 * @return {array}
 */


function mapTargetToDimensions(aspectRatio, targetWidth) {
  return [targetWidth, Math.round(targetWidth / aspectRatio)];
}
/**
 * Get Dimensions
 *
 * @param {object|null} data
 * @param {float|null} cropAspectRatio Include this to crop, otherwise we'll use the original aspect ratio.
 * @param {array|null}
 * @return {array}
 */


function getDimensions(data) {
  let cropAspectRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let widths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (null === data) {
    return [];
  }

  const {
    width,
    height
  } = data.media_details;
  const aspectRatio = null === cropAspectRatio ? width / height : cropAspectRatio;
  const targetWidths = (0 === widths.length ? [width] : widths).filter(filterTargetByWidth.bind(null, width));
  return targetWidths.map(mapTargetToDimensions.bind(null, aspectRatio));
}

/***/ }),

/***/ "./src/components/image/get-image.js":
/*!*******************************************!*\
  !*** ./src/components/image/get-image.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getImage; }
/* harmony export */ });
function getImage(post) {
  if (!('_embedded' in post) || !('wp:featuredmedia' in post._embedded)) {
    return null;
  }

  if (!Array.isArray(post._embedded['wp:featuredmedia']) || 0 === post._embedded['wp:featuredmedia'].length) {
    return null;
  }

  const images = post._embedded['wp:featuredmedia'].filter(media => {
    return 'media_type' in media && 'image' === media.media_type;
  });

  if (0 === images.length) {
    return null;
  }

  return images.shift();
}

/***/ }),

/***/ "./src/components/layout/compact/Compact.jsx":
/*!***************************************************!*\
  !*** ./src/components/layout/compact/Compact.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Compact; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_compact_PostCompact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../post-compact/PostCompact */ "./src/components/post-compact/PostCompact.jsx");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sorting */ "./src/components/layout/sorting.js");


/**
 * Internal dependencies
 */


/**
 * Compact Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */

function Compact(_ref) {
  let {
    posts,
    sorting
  } = _ref;

  if (0 === posts.length) {
    return null;
  }

  const clonedPosts = posts.slice();

  if ('' !== sorting) {
    clonedPosts.sort((0,_sorting__WEBPACK_IMPORTED_MODULE_2__.getSortingFunction)(sorting));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-cata-rest__layout is-layout-compact"
  }, clonedPosts.map(post => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_compact_PostCompact__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: post.id,
      post: post
    });
  }));
}

/***/ }),

/***/ "./src/components/layout/network/Network.jsx":
/*!***************************************************!*\
  !*** ./src/components/layout/network/Network.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Network; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_network_PostNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../post-network/PostNetwork */ "./src/components/post-network/PostNetwork.jsx");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sorting */ "./src/components/layout/sorting.js");


/**
 * Internal dependencies
 */


/**
 * Network Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */

function Network(_ref) {
  let {
    posts,
    sorting
  } = _ref;

  if (0 === posts.length) {
    return null;
  }

  const clonedPosts = posts.slice();

  if ('' !== sorting) {
    clonedPosts.sort((0,_sorting__WEBPACK_IMPORTED_MODULE_2__.getSortingFunction)(sorting));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-cata-rest__layout is-layout-network"
  }, clonedPosts.map(post => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_network_PostNetwork__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: post.id,
      post: post
    });
  }));
}

/***/ }),

/***/ "./src/components/layout/sorting.js":
/*!******************************************!*\
  !*** ./src/components/layout/sorting.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSortingFunction": function() { return /* binding */ getSortingFunction; }
/* harmony export */ });
/**
 * Sort Default
 * Don't change sort order
 *
 * @return 0
 */
function sortDefault() {
  return 0;
}
/**
 * Sort Published Newest
 *
 * @param {object} a 
 * @param {object} b 
 * @return {number}
 */


function sortPublishedNewest(a, b) {
  return Math.sign(Date.parse(b.date_gmt) - Date.parse(a.date_gmt));
}
/**
 * Get Sorting Function
 * 
 * @param {string} sortingKey
 * @return {function}
 */


function getSortingFunction(sortingKey) {
  switch (sortingKey) {
    case 'published:newest':
      return sortPublishedNewest;
      break;

    default:
      return sortDefault;
  }
}

/***/ }),

/***/ "./src/components/layout/trending/Trending.jsx":
/*!*****************************************************!*\
  !*** ./src/components/layout/trending/Trending.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Trending; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_trending_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../post-trending/Post */ "./src/components/post-trending/Post.jsx");
/* harmony import */ var _post_trending_PostMedium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../post-trending/PostMedium */ "./src/components/post-trending/PostMedium.jsx");
/* harmony import */ var _post_trending_PostLarge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post-trending/PostLarge */ "./src/components/post-trending/PostLarge.jsx");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sorting */ "./src/components/layout/sorting.js");


/**
 * Internal dependencies
 */




/**
 * Trending Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */

function Trending(_ref) {
  let {
    posts,
    sorting
  } = _ref;

  if (2 >= posts.length) {
    return null;
  }

  const clonedPosts = posts.slice();

  if ('' !== sorting) {
    clonedPosts.sort((0,_sorting__WEBPACK_IMPORTED_MODULE_4__.getSortingFunction)(sorting));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-cata-rest__layout is-layout-trending"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "has-serif-font-family"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_trending_PostMedium__WEBPACK_IMPORTED_MODULE_2__["default"], {
    post: clonedPosts[0]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "has-serif-font-family"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_trending_PostLarge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: clonedPosts[1]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "has-sans-serif-font-family"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-cata-rest__list has-step-p-0-font-size line-height-2"
  }, clonedPosts.slice(2, 8).map(post => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_trending_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: post.id,
      post: post
    });
  }))));
}

/***/ }),

/***/ "./src/components/post-compact/PostCompact.jsx":
/*!*****************************************************!*\
  !*** ./src/components/post-compact/PostCompact.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostCompact; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/Image */ "./src/components/image/Image.jsx");
/* harmony import */ var _text_content_TextContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text-content/TextContent */ "./src/components/text-content/TextContent.jsx");
/* harmony import */ var _image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/get-dimensions */ "./src/components/image/get-dimensions.js");
/* harmony import */ var _image_get_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/get-image */ "./src/components/image/get-image.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Post Compact
 * 
 * @param {object} post
 */

function PostCompact(_ref) {
  let {
    post
  } = _ref;
  const data = (0,_image_get_image__WEBPACK_IMPORTED_MODULE_4__["default"])(post);
  const dimensions = (0,_image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    className: "preview is-layout-compact"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__start"
  }, null !== data && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "preview__image-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    dimensions: dimensions,
    sizes: "(max-width: 40em) 92.5vw, 36em"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "preview__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    className: "preview__permalink",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: post.title.rendered
  }))))));
}

/***/ }),

/***/ "./src/components/post-network/PostNetwork.jsx":
/*!*****************************************************!*\
  !*** ./src/components/post-network/PostNetwork.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostNetwork; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/Image */ "./src/components/image/Image.jsx");
/* harmony import */ var _text_content_TextContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text-content/TextContent */ "./src/components/text-content/TextContent.jsx");
/* harmony import */ var _image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/get-dimensions */ "./src/components/image/get-dimensions.js");
/* harmony import */ var _image_get_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/get-image */ "./src/components/image/get-image.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Post Network
 * 
 * @param {object} post
 */

function PostNetwork(_ref) {
  let {
    post
  } = _ref;
  const data = (0,_image_get_image__WEBPACK_IMPORTED_MODULE_4__["default"])(post);
  const dimensions = (0,_image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    className: "preview is-layout-network"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__start"
  }, null !== data && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "preview__image-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    dimensions: dimensions,
    sizes: "(max-width: 40em) 92.5vw, 36em"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__end"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "preview__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    className: "preview__permalink",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: post.title.rendered
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__excerpt"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, post.excerpt.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "preview__domain"
  }, new URL(post.link).hostname))));
}

/***/ }),

/***/ "./src/components/post-trending/Post.jsx":
/*!***********************************************!*\
  !*** ./src/components/post-trending/Post.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-content/TextContent */ "./src/components/text-content/TextContent.jsx");


/**
 * Post
 * 
 * @param {object} post
 */

function Post(_ref) {
  let {
    post
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: post.title.rendered
  })));
}

/***/ }),

/***/ "./src/components/post-trending/PostLarge.jsx":
/*!****************************************************!*\
  !*** ./src/components/post-trending/PostLarge.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostLarge; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-content/TextContent */ "./src/components/text-content/TextContent.jsx");
/* harmony import */ var _image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/Image */ "./src/components/image/Image.jsx");
/* harmony import */ var _image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/get-dimensions */ "./src/components/image/get-dimensions.js");
/* harmony import */ var _image_get_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/get-image */ "./src/components/image/get-image.js");
/* harmony import */ var _get_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-category */ "./src/components/post-trending/get-category.js");
/* harmony import */ var _author_get_author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../author/get-author */ "./src/components/author/get-author.js");
/* harmony import */ var _author_Author__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../author/Author */ "./src/components/author/Author.jsx");








/**
 * Post Large
 * 
 * @param {object} post
 */

function PostLarge(_ref) {
  let {
    post
  } = _ref;
  const data = (0,_image_get_image__WEBPACK_IMPORTED_MODULE_4__["default"])(post);
  const dimensions = (0,_image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"])(data, 4 / 5, [2560, 1920, 1280, 960, 640, 480, 320]);
  const category = (0,_get_category__WEBPACK_IMPORTED_MODULE_5__["default"])(post);
  const author = (0,_author_get_author__WEBPACK_IMPORTED_MODULE_6__["default"])(post);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    className: "preview is-layout-trending"
  }, null !== data && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "preview__image-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    dimensions: dimensions,
    sizes: "(max-width: 20em) 92.5vw, 20em"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__content"
  }, null !== category && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "preview__kicker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "category",
    href: category.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: category.name
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "preview__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: post.title.rendered
  }))), null !== author && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_author_Author__WEBPACK_IMPORTED_MODULE_7__["default"], {
    author: author
  })));
}

/***/ }),

/***/ "./src/components/post-trending/PostMedium.jsx":
/*!*****************************************************!*\
  !*** ./src/components/post-trending/PostMedium.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostMedium; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-content/TextContent */ "./src/components/text-content/TextContent.jsx");
/* harmony import */ var _image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/Image */ "./src/components/image/Image.jsx");
/* harmony import */ var _image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/get-dimensions */ "./src/components/image/get-dimensions.js");
/* harmony import */ var _image_get_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/get-image */ "./src/components/image/get-image.js");
/* harmony import */ var _get_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-category */ "./src/components/post-trending/get-category.js");
/* harmony import */ var _author_get_author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../author/get-author */ "./src/components/author/get-author.js");
/* harmony import */ var _author_Author__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../author/Author */ "./src/components/author/Author.jsx");


/**
 * Internal dependencies
 */







/**
 * Post
 * 
 * @param {object} post
 */

function PostMedium(_ref) {
  let {
    post
  } = _ref;
  const data = (0,_image_get_image__WEBPACK_IMPORTED_MODULE_4__["default"])(post);
  const dimensions = (0,_image_get_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"])(data, 3 / 2, [2560, 1920, 1280, 960, 640, 480, 320]);
  const category = (0,_get_category__WEBPACK_IMPORTED_MODULE_5__["default"])(post);
  const author = (0,_author_get_author__WEBPACK_IMPORTED_MODULE_6__["default"])(post);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
    className: "preview is-layout-trending"
  }, null !== data && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "preview__image-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    dimensions: dimensions,
    sizes: "(max-width: 15em) 92.5vw, 15em"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview__content"
  }, null !== category && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "preview__kicker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "category",
    href: category.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: category.name
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "preview__title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    rel: "bookmark",
    href: post.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_content_TextContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: post.title.rendered
  }))), null !== author && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_author_Author__WEBPACK_IMPORTED_MODULE_7__["default"], {
    author: author
  })));
}

/***/ }),

/***/ "./src/components/post-trending/get-category.js":
/*!******************************************************!*\
  !*** ./src/components/post-trending/get-category.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getCategory; }
/* harmony export */ });
const PRIVATE_CATEGORIES = ['uncategorized', 'collective-world', 'project-oasis'];
/**
 * Get Category
 */

function getCategory(post) {
  if (!('_embedded' in post) || !('wp:term' in post._embedded)) {
    return null;
  }

  if (!Array.isArray(post._embedded['wp:term']) || 0 === post._embedded['wp:term'].length) {
    return null;
  }

  const taxonomies = post._embedded['wp:term'].filter(isCategoryArray);

  if (0 === taxonomies.length) {
    return null;
  }

  const categories = taxonomies[0].filter(tax => {
    return !PRIVATE_CATEGORIES.includes(tax.slug);
  });

  if (0 === categories.length) {
    return null;
  }

  return Object.assign({}, categories[0]);
}
/**
 * Is Catrgoty Array
 * 
 * @param {array} terms
 */

function isCategoryArray(terms) {
  return Array.isArray(terms) && 0 < terms.length && 'taxonomy' in terms[0] && 'category' === terms[0].taxonomy;
}

/***/ }),

/***/ "./src/components/text-content/TextContent.jsx":
/*!*****************************************************!*\
  !*** ./src/components/text-content/TextContent.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextContent; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Text Content
 * 
 * @param {string} text
 */
function TextContent(_ref) {
  let {
    text
  } = _ref;
  const textContent = document.createRange().createContextualFragment(text).firstChild.textContent;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, textContent);
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_trending_Trending__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/trending/Trending */ "./src/components/layout/trending/Trending.jsx");
/* harmony import */ var _components_layout_network_Network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/network/Network */ "./src/components/layout/network/Network.jsx");
/* harmony import */ var _components_layout_compact_Compact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/compact/Compact */ "./src/components/layout/compact/Compact.jsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * Rest Block Edit
 */

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */





/**
 * Edit
 *
 * @param {Object} props
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    urls,
    content,
    layout,
    sorting
  } = attributes;
  const [url, setUrl] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [posts, setPosts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(updatePosts, [urls]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(updateContent, [posts, layout, sorting]);
  /**
   * Update Posts
   */

  function updatePosts() {
    Promise.all(urls.map(mapUrlApiFetch)).then(responses => {
      setPosts(responses.flat());
    }).catch(handleError);
  }
  /**
   * Map URL to API Fetch
   * 
   * @param {string} url
   */


  function mapUrlApiFetch(url) {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: url,
      cata: {
        useCache: true,
        useProxy: true
      },
      signal: new AbortController().signal
    });
  }
  /**
   * Handle Error
   *
   * @param {Error} error 
   */


  function handleError(error) {
    console.error(error);
  }
  /**
   * Update Content
   */


  function updateContent() {
    let LayoutComponent = _components_layout_trending_Trending__WEBPACK_IMPORTED_MODULE_5__["default"];

    switch (layout) {
      case 'network':
        LayoutComponent = _components_layout_network_Network__WEBPACK_IMPORTED_MODULE_6__["default"];
        break;

      case 'compact':
        LayoutComponent = _components_layout_compact_Compact__WEBPACK_IMPORTED_MODULE_7__["default"];
    }

    setAttributes({ ...attributes,
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LayoutComponent, {
        posts: posts,
        sorting: sorting
      })
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), content), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "WP REST API URLs",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, urls.map((url, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `${clientId}-cata-rest-url-${index}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      text: "x",
      label: "Remove",
      variant: "tertiary",
      isDestructive: true,
      onClick: () => {
        setAttributes({
          urls: urls.filter((u, i) => {
            return i !== index;
          })
        });
      }
    }), url);
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WP REST API URL', 'cata'),
    type: "url",
    value: url,
    onChange: setUrl
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add URL', 'cata'),
    onClick: () => {
      setAttributes({
        urls: [...urls, url]
      });
      setUrl('');
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "REST Layout",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Layout",
    value: layout,
    onChange: newLayout => {
      setAttributes({ ...attributes,
        layout: newLayout
      });
    },
    options: [{
      'label': 'Default',
      'value': ''
    }, {
      'label': 'Trending',
      'value': 'trending'
    }, {
      'label': 'Network',
      'value': 'network'
    }, {
      'label': 'Compact',
      'value': 'compact'
    }]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "REST Sorting",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Sorting",
    value: sorting,
    onChange: newSorting => {
      setAttributes({ ...attributes,
        sorting: newSorting
      });
    },
    options: [{
      'label': 'Default',
      'value': ''
    }, {
      'label': 'Newest First by Published Date',
      'value': 'published:newest'
    }]
  })))));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Rest Block Save
 */

/**
 * External dependencies
 */



/**
 * Save
 * 
 * @param {Object} props
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  let {
    attributes: {
      content
    }
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, 'string' === typeof content ? content : _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.children.toHTML([content])));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Rest Block
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cata/rest', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map