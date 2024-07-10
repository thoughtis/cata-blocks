(()=>{"use strict";var e,t={537:()=>{const e=window.React,t=window.wp.blocks,r=window.wp.blockEditor,l=window.wp.primitives,o=window.wp.components,a=window.wp.i18n;(0,t.registerBlockType)("cata/globe-background",{edit:function({attributes:t,setAttributes:n}){const{globeColor:c}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:(0,a.__)("Globe Line Color")},(0,e.createElement)(o.ColorPalette,{value:c,colors:[...(0,r.useSetting)("color.palette")],onChange:e=>n({globeColor:e})}))),(0,e.createElement)("div",{...(0,r.useBlockProps)({style:{"--cata-globe-color":c}})},(0,e.createElement)("div",{className:"wp-block-cata-globe-background__globe-svg"},(0,e.createElement)(l.SVG,{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",width:"300",height:"300"},(0,e.createElement)(l.Circle,{cx:"50%",cy:"50%",r:"50%"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}),(0,e.createElement)(l.Path,{d:"M150,300A150,150,0,0,1,150,0"}))),(0,e.createElement)(r.InnerBlocks,null)))},save:function({attributes:t}){const l=r.useBlockProps.save(),o="stroke: "+t.globeColor;return(0,e.createElement)("div",{...l},(0,e.createElement)("div",{className:"wp-block-cata-globe-background__globe-svg",style:o},(0,e.createElement)("svg",{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",width:"300",height:"300"},(0,e.createElement)("circle",{cx:"50%",cy:"50%",r:"50%"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 0"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 1"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 2"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 3"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 4"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 5"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 6"}),(0,e.createElement)("path",{d:"M150,300A150,150,0,0,1,150,0",style:"--globe-animation-order: 7"}))),(0,e.createElement)("div",{class:"wp-block-cata-globe-background__inner-blocks"},(0,e.createElement)(r.InnerBlocks.Content,null)))},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}))})}},r={};function l(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,r,o,a)=>{if(!r){var n=1/0;for(m=0;m<e.length;m++){for(var[r,o,a]=e[m],c=!0,i=0;i<r.length;i++)(!1&a||n>=a)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(c=!1,a<n&&(n=a));if(c){e.splice(m--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[r,o,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,c,i]=r,s=0;if(n.some((t=>0!==e[t]))){for(o in c)l.o(c,o)&&(l.m[o]=c[o]);if(i)var m=i(l)}for(t&&t(r);s<n.length;s++)a=n[s],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},r=globalThis.webpackChunk=globalThis.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=l.O(void 0,[431],(()=>l(537)));o=l.O(o)})();