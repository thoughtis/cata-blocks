(()=>{"use strict";var e,t={791:()=>{const e=window.React,t=window.wp.blocks,r=window.wp.blockEditor,o=["core/post-title"],n=[["core/post-title",{className:"wp-block-cata-marquee__inner",level:2,lock:{move:!0,remove:!0}}]];(0,t.registerBlockType)("cata/marquee",{edit:function(){const t=(0,r.useBlockProps)();return(0,e.createElement)("div",{...t},(0,e.createElement)(r.InnerBlocks,{allowedBlocks:o,template:n,templateLock:"all"}))},save:function(){const t=r.useBlockProps.save();return(0,e.createElement)("div",{...t},(0,e.createElement)(r.InnerBlocks.Content,null))},icon:(0,e.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{x:"2",y:"2",width:"20",height:"20",fill:"none",stroke:"black",strokeWidth:"2",strokeDasharray:"2 2",strokeDashoffset:"1"}))})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,n,l)=>{if(!r){var a=1/0;for(v=0;v<e.length;v++){for(var[r,n,l]=e[v],s=!0,c=0;c<r.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(s=!1,l<a&&(a=l));if(s){e.splice(v--,1);var i=n();void 0!==i&&(t=i)}}return t}l=l||0;for(var v=e.length;v>0&&e[v-1][2]>l;v--)e[v]=e[v-1];e[v]=[r,n,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[a,s,c]=r,i=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var v=c(o)}for(t&&t(r);i<a.length;i++)l=a[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(v)},r=globalThis.webpackChunk=globalThis.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[431],(()=>o(791)));n=o.O(n)})();