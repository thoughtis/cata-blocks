!function(){"use strict";var e,t={437:function(e,t,r){var a=window.wp.blocks,n=window.wp.element,l=window.wp.i18n,c=window.wp.blockEditor,o=window.wp.components,s=window.wp.apiFetch,i=r.n(s),p=window.wp.primitives,u=(0,n.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(p.Path,{fillRule:"evenodd",d:"M19.75 11H21V8.667L19.875 4H4.125L3 8.667V11h1.25v8.75h15.5V11zm-1.5 0H5.75v7.25H10V13h4v5.25h4.25V11zm-5.5-5.5h2.067l.486 3.24.028.76H12.75v-4zm-3.567 0h2.067v4H8.669l.028-.76.486-3.24zm7.615 3.1l-.464-3.1h2.36l.806 3.345V9.5h-2.668l-.034-.9zM7.666 5.5h-2.36L4.5 8.845V9.5h2.668l.034-.9.464-3.1z",clipRule:"evenodd"}));(0,a.registerBlockType)("cata/products",{edit:function(e){const t={...(0,c.useBlockProps)()},{attributes:r,setAttributes:a}=e,s=r.shopCatalogApiUrlBase+"?category="+r.category+"&per_page="+r.per_page+"&orderby="+r.orderby+"&order="+r.order,p=(0,n.useRef)(),[m,d]=(0,n.useState)(null),h=new AbortController;(0,n.useEffect)((()=>{!m&&r.query_url&&g(r.query_url)}),[]);const g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;const t=(p.current=i()({path:"/cata/v1/proxy/?url="+encodeURIComponent(e),signal:h.signal})).then((e=>{e&&(d(e),a({query_url:s}))})).catch((e=>{d({error:!0,errorMsg:e.message})}));return t};return(0,n.createElement)("div",t,!m&&(0,n.createElement)("p",{className:"wp-block-cata-products__placeholder"},(0,l.__)("Shop Catalog Merch will go here!","cata")),m&&0===m.length&&(0,n.createElement)("p",{className:"wp-block-cata-products__placeholder"},(0,l.__)("Oops, looks like there's nothing here!\n\nThis product category may be empty, or the category number may be incorrect.\n\nWithout any products, this block will not display on the front end.","cata")),m&&m.length>0&&!m.error&&(0,n.createElement)("div",{className:"wp-block-cata-products"},(0,n.createElement)("div",{className:"wp-block-cata-products__layout"},m.map((e=>(0,n.createElement)("article",{className:"wp-block-cata-product"},(0,n.createElement)("div",{className:"wp-block-cata-product__layout tappable-card"},(0,n.createElement)("figure",{className:"wp-block-cata-product__image"},(0,n.createElement)("img",{loading:"lazy",src:e.images[0].src,alt:e.images[0].alt,sizes:"(max-width: 576px) 92.5vw, 576px",srcset:e.images[0].src+"?resize=384,384 384w, "+e.images[0].src+"?resize=768,768 768w, "+e.images[0].src+"?resize=1152,1152 1152w",width:"384",height:"384"})),(0,n.createElement)("h3",{className:"wp-block-cata-product__title"},(0,n.createElement)("a",{className:"wp-block-cata-product__link tappable-card-anchor",href:e.permalink},e.name)),(0,n.createElement)("div",{className:"wp-block-cata-product__byline"},e.cap_guest_authors.length>0&&(0,l.__)("by ","cata")+e.cap_guest_authors.reduce(((e,t,r,a)=>{const n=a.length-1===r?"":", ";return e+t.display_name+n}),""),!e.cap_guest_authors.length>0&&e.brands.length>0&&(0,l.__)("from ","cata")+e.brands.reduce(((e,t,r,a)=>{const n=a.length-1===r?"":", ";return e+t.name+n}),"")),(0,n.createElement)("div",{className:"wp-block-cata-product__price"},e.on_sale&&e.regular_price&&e.sale_price&&(0,n.createElement)("del",null,(0,n.createElement)("span",null,(0,n.createElement)("span",null,"$"),e.regular_price))&&(0,n.createElement)("ins",null,(0,n.createElement)("span",null,(0,n.createElement)("span",null,"$"),e.sale_price)),e.price&&e.regular_price&&!e.on_sale&&e.price!==e.regular_price&&(0,n.createElement)("span",null,(0,n.createElement)("span",null,"$"),e.price)&&(0,n.createElement)("span",null,(0,n.createElement)("span",null,"$"),e.regular_price),e.price&&e.regular_price&&!e.on_sale&&e.price===e.regular_price&&(0,n.createElement)("span",null,(0,n.createElement)("span",null,"$"),e.regular_price)))))))),m&&m.error&&(0,n.createElement)("div",null,m.errorMsg),(0,n.createElement)(c.InspectorControls,null,(0,n.createElement)(o.PanelBody,{title:"Product API URL",icon:u,initialOpen:!1},(0,n.createElement)(o.TextControl,{label:"SC API Product Category",onChange:e=>a({category:e}),type:"text",value:r.category,help:"Shop Catalog API Product Category. Category numbers can be found in the URL of the Shop Catalog category edit page.  Like this -> (...&tag_ID=XXXX...)."}),(0,n.createElement)(o.TextControl,{label:"SC API Product Quantity",onChange:e=>a({per_page:e}),type:"number",value:r.per_page,help:"Quantity of Shop Catalog products to be returned from the API."}),(0,n.createElement)(o.Button,{className:"wp-block-cata-products-fetch-btn",variant:"secondary",onClick:()=>{g()}},"FETCH"),(0,n.createElement)(o.Button,{variant:"secondary",onClick:()=>{h.abort()}},"CANCEL"))))}})}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=function(t,r,n,l){if(!r){var c=1/0;for(p=0;p<e.length;p++){r=e[p][0],n=e[p][1],l=e[p][2];for(var o=!0,s=0;s<r.length;s++)(!1&l||c>=l)&&Object.keys(a.O).every((function(e){return a.O[e](r[s])}))?r.splice(s--,1):(o=!1,l<c&&(c=l));if(o){e.splice(p--,1);var i=n();void 0!==i&&(t=i)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[r,n,l]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,c=r[0],o=r[1],s=r[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(s)var p=s(a)}for(t&&t(r);i<c.length;i++)l=c[i],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(p)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=a.O(void 0,[431],(function(){return a(437)}));n=a.O(n)}();