!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,n=window.wp.element,r=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components,i=window.wp.apiFetch,c=e.n(i);function o(e){let{text:t}=e;const r=document.createRange().createContextualFragment(t).firstChild.textContent;return(0,n.createElement)(n.Fragment,null,r)}function s(e){let{post:t}=e;return(0,n.createElement)("p",null,(0,n.createElement)("a",{href:t.link},(0,n.createElement)(o,{text:t.title.rendered})))}function m(e,t){const n=new URL(e);return n.searchParams.set("resize",t.join(",")),`${n.href.toString()} ${t[0]}w`}function u(e){let{data:t,sizes:r,dimensions:l,className:a}=e;if(!("source_url"in t))return null;const i=new URL(t.source_url);i.searchParams.set("resize",l[0].join(","));const c=l.map(m.bind(null,t.source_url));return(0,n.createElement)("img",{width:l[0][0],height:l[0][1],src:i.href.toString(),sizes:r,srcSet:c.join(","),className:a,loading:"lazy"})}function d(e,t){return t<=e}function p(e,t){return[t,Math.round(t/e)]}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(null===e)return[];const{width:r,height:l}=e.media_details,a=null===t?r/l:t,i=(0===n.length?[r]:n).filter(d.bind(null,r));return i.map(p.bind(null,a))}function w(e){if(!("_embedded"in e)||!("wp:featuredmedia"in e._embedded))return null;if(!Array.isArray(e._embedded["wp:featuredmedia"])||0===e._embedded["wp:featuredmedia"].length)return null;const t=e._embedded["wp:featuredmedia"].filter((e=>"media_type"in e&&"image"===e.media_type));return 0===t.length?null:t.shift()}const f=["uncategorized","collective-world","project-oasis"];function _(e){if(!("_embedded"in e)||!("wp:term"in e._embedded))return null;if(!Array.isArray(e._embedded["wp:term"])||0===e._embedded["wp:term"].length)return null;const t=e._embedded["wp:term"].filter(v);if(0===t.length)return null;const n=t[0].filter((e=>!f.includes(e.slug)));return 0===n.length?null:Object.assign({},n[0])}function v(e){return Array.isArray(e)&&0<e.length&&"taxonomy"in e[0]&&"category"===e[0].taxonomy}function h(e){if(!("_embedded"in e)||!("wp:term"in e._embedded))return null;if(!Array.isArray(e._embedded["wp:term"])||0===e._embedded["wp:term"].length)return null;const t=e._embedded["wp:term"].filter(g);return 0===t.length?null:Object.assign({},t[0][0].profile)}function g(e){return Array.isArray(e)&&0<e.length&&"taxonomy"in e[0]&&"author"===e[0].taxonomy}function b(e){let{author:t}=e;const r=0<t.media.length?t.media[0]:null,l=E(r,1,[320,160,80]);return(0,n.createElement)("p",{className:"preview__byline"},null!==r&&(0,n.createElement)(u,{data:r,sizes:"6em",dimensions:l,className:"preview__avatar"}),(0,n.createElement)("a",{rel:"author",href:t.link},(0,n.createElement)("em",null,(0,n.createElement)(o,{text:t.display_name}))))}function k(e){let{post:t}=e;const r=w(t),l=E(r,1.5,[2560,1920,1280,960,640,480,320]),a=_(t),i=h(t);return(0,n.createElement)("article",{className:"preview is-layout-trending"},null!==r&&(0,n.createElement)("figure",{className:"preview__image-container"},(0,n.createElement)("a",{rel:"bookmark",href:t.link},(0,n.createElement)(u,{data:r,dimensions:l,sizes:"(max-width: 15em) 92.5vw, 15em"}))),(0,n.createElement)("div",{className:"preview__content"},null!==a&&(0,n.createElement)("p",{className:"preview__kicker"},(0,n.createElement)("a",{rel:"category",href:a.link},(0,n.createElement)("strong",null,(0,n.createElement)(o,{text:a.name})))),(0,n.createElement)("h3",{className:"preview__title"},(0,n.createElement)("a",{rel:"bookmark",href:t.link},(0,n.createElement)(o,{text:t.title.rendered}))),null!==i&&(0,n.createElement)(b,{author:i})))}function y(e){let{post:t}=e;const r=w(t),l=E(r,.8,[2560,1920,1280,960,640,480,320]),a=_(t),i=h(t);return(0,n.createElement)("article",{className:"preview is-layout-trending"},null!==r&&(0,n.createElement)("figure",{className:"preview__image-container"},(0,n.createElement)("a",{rel:"bookmark",href:t.link},(0,n.createElement)(u,{data:r,dimensions:l,sizes:"(max-width: 20em) 92.5vw, 20em"}))),(0,n.createElement)("div",{className:"preview__content"},null!==a&&(0,n.createElement)("p",{className:"preview__kicker"},(0,n.createElement)("a",{rel:"category",href:a.link},(0,n.createElement)(o,{text:a.name}))),(0,n.createElement)("h3",{className:"preview__title"},(0,n.createElement)("a",{rel:"bookmark",href:t.link},(0,n.createElement)(o,{text:t.title.rendered}))),null!==i&&(0,n.createElement)(b,{author:i})))}function N(){return 0}function x(e,t){return Math.sign(Date.parse(t.date_gmt)-Date.parse(e.date_gmt))}function P(e){return"published:newest"===e?x:N}function R(e){let{posts:t,sorting:r}=e;if(2>=t.length)return null;const l=t.slice();return""!==r&&l.sort(P(r)),(0,n.createElement)("div",{className:"wp-block-cata-rest__layout is-layout-trending"},(0,n.createElement)("div",null,(0,n.createElement)(k,{post:l[0]})),(0,n.createElement)("div",null,(0,n.createElement)(y,{post:l[1]})),(0,n.createElement)("div",null,(0,n.createElement)("div",{className:"wp-block-cata-rest__list line-height-2"},l.slice(2,8).map((e=>(0,n.createElement)(s,{key:e.id,post:e}))))))}function A(e){let{post:t}=e;const r=w(t),l=E(r);return(0,n.createElement)("article",{className:"preview is-layout-network"},(0,n.createElement)("div",{className:"preview__layout"},(0,n.createElement)("div",{className:"preview__start"},null!==r&&(0,n.createElement)("figure",{className:"preview__image-container"},(0,n.createElement)("a",{rel:"bookmark",href:t.link},(0,n.createElement)(u,{data:r,dimensions:l,sizes:"(max-width: 40em) 92.5vw, 36em"})))),(0,n.createElement)("div",{className:"preview__end"},(0,n.createElement)("h3",{className:"preview__title"},(0,n.createElement)("a",{rel:"bookmark",className:"preview__permalink",href:t.link},(0,n.createElement)(o,{text:t.title.rendered}))),(0,n.createElement)("div",{className:"preview__excerpt"},(0,n.createElement)(n.RawHTML,null,t.excerpt.rendered)),(0,n.createElement)("p",{className:"preview__domain"},new URL(t.link).hostname))))}function C(e){let{posts:t,sorting:r}=e;if(0===t.length)return null;const l=t.slice();return""!==r&&l.sort(P(r)),(0,n.createElement)("div",{className:"wp-block-cata-rest__layout is-layout-network"},l.map((e=>(0,n.createElement)(A,{key:e.id,post:e}))))}function S(e){let{post:t}=e;const r=w(t),l=E(r);return(0,n.createElement)("article",{className:"preview is-layout-compact"},(0,n.createElement)("div",{className:"preview__layout"},(0,n.createElement)("div",{className:"preview__start"},null!==r&&(0,n.createElement)("figure",{className:"preview__image-container"},(0,n.createElement)("a",{rel:"bookmark",href:t.link},(0,n.createElement)(u,{data:r,dimensions:l,sizes:"(max-width: 20em) 46.25vw, 13em"})))),(0,n.createElement)("div",{className:"preview__end"},(0,n.createElement)("h3",{className:"preview__title"},(0,n.createElement)("a",{rel:"bookmark",className:"preview__permalink",href:t.link},(0,n.createElement)(o,{text:t.title.rendered}))))))}function z(e){let{posts:t,sorting:r}=e;if(0===t.length)return null;const l=t.slice();return""!==r&&l.sort(P(r)),(0,n.createElement)("div",{className:"wp-block-cata-rest__layout is-layout-compact"},l.map((e=>(0,n.createElement)(S,{key:e.id,post:e}))))}(0,t.registerBlockType)("cata/rest",{edit:function(e){let{attributes:t,setAttributes:i,clientId:o}=e;const{urls:s,content:m,layout:u,sorting:d}=t,[p,E]=(0,n.useState)(""),[w,f]=(0,n.useState)([]);function _(e){return c()({path:e,cata:{useCache:!0,useProxy:!0},signal:(new AbortController).signal})}function v(e){console.error(e)}return(0,n.useEffect)((function(){Promise.all(s.map(_)).then((e=>{f(e.flat())})).catch(v)}),[s]),(0,n.useEffect)((function(){let e=R;switch(u){case"network":e=C;break;case"compact":e=z}i({...t,content:(0,n.createElement)(e,{posts:w,sorting:d})})}),[w,u,d]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",(0,l.useBlockProps)(),m),(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(a.PanelBody,{title:"WP REST API URLs",initialOpen:!1},(0,n.createElement)(a.PanelRow,null,(0,n.createElement)("div",null,s.map(((e,t)=>(0,n.createElement)("div",{key:`${o}-cata-rest-url-${t}`},(0,n.createElement)(a.Button,{text:"x",label:"Remove",variant:"tertiary",isDestructive:!0,onClick:()=>{i({urls:s.filter(((e,n)=>n!==t))})}}),e))))),(0,n.createElement)(a.PanelRow,null,(0,n.createElement)(a.TextControl,{label:(0,r.__)("WP REST API URL","cata"),type:"url",value:p,onChange:E})),(0,n.createElement)(a.PanelRow,null,(0,n.createElement)(a.Button,{variant:"primary",text:(0,r.__)("Add URL","cata"),onClick:()=>{i({urls:[...s,p]}),E("")}}))),(0,n.createElement)(a.PanelBody,{title:"REST Layout",initialOpen:!1},(0,n.createElement)(a.PanelRow,null,(0,n.createElement)(a.SelectControl,{label:"Layout",value:u,onChange:e=>{i({...t,layout:e})},options:[{label:"Default",value:""},{label:"Trending",value:"trending"},{label:"Network",value:"network"},{label:"Compact",value:"compact"}]}))),(0,n.createElement)(a.PanelBody,{title:"REST Sorting",initialOpen:!1},(0,n.createElement)(a.PanelRow,null,(0,n.createElement)(a.SelectControl,{label:"Sorting",value:d,onChange:e=>{i({...t,sorting:e})},options:[{label:"Default",value:""},{label:"Newest First by Published Date",value:"published:newest"}]})))))},save:function(e){let{attributes:{content:r}}=e;return(0,n.createElement)("div",l.useBlockProps.save(),(0,n.createElement)(n.RawHTML,null,"string"==typeof r?r:t.children.toHTML([r])))}})}();