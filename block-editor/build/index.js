/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Flex Grow Control
 */

/**
 * Add Flex Grow Attribute
 * 
 * @param {Object} settings
 * @param {string} name
 * 
 * @return {Object} updated settings
 */
function addFlexGrowAttribute(settings, name) {
  if ('core/group' !== name) {
    return settings;
  }
  if (undefined === settings.attributes) {
    return settings;
  }
  Object.assign(settings.attributes, {
    cataBlocksFlexGrow: {
      type: 'int'
    }
  });
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'cata/add-flex-grow-attribute', addFlexGrowAttribute);

/**
 * Flex Grow Control
 * 
 * @param {Object} BlockEdit
 * 
 * @return {function} updated block in editor with flex grow control
 */
const withFlexGrowControl = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      __
    } = wp.i18n;
    const {
      __experimentalNumberControl: NumberControl
    } = wp.components;
    const {
      InspectorControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const layoutStyle = attributes.style;
    if (undefined === layoutStyle || undefined === layoutStyle.layout) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), isSelected && 'core/group' === props.name && 'fixed' === layoutStyle.layout.selfStretch && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      group: "dimensions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NumberControl, {
      label: __('Flex Grow', 'cata'),
      value: attributes.cataBlocksFlexGrow,
      min: 0,
      onChange: newFlexGrow => {
        setAttributes({
          cataBlocksFlexGrow: newFlexGrow
        });
      }
    })));
  };
}, 'withFlexGrowControl');
wp.hooks.addFilter('editor.BlockEdit', 'cata/flex-grow-control', withFlexGrowControl);

/**
 * With Flex Grow Style
 * 
 * @param {function} BlockListBlock
 * 
 * @return {function} updated wrapper component in editor
 */
const withFlexGrowStyle = wp.compose.createHigherOrderComponent(BlockListBlock => {
  return props => {
    const {
      block,
      attributes
    } = props;
    if ('core/group' !== block.name || null === attributes.cataBlocksFlexGrow || undefined === attributes.cataBlocksFlexGrow) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, {
        ...props
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, {
      ...props,
      wrapperProps: {
        style: {
          flexGrow: attributes.cataBlocksFlexGrow
        }
      }
    });
  };
}, 'withFlexGrowStyle');
wp.hooks.addFilter('editor.BlockListBlock', 'cata/flex-grow-editor-style', withFlexGrowStyle);

/**
 * Apply Flex Grow Attribute
 * 
 * @param {Object} props
 * @param {Object} blockType
 * @param {Object} attributes
 * 
 * @return {Object} updated props
 */
function applyFlexGrowAttribute(props, blockType, attributes) {
  if ('core/group' !== blockType.name) {
    return props;
  }
  const {
    cataBlocksFlexGrow
  } = attributes;
  if (undefined === cataBlocksFlexGrow || null === cataBlocksFlexGrow) {
    return props;
  }
  Object.assign(props, {
    style: {
      ...props.style,
      flexGrow: cataBlocksFlexGrow
    }
  });
  return props;
}
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'cata/apply-flex-grow-attribute', applyFlexGrowAttribute);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map