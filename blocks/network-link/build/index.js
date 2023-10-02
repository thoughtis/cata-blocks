/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dimension-controls.js":
/*!***********************************!*\
  !*** ./src/dimension-controls.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




const DimensionControls = _ref => {
  let {
    clientId,
    attributes: {
      width
    },
    setAttributes
  } = _ref;
  const defaultUnits = ['px', '%', 'vw', 'em', 'rem'];
  const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseCustomUnits)({
    availableUnits: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useSetting)('spacing.units') || defaultUnits
  });

  const onDimensionChange = (dimension, nextValue) => {
    const parsedValue = parseFloat(nextValue);
    /**
     * If we have no value set and we change the unit,
     * we don't want to set the attribute, as it would
     * end up having the unit as value without any number.
     */

    if (isNaN(parsedValue) && nextValue) return;
    setAttributes({
      [dimension]: parsedValue < 0 ? '' : nextValue
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "dimensions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    className: "single-column",
    hasValue: () => !!width,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width'),
    onDeselect: () => setAttributes({
      width: ''
    }),
    resetAllFilter: () => ({
      width: ''
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width'),
    labelPosition: "top",
    value: width || '',
    min: 0,
    onChange: nextWidth => onDimensionChange('width', nextWidth),
    units: units
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DimensionControls);

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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _network_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network-list.js */ "./src/network-list.js");
/* harmony import */ var _dimension_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dimension-controls */ "./src/dimension-controls.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Internal Dependencies
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    clientId,
    attributes,
    setAttributes
  } = _ref;
  const {
    service,
    width,
    isLink
  } = attributes;
  const IconComponent = (0,_network_list_js__WEBPACK_IMPORTED_MODULE_3__.getIconBySite)(service);
  const socialLinkName = (0,_network_list_js__WEBPACK_IMPORTED_MODULE_3__.getNameBySite)(service);
  console.log(width);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: {
      width
    }
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clientId: clientId,
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    attributes: attributes,
    setAttributes: setAttributes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconComponent, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "cata-network-link-label screen-reader-text"
  }, socialLinkName))));
}

/***/ }),

/***/ "./src/logos/components/collectiveworld.js":
/*!*************************************************!*\
  !*** ./src/logos/components/collectiveworld.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectiveWorldLogo": function() { return /* binding */ CollectiveWorldLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const CollectiveWorldLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 200 20.05"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 10.17C0 3.99 4.63.28 9.55.28s7.68 2.84 8.54 6.16l-3.02 1.01c-.56-2.3-2.33-4.15-5.51-4.15s-6.28 2.27-6.28 6.87 3.05 6.8 6.29 6.8 5-2.04 5.64-4.18l2.95.97c-.85 3.21-3.75 6.29-8.59 6.29-5.1 0-9.57-3.69-9.57-9.88Zm33.19 2.95c0 4.02-2.87 6.93-6.77 6.93s-6.74-2.92-6.74-6.93 2.87-6.9 6.74-6.9 6.77 2.91 6.77 6.9Zm-3.12 0c0-2.7-1.71-4.1-3.65-4.1s-3.65 1.39-3.65 4.1 1.74 4.15 3.65 4.15 3.65-1.42 3.65-4.15Zm5.58 6.52V.28h3.11v19.37h-3.11Zm6.58 0V.28h3.11v19.37h-3.11Zm18.13-3.72c-.7 2.27-2.75 4.12-5.89 4.12-3.53 0-6.67-2.58-6.67-6.99 0-4.12 3.05-6.86 6.34-6.86 4.02 0 6.37 2.65 6.37 6.77.01.33-.01.67-.07 1h-9.52c.07 1.98 1.64 3.4 3.56 3.4s2.84-1 3.27-2.27l2.62.82Zm-2.98-4.22c-.06-1.52-1.07-2.89-3.21-2.89-.8-.01-1.57.28-2.16.82-.59.54-.95 1.28-1.02 2.08h6.39Zm8.19 1.42c0 2.62 1.69 4.1 3.65 4.1s2.97-1.42 3.27-2.4l2.74.98c-.61 2.04-2.58 4.26-5.99 4.26-3.84 0-6.74-2.97-6.74-6.93s2.92-6.9 6.67-6.9c3.5 0 5.44 2.2 5.96 4.28l-2.78 1.01c-.29-1.16-1.17-2.43-3.15-2.43s-3.62 1.42-3.62 4.04ZM81.9 6.61h2.7v2.75h-2.7v6.05c0 1.16.51 1.64 1.67 1.64.36 0 .72-.04 1.07-.1v2.58c-.19.08-.78.29-1.89.29-2.42 0-3.91-1.45-3.91-3.88V9.39h-2.42V6.62h.67c1.39 0 2.01-.88 2.01-2.04V2.64h2.81v3.97ZM89.31 0a2.035 2.035 0 0 1 2.04 2.02 2.03 2.03 0 0 1-3.9.78c-.05-.12-.09-.25-.12-.38-.08-.39-.04-.8.11-1.17A2.031 2.031 0 0 1 89.3-.01Zm-1.52 19.65V6.61h3.08v13.04h-3.08Zm13.76 0h-3.11L93.15 6.61h3.43l3.46 9.32 3.37-9.32h3.27l-5.12 13.04Zm18.52-3.72c-.7 2.27-2.76 4.12-5.89 4.12-3.53 0-6.67-2.58-6.67-6.99 0-4.12 3.05-6.86 6.34-6.86 4.02 0 6.37 2.65 6.37 6.77.01.34-.01.67-.08 1h-9.51c.08 1.98 1.64 3.4 3.56 3.4s2.84-1 3.27-2.27l2.62.82Zm-2.97-4.22c-.06-1.52-1.07-2.89-3.21-2.89-.8-.01-1.57.28-2.17.82s-.96 1.28-1.02 2.08h6.39ZM151.91.68h3.31l-5.33 18.98h-3.31l-4.6-14.35-4.6 14.34h-3.3L128.7.68h3.37l3.81 13.86L140.32.68h3.34l4.53 13.98L151.92.68Zm16.65 12.44c0 4.02-2.87 6.93-6.77 6.93s-6.74-2.92-6.74-6.93 2.87-6.9 6.74-6.9 6.77 2.91 6.77 6.9Zm-3.13 0c0-2.7-1.71-4.1-3.65-4.1s-3.65 1.39-3.65 4.1 1.74 4.15 3.65 4.15 3.63-1.43 3.65-4.15Zm13.21-3.43c-.33-.05-.67-.08-1.01-.07-2.42 0-3.5 1.39-3.5 3.84v6.21h-3.11V6.63h3.02v2.09c.61-1.42 2.05-2.24 3.78-2.24.28 0 .55.03.82.08V9.7Zm2.61 9.96V.28h3.11v19.37h-3.11Zm18.62-2.37c0 .8.04 1.6.13 2.39h-2.97c-.09-.56-.13-1.13-.13-1.69-.62 1.1-1.98 2-3.82 2-3.75 0-6.27-2.95-6.27-6.87s2.55-6.83 6.21-6.83c2.27 0 3.43 1.04 3.84 1.88V.28h3.02l-.02 17Zm-6.44-.03c2.04 0 3.46-1.69 3.46-4.18s-1.39-4.04-3.43-4.04-3.53 1.58-3.53 4.07 1.37 4.15 3.5 4.15Z"
}));

/***/ }),

