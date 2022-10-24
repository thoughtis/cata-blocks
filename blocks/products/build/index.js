!function(){"use strict";var e,t={874:function(e,t,r){var a={};r.r(a);var n=window.wp.blocks,l=window.wp.element,o=window.wp.i18n,c=window.wp.blockEditor,i=window.wp.components,p=window.wp.apiFetch,s=r.n(p),u=window.wp.primitives,d=(0,l.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(u.Path,{fillRule:"evenodd",d:"M19.75 11H21V8.667L19.875 4H4.125L3 8.667V11h1.25v8.75h15.5V11zm-1.5 0H5.75v7.25H10V13h4v5.25h4.25V11zm-5.5-5.5h2.067l.486 3.24.028.76H12.75v-4zm-3.567 0h2.067v4H8.669l.028-.76.486-3.24zm7.615 3.1l-.464-3.1h2.36l.806 3.345V9.5h-2.668l-.034-.9zM7.666 5.5h-2.36L4.5 8.845V9.5h2.668l.034-.9.464-3.1z",clipRule:"evenodd"}));function m(e){let{authors:t,brands:r}=e;return(0,l.createElement)("div",{className:"wp-block-cata-product__byline"},t.length>0&&(0,o.__)("by ","cata")+t.map((e=>e.display_name)).join(", "),!t.length>0&&r.length>0&&(0,o.__)("from ","cata")+r.map((e=>e.name)).join(", "))}function h(e){let{onSale:t,price:r,regularPrice:a,salePrice:n}=e;const o=t&&a&&n,c=r&&a&&!t&&r!==a;return(0,l.createElement)("div",{className:"wp-block-cata-product__price"},o&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("del",null,(0,l.createElement)("span",null,(0,l.createElement)("span",null,"$"),a))," ",(0,l.createElement)("ins",null,(0,l.createElement)("span",null,(0,l.createElement)("span",null,"$"),n))),c&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",null,(0,l.createElement)("span",null,"$"),r)," - ",(0,l.createElement)("span",null,(0,l.createElement)("span",null,"$"),a)),a&&!o&&!c&&(0,l.createElement)("span",null,(0,l.createElement)("span",null,"$"),a))}(0,n.registerBlockType)("cata/products",{edit:function(e){const t={...(0,c.useBlockProps)()},{attributes:r,setAttributes:n}=e,p=r.shopCatalogApiUrlBase+"?category="+r.category+"&per_page="+r.per_page+"&orderby="+r.orderby+"&order="+r.order,u=(0,l.useRef)(),[g,y]=(0,l.useState)(null),b=new AbortController;(0,l.useEffect)((()=>{!g&&r.query_url&&f(r.query_url)}),[]);const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;const t=(u.current=s()({path:"/cata/v1/proxy/?url="+encodeURIComponent(e),signal:b.signal})).then((e=>{e&&(y(e),n({query_url:p}))})).catch((e=>{y({error:!0,errorMsg:e.message})}));return t};return(0,l.createElement)("div",t,!g&&(0,l.createElement)("p",{className:"wp-block-cata-products__placeholder"},(0,o.__)("Shop Catalog Merch will go here!","cata")),g&&0===g.length&&(0,l.createElement)("p",{className:"wp-block-cata-products__placeholder"},(0,o.__)("Oops, looks like there's nothing here!\n\nThis product category may be empty, or the category number may be incorrect.\n\nWithout any products, this block will not display on the front end.","cata")),g&&g.length>0&&!g.error&&(0,l.createElement)("div",{className:"wp-block-cata-products"},(0,l.createElement)("div",{className:"wp-block-cata-products__layout"},g.map((e=>(0,l.createElement)("article",{className:"wp-block-cata-product",key:`cata-product-${e.id}`},(0,l.createElement)("div",{className:"wp-block-cata-product__layout tappable-card"},(0,l.createElement)("figure",{className:"wp-block-cata-product__image"},(0,l.createElement)("img",{loading:"lazy",src:e.images[0].src,alt:e.images[0].alt,sizes:"(max-width: 576px) 92.5vw, 576px",srcSet:e.images[0].src+"?resize=384,384 384w, "+e.images[0].src+"?resize=768,768 768w, "+e.images[0].src+"?resize=1152,1152 1152w",width:"384",height:"384"})),(0,l.createElement)("h3",{className:"wp-block-cata-product__title"},(0,l.createElement)("a",{className:"wp-block-cata-product__link tappable-card-anchor",href:e.permalink},e.name)),r.display_byline&&(0,l.createElement)(m,{authors:e.cap_guest_authors,brands:e.brands}),r.display_price&&(0,l.createElement)(h,{onSale:e.on_sale,price:e.price,regularPrice:e.regular_price,salePrice:e.sale_price}))))))),g&&g.error&&(0,l.createElement)("div",null,g.errorMsg),(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(i.PanelBody,{title:"Product API URL",icon:d,initialOpen:!1},(0,l.createElement)(i.TextControl,{label:"SC API Product Category",onChange:e=>n({category:e}),type:"text",value:r.category,help:"Shop Catalog API Product Category. Category numbers can be found in the URL of the Shop Catalog category edit page.  Like this -> (...&tag_ID=XXXX...)."}),(0,l.createElement)(i.TextControl,{label:"SC API Product Quantity",onChange:e=>n({per_page:e}),type:"number",value:r.per_page,help:"Quantity of Shop Catalog products to be returned from the API."}),(0,l.createElement)(i.Button,{className:"wp-block-cata-products-fetch-btn",variant:"secondary",onClick:()=>{f()}},"FETCH"),(0,l.createElement)(i.Button,{variant:"secondary",onClick:()=>{b.abort()}},"CANCEL")),(0,l.createElement)(i.PanelBody,{title:"Product Block Options",icon:a.generic,initialOpen:!1},(0,l.createElement)(i.ToggleControl,{label:"Display product byline",help:r.display_byline?"Product byline shown.":"No product byline.",checked:r.display_byline,onChange:e=>{n({display_byline:e})}}),(0,l.createElement)(i.ToggleControl,{label:"Display product price",help:r.display_price?"Product price shown.":"No product price.",checked:r.display_price,onChange:e=>{n({display_price:e})}}))))}})}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=function(t,r,n,l){if(!r){var o=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],l=e[s][2];for(var c=!0,i=0;i<r.length;i++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(c=!1,l<o&&(o=l));if(c){e.splice(s--,1);var p=n();void 0!==p&&(t=p)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[r,n,l]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,o=r[0],c=r[1],i=r[2],p=0;if(o.some((function(t){return 0!==e[t]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(i)var s=i(a)}for(t&&t(r);p<o.length;p++)l=o[p],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(s)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=a.O(void 0,[431],(function(){return a(874)}));n=a.O(n)}();