(()=>{"use strict";const t=window.wp.blocks,e=window.wp.i18n,n=window.wp.blockEditor,i=window.wp.components,o=window.ReactJSXRuntime,r=JSON.parse('{"UU":"cata/outbrain"}');(0,t.registerBlockType)(r.UU,{edit:function({attributes:t,setAttributes:r}){const{widgetId:a}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.InspectorControls,{children:(0,o.jsx)(i.PanelBody,{title:"Outbrain Widget ID",initialOpen:!0,children:(0,o.jsx)(i.PanelRow,{children:(0,o.jsx)(i.TextControl,{label:(0,e.__)("Outbrain Widget ID","cata"),type:"text",value:a,onChange:t=>r({widgetId:t})})})})}),(0,o.jsx)("div",{...(0,n.useBlockProps)(),children:(0,e.__)("Placeholder for an Outbrain Widget","cata")})]})}})})();