/***/ "./src/logos/components/creepycatalog.js":
/*!***********************************************!*\
  !*** ./src/logos/components/creepycatalog.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreepyCatalogLogo": function() { return /* binding */ CreepyCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const CreepyCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 200 23.92"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M31.9 18.78a9.377 9.377 0 0 1-1.84-3.84c-.48-1.98-.7-4.01-.67-6.05 0-2.7.36-4.83 1.09-6.4C31.21.92 32.37.14 33.97.14c.44 0 .87.03 1.3.1.37.06.85.18 1.44.34l1.16.3.55 5.93-.28.03c-.74-1.59-1.33-2.77-1.76-3.55-.33-.64-.75-1.23-1.24-1.75a1.84 1.84 0 0 0-1.31-.57c-.65 0-1.09.4-1.34 1.2-.29 1.12-.41 2.27-.37 3.42-.01 1.99.13 3.98.43 5.95.2 1.51.63 2.98 1.27 4.36.56 1.1 1.23 1.64 2 1.64 1.16 0 2.36-1.8 3.59-5.39l.31.08c-.8 2.88-1.59 4.91-2.39 6.09-.8 1.19-1.72 1.78-2.75 1.78-1.05-.02-2.03-.5-2.69-1.31Zm12.04-7.22v7c.11.2.25.38.43.52.19.14.39.25.6.34v.27h-4.95v-.27c.21-.11.4-.23.59-.37.17-.13.32-.3.43-.48V1.67c-.25-.39-.61-.68-1.04-.85V.54h5.12c1.33-.07 2.63.35 3.68 1.16.92.78 1.38 1.94 1.38 3.48.03 1.36-.4 2.7-1.22 3.79a6.669 6.669 0 0 1-2.93 2.26h1.89a89.26 89.26 0 0 0 4.48 12.52l-.22.16a68.85 68.85 0 0 1-4.05-5.83 40.665 40.665 0 0 1-3.17-6.58c-.21.03-.42.05-.63.06h-.4Zm0-10.2v9.37h.44c.84.04 1.63-.37 2.08-1.08.47-.72.7-1.93.7-3.64 0-3.1-.83-4.65-2.49-4.65h-.74Zm7.65 18.05c.2-.11.4-.23.59-.37.17-.13.31-.3.43-.48V1.67c-.25-.39-.61-.68-1.04-.85V.54h8.62l.42 5.09-.25.08c-.85-1.99-1.79-3.44-2.84-4.35h-1.99v8.07h3.23l-1.04.82h-2.18v8.61h2.08c.57-.52 1.07-1.13 1.47-1.79.55-.92 1.05-1.87 1.49-2.85l.28.05-.52 5.41h-8.73v-.27Zm10.09 0c.21-.11.41-.23.6-.37.17-.13.31-.3.43-.48V1.67c-.25-.39-.61-.68-1.04-.85V.54h8.62l.41 5.09-.25.08c-.85-1.99-1.8-3.44-2.84-4.35h-1.99v8.07h3.21l-1.04.82h-2.18v8.61h2.08c.57-.52 1.07-1.13 1.47-1.79.55-.92 1.05-1.87 1.49-2.85l.28.05-.52 5.41H61.7v-.27Zm10.09 0c.21-.11.4-.23.59-.37.17-.13.31-.3.43-.48V1.67c-.25-.39-.61-.68-1.04-.85V.54h4.94c1.34-.08 2.66.35 3.7 1.2.9.81 1.36 2 1.36 3.58.02 1.24-.29 2.46-.88 3.54a6.7 6.7 0 0 1-2.26 2.44c-.79.55-1.73.85-2.69.88h-.28v6.37c.11.2.25.38.43.52.19.13.39.25.6.34v.27h-4.9v-.29Zm4.28-8.04c.81 0 1.55-.46 1.92-1.18.49-.79.73-2.08.73-3.91s-.21-3.12-.62-3.84a1.969 1.969 0 0 0-1.78-1.08h-.63v10.01h.38Zm8.54 8.04c.21-.11.4-.23.59-.37.17-.13.32-.3.43-.48v-6.97l-3.18-9.98c-.32-.31-.68-.58-1.08-.79V.54h4.87v.28c-.17.07-.32.18-.44.31-.13.15-.23.33-.28.52l2.43 8.58 2.6-8.32c-.28-.57-.9-.93-1.88-1.09V.54h3.21l-3.34 10.55v7.47c.11.2.25.38.43.52s.38.25.59.34v.27H84.6v-.29Zm16.21-.63a9.358 9.358 0 0 1-1.83-3.84c-.48-1.98-.7-4.01-.67-6.05 0-2.7.36-4.83 1.09-6.4.73-1.56 1.89-2.35 3.47-2.35.44 0 .87.03 1.3.1.37.06.85.18 1.44.34l1.16.3.53 5.93-.28.03c-.74-1.59-1.32-2.77-1.75-3.55-.33-.64-.75-1.23-1.25-1.75a1.84 1.84 0 0 0-1.31-.57c-.64 0-1.09.4-1.34 1.2-.29 1.12-.41 2.27-.37 3.42-.01 1.99.13 3.98.43 5.95.19 1.51.62 2.98 1.27 4.36.56 1.1 1.23 1.64 2.01 1.64 1.16 0 2.36-1.8 3.59-5.39l.3.08c-.79 2.88-1.59 4.91-2.39 6.09-.8 1.18-1.72 1.77-2.75 1.78-1.03-.03-2-.51-2.65-1.31Zm17.12-.19c.19.3.41.57.67.82v.27h-4.45v-.27c.17-.09.33-.2.47-.33.13-.15.24-.33.3-.52l-.94-4.19h-3.56l-1.04 3.88c.25.45.89.84 1.91 1.15v.27h-3.18L112 5.45l-.44-1.94 1.72-3.52h.28l4.36 18.59Zm-5.55-11.44-1.72 6.43h3.15l-1.44-6.43Zm7.88 12.28c.21-.11.4-.23.59-.37.17-.13.32-.3.43-.48V1.37h-1.11c-.28.45-.62 1.08-1.04 1.89s-.99 1.93-1.73 3.38h-.28l.67-6.07h9.84l.67 6.07h-.25l-.58-1.14c-.55-1.08-1-1.94-1.35-2.6-.35-.66-.63-1.16-.86-1.53h-1.08v17.19c.11.2.25.38.43.52s.38.25.59.34v.27h-4.94v-.27Zm16.53-.82c.19.29.42.56.68.81v.27h-4.45v-.27c.17-.09.33-.2.47-.33.13-.15.24-.33.3-.52l-.94-4.19h-3.54l-1.04 3.88c.26.45.89.84 1.91 1.15v.27h-3.18l3.89-14.22-.44-1.94L132.13 0h.28l4.37 18.6Zm-5.56-11.47-1.71 6.43h3.15l-1.44-6.43Zm6.5 12.28c.21-.11.41-.23.6-.37.17-.13.31-.3.43-.48V1.67c-.25-.39-.61-.68-1.04-.85V.54h4.96v.28c-.44.15-.8.45-1.04.85v17.19h2.43c.57-.54 1.06-1.16 1.48-1.83.51-.78 1.12-1.81 1.81-3.09l.28.06-.83 5.68h-9.07v-.27Zm13.05-.55a8.481 8.481 0 0 1-2.03-3.49c-.54-1.7-.8-3.47-.76-5.25-.03-1.78.23-3.55.76-5.25a8.582 8.582 0 0 1 2.03-3.5 3.94 3.94 0 0 1 2.81-1.23 4 4 0 0 1 2.81 1.23c.95.98 1.65 2.19 2.04 3.5.53 1.7.79 3.47.76 5.25.03 1.78-.23 3.55-.76 5.25a8.502 8.502 0 0 1-2.04 3.49c-.73.77-1.75 1.21-2.81 1.23a3.923 3.923 0 0 1-2.81-1.23Zm4.68-1.71c.38-1.41.58-3.76.58-7.04.02-1.78-.06-3.56-.25-5.33-.07-1.01-.35-2-.81-2.91-.26-.54-.8-.89-1.39-.92-.88 0-1.52.71-1.91 2.12-.39 1.41-.58 3.76-.58 7.04 0 3.27.19 5.61.58 7.02.39 1.42 1.04 2.13 1.91 2.13s1.5-.7 1.89-2.11h-.02Zm10.45-7.4h4.73v10.31h-.28l-1.16-3.25c-.17.9-.59 1.74-1.21 2.43-.51.56-1.22.87-1.98.87-1.08 0-2.11-.44-2.88-1.2a8.083 8.083 0 0 1-1.99-3.46c-.51-1.73-.75-3.52-.72-5.32-.03-1.8.21-3.6.72-5.33.36-1.3 1.04-2.49 1.99-3.46.77-.76 1.8-1.19 2.88-1.19.45-.01.9.02 1.34.1.32.06.7.16 1.14.29.42.14.84.26 1.27.35l.52 5.72h-.25l-.38-.82a72.04 72.04 0 0 0-1.42-2.91c-.27-.55-.63-1.05-1.07-1.48-.31-.3-.73-.47-1.16-.48-.62 0-1.19.37-1.45.94-.44.92-.71 1.92-.79 2.94-.18 1.75-.26 3.51-.24 5.27-.02 1.76.06 3.52.24 5.28.08 1.02.35 2.02.79 2.94.27.57.84.94 1.48.94.61 0 1.05-.66 1.33-1.98.34-2.08.49-4.19.45-6.3-.55-.46-1.19-.79-1.88-.96l-.02-.24Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#ee2724",
  d: "M49.34 15.84c.31.94.92 2.74 1.56 4.46.11.27.29.74.55 1.37.36.86.68 1.56.93 2.08a.18.18 0 0 1-.07.05l-.13.11c-1.04-1.18-4.68-6.57-5.33-8.15.15.31.51.44.82.3l.23-.19c.14-.2.34-.36.57-.46.42-.12.88.44.88.44Z"
}));

