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

function addFlexGrowAttribute(settings, name) {
  if ('undefined' === typeof settings.attributes) {
    return settings;
  }
  if (name !== 'core/group') {
    return settings;
  }
  settings.attributes = Object.assign(settings.attributes, {
    cataBlocksFlexGrow: {
      type: 'int',
      default: 0
    }
  });
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'cata/add-flex-grow-attribute', addFlexGrowAttribute);
const flexGrowControl = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      __
    } = wp.i18n;
    const {
      Fragment
    } = wp.element;
    const {
      __experimentalNumberControl
    } = wp.components;
    const {
      InspectorControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected,
      __unstableParentLayout
    } = props;
    const layoutStyle = attributes.style;
    let isFixed = false;
    if (undefined !== layoutStyle && undefined !== layoutStyle.layout) {
      isFixed = 'fixed' === layoutStyle.layout.selfStretch;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), isSelected && props.name == 'core/group' && __unstableParentLayout.type == 'flex' && isFixed && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      group: "dimensions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(__experimentalNumberControl, {
      label: __('Flex Grow', 'cata'),
      value: attributes.cataBlocksFlexGrow,
      onChange: newFlexGrow => {
        setAttributes({
          cataBlocksFlexGrow: newFlexGrow
        });
      }
    })));
  };
}, 'flexGrowControl');
wp.hooks.addFilter('editor.BlockEdit', 'cata/flex-grow-control', flexGrowControl);
function applyFlexGrowAttribute(props, blockType, attributes) {
  if (blockType.name !== 'core/group') {
    return props;
  }
  const {
    cataBlocksFlexGrow
  } = attributes;
  if (cataBlocksFlexGrow === undefined) {
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