(()=>{"use strict";var e,i={461:(e,i,s)=>{const l=window.wp.blocks,n=window.wp.i18n,r=window.wp.blockEditor,t=window.wp.components,a=window.wp.element,c=window.wp.apiFetch;var o=s.n(c);window.lodash;const d=window.ReactJSXRuntime;function x({text:e}){const i=document.createRange().createContextualFragment(e).firstChild.textContent;return(0,d.jsx)(d.Fragment,{children:i})}function h({post:e}){return(0,d.jsx)("p",{children:(0,d.jsx)("a",{href:e.link,children:(0,d.jsx)(x,{text:e.title.rendered})})})}function u(e,i){const s=new URL(e);return s.searchParams.set("resize",i.join(",")),`${s.href.toString()} ${i[0]}w`}function j({data:e,sizes:i,dimensions:s,className:l,aspect_ratio:n}){if(!("source_url"in e))return null;let r={};""!==n&&(r={aspectRatio:n,objectFit:"cover"});const t=new URL(e.source_url);t.searchParams.set("resize",s[0].join(","));const a=s.map(u.bind(null,e.source_url));return(0,d.jsx)("img",{width:s[0][0],height:s[0][1],src:t.href.toString(),sizes:i,srcSet:a.join(","),className:l,loading:"lazy",style:r})}function p(e,i){return i<=e}function m(e,i){return[i,Math.round(i/e)]}function w(e,i=null,s=[]){if(null===e)return[];const{width:l,height:n}=e.media_details,r=null===i?l/n:i;return(0===s.length?[l]:s).filter(p.bind(null,l)).map(m.bind(null,r))}function v(e){if(!("_embedded"in e)||!("wp:featuredmedia"in e._embedded))return null;if(!Array.isArray(e._embedded["wp:featuredmedia"])||0===e._embedded["wp:featuredmedia"].length)return null;const i=e._embedded["wp:featuredmedia"].filter((e=>"media_type"in e&&"image"===e.media_type));return 0===i.length?null:i.shift()}const f=["uncategorized","collective-world","project-oasis"];function g(e){if(!("_embedded"in e)||!("wp:term"in e._embedded))return null;if(!Array.isArray(e._embedded["wp:term"])||0===e._embedded["wp:term"].length)return null;const i=e._embedded["wp:term"].filter(y);if(0===i.length)return null;const s=i[0].filter((e=>!f.includes(e.slug)));return 0===s.length?null:Object.assign({},s[0])}function y(e){return Array.isArray(e)&&0<e.length&&"taxonomy"in e[0]&&"category"===e[0].taxonomy}function b(e){if(!("_embedded"in e)||!("wp:term"in e._embedded))return null;if(!Array.isArray(e._embedded["wp:term"])||0===e._embedded["wp:term"].length)return null;const i=e._embedded["wp:term"].filter(k);return 0===i.length?null:Object.assign({},i[0][0].profile)}function k(e){return Array.isArray(e)&&0<e.length&&"taxonomy"in e[0]&&"author"===e[0].taxonomy}function N({author:e}){const i=0<e.media.length?e.media[0]:null,s=w(i,1,[320,160,80]);return(0,d.jsxs)("p",{className:"preview__byline",children:[null!==i&&(0,d.jsx)(j,{data:i,sizes:"6em",dimensions:s,className:"preview__avatar"}),(0,d.jsx)("a",{rel:"author",href:e.link,children:(0,d.jsx)("em",{children:(0,d.jsx)(x,{text:e.display_name})})})]})}function P({post:e}){const i=v(e),s=w(i,null,[2560,1920,1280,960,640,480,320]),l=g(e),n=b(e);return(0,d.jsxs)("article",{className:"preview is-layout-trending",children:[null!==i&&(0,d.jsx)("figure",{className:"preview__image-container",children:(0,d.jsx)("a",{rel:"bookmark",href:e.link,children:(0,d.jsx)(j,{data:i,dimensions:s,sizes:"(max-width: 15em) 92.5vw, 15em"})})}),(0,d.jsxs)("div",{className:"preview__content",children:[null!==l&&(0,d.jsx)("p",{className:"preview__kicker",children:(0,d.jsx)("a",{rel:"category",href:l.link,children:(0,d.jsx)("strong",{children:(0,d.jsx)(x,{text:l.name})})})}),(0,d.jsx)("h3",{className:"preview__title",children:(0,d.jsx)("a",{rel:"bookmark",href:e.link,children:(0,d.jsx)(x,{text:e.title.rendered})})}),null!==n&&(0,d.jsx)(N,{author:n})]})]})}function C({post:e}){const i=v(e),s=w(i,null,[2560,1920,1280,960,640,480,320]),l=g(e),n=b(e);return(0,d.jsxs)("article",{className:"preview is-layout-trending",children:[null!==i&&(0,d.jsx)("figure",{className:"preview__image-container",children:(0,d.jsx)("a",{rel:"bookmark",href:e.link,children:(0,d.jsx)(j,{data:i,dimensions:s,sizes:"(max-width: 20em) 92.5vw, 20em"})})}),(0,d.jsxs)("div",{className:"preview__content",children:[null!==l&&(0,d.jsx)("p",{className:"preview__kicker",children:(0,d.jsx)("a",{rel:"category",href:l.link,children:(0,d.jsx)(x,{text:l.name})})}),(0,d.jsx)("h3",{className:"preview__title",children:(0,d.jsx)("a",{rel:"bookmark",href:e.link,children:(0,d.jsx)(x,{text:e.title.rendered})})}),null!==n&&(0,d.jsx)(N,{author:n})]})]})}function S(){return 0}function L(e,i){return Math.sign(Date.parse(i.date_gmt)-Date.parse(e.date_gmt))}function R(e){return"published:newest"===e?L:S}function z({posts:e,sorting:i}){if(2>=e.length)return null;const s=e.slice();return""!==i&&s.sort(R(i)),(0,d.jsxs)("div",{className:"wp-block-cata-rest__layout is-layout-trending",children:[(0,d.jsx)("div",{children:(0,d.jsx)(P,{post:s[0]})}),(0,d.jsx)("div",{children:(0,d.jsx)(C,{post:s[1]})}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"wp-block-cata-rest__list line-height-2",children:s.slice(2,8).map((e=>(0,d.jsx)(h,{post:e},e.id)))})})]})}const Z=window.wp.primitives,B=()=>(0,d.jsxs)(Z.SVG,{viewBox:"0 0 805 500",children:[(0,d.jsx)(Z.Polygon,{points:"218.62 70.84 277.96 185.43 458.26 60.31 513.89 184.03 709.04 59.2 772.31 167.15 806.82 146.92 722.51 3.1 531.37 125.37 475 0 292.55 126.62 234.68 14.88 0 153.63 20.36 188.06 218.62 70.84"}),(0,d.jsx)(Z.Polygon,{points:"531.37 436.74 475 311.37 292.55 437.99 234.68 326.25 0 465 20.36 499.43 218.62 382.21 277.96 496.8 458.26 371.68 513.89 495.4 708.76 370.75 770.16 479.26 804.97 459.56 722.78 314.29 531.37 436.74"})]}),M=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 595 515",children:(0,d.jsx)(Z.Path,{d:"M37.72,222c18.97,17.39,43.56,26.84,71.12,27.32l.7-39.99c-17.89-.31-32.96-5.97-44.79-16.81-10.84-9.94-18.56-23.87-22.31-40.29-10.19-44.59,11.03-81.3,37.25-94.51,19.74-9.95,41.44-14.59,61.11-13.07,21.2,1.64,39.05,9.99,53.04,24.83,17.58,18.64,29.48,47.14,36.39,87.14,2.82,16.33,5.72,32.67,8.78,49.97,17.55,99.03,37.44,211.28,39.21,308.87l39.94,1.08c1.35-18.65,2.78-41.77,4.15-64.14,1.37-22.26,2.79-45.27,4.12-63.7,5.44-75.01,17.62-147.88,31.81-228.55,4.74-26.96,15.6-53.23,30.59-73.97,16.01-22.15,36.1-37.23,58.1-43.61,15.9-4.61,36.03-3.02,55.22,4.36,19.17,7.37,34.6,19.53,42.32,33.36,13.9,24.9,13.03,59-2.15,84.86-11.51,19.61-35.99,43-87.18,43v40c54.71,0,97.92-22.28,121.68-62.75,22.46-38.26,23.47-87.17,2.58-124.6C554.26,15.75,487.16-10.72,435.81,4.16c-30.65,8.88-58.1,29.15-79.39,58.6-18.46,25.54-31.79,57.67-37.56,90.47-8.94,50.83-17.09,98.63-23.33,146.01-5.5-34-11.44-67.5-17.13-99.63-3.06-17.25-5.94-33.55-8.75-49.8-8.29-47.99-23.57-83.25-46.71-107.78C202.21,20.04,174.87,7.15,143.89,4.76c-26.84-2.07-56.03,4.05-82.2,17.24-24.48,12.34-42.87,33.33-53.17,60.7C-.71,107.21-2.51,135.07,3.45,161.14c5.57,24.37,17.42,45.42,34.27,60.87Z"})}),A=()=>(0,d.jsxs)(Z.SVG,{viewBox:"0 0 590 430",children:[(0,d.jsx)(Z.Path,{d:"M476.48,150.03c-62.37,0-113.12,50.74-113.12,113.12,0,48.2,30.3,89.44,72.86,105.71-61.56,18.38-129.1,22.9-201.06,13.39-68.37-9.03-139.74-30.97-206.4-63.45l-17.52,35.96c70.48,34.34,146.1,57.56,218.68,67.14,26.21,3.46,51.9,5.19,77.02,5.19,55.67,0,108.53-8.48,157.84-25.38,22.5-7.71,48.59-17.99,71.52-35.75,20.48-15.86,35.22-35.33,44.06-58.09,5.93-13.73,9.23-28.85,9.23-44.72,0-62.37-50.74-113.12-113.12-113.12Zm72.48,122.6l-.31-.05c-1.16,7.24-2.96,13.89-5.28,20.03-11.36,25.68-37.06,43.65-66.89,43.65-40.32,0-73.12-32.8-73.12-73.12s32.8-73.12,73.12-73.12,73.12,32.8,73.12,73.12c0,3.22-.23,6.38-.64,9.49Z"}),(0,d.jsx)(Z.Path,{d:"M113.12,277.06c62.37,0,113.12-50.74,113.12-113.12,0-48.2-30.3-89.44-72.86-105.71,61.56-18.38,129.1-22.9,201.06-13.39,68.37,9.03,139.74,30.97,206.4,63.45l17.52-35.96C507.88,37.99,432.26,14.77,359.68,5.19,275.41-5.94,196.38,.85,124.81,25.38c-22.5,7.71-48.59,17.99-71.52,35.75-20.48,15.86-35.23,35.33-44.06,58.09C3.29,132.95,0,148.07,0,163.94c0,62.37,50.74,113.12,113.12,113.12ZM40.64,154.46l.31,.05c1.16-7.24,2.96-13.89,5.27-20.03,11.36-25.68,37.06-43.65,66.89-43.65,40.32,0,73.12,32.8,73.12,73.12s-32.8,73.12-73.12,73.12-73.12-32.8-73.12-73.12c0-3.22,.23-6.38,.64-9.49Z"})]}),O=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 435 595",children:(0,d.jsx)(Z.Path,{d:"M75.72,45.36c29.94,20.76,36.75,101.31,27.96,166.56-2.87,21.31-7.13,54.36-11.09,85.35-4.81,35.2-8.52,65.08-10.21,80.68l39.73,4.65c.08-.66,4.85-38.61,10.16-80.25,3.11-22.72,6.69-47.68,10.48-72.45,15.94-104.04,23.64-126.11,25.62-130.4,10.59-22.94,32.38-49.19,61.78-54.08,10.76-1.79,21.13-.22,28.45,4.3,12.27,7.58,20.03,25.01,23.73,53.27,5.54,42.39-4.03,86.01-14.17,132.2-12.39,56.43-25.2,114.78-8.67,172.28,6.97,24.26,16.53,46.9,27.48,65.38-1.03,2.67-2.07,5.36-3.1,8.07-6.9,17.97-14.03,36.54-20.16,45.66-4.5,6.7-28.65,39.2-62.57,21.16l-18.78,35.32c12.68,6.74,25.8,10.13,38.91,10.13,10.2,0,20.39-2.05,30.36-6.17,17.57-7.26,33.65-20.8,45.3-38.14,6.75-10.05,12.86-24.32,19.05-40.08,12.21,10.52,27.46,18.65,45.43,18.65,24.62,0,46.64-10.38,60.42-28.47,12.8-16.81,16.87-38.3,11.17-58.96-6.25-22.65-25.03-40.52-49.02-46.62-23.9-6.08-48.31,.82-65.3,18.44-3.72,3.86-7.19,8.63-10.48,14.09-3.79-9.14-7.25-19.04-10.26-29.52-13.73-47.77-2.55-98.72,9.29-152.66,10.43-47.51,21.21-96.64,14.76-145.96-3.42-26.12-11.53-63.05-42.37-82.11-15.67-9.68-35.56-13.13-56.03-9.73-35,5.82-66.77,30.59-86.63,67.03-8.13-28.14-20.99-48.43-38.43-60.52C85.51,3.48,70.43-.69,53.7,.09,37.36,.86,19.3,6.49,0,16.84L18.91,52.09c24.88-13.35,44-15.61,56.81-6.73ZM347.46,439.62c9.57-9.93,20.8-8.92,26.64-7.43,9.94,2.53,17.92,9.78,20.32,18.49,2.39,8.65,.81,17.2-4.44,24.09-6.15,8.08-16.57,12.71-28.59,12.71-9.3,0-19.55-7.09-29.41-19.38,5.3-12.52,10.72-23.54,15.47-28.47Z"})}),T=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 490 485",children:(0,d.jsx)(Z.Path,{d:"M103.55,423.29c-34.85,5.34-69.43,12.41-103.55,21.26l10.03,38.72c153.18-39.69,315.83-42.7,470.38-8.69l8.6-39.07c-40.19-8.84-80.9-15.28-121.85-19.31-7.39-109.71-8.69-239.23-3.52-353.02,42.48-5.57,84.63-13.72,126.09-24.46L479.69,0C326.51,39.69,163.86,42.7,9.31,8.69L.72,47.75c35.31,7.77,71.02,13.66,106.94,17.72,5.16,115.7,3.66,247.36-4.11,357.82ZM226.18,72.15c32.45,0,64.9-1.5,97.21-4.48-4.82,111.64-3.55,237.52,3.46,345.36-60.93-3.65-122.18-2.02-182.83,4.87,7.26-108.41,8.66-235.74,3.86-348.68,26.05,1.93,52.18,2.92,78.31,2.92Z"})}),G=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 435 555",children:(0,d.jsx)(Z.Path,{d:"M347.69,374.64l30.55-49.98c27.04-44.23,64.07-104.8,56.35-170.36-2.34-19.92-10.48-58.49-38.64-93.07C367.77,26.62,326.61,5.7,276.9,.73c-50.2-5.02-100.15,16.05-133.6,56.35-15.32,18.45-26.22,40.17-31.54,62.81-5.78,24.59-5.08,49.44,2.08,73.87,4.32,14.76,9.23,28.98,15.92,43.72-5.4-.79-10.91-1.21-16.52-1.21C50.8,236.28,0,287.07,0,349.51s50.8,113.23,113.23,113.23,113.23-50.8,113.23-113.23c0-27.2-9.64-52.18-25.68-71.72l.14-.11c-28.26-37.28-39.59-64.05-48.7-95.16-10.12-34.55-2.15-70.96,21.86-99.89,24.94-30.06,61.89-45.8,98.84-42.1,39.44,3.94,70.4,19.4,92.01,45.95,21.76,26.73,28.09,56.89,29.93,72.49,5.64,47.92-19.65,93.94-50.76,144.82l-30.55,49.98c-14.93,24.43-31.86,52.12-37.51,84.24-6.85,38.95,6.42,76.79,33.8,96.39,14.38,10.29,32.77,15.75,52.59,15.75,3.38,0,6.8-.16,10.25-.48,21.26-1.97,40.92-9.68,55.67-16.17l-16.11-36.61c-12.73,5.6-27.82,11.52-43.26,12.95-14.11,1.31-26.84-1.52-35.86-7.97-16.99-12.16-21.13-37.36-17.68-56.93,4.34-24.65,18.52-47.86,32.24-70.31Zm-234.45,48.09c-40.38,0-73.23-32.85-73.23-73.23s32.85-73.23,73.23-73.23,73.23,32.85,73.23,73.23-32.85,73.23-73.23,73.23Z"})}),V=()=>(0,d.jsxs)(Z.SVG,{viewBox:"0 0 560 450",children:[(0,d.jsx)(Z.Path,{d:"M187.27,268.81c-26.15-25.31-40.56-59.29-40.56-95.68,0-73.41,59.72-133.14,133.14-133.14s133.14,59.72,133.14,133.14c0,35.97-14.56,69.74-40.99,95.09l13.82,34.43,172.39,.21,.05-40-130.68-.16c16.57-26.76,25.41-57.48,25.41-89.58C452.98,77.67,375.31,0,279.85,0S106.71,77.67,106.71,173.14c0,32.32,8.74,63.17,25.11,89.98l-130.3-.24-.07,40,171.87,.31,13.95-34.37Z"}),(0,d.jsx)(Z.Rect,{y:"410",width:"560",height:"40"})]}),D=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 420 555",children:(0,d.jsx)(Z.Path,{d:"M418.42,243.33c-40.11,1.55-80.39,2.81-120.74,3.81,6.76-84.03,44.82-163.77,104.71-217.32L375.73,0c-68.42,61.18-111.54,152.42-118.22,248.04-37.14,.75-74.31,1.26-111.45,1.55C139.74,153.41,96.52,61.51,27.73,0L1.07,29.82c60.52,54.12,98.75,134.99,104.91,220-35.29,.11-70.51,0-105.62-.3l-.36,40c26.14,.23,52.34,.35,78.59,.35,9.29,0,18.6-.04,27.9-.07-1.79,39.9-10.36,79.81-25.56,118.87-16.8,43.16-40.76,83.02-71.23,118.49l30.34,26.06c33.42-38.9,59.71-82.66,78.16-130.04,17.05-43.8,26.54-88.67,28.32-133.6,36.77-.28,73.57-.78,110.35-1.52,1.63,45.44,11.14,90.82,28.38,135.12,18.44,47.38,44.74,91.14,78.16,130.04l30.34-26.06c-30.46-35.46-54.43-75.33-71.22-118.49-15.54-39.92-24.13-80.72-25.66-121.5,41.14-1.01,82.2-2.29,123.09-3.87l-1.54-39.97Z"})}),E=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 520 510",children:(0,d.jsx)(Z.Path,{d:"M0,481.16l28.76,27.8c50.58-52.32,101.86-104.4,153.68-156.09l83.7,87.55,28.91-27.64-84.24-88.12c87.6-86.81,176.67-172.44,266.48-256.18l.14,196.04,40-.03-.18-262.4-20.02,.04c-12.96,.02-26.4,.08-40.17,.13-68.86,.26-146.92,.55-211.88-2.27l-1.74,39.96c62.6,2.72,136.62,2.59,203.28,2.35-88.81,82.87-176.9,167.57-263.55,253.44l-95.25-99.63-28.91,27.64,95.79,100.2C102.6,376.02,50.94,428.46,0,481.16Z"})}),U=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 500 525",children:(0,d.jsx)(Z.Path,{d:"M407.12,482.43c-16.39-7.71-35.32-26.65-32.38-73.02,2.52-39.68,10.82-94.16,18.85-146.85,5.72-37.53,11.13-72.98,14.25-101.73,.48-4.4,1.03-8.89,1.61-13.64,2.8-22.79,5.97-48.61,1.32-71.73-6.05-30.12-24-50.1-53.34-59.39-17.67-5.59-36.18-3.48-53.53,6.12-13.63,7.54-26.17,19.66-36,34.17-11.49-27.92-33.06-43-64.51-44.96-24.33-1.52-46.54,8.85-64.27,29.99-4.08,4.87-7.63,9.96-10.7,15.01-1.41-5.06-3.24-9.89-5.64-14.35C111.89,21.75,92.14,8.15,65.68,2.73,41.34-2.26,16.53,.52,0,3.73L7.63,43c30.76-5.98,67.91-4.39,79.93,17.98,5.61,10.45,5.45,32.23,5.34,48.13-.03,4-.06,7.77-.01,11.39,.73,60.58-5.06,118.07-11.19,178.94-4.25,42.13-8.64,85.7-11.03,132.38l39.92,2.54c.19-2.52,19.44-253.22,39.98-328.98,5.67-20.9,22.66-55.79,50.36-54.06,13.11,.82,35.06,2.19,36.71,58.72,.97,33.22-6.62,135.85-13.15,216.01-4.54,51.05-7.99,93.15-8.88,104.1l39.85,3.42c.39-4.34,4.32-48.02,8.78-102.58,8.28-92.88,19.09-204.11,24.73-225.83,5.17-19.93,19.28-39.65,34.33-47.98,7.72-4.27,14.95-5.25,22.1-2.99,15.23,4.82,23.07,13.54,26.2,29.14,3.37,16.78,.74,38.24-1.81,58.98-.57,4.68-1.17,9.52-1.68,14.2-3.03,27.89-8.37,62.92-14.02,100.01-8.16,53.54-16.6,108.91-19.23,150.35-3.4,53.69,16.22,93.37,55.26,111.74,9.1,4.28,19.19,6.3,29.56,6.3,29.25,0,60.71-16.06,78.16-42.7l-33.46-21.92c-12.63,19.27-40.44,30.03-57.22,22.13Z"})}),F=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 630 505",children:(0,d.jsx)(Z.Path,{d:"M539.73,.54c-24.31,2.52-46.15,13.56-64.92,32.81-14.92,15.31-26.4,32.39-37.5,48.91-11.86,17.65-23.06,34.31-37.63,47.83-20.6,19.11-51.46,30.19-85.23,30.61-33.95-.32-65.08-11.39-85.78-30.61-14.57-13.52-25.77-30.19-37.63-47.84-11.1-16.52-22.58-33.6-37.5-48.91C134.77,14.1,112.92,3.07,88.61,.54,61.06-2.32,31.25,6.1,0,25.56L21.14,59.52c42.72-26.61,76.66-26.03,103.74,1.76,12.39,12.71,22.38,27.57,32.95,43.3,12.61,18.76,25.65,38.16,43.62,54.84,10.28,9.54,22.31,17.58,35.6,23.97-54.31,28.05-91.52,84.73-91.52,149.95,0,92.99,75.65,168.65,168.65,168.65s168.65-75.65,168.65-168.65c0-65.22-37.22-121.91-91.52-149.95,13.28-6.39,25.32-14.43,35.6-23.97,17.97-16.68,31.01-36.08,43.62-54.84,10.57-15.73,20.56-30.59,32.95-43.3,27.08-27.79,61.01-28.36,103.74-1.76l21.14-33.95c-31.25-19.46-61.06-27.88-88.61-25.02Zm-96.91,332.8c0,70.94-57.71,128.65-128.65,128.65s-128.65-57.71-128.65-128.65,57.71-128.65,128.65-128.65,128.65,57.71,128.65,128.65Z"})}),I=()=>(0,d.jsx)(Z.SVG,{viewBox:"0 0 510 600",children:(0,d.jsx)(Z.Path,{d:"M507.33,297.45c-4.33-27.66-18.34-47.21-38.45-53.63-12.56-4.01-25.42-2.91-37.17,3.2-21.21,11.02-38.77,38.33-52.19,81.19-1.2,3.84-2.31,7.78-3.32,11.81,2.34-22.44,6.1-45.22,9.97-68.65,3.67-22.22,7.46-45.19,9.93-67.99,.72-6.63,1.93-14.84,3.21-23.54,3.9-26.51,8.76-59.51,6.47-88.96-1.39-17.81-5.18-32.22-11.59-44.05-8.3-15.32-20.67-25.67-36.75-30.76-22.97-7.27-45.96-2.82-66.51,12.88-12.14,9.28-21.48,20.93-28.22,31.32-2.31-6.57-5.05-12.45-8.21-17.68-11.52-19.03-29.19-29.82-51.11-31.19-16.56-1.04-40.39,3.62-59.87,31.7-5.11,7.36-9.32,15.46-12.87,23.46-1.48-8.74-3.92-17.13-7.88-24.51C111.89,21.74,92.14,8.15,65.68,2.73,41.34-2.26,16.53,.52,0,3.73L7.62,42.99c30.77-5.97,67.92-4.39,79.93,17.98,5.61,10.45,5.45,32.23,5.34,48.14-.03,4-.06,7.77-.01,11.39,.45,36.76-1.51,72.38-4.49,108.3-3.58,25.69-6.4,52.86-8.99,82.35l-.99,11.28c-3.29,37.23-6.39,72.4-7.77,109.67l39.96,1.76c2.35-45.7,6.69-88.77,10.89-130.43,2.39-23.74,4.73-46.98,6.67-70.14,6.17-43.83,14.65-82.94,28.31-121.79,.51-1.45,1.04-2.97,1.58-4.52,10.44-30.09,21.61-56.99,42.87-55.67,8.84,.55,14.64,4.13,19.38,11.98,6.35,10.49,10.27,27.69,11.65,51.1,1.11,18.89,1.17,37.23,.53,55.33-7.61,67-15.35,135.74-17.06,204.54-.69,18.84-.76,38.25,.13,58.39l39.97-1.51c-.58-18.31-.58-36.71-.13-55.16,1.31-35.84,4.99-69.93,8.59-103.27,3.49-32.33,7.06-65.36,8.37-99.61,.05-.45,.1-.91,.16-1.36l1.44-12.7c2.52-22.28,6.16-47.79,17.41-68.67,3.89-7.23,12.18-20.69,23.88-29.64,13.33-10.18,23.59-8.6,30.14-6.53,17.88,5.66,19.81,30.46,20.53,39.79,1.94,24.97-2.55,55.5-6.16,80.03-1.34,9.08-2.6,17.67-3.4,25.05-2.36,21.69-6.05,44.11-9.63,65.79-7.78,47.13-15.82,95.86-11.85,144.9,2.37,29.28,17.09,64.63,41.99,89.03-19.04,15.9-42.14,30.71-69.71,41.43-2.75,1.07-5.5,2.16-8.26,3.25-21.22,8.41-41.27,16.35-60.99,15.27l-2.17,39.94c1.99,.11,3.96,.16,5.92,.16,26.06,0,49.37-9.23,71.97-18.18,2.68-1.06,5.36-2.12,8.03-3.16,36.56-14.22,66.24-34.55,89.81-55.81,10.3,3.96,20.8,5.57,31.37,5.57,20.52,0,41.28-6.05,61.29-12.69l-12.59-37.97c-16.6,5.51-32.75,10.33-47.13,10.62,12.43-15.05,21.87-29.14,28.58-40.31,22.22-37,41.82-101.96,34.38-149.45Zm-68.68,128.86c-6.25,10.41-15.19,23.71-27.08,37.82-6.09-49.88-4.05-91.51,6.12-123.97,11.25-35.91,24.14-53.33,32.45-57.64,1.39-.72,2.58-1.07,3.84-1.07,.85,0,1.74,.16,2.73,.48,4.85,1.55,9.31,10.28,11.1,21.71,5.68,36.31-10.71,91.95-29.16,122.67Z"})});function H({post:e,display_zodiac_links:i,aspect_ratio:s}){const l=v(e),n=w(l);return(0,d.jsx)("article",{className:"preview is-layout-network",children:(0,d.jsxs)("div",{className:"preview__layout",children:[(0,d.jsx)("div",{className:"preview__start",children:null!==l&&(0,d.jsx)("figure",{className:"preview__image-container",children:(0,d.jsx)("a",{rel:"bookmark",href:e.link,children:(0,d.jsx)(j,{data:l,dimensions:n,sizes:"(max-width: 40em) 92.5vw, 36em",aspect_ratio:s})})})}),(0,d.jsxs)("div",{className:"preview__end",children:[(0,d.jsx)("h3",{className:"preview__title",children:(0,d.jsx)("a",{rel:"bookmark",className:"preview__permalink",href:e.link,children:(0,d.jsx)(x,{text:e.title.rendered})})}),(0,d.jsx)("div",{className:"preview__excerpt",children:(0,d.jsx)(a.RawHTML,{children:e.excerpt.rendered})}),!1!==i?(0,d.jsxs)("ul",{className:"preview__zodiac-signs",children:[(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(M,{}),"Aries"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(F,{}),"Taurus"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(T,{}),"Gemini"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(A,{}),"Cancer"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(G,{}),"Leo"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(I,{}),"Virgo"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(V,{}),"Libra"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(U,{}),"Scorpio"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(E,{}),"Sagittarius"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(O,{}),"Capricorn"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(B,{}),"Aquarius"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(D,{}),"Pisces"]})})]}):(0,d.jsx)("p",{className:"preview__domain",children:new URL(e.link).hostname})]})]})})}function $({posts:e,sorting:i,display_zodiac_links:s,aspect_ratio:l}){if(0===e.length)return null;const n=e.slice();return""!==i&&n.sort(R(i)),(0,d.jsx)("div",{className:"wp-block-cata-rest__layout is-layout-network",children:n.map((e=>(0,d.jsx)(H,{post:e,display_zodiac_links:s,aspect_ratio:l},e.id)))})}function q({post:e,aspect_ratio:i}){const s=v(e),l=w(s);return(0,d.jsx)("article",{className:"preview is-layout-compact",children:(0,d.jsxs)("div",{className:"preview__layout",children:[(0,d.jsx)("div",{className:"preview__start",children:null!==s&&(0,d.jsx)("figure",{className:"preview__image-container",children:(0,d.jsx)("a",{rel:"bookmark",href:e.link,children:(0,d.jsx)(j,{data:s,dimensions:l,sizes:"(max-width: 20em) 46.25vw, 13em",aspect_ratio:i})})})}),(0,d.jsx)("div",{className:"preview__end",children:(0,d.jsx)("h3",{className:"preview__title",children:(0,d.jsx)("a",{rel:"bookmark",className:"preview__permalink",href:e.link,children:(0,d.jsx)(x,{text:e.title.rendered})})})})]})})}function W({posts:e,sorting:i,aspect_ratio:s}){if(0===e.length)return null;const l=e.slice();return""!==i&&l.sort(R(i)),(0,d.jsx)("div",{className:"wp-block-cata-rest__layout is-layout-compact",children:l.map((e=>(0,d.jsx)(q,{post:e,aspect_ratio:s},e.id)))})}function J({post:e,display_zodiac_links:i}){let s=new Date(e.date);return s=s.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),(0,d.jsx)("article",{className:"preview is-layout-daily-horoscope",children:(0,d.jsxs)("div",{className:"preview__layout",children:[(0,d.jsx)("p",{class:"preview__date",children:(0,d.jsx)(x,{text:s})}),!1!==i&&(0,d.jsxs)("ul",{className:"preview__zodiac-signs",children:[(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(M,{}),"Aries"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(F,{}),"Taurus"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(T,{}),"Gemini"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(A,{}),"Cancer"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(G,{}),"Leo"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(I,{}),"Virgo"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(V,{}),"Libra"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(U,{}),"Scorpio"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(E,{}),"Sagittarius"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(O,{}),"Capricorn"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(B,{}),"Aquarius"]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{children:[(0,d.jsx)(D,{}),"Pisces"]})})]})]})})}function X({posts:e,sorting:i,display_zodiac_links:s}){if(0===e.length)return null;const l=e.slice();return""!==i&&l.sort(R(i)),(0,d.jsx)("div",{className:"wp-block-cata-rest__layout is-layout-daily-horoscope",children:l.map((e=>(0,d.jsx)(J,{post:e,display_zodiac_links:s},e.id)))})}(0,l.registerBlockType)("cata/rest",{edit:function({attributes:e,setAttributes:i,clientId:s}){const{urls:l,content:c,layout:x,sorting:h,display_zodiac_links:u,aspect_ratio:j}=e,[p,m]=(0,a.useState)(""),[w,v]=(0,a.useState)([]);function f(e){return o()({path:_.unescape(e),cata:{useCache:!0,useProxy:!0},signal:(new AbortController).signal})}function g(e){console.error(e)}return(0,a.useEffect)((function(){Promise.all(l.map(f)).then((e=>{v(e.flat())})).catch(g)}),[l]),(0,a.useEffect)((function(){let s=$;switch(x){case"trending":s=z;break;case"compact":s=W;break;case"daily-horoscope":s=X}i({...e,content:(0,d.jsx)(s,{posts:w,sorting:h,display_zodiac_links:u,aspect_ratio:j})})}),[w,x,h,u,j]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{...(0,r.useBlockProps)(),children:c}),(0,d.jsxs)(r.InspectorControls,{children:[(0,d.jsxs)(t.PanelBody,{title:"WP REST API URLs",initialOpen:!1,children:[(0,d.jsx)(t.PanelRow,{children:(0,d.jsx)("div",{children:l.map(((e,n)=>(0,d.jsxs)("div",{children:[(0,d.jsx)(t.Button,{text:"x",label:"Remove",variant:"tertiary",isDestructive:!0,onClick:()=>{i({urls:l.filter(((e,i)=>i!==n))})}}),e]},`${s}-cata-rest-url-${n}`)))})}),(0,d.jsx)(t.PanelRow,{children:(0,d.jsx)(t.TextControl,{label:(0,n.__)("WP REST API URL","cata"),type:"url",value:p,onChange:m})}),(0,d.jsx)(t.PanelRow,{children:(0,d.jsx)(t.Button,{variant:"primary",text:(0,n.__)("Add URL","cata"),onClick:()=>{i({urls:[...l,p]}),m("")}})})]}),(0,d.jsxs)(t.PanelBody,{title:"REST Layout",initialOpen:!1,children:[(0,d.jsx)(t.PanelRow,{children:(0,d.jsx)(t.SelectControl,{label:"Layout",value:x,onChange:s=>{i({...e,layout:s})},options:[{label:"Default",value:""},{label:"Trending",value:"trending"},{label:"Network",value:"network"},{label:"Compact",value:"compact"},{label:"Daily Horoscope",value:"daily-horoscope"}]})}),["network","compact",""].includes(x)&&(0,d.jsx)(t.PanelRow,{children:(0,d.jsx)(t.SelectControl,{label:"Image Aspect Ratio",value:j,onChange:e=>{i({aspect_ratio:e})},options:[{label:"Original",value:""},{label:"Square - 1:1",value:"1/1"},{label:"Portrait - 3:4",value:"3/4"},{label:"Landscape - 3:2",value:"3/2"}]})})]}),(0,d.jsx)(t.PanelBody,{title:"REST Sorting",initialOpen:!1,children:(0,d.jsx)(t.PanelRow,{children:(0,d.jsx)(t.SelectControl,{label:"Sorting",value:h,onChange:s=>{i({...e,sorting:s})},options:[{label:"Default",value:""},{label:"Newest First by Published Date",value:"published:newest"}]})})}),["daily-horoscope","network"].includes(x)&&(0,d.jsx)(t.PanelBody,{title:"Zodiac Links",children:(0,d.jsx)(t.PanelRow,{children:(0,d.jsx)(t.ToggleControl,{label:"Display zodiac links",help:e.display_zodiac_links?"Zodiac links shown.":"Zodiac links hidden.",checked:e.display_zodiac_links,onChange:e=>{i({display_zodiac_links:e})}})})})]})]})},save:function({attributes:{content:e}}){return(0,d.jsx)("div",{...r.useBlockProps.save(),children:(0,d.jsx)(a.RawHTML,{children:"string"==typeof e?e:l.children.toHTML([e])})})}})}},s={};function l(e){var n=s[e];if(void 0!==n)return n.exports;var r=s[e]={exports:{}};return i[e](r,r.exports,l),r.exports}l.m=i,e=[],l.O=(i,s,n,r)=>{if(!s){var t=1/0;for(d=0;d<e.length;d++){for(var[s,n,r]=e[d],a=!0,c=0;c<s.length;c++)(!1&r||t>=r)&&Object.keys(l.O).every((e=>l.O[e](s[c])))?s.splice(c--,1):(a=!1,r<t&&(t=r));if(a){e.splice(d--,1);var o=n();void 0!==o&&(i=o)}}return i}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,n,r]},l.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return l.d(i,{a:i}),i},l.d=(e,i)=>{for(var s in i)l.o(i,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},l.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={57:0,350:0};l.O.j=i=>0===e[i];var i=(i,s)=>{var n,r,[t,a,c]=s,o=0;if(t.some((i=>0!==e[i]))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(c)var d=c(l)}for(i&&i(s);o<t.length;o++)r=t[o],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(d)},s=globalThis.webpackChunk=globalThis.webpackChunk||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))})();var n=l.O(void 0,[350],(()=>l(461)));n=l.O(n)})();