/***/ }),

/***/ "./src/logos/components/quotecatalog.js":
/*!**********************************************!*\
  !*** ./src/logos/components/quotecatalog.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteCatalogLogo": function() { return /* binding */ QuoteCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const QuoteCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 200 20.13"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M48.87 15.96c-1.21 0-2.29-.34-3.23-1.03s-1.66-1.63-2.17-2.83-.77-2.53-.77-4.01.26-2.84.78-4.03c.52-1.2 1.24-2.13 2.15-2.82C46.55.56 47.6.22 48.79.22s2.31.35 3.23 1.03 1.65 1.63 2.15 2.83c.5 1.2.76 2.54.76 4.03s-.26 2.82-.77 4.01c-.51 1.2-1.23 2.13-2.14 2.82s-1.97 1.02-3.16 1.02Zm4.08-1.86c-.62.77-1.63 1.45-3.04 2.05s-2.73 1.02-3.97 1.27l.04.17c1.2-.2 2.25-.3 3.13-.3.38 0 .74.02 1.08.06s.71.09 1.12.17c.36.06.68.11.97.14.29.03.58.05.87.05.58 0 1.05-.08 1.41-.23.35-.15.64-.4.85-.74l.44.32c-.21.81-.54 1.43-.99 1.87-.44.44-1.02.65-1.74.65-.47 0-.92-.06-1.37-.19-.44-.13-.98-.32-1.61-.57-.66-.25-1.2-.44-1.64-.55-.44-.11-.9-.17-1.39-.17-.44 0-.87.04-1.29.13-.42.09-.86.22-1.33.38l-.42-1.44c.76-.13 1.61-.33 2.56-.6.95-.27 1.83-.59 2.66-.95.82-.36 1.41-.74 1.76-1.15l1.9-.38Zm-3.66.97c.65 0 1.19-.24 1.63-.71.44-.47.78-1.1 1.01-1.88.23-.78.34-1.62.34-2.51 0-1.43-.15-2.82-.45-4.18-.3-1.36-.74-2.48-1.33-3.36-.59-.88-1.29-1.32-2.12-1.32-.63 0-1.18.24-1.63.71-.46.47-.8 1.1-1.03 1.87-.23.77-.34 1.61-.34 2.5 0 1.44.15 2.84.45 4.2.3 1.36.74 2.48 1.33 3.36.59.88 1.3 1.32 2.13 1.32ZM62.36 15.6l-.02-1.69h-.06c-.27.42-.54.77-.82 1.06-.28.29-.6.53-.96.71s-.77.27-1.22.27c-.68 0-1.22-.25-1.62-.76s-.6-1.2-.6-2.07V7.93c0-.44-.02-.75-.07-.93-.04-.18-.15-.27-.31-.29-.17-.02-.44.04-.84.18l-.13-.46 1.54-.53 1.76-.55.29.27v7.29c0 .56.08.96.25 1.21.17.25.42.38.76.38s.68-.13 1.03-.38c.34-.25.68-.61 1.01-1.06V7.93c0-.44-.03-.75-.08-.93-.05-.18-.16-.27-.32-.29-.17-.02-.44.04-.82.18l-.15-.46 1.56-.53 1.74-.55.29.27v7.74c.01.43.04.73.08.9.04.17.15.26.3.27.16 0 .42-.07.79-.22l.19.46-1.54.65-1.57.55-.46-.36ZM70.82 15.96c-.89 0-1.66-.22-2.31-.66-.65-.44-1.16-1.07-1.52-1.87-.36-.8-.54-1.74-.54-2.8s.17-1.97.52-2.79.85-1.47 1.51-1.94 1.44-.7 2.33-.7 1.63.22 2.29.66c.65.44 1.15 1.07 1.51 1.88s.53 1.74.53 2.79-.17 1.97-.51 2.8c-.34.83-.84 1.47-1.5 1.94s-1.43.69-2.31.69Zm.28-.93c.58 0 1.01-.32 1.3-.95.28-.63.43-1.39.43-2.28s-.08-1.8-.26-2.67c-.17-.87-.43-1.58-.79-2.14-.35-.56-.78-.84-1.27-.84-.58 0-1.01.32-1.3.95-.28.63-.43 1.39-.43 2.28s.08 1.8.26 2.67c.17.87.43 1.58.79 2.14.35.56.78.84 1.27.84ZM82.05 11.29c0 1.61-.2 2.79-.6 3.54s-1.08 1.13-2.04 1.13c-.81 0-1.42-.28-1.82-.83s-.61-1.49-.61-2.81V6.41h-1.31v-.78c.73-.04 1.34-.3 1.81-.78.48-.48.78-1.18.9-2.11h.78v2.81h2.28v.85h-2.22v5.5c0 .59.03 1.08.08 1.45s.16.66.31.87c.15.21.36.31.63.31.42 0 .73-.27.93-.81.2-.54.3-1.36.3-2.46h.57ZM87.97 9.26c0-.71-.04-1.28-.11-1.73-.08-.44-.21-.8-.4-1.06s-.46-.4-.8-.4c-.39 0-.7.16-.93.47-.23.32-.39.76-.48 1.32-.09.56-.14 1.27-.14 2.13s.09 1.65.27 2.31c.18.65.44 1.15.8 1.51.36.35.79.53 1.31.53.48 0 .93-.22 1.36-.65.42-.44.74-1.15.94-2.13h.47c-.2 1.51-.62 2.61-1.24 3.33-.63.71-1.44 1.07-2.44 1.07-.75 0-1.4-.21-1.95-.63-.55-.42-.98-1.02-1.29-1.79-.31-.78-.46-1.7-.46-2.76s.16-1.94.46-2.79c.31-.85.75-1.52 1.33-2.02.57-.5 1.25-.75 2.04-.75 1.14 0 2 .46 2.58 1.37.58.91.87 2.09.87 3.55H84.6v-.87h3.38ZM95.47 8.23c0-1.53.27-2.91.81-4.14.54-1.23 1.29-2.19 2.25-2.88.96-.7 2.07-1.04 3.32-1.04.63 0 1.21.1 1.74.29.52.2 1.01.5 1.45.9.14.13.26.17.35.14s.15-.14.18-.31l.11-.85h.48l.28 5.43h-.47c-.28-1.52-.72-2.68-1.32-3.47-.6-.8-1.38-1.2-2.34-1.2-.82 0-1.53.29-2.13.87-.6.58-1.06 1.39-1.38 2.42-.32 1.03-.47 2.2-.47 3.52s.16 2.5.47 3.51.78 1.8 1.39 2.37c.61.57 1.32.85 2.14.85 1.09 0 1.98-.47 2.67-1.42s1.14-2.2 1.36-3.76h.55c-.18 2.07-.71 3.67-1.6 4.8-.89 1.13-2.15 1.69-3.77 1.69-1.26 0-2.35-.34-3.26-1.02-.91-.68-1.6-1.6-2.08-2.77-.47-1.17-.71-2.48-.71-3.94ZM110.02 15.96c-.67 0-1.21-.22-1.6-.64-.4-.43-.6-.97-.6-1.63s.22-1.28.65-1.79c.44-.51.96-.94 1.57-1.27s1.39-.7 2.34-1.11c.1-.05.2-.09.29-.12.1-.03.19-.07.27-.12v.66c-.06.04-.13.07-.19.09s-.13.06-.19.09c-.54.28-.99.56-1.35.83-.35.28-.65.59-.87.95-.23.35-.34.75-.34 1.18 0 .37.08.66.25.87.17.22.4.32.7.32.4 0 .79-.21 1.16-.63.37-.42.66-1.05.87-1.9l.11 1.12h-.19c-.17.96-.5 1.72-1.01 2.27-.5.55-1.14.83-1.9.83Zm4.76-.02c-.62 0-1.09-.21-1.42-.63-.33-.42-.49-1.09-.49-2.03V8.2c0-.8-.11-1.36-.34-1.69-.23-.33-.57-.49-1.03-.49-.35 0-.64.09-.85.26s-.32.4-.32.69c0 .14.04.32.13.55.03.1.05.2.08.3.03.1.04.21.04.32 0 .29-.09.53-.27.71-.18.18-.45.27-.79.27-.38 0-.67-.11-.87-.34-.2-.23-.3-.53-.3-.91 0-.48.15-.93.46-1.34.3-.41.72-.74 1.26-.98s1.14-.36 1.81-.36c1.02 0 1.82.28 2.38.83.56.56.84 1.35.84 2.37v5.48c0 .42.04.7.11.85.08.15.2.23.36.23.2 0 .37-.12.5-.35s.21-.62.24-1.17h.47c-.05.81-.23 1.43-.53 1.85-.3.42-.79.64-1.46.64ZM122.92 11.29c0 1.61-.2 2.79-.6 3.54s-1.08 1.13-2.04 1.13c-.81 0-1.42-.28-1.82-.83s-.61-1.49-.61-2.81V6.41h-1.31v-.78c.73-.04 1.34-.3 1.81-.78.48-.48.78-1.18.9-2.11h.78v2.81h2.28v.85h-2.22v5.5c0 .59.03 1.08.08 1.45s.16.66.31.87c.15.21.36.31.63.31.42 0 .73-.27.93-.81.2-.54.3-1.36.3-2.46h.57ZM125.86 15.96c-.67 0-1.21-.22-1.6-.64-.4-.43-.6-.97-.6-1.63s.22-1.28.65-1.79c.44-.51.96-.94 1.57-1.27s1.39-.7 2.34-1.11c.1-.05.2-.09.29-.12.1-.03.19-.07.27-.12v.66c-.06.04-.13.07-.19.09s-.13.06-.19.09c-.54.28-.99.56-1.35.83-.35.28-.65.59-.87.95-.23.35-.34.75-.34 1.18 0 .37.08.66.25.87.17.22.4.32.7.32.4 0 .79-.21 1.16-.63.37-.42.66-1.05.87-1.9l.11 1.12h-.19c-.17.96-.5 1.72-1.01 2.27-.5.55-1.14.83-1.9.83Zm4.76-.02c-.62 0-1.09-.21-1.42-.63-.33-.42-.49-1.09-.49-2.03V8.2c0-.8-.11-1.36-.34-1.69-.23-.33-.57-.49-1.03-.49-.35 0-.64.09-.85.26s-.32.4-.32.69c0 .14.04.32.13.55.03.1.05.2.08.3.03.1.04.21.04.32 0 .29-.09.53-.27.71-.18.18-.45.27-.79.27-.38 0-.67-.11-.87-.34-.2-.23-.3-.53-.3-.91 0-.48.15-.93.46-1.34.3-.41.72-.74 1.26-.98s1.14-.36 1.81-.36c1.02 0 1.82.28 2.38.83.56.56.84 1.35.84 2.37v5.48c0 .42.04.7.11.85.08.15.2.23.36.23.2 0 .37-.12.5-.35s.21-.62.24-1.17h.47c-.05.81-.23 1.43-.53 1.85-.3.42-.79.64-1.46.64ZM136.5 13.62c0 .44.04.77.1.98s.2.36.4.45c.2.09.49.13.88.13v.47h-5.01v-.47c.4 0 .71-.04.9-.13.2-.09.33-.24.4-.45s.1-.53.1-.98V2.98l-.02-.06c.01-.46 0-.76-.04-.92-.04-.16-.14-.24-.3-.25-.17 0-.44.08-.84.26l-.21-.42 1.59-.72 1.71-.87.32.28v13.34ZM142.8 15.96c-.89 0-1.66-.22-2.31-.66-.65-.44-1.16-1.07-1.52-1.87-.36-.8-.54-1.74-.54-2.8s.17-1.97.52-2.79.85-1.47 1.51-1.94 1.44-.7 2.33-.7 1.63.22 2.29.66c.65.44 1.15 1.07 1.51 1.88s.53 1.74.53 2.79-.17 1.97-.51 2.8c-.34.83-.84 1.47-1.5 1.94s-1.43.69-2.31.69Zm.28-.93c.58 0 1.01-.32 1.3-.95.28-.63.43-1.39.43-2.28s-.08-1.8-.26-2.67c-.17-.87-.43-1.58-.79-2.14-.35-.56-.78-.84-1.27-.84-.58 0-1.01.32-1.3.95-.28.63-.43 1.39-.43 2.28s.08 1.8.26 2.67c.17.87.43 1.58.79 2.14.35.56.78.84 1.27.84ZM151.59 20.13c-.75 0-1.42-.09-2.02-.27-.6-.18-1.08-.44-1.44-.78-.36-.34-.54-.76-.54-1.25 0-.54.2-1 .6-1.37.4-.37 1.03-.71 1.89-1.02l.87-.09c-.48.3-.86.62-1.13.95-.27.33-.41.66-.41 1.01 0 .43.22.8.65 1.1.44.3 1.13.45 2.08.45.76 0 1.44-.1 2.04-.31s1.07-.47 1.41-.8c.34-.32.5-.65.5-.98s-.13-.53-.39-.64c-.26-.11-.72-.16-1.39-.16h-2.52c-.72 0-1.33-.08-1.83-.24-.5-.16-.87-.38-1.12-.66-.25-.28-.37-.62-.37-1 0-.54.2-1.01.6-1.39.4-.39.95-.74 1.64-1.05l.27.38c-.31.2-.55.39-.71.56-.16.17-.24.36-.24.56 0 .19.05.34.14.46.1.11.29.21.58.28.29.07.73.1 1.33.1h2.31c1.01 0 1.75.17 2.22.5s.7.86.7 1.57-.25 1.41-.74 2.04c-.49.63-1.17 1.13-2.04 1.5-.87.37-1.84.56-2.93.56Zm.61-7.61c-.75 0-1.4-.15-1.96-.46-.56-.3-1-.73-1.32-1.27-.32-.54-.47-1.17-.47-1.88s.15-1.33.46-1.89.75-1.01 1.33-1.33 1.25-.48 2.02-.48c.72 0 1.36.15 1.93.46.56.3 1 .73 1.3 1.28s.46 1.18.46 1.89-.15 1.36-.46 1.92c-.3.56-.74.99-1.31 1.3-.57.31-1.23.46-1.97.46Zm.25-.8c.42 0 .73-.19.95-.57.21-.38.32-.88.32-1.52 0-.58-.06-1.15-.19-1.71s-.32-1.02-.58-1.38c-.26-.36-.59-.54-.98-.54-.44 0-.77.2-.98.61s-.31.92-.31 1.54c0 .92.15 1.75.44 2.48.29.73.73 1.09 1.33 1.09ZM154 5.86c.39-.27.81-.46 1.26-.6.45-.13.85-.2 1.2-.2.28 0 .48.06.6.17.12.11.18.27.18.46 0 .21-.06.39-.19.53s-.3.21-.53.21c-.14 0-.27-.02-.4-.07-.13-.04-.27-.1-.44-.18-.28-.1-.51-.17-.68-.2a.959.959 0 0 0-.53.05l-.48-.17Z"
}));

