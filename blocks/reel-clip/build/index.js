(()=>{"use strict";const e=window.wp.blocks,n=window.wp.i18n,i=window.wp.blockEditor,t=window.wp.components,s=window.ReactJSXRuntime;(0,e.registerBlockType)("cata/reel-clip",{edit:function({attributes:{inlineSize:e},setAttributes:o}){var l;const r=(0,t.__experimentalUseCustomUnits)({availableUnits:null!==(l=(0,i.useSettings)("spacing.units")[0])&&void 0!==l?l:["%","px","em","rem","vw"]});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.InspectorControls,{children:(0,s.jsx)(t.PanelBody,{title:(0,n.__)("Column settings"),children:(0,s.jsx)(t.__experimentalUnitControl,{label:(0,n.__)("Inline Size"),labelPosition:"edge",value:e||"",onChange:e=>{e=0>parseFloat(e)?"0":e,o({inlineSize:e})},units:r})})}),(0,s.jsx)("div",{...(0,i.useInnerBlocksProps)((0,i.useBlockProps)({style:{width:e}}))})]})},save:function({attributes:e}){const{inlineSize:n}=e;return(0,s.jsx)("div",{...i.useInnerBlocksProps.save(i.useBlockProps.save({style:{width:n}}))})}})})();