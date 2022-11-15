!function(){"use strict";var e,t={487:function(e,t,n){var r={};n.r(r);var a=window.wp.blocks,l=window.wp.apiFetch,c=n.n(l);const o={};var i=window.wp.element,p=window.wp.i18n,u=window.wp.blockEditor,s=window.wp.components,d=window.wp.primitives,m=(0,i.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(d.Path,{fillRule:"evenodd",d:"M19.75 11H21V8.667L19.875 4H4.125L3 8.667V11h1.25v8.75h15.5V11zm-1.5 0H5.75v7.25H10V13h4v5.25h4.25V11zm-5.5-5.5h2.067l.486 3.24.028.76H12.75v-4zm-3.567 0h2.067v4H8.669l.028-.76.486-3.24zm7.615 3.1l-.464-3.1h2.36l.806 3.345V9.5h-2.668l-.034-.9zM7.666 5.5h-2.36L4.5 8.845V9.5h2.668l.034-.9.464-3.1z",clipRule:"evenodd"})),h=window.wp.data;function y(e){let{authors:t,brands:n}=e;return(0,i.createElement)("div",{className:"wp-block-cata-product__byline"},t.length>0&&(0,p.__)("by ","cata")+t.map((e=>e.display_name)).join(", "),!t.length>0&&n.length>0&&(0,p.__)("from ","cata")+n.map((e=>e.name)).join(", "))}function g(e){let{onSale:t,price:n,regularPrice:r,salePrice:a}=e;const l=t&&r&&a,c=n&&r&&!t&&n!==r;return(0,i.createElement)("div",{className:"wp-block-cata-product__price"},l&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)("del",null,(0,i.createElement)("span",null,(0,i.createElement)("span",null,"$"),r))," ",(0,i.createElement)("ins",null,(0,i.createElement)("span",null,(0,i.createElement)("span",null,"$"),a))),c&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)("span",null,(0,i.createElement)("span",null,"$"),n)," - ",(0,i.createElement)("span",null,(0,i.createElement)("span",null,"$"),r)),r&&!l&&!c&&(0,i.createElement)("span",null,(0,i.createElement)("span",null,"$"),r))}function f(e){let{product:t,display:n}=e;const{byline:r,price:a}=n;return(0,i.createElement)("article",{className:"wp-block-cata-product"},(0,i.createElement)("div",{className:"wp-block-cata-product__layout"},(0,i.createElement)("figure",{className:"wp-block-cata-product__image"},(0,i.createElement)("img",{loading:"lazy",src:t.images[0].src,alt:t.images[0].alt,sizes:"(max-width: 576px) 92.5vw, 576px",srcSet:t.images[0].src+"?resize=384,384 384w, "+t.images[0].src+"?resize=768,768 768w, "+t.images[0].src+"?resize=1152,1152 1152w",width:"384",height:"384"})),(0,i.createElement)("h3",{className:"wp-block-cata-product__title"},(0,i.createElement)("a",{className:"wp-block-cata-product__link",href:t.permalink},t.name)),r&&(0,i.createElement)(y,{authors:t.cap_guest_authors,brands:t.brands}),a&&(0,i.createElement)(g,{onSale:t.on_sale,price:t.price,regularPrice:t.regular_price,salePrice:t.sale_price})))}function b(e){let{products:t,display_byline:n,display_price:r}=e;return 0===t.length?(0,i.createElement)("p",null,"No products, update the options to try again."):(0,i.createElement)("div",{className:"wp-block-cata-products__layout"},t.map((e=>(0,i.createElement)(f,{key:`cata-product-${e.id}`,product:e,display:{byline:n,price:r}}))))}c().use((function(e,t){return"proxy"in e&&!0===e.proxy?t({...e,path:(n=e.path,`/cata/v1/proxy/?url=${encodeURIComponent(n)}`)}):t(e);var n})),c().use((function(e,t){return"cache"in e&&!0===e.cache?e.path in o?new Promise((t=>{t(o[e.path])})):(o[e.path]=t({...e,cache:"default"}),o[e.path]):t(e)})),(0,a.registerBlockType)("cata/products",{edit:function(e){let{attributes:t,setAttributes:n}=e;const{shopCatalogApiUrlBase:a,category:l,per_page:o,orderby:p,order:d,query_url:y}=t,[g,f]=(0,i.useState)([]),w=(0,h.useDispatch)("core/notices");function v(e){w.createErrorNotice(e.message,{isDismissible:!0})}return(0,i.useEffect)((function(){n({query_url:a+"?"+new URLSearchParams({category:l,per_page:o,orderby:p,order:d}).toString()})}),[l,o]),(0,i.useEffect)((function(){""!==y&&c()({path:y,proxy:!0,cache:!0}).then(f).catch(v)}),[y]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",(0,u.useBlockProps)(),(0,i.createElement)(b,{products:g,display_byline:t.display_byline,display_price:t.display_price})),(0,i.createElement)(u.InspectorControls,null,(0,i.createElement)(s.PanelBody,{title:"Product API URL",icon:m,initialOpen:!1},(0,i.createElement)(s.TextControl,{label:"SC API Product Category",onChange:e=>n({category:e}),type:"text",value:l,help:"Shop Catalog API Product Category. Category numbers can be found in the URL of the Shop Catalog category edit page.  Like this -> (...&tag_ID=XXXX...)."}),(0,i.createElement)(s.TextControl,{label:"SC API Product Quantity",onChange:e=>n({per_page:e}),type:"number",value:o,help:"Quantity of Shop Catalog products to be returned from the API."})),(0,i.createElement)(s.PanelBody,{title:"Product Block Options",icon:r.generic,initialOpen:!1},(0,i.createElement)(s.ToggleControl,{label:"Display product byline",help:t.display_byline?"Product byline shown.":"No product byline.",checked:t.display_byline,onChange:e=>{n({display_byline:e})}}),(0,i.createElement)(s.ToggleControl,{label:"Display product price",help:t.display_price?"Product price shown.":"No product price.",checked:t.display_price,onChange:e=>{n({display_price:e})}}))))},save:function(){return(0,i.createElement)("div",u.useBlockProps.save())}}),(0,a.registerBlockStyle)("cata/products",{name:"reel",label:"Reel"})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,a,l){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],l=e[u][2];for(var o=!0,i=0;i<n.length;i++)(!1&l||c>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(o=!1,l<c&&(c=l));if(o){e.splice(u--,1);var p=a();void 0!==p&&(t=p)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,c=n[0],o=n[1],i=n[2],p=0;if(c.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(i)var u=i(r)}for(t&&t(n);p<c.length;p++)l=c[p],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[431],(function(){return r(487)}));a=r.O(a)}();