/***/ }),

/***/ "./src/logos/components/shopcatalog.js":
/*!*********************************************!*\
  !*** ./src/logos/components/shopcatalog.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopCatalogLogo": function() { return /* binding */ ShopCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ShopCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 240 48"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m-44,25.52v-3.03H-4.55v3.03h-39.45Zm57.65-5.91c-.97-2.91-2.62-4.8-5-4.8-.43-.01-.87.07-1.27.24-1.23.52-1.99,1.77-1.89,3.1,0,2.14,1.94,3.25,4.07,4.17,3.69,1.52,6.17,3.25,6.17,6.6,0,4.41-4.13,6.7-8.01,6.7-1.97.04-3.91-.54-5.54-1.65-.52-1.87-.79-3.79-.82-5.73l1.3-.24c.83,3.21,3.03,6.02,5.92,6.02.45.01.9-.07,1.32-.24.85-.33,1.53-1,1.87-1.84.17-.42.26-.87.25-1.32,0-2.14-1.4-3.3-3.79-4.41-2.91-1.31-6.07-2.96-6.07-6.65,0-3.4,2.91-6.31,7.37-6.31,1.46-.02,2.91.29,4.25.9.53,1.68.88,3.4,1.07,5.15l-1.22.32Zm18.02,15.44v-1.26c2.81-.29,3.2-.58,3.2-3.74v-8.06c0-3.98-1.52-5.97-4.76-5.97-1.96.06-3.8.96-5.04,2.47v11.58c0,3.1.24,3.44,3.16,3.74v1.26h-10.34l.05-1.26c2.91-.27,3.31-.56,3.31-3.74V6.89c0-3.03-.1-3.25-3.3-3.54v-1.17c2.41-.4,4.8-.97,7.13-1.7v16.31c1.74-1.74,4.32-3.54,6.94-3.54,3.93,0,6.7,2.48,6.7,8.3v8.52c0,3.21.39,3.5,3.2,3.74v1.26l-10.24-.02Zm34.03-10.97c0,7.81-5.73,11.55-10.54,11.55-6.65,0-10.62-5.31-10.62-10.73,0-8.01,6.21-11.65,10.68-11.65,6.01,0,10.48,4.85,10.48,10.82Zm-16.69-.76c0,6.11,2.62,10.68,6.65,10.68,3.03,0,5.48-2.23,5.48-8.88,0-5.63-2.28-10.29-6.6-10.29-2.92,0-5.54,3.03-5.54,8.5Zm30.64-9.28c.72-.45,1.54-.71,2.38-.76,5.39,0,8.59,4.42,8.59,9.18,0,7.33-5.77,12.04-12.08,13.2-1.17-.04-2.31-.34-3.35-.87v6.36c0,3.69.33,3.97,4.07,4.27v1.3h-11.45v-1.34c3.11-.3,3.54-.58,3.54-3.79v-21.94c0-3.15-.19-3.25-3.2-3.63v-1.17c2.41-.46,4.77-1.16,7.04-2.09v3.79l4.46-2.53Zm-4.48,17.33c1.22,1.19,2.85,1.87,4.55,1.89,4.07,0,6.83-3.5,6.83-8.93s-3.03-8.15-6.51-8.15c-1.52,0-3.54,1.07-4.85,2.09l-.02,13.11Zm47.12-.68c-2.13,2.81-5.31,4.95-8.2,4.95-6.11,0-9.76-4.95-9.76-10.15,0-3.76,1.83-7.29,4.9-9.46,2.07-1.64,4.6-2.61,7.24-2.77h.05c1.56-.07,3.1.39,4.37,1.31.24.16.44.37.58.63.14.25.21.54.2.83,0,1.02-1.07,2.09-1.6,2.09-.29,0-.53-.14-.93-.53-1.31-1.27-3.07-1.99-4.9-2-3.2,0-5.97,2.67-5.97,7.77,0,6.75,4.55,8.98,7.33,8.98,2.09,0,3.64-.58,5.88-2.67l.82,1.02Zm17.82,4.95c-.85-.05-1.65-.4-2.28-.97-.57-.6-.98-1.33-1.17-2.14-1.94,1.31-4.27,3.11-5.73,3.11-.78,0-1.56-.16-2.28-.46-.71-.3-1.36-.74-1.9-1.29-1.1-1.11-1.7-2.61-1.68-4.16,0-2.38,1.27-3.89,3.94-4.81,2.91-.97,6.46-2.28,7.52-3.16v-.83c0-3.54-1.65-5.48-4.12-5.48-.41-.01-.81.06-1.18.22-.37.16-.71.4-.99.7-.7.96-1.18,2.05-1.41,3.21-.06.32-.24.61-.5.81-.26.2-.58.31-.91.3-1.11-.09-2-.97-2.09-2.09,0-.68.58-1.27,1.52-1.94,2.2-1.57,4.67-2.72,7.28-3.4,1.44-.03,2.84.43,3.97,1.31,1.7,1.46,2.22,3.37,2.22,5.97v8.97c0,2.18.87,2.91,1.7,2.91.62-.02,1.22-.2,1.74-.53l.49,1.27-4.16,2.47Zm-3.57-12.24c-1.02.53-3.35,1.56-4.37,2.04-1.9.87-2.96,1.8-2.96,3.59-.02.47.05.94.21,1.38.17.44.43.85.76,1.19.32.34.71.62,1.14.81.43.19.89.3,1.36.31,1.46-.12,2.83-.74,3.88-1.74l-.02-7.58Zm18.21,11.6c-.62.36-1.32.58-2.03.64-3.03,0-4.76-1.94-4.76-5.78v-14.07h-3.35l-.2-.53,1.37-1.41h2.18v-3.49l3.16-3.25.68.1v6.65h5.48c.11.15.19.31.24.49.09.36.03.74-.16,1.05-.1.16-.23.3-.38.4h-5.2v12.43c0,3.93,1.6,4.66,2.87,4.66,1.04-.04,2.05-.32,2.95-.83l.44,1.27-3.3,1.69Zm20.82.64c-.85-.05-1.65-.4-2.28-.97-.57-.6-.98-1.33-1.17-2.14-1.94,1.31-4.27,3.11-5.73,3.11-.78,0-1.56-.16-2.28-.46-.71-.3-1.36-.74-1.9-1.29-1.1-1.11-1.7-2.61-1.68-4.16,0-2.38,1.27-3.89,3.94-4.81,2.91-.97,6.46-2.28,7.52-3.16v-.83c0-3.54-1.65-5.48-4.13-5.48-.41-.01-.81.06-1.19.22-.38.16-.71.4-.99.7-.69.96-1.17,2.05-1.4,3.21-.07.32-.24.61-.5.81-.26.2-.58.31-.91.3-1.1-.1-1.97-.98-2.06-2.09,0-.68.58-1.27,1.52-1.94,2.2-1.57,4.67-2.72,7.28-3.4,1.44-.03,2.84.43,3.98,1.31,1.7,1.46,2.18,3.4,2.18,5.97v8.97c0,2.18.87,2.91,1.7,2.91.62-.02,1.22-.21,1.74-.53l.49,1.27-4.14,2.47Zm-3.53-12.24c-1.02.53-3.35,1.56-4.37,2.04-1.89.87-2.95,1.8-2.95,3.59-.02.47.05.94.21,1.38.17.44.43.85.76,1.19.65.69,1.54,1.1,2.49,1.12,1.46-.12,2.83-.74,3.88-1.74l-.02-7.58Zm8.94,11.65v-1.26c3.03-.29,3.5-.58,3.5-3.79V7.04c0-3.3-.3-3.4-3.35-3.69v-1.17c2.45-.33,4.85-.89,7.18-1.7v29.51c0,3.2.39,3.5,3.5,3.79v1.27h-10.82Zm34.51-10.97c0,7.81-5.73,11.55-10.53,11.55-6.65,0-10.62-5.31-10.62-10.73,0-8.01,6.21-11.65,10.67-11.65,6.02,0,10.48,4.85,10.48,10.82Zm-16.64-.76c0,6.11,2.62,10.68,6.65,10.68,3.03,0,5.48-2.23,5.48-8.88,0-5.63-2.28-10.29-6.59-10.29-2.92,0-5.54,3.03-5.54,8.5h0Zm41.16-9.1c-.54.98-1.28,1.82-2.18,2.48l-2.77-.14c.97,1.21,1.49,2.72,1.46,4.27,0,5.24-4.37,7.76-8.5,7.76-.83,0-1.66-.09-2.47-.24-.63.43-1.46,1.36-1.46,2.03,0,.93.87,1.84,3.03,1.84,1.8,0,3.5-.05,5.14-.05,3.03,0,6.94.97,6.94,5.73s-5.63,9.61-12.08,9.61c-5.43,0-8.4-3.16-8.44-5.92,0-1.02.42-2,1.16-2.72.97-.97,2.87-2.47,4.03-3.4-1.48-.44-2.75-1.38-3.59-2.67-.38-.61-.56-1.32-.53-2.04,1.65-.61,3.12-1.63,4.27-2.96-2.61-1.1-4.3-3.67-4.27-6.5,0-5.48,4.95-8.06,8.69-8.06h.05c1.64,0,3.26.45,4.66,1.31,2.33-.15,4.81-.44,6.6-.76l.27.41Zm-15.24,22.38c-1.27,1.07-2.24,2.43-2.24,3.79,0,2.67,2.82,4.66,6.41,4.66,4.61,0,6.99-2.37,6.99-5.39.07-1.49-.8-2.87-2.18-3.44-1.53-.51-3.15-.73-4.76-.63-2.23,0-3.35.3-4.22,1.02v-.02Zm-.83-16.07c0,3.79,1.9,6.5,4.55,6.5,2.14-.05,4.04-1.94,4.04-5.77s-1.8-6.5-4.61-6.5c-2.04,0-3.98,2.04-3.98,5.78h0Z"
}));

/***/ }),

/***/ "./src/logos/components/thoughtcatalog.js":
/*!************************************************!*\
  !*** ./src/logos/components/thoughtcatalog.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThoughtCatalogLogo": function() { return /* binding */ ThoughtCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ThoughtCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 200 20.05"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.51 19.89H14.5V3.22h-3.75V.46H21.3v2.76h-3.75l-.03 16.67Zm8.88-8.57v8.57h-3V.46h3v8.1h4.29V.46h3v19.43h-3v-8.56h-4.29Zm20.65 2.39c0 2.18-.33 3.5-1.11 4.61-.88 1.22-2.33 1.88-4.2 1.88s-3.32-.63-4.2-1.88c-.79-1.11-1.13-2.42-1.13-4.61V6.63c0-2.18.32-3.5 1.11-4.61.88-1.25 2.33-1.88 4.2-1.88s3.32.63 4.2 1.88c.8 1.11 1.13 2.42 1.13 4.61v7.08Zm-7.61-.06c0 1.54.09 2.07.38 2.65a2.28 2.28 0 0 0 3.15.69c.28-.18.52-.41.69-.69.32-.63.38-1.08.38-2.65V6.69c0-1.57-.06-2.04-.38-2.65a2.304 2.304 0 0 0-3.18-.67c-.27.17-.5.4-.67.67-.29.59-.38 1.11-.38 2.65v6.97ZM60.08.46v13.17c0 2.45-.29 3.7-1.11 4.81a4.78 4.78 0 0 1-4.02 1.75c-1.78 0-3.2-.63-4.05-1.75s-1.11-2.36-1.11-4.81V.46h3v13.66c0 2.3.63 3.24 2.15 3.24s2.13-.93 2.13-3.24V.46h3Zm13.35 9.79v9.64h-1.54l-.55-1.66a4.069 4.069 0 0 1-3.65 1.95c-1.66.07-3.22-.81-4.02-2.27-.63-1.25-.84-2.5-.84-5.19V7.36c0-3.09.23-4.19 1.13-5.39 1-1.23 2.53-1.91 4.11-1.81 1.9-.12 3.7.89 4.57 2.59.49.96.7 2.16.7 4.02h-3c0-2.68-.67-3.79-2.3-3.79-.74-.05-1.43.34-1.78.99-.35.63-.44 1.25-.44 2.8v5.95c-.06 1.07.05 2.14.32 3.17a2.11 2.11 0 0 0 2.05 1.46c1.57 0 2.24-1.14 2.24-3.85v-.78h-2.5v-2.5l5.5.03Zm5.68 1.08v8.57h-3V.46h3v8.1h4.29V.46h3v19.43h-3v-8.56h-4.29Zm16.14 8.57h-3V3.22H88.5V.46h10.56v2.76h-3.79v16.67Zm17.22-13.14v-.38c0-2.25-.79-3.38-2.28-3.38-.73-.05-1.42.32-1.78.96-.38.63-.46 1.25-.46 2.8v6.47c-.06.97.05 1.95.32 2.88.32.78 1.08 1.27 1.92 1.25 1.11 0 1.84-.63 2.16-1.92.14-.78.2-1.57.18-2.37h3.03v.68c0 4.22-1.83 6.44-5.33 6.44-1.95 0-3.5-.76-4.34-2.16-.73-1.2-.93-2.33-.93-5.21V7.36c0-3.09.23-4.17 1.14-5.39s2.3-1.81 4.14-1.81c3.32 0 5.28 2.22 5.28 6.03v.58l-3.03-.03Zm8.57 8.89-.79 4.25h-2.95L121.06.46h4.11l3.94 19.44h-3.09l-.81-4.22-4.15-.03Zm2.04-11.48-1.58 8.74h3.18l-1.6-8.74Zm12.77 15.71h-3V3.22h-3.75V.46h10.56v2.76h-3.79v16.65Zm7.68-4.22-.76 4.25h-2.94L143.59.46h4.11l3.94 19.44h-3.09l-.81-4.22-4.19-.03Zm2.04-11.48-1.55 8.74h3.17l-1.62-8.74Zm11.08 12.94h5.98v2.77h-8.97V.46h3V17.1Zm18.47-3.41c0 2.18-.33 3.5-1.11 4.61-.88 1.22-2.33 1.88-4.2 1.88s-3.32-.63-4.2-1.88c-.79-1.11-1.11-2.42-1.11-4.61V6.63c0-2.18.32-3.5 1.11-4.61.88-1.25 2.33-1.88 4.2-1.88s3.32.63 4.2 1.88c.78 1.11 1.11 2.42 1.11 4.61v7.06Zm-7.61-.06c0 1.54.09 2.07.38 2.65a2.28 2.28 0 0 0 3.15.69c.28-.18.52-.41.69-.69.32-.63.38-1.08.38-2.65V6.69c0-1.57-.06-2.04-.38-2.65a2.304 2.304 0 0 0-3.18-.67c-.27.17-.5.4-.67.67-.29.59-.38 1.11-.38 2.65v6.95Zm20.78-3.41v9.67h-1.54l-.56-1.66a4.033 4.033 0 0 1-3.64 1.95c-1.66.07-3.22-.81-4.02-2.27-.63-1.25-.84-2.5-.84-5.19V7.36c0-3.09.24-4.19 1.14-5.39 1-1.23 2.53-1.91 4.11-1.81 1.9-.12 3.7.89 4.57 2.59.49.96.7 2.16.7 4.02h-3c0-2.68-.67-3.79-2.3-3.79-.74-.05-1.43.34-1.78.99-.35.63-.44 1.25-.44 2.8v5.95c-.06 1.07.05 2.14.32 3.17.28.88 1.11 1.48 2.04 1.46 1.58 0 2.25-1.14 2.25-3.85v-.78h-2.5v-2.5h5.5Z"
}));

/***/ }),

/***/ "./src/logos/components/thoughtcatalogbooks.js":
/*!*****************************************************!*\
  !*** ./src/logos/components/thoughtcatalogbooks.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThoughtCatalogBooksLogo": function() { return /* binding */ ThoughtCatalogBooksLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ThoughtCatalogBooksLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 200 74.79"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M70.46 2.98h3.12V.29h-9.09v2.69h3.07v16.61h2.89V2.98Zm9.83 7.9v8.71h2.89V.29h-2.89v7.9h-3.21V.29h-2.89v19.3h2.89v-8.71h3.21Zm13.53-4.31c0-2.86-.23-3.91-1.16-5.03C91.91.59 90.63.01 89.3.01s-2.6.58-3.39 1.53c-.93 1.13-1.16 2.2-1.16 5.03v6.74c0 2.84.23 3.91 1.16 5.03.78.95 2.03 1.53 3.39 1.53s2.58-.58 3.36-1.53c.93-1.13 1.16-2.17 1.16-5.03V6.57Zm-6.16.32c0-1.48.06-2.52.12-2.86.2-.84.75-1.33 1.53-1.33.67 0 1.16.38 1.42 1.04.14.43.2 1.19.2 3.15V13c0 1.53-.03 2.49-.12 2.86-.2.84-.75 1.33-1.5 1.33-.67 0-1.19-.38-1.45-1.04-.14-.43-.2-1.24-.2-3.15V6.89Zm13.95-6.6v12.7c0 1.53-.03 2.49-.12 2.86-.2.84-.75 1.33-1.5 1.33-.67 0-1.19-.38-1.45-1.04-.14-.43-.2-1.24-.2-3.15V.29h-2.89v13.02c0 2.84.23 3.91 1.16 5.03.78.95 2.03 1.53 3.39 1.53s2.58-.58 3.36-1.53c.93-1.13 1.16-2.17 1.16-5.03V.29h-2.89Zm13.56 9.52h-4.66v2.4h1.77v.78c0 1.5-.03 2.46-.14 2.86-.17.81-.72 1.3-1.48 1.3-.67 0-1.22-.41-1.42-1.04-.14-.38-.23-1.59-.23-3.12v-6.1c0-1.45.06-2.49.12-2.84.2-.84.75-1.33 1.5-1.33.67 0 1.19.38 1.42.98.14.38.2 1.1.2 2.46v.43h2.92v-.98c0-1.79-.14-2.58-.67-3.47C113.78.78 112.33 0 110.65 0c-1.36 0-2.6.55-3.39 1.53-.95 1.16-1.16 2.14-1.16 5.15v6.74c0 2.4.23 3.7.87 4.8.64 1.04 1.79 1.65 3.18 1.65s2.23-.49 3.04-1.82l.55 1.53h1.42V9.81Zm7.78 1.07v8.71h2.89V.29h-2.89v7.9h-3.21V.29h-2.89v19.3h2.89v-8.71h3.21Zm9.43-7.9h3.12V.29h-9.09v2.69h3.07v16.61h2.89V2.98ZM74.58 32.4v-1.04c0-1.88-.14-2.58-.67-3.53-.72-1.33-2.17-2.11-3.85-2.11-1.39 0-2.6.55-3.39 1.53-.95 1.16-1.16 2.11-1.16 5.15v6.54c0 3.01.2 3.96 1.16 5.12.78.98 2.03 1.53 3.39 1.53 1.71 0 3.12-.84 3.85-2.26.52-1.01.67-1.77.67-3.76v-1.1h-2.92v.49c0 .9-.09 2.34-.14 2.6-.17.84-.72 1.33-1.48 1.33-.67 0-1.16-.38-1.42-1.04-.14-.43-.2-1.19-.2-3.12V32.6c0-1.53.03-2.49.12-2.86.2-.84.75-1.33 1.5-1.33.67 0 1.19.38 1.42.98.14.38.2 1.1.2 2.55v.46h2.92Zm7.46 8.65.67 4.25h2.98L82.33 26h-3.76l-3.15 19.3h2.86l.67-4.25h3.1Zm-.43-2.69h-2.26l1.1-7.7 1.16 7.7Zm10-9.66h3.12v-2.69h-9.09v2.69h3.07v16.61h2.89V28.7Zm9.83 12.36.67 4.25h2.98l-3.36-19.3h-3.76l-3.15 19.3h2.86l.67-4.25h3.1Zm-.43-2.69h-2.26l1.1-7.7 1.16 7.7Zm12.84 4.25h-4.8V26.01h-2.89v19.3h7.7v-2.69Zm9.74-10.33c0-2.86-.23-3.91-1.16-5.03-.75-.95-2.03-1.53-3.36-1.53s-2.6.58-3.39 1.53c-.93 1.13-1.16 2.2-1.16 5.03v6.74c0 2.84.23 3.91 1.16 5.03.78.95 2.03 1.53 3.39 1.53s2.58-.58 3.36-1.53c.93-1.13 1.16-2.17 1.16-5.03v-6.74Zm-6.16.32c0-1.48.06-2.52.12-2.86.2-.84.75-1.33 1.53-1.33.67 0 1.16.38 1.42 1.04.14.43.2 1.19.2 3.15v6.11c0 1.53-.03 2.49-.12 2.86-.2.84-.75 1.33-1.5 1.33-.67 0-1.19-.38-1.45-1.04-.14-.43-.2-1.24-.2-3.15v-6.11Zm16.75 2.92h-4.66v2.4h1.77v.78c0 1.5-.03 2.46-.14 2.86-.17.81-.72 1.3-1.48 1.3-.67 0-1.22-.41-1.42-1.04-.14-.38-.23-1.59-.23-3.12V32.6c0-1.45.06-2.49.12-2.84.2-.84.75-1.33 1.5-1.33.67 0 1.19.38 1.42.98.14.38.2 1.1.2 2.46v.43h2.92v-.98c0-1.79-.14-2.58-.67-3.47-.72-1.36-2.17-2.14-3.85-2.14-1.36 0-2.6.55-3.39 1.53-.95 1.16-1.16 2.14-1.16 5.15v6.74c0 2.4.23 3.7.87 4.8.64 1.04 1.79 1.65 3.18 1.65s2.23-.49 3.04-1.82l.55 1.53h1.42v-9.78Zm-65.7 25.9v-7.67h2.29c2.92 0 6.42-.17 6.42 3.79s-3.7 3.88-6.6 3.88h-2.11Zm0 2.03h3.04c4.95 0 6.19 1.97 6.19 4.66 0 2.46-.95 4.11-6.42 4.11h-2.81v-8.77Zm4.17 10.79c6.28 0 7.44-3.62 7.44-6.28 0-2.86-1.56-4.77-4.25-5.58 2.34-.58 3.73-2.46 3.73-4.86s-1.5-5.79-7.26-5.79h-6.19v22.51h6.54Zm15.62.46c3.56 0 6.39-2.46 6.39-8.45s-2.84-8.45-6.39-8.45-6.39 2.46-6.39 8.45 2.84 8.45 6.39 8.45Zm0-1.91c-3.47 0-4.14-3.82-4.14-6.54s.67-6.54 4.14-6.54 4.14 3.82 4.14 6.54-.67 6.54-4.14 6.54Zm14.55 1.91c3.56 0 6.39-2.46 6.39-8.45s-2.84-8.45-6.39-8.45-6.39 2.46-6.39 8.45 2.84 8.45 6.39 8.45Zm0-1.91c-3.47 0-4.14-3.82-4.14-6.54s.67-6.54 4.14-6.54 4.14 3.82 4.14 6.54-.67 6.54-4.14 6.54Zm10.87-21.06h-2.26v22.51h2.26v-5.47l2.6-3.21 4.08 8.68h2.43l-5.06-10.5 4.4-5.47h-2.52l-5.93 7.41V51.74Zm21.03 8.85c-1.24-1.85-3.1-2.78-5.32-2.78-2.63 0-4.89 1.68-4.89 4.43 0 5.73 8.42 3.82 8.42 7.84 0 1.82-1.48 2.72-3.12 2.72-1.91 0-3.3-.93-4.17-2.58l-1.79 1.13c1.3 2.23 3.39 3.36 5.96 3.36 3.01 0 5.24-1.91 5.24-5.03 0-5.38-8.42-3.67-8.42-7.58 0-1.62 1.39-2.37 2.86-2.37 1.68 0 2.75.78 3.65 2.11l1.59-1.24Z"
}));

/***/ }),

/***/ "./src/logos/index.js":
/*!****************************!*\
  !*** ./src/logos/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectiveWorldLogo": function() { return /* reexport safe */ _components_collectiveworld__WEBPACK_IMPORTED_MODULE_0__.CollectiveWorldLogo; },
/* harmony export */   "CreepyCatalogLogo": function() { return /* reexport safe */ _components_creepycatalog__WEBPACK_IMPORTED_MODULE_1__.CreepyCatalogLogo; },
/* harmony export */   "QuoteCatalogLogo": function() { return /* reexport safe */ _components_quotecatalog__WEBPACK_IMPORTED_MODULE_2__.QuoteCatalogLogo; },
/* harmony export */   "ShopCatalogLogo": function() { return /* reexport safe */ _components_shopcatalog__WEBPACK_IMPORTED_MODULE_3__.ShopCatalogLogo; },
/* harmony export */   "ThoughtCatalogBooksLogo": function() { return /* reexport safe */ _components_thoughtcatalogbooks__WEBPACK_IMPORTED_MODULE_5__.ThoughtCatalogBooksLogo; },
/* harmony export */   "ThoughtCatalogLogo": function() { return /* reexport safe */ _components_thoughtcatalog__WEBPACK_IMPORTED_MODULE_4__.ThoughtCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _components_collectiveworld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/collectiveworld */ "./src/logos/components/collectiveworld.js");
/* harmony import */ var _components_creepycatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/creepycatalog */ "./src/logos/components/creepycatalog.js");
/* harmony import */ var _components_quotecatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quotecatalog */ "./src/logos/components/quotecatalog.js");
/* harmony import */ var _components_shopcatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shopcatalog */ "./src/logos/components/shopcatalog.js");
/* harmony import */ var _components_thoughtcatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/thoughtcatalog */ "./src/logos/components/thoughtcatalog.js");
/* harmony import */ var _components_thoughtcatalogbooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/thoughtcatalogbooks */ "./src/logos/components/thoughtcatalogbooks.js");







/***/ }),

/***/ "./src/network-list.js":
/*!*****************************!*\
  !*** ./src/network-list.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconBySite": function() { return /* binding */ getIconBySite; },
/* harmony export */   "getNameBySite": function() { return /* binding */ getNameBySite; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations.js */ "./src/variations.js");
/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos */ "./src/logos/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Retrieves the social service's icon component.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {WPComponent} Icon component for social service.
 */

const getIconBySite = name => {
  const variation = _variations_js__WEBPACK_IMPORTED_MODULE_1__["default"].find(v => v.name === name);
  return variation ? variation.icon : _logos__WEBPACK_IMPORTED_MODULE_2__.ThoughtCatalogLogo;
};
/**
 * Retrieves the display name for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display name for social service
 */

const getNameBySite = name => {
  const variation = _variations_js__WEBPACK_IMPORTED_MODULE_1__["default"].find(v => v.name === name);
  return variation ? variation.title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thought Catalog');
};

/***/ }),

/***/ "./src/variations.js":
/*!***************************!*\
  !*** ./src/variations.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos */ "./src/logos/index.js");
/**
 * Internal dependencies
 */

const variations = [{
  isDefault: false,
  name: 'collectiveworld',
  attributes: {
    service: 'collectiveworld',
    url: 'https://collective.world/'
  },
  title: 'Collective World',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.CollectiveWorldLogo
}, {
  isDefault: false,
  name: 'creepycatalog',
  attributes: {
    service: 'creepycatalog',
    url: 'https://creepycatalog.com/'
  },
  title: 'Creepy Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.CreepyCatalogLogo
}, {
  isDefault: false,
  name: 'quotecatalog',
  attributes: {
    service: 'quotecatalog',
    url: 'https://quotecatalog.com/'
  },
  title: 'Quote Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.QuoteCatalogLogo
}, {
  isDefault: false,
  name: 'shopcatalog',
  attributes: {
    service: 'shopcatalog',
    url: 'https://shopcatalog.com/'
  },
  title: 'Shop Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.ShopCatalogLogo
}, {
  isDefault: true,
  name: 'thoughtcatalog',
  attributes: {
    service: 'thoughtcatalog',
    url: 'https://thoughtcatalog.com/'
  },
  title: 'Thought Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.ThoughtCatalogLogo
}, {
  isDefault: false,
  name: 'thoughtcatalogbooks',
  attributes: {
    service: 'thoughtcatalogbooks',
    url: 'https://thoughtcatalog.com/books/'
  },
  title: 'Thought Catalog Books',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.ThoughtCatalogBooksLogo
}];
/**
 * Add `isActive` function to all `network link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */

variations.forEach(variation => {
  if (variation.isActive) return;

  variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.service === variationAttributes.service;
});
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

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
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/variations.js");
/**
 * Network Link Block
 */

/**
 * WordPress dependencies
*/

/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cata/network-link', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map