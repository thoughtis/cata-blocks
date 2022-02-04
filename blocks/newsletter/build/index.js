!function(){"use strict";var e=window.wp.blocks,a=window.wp.data;function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},t.apply(this,arguments)}var l=window.wp.element,i=(window.wp.i18n,window.wp.blockEditor),n=window.wp.components;(0,e.registerBlockType)("cata/newsletter",{edit:(0,a.withSelect)(((e,a)=>({media:a.attributes.mediaId?e("core").getMedia(a.attributes.mediaId):void 0})))((function(e){const a=(0,i.useBlockProps)(),{attributes:s,setAttributes:r,media:c}=e,m=e=>{r({mediaId:e.id,mediaUrl:e.url,mediaWidth:e.width,mediaHeight:e.height})};return(0,l.createElement)("div",t({},a,{style:{border:"2px solid black",backgroundColor:s.mediaUrl?"transparent":"#7E7D83",backgroundImage:s.mediaUrl?"url("+s.mediaUrl+")":"none",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),(0,l.createElement)(i.InspectorControls,null,(0,l.createElement)(n.PanelBody,{title:"Select Newsletter Background Image",initialOpen:!1},(0,l.createElement)(i.MediaUploadCheck,null,(0,l.createElement)(i.MediaUpload,{onSelect:m,value:s.mediaId,allowedTypes:["image"],render:a=>{let{open:t}=a;return(0,l.createElement)(n.Button,{onClick:t,className:0==s.mediaId?"editor-post-featured-image__toggle":"editor-post-featured-image__preview"},0==s.mediaId&&"Choose an image",null!=e.media&&(0,l.createElement)(n.ResponsiveWrapper,{naturalWidth:s.mediaWidth,naturalHeight:s.mediaHeight},(0,l.createElement)("img",{src:e.media.source_url,alt:e.media.alt_text?e.media.alt_text:s.mediaAltText,style:{position:"absolute",zIndex:"-1",width:"100%",height:"100%",objectFit:"cover",overflow:"hidden"}})))}})),(0,l.createElement)("div",{className:`${s.classNameBase}__panel-button-wrapper`},0!=s.mediaId&&(0,l.createElement)(i.MediaUploadCheck,null,(0,l.createElement)(i.MediaUpload,{title:"Replace image",value:s.mediaId,onSelect:m,allowedTypes:["image"],render:e=>{let{open:a}=e;return(0,l.createElement)(n.Button,{onClick:a,isDefault:!0,isLarge:!0},"Replace image")}})),0!=s.mediaId&&(0,l.createElement)(i.MediaUploadCheck,null,(0,l.createElement)(n.Button,{onClick:()=>{r({mediaId:0,mediaUrl:"",mediaWidth:0,mediaHeight:0})},isDestructive:!0},"Remove Image")))),(0,l.createElement)(n.PanelBody,{title:"Set Mailchimp Audience ID",initialOpen:!1},(0,l.createElement)("p",{className:`${s.classNameBase}__mailchimpId-display`},"Mailchimp campaign ID",(0,l.createElement)("br",null),"defaults to: ",(0,l.createElement)("span",null,'"829754e1b3"')," ",(0,l.createElement)("br",null),"which is the CreepyCatalog Streaming Guide"),(0,l.createElement)("div",null,(0,l.createElement)(n.TextControl,{value:s.mailchimpAudienceId,onChange:e=>r({mailchimpAudienceId:e}),label:"Mailchimp ID"}))),(0,l.createElement)(n.PanelBody,{title:"Set Success Message",initialOpen:!1},(0,l.createElement)("p",{className:`${s.classNameBase}__success-msg-display`},"Successful Signup response Message",(0,l.createElement)("br",null),"defaults to: ",(0,l.createElement)("span",null,'"Thanks and stay spooky!"')),(0,l.createElement)("div",null,(0,l.createElement)(n.TextControl,{value:s.successMessage,onChange:e=>r({successMessage:e}),label:"Success Message"})))),(0,l.createElement)("div",{className:`${s.classNameBase}__wrapper`},(0,l.createElement)("div",{className:`${s.classNameBase}__inner`},(0,l.createElement)("div",{className:`${s.classNameBase}__layout`},(0,l.createElement)("div",{className:`${s.classNameBase}__start`},(0,l.createElement)(i.RichText,{tagName:"h3",value:s.title,onChange:e=>r({title:e}),className:`${s.classNameBase}__title`,placeholder:"apply to the newsletter"})),(0,l.createElement)("div",{className:`${s.classNameBase}__end`},(0,l.createElement)(i.RichText,{tagName:"p",value:s.description,onChange:e=>r({description:e}),className:`${s.classNameBase}__description`,placeholder:"Join our free newsletter for weekly updates about what TV shows and movies are streaming online."}),(0,l.createElement)("div",{className:`${s.classNameBase}__form-placeholder`},(0,l.createElement)("div",{className:`${s.classNameBase}__fieldset`},(0,l.createElement)("input",{type:"email",placeholder:"Enter Your Email",readOnly:!0}),(0,l.createElement)("button",{className:"button is-primary is-filled",type:"button",disabled:!0},"Subscribe"))),(0,l.createElement)(i.RichText,{tagName:"p",value:s.legalText,onChange:e=>r({legalText:e}),className:`${s.classNameBase}__details`,placeholder:"Unsubscribe at any time. By subscribing, you agree to the terms of our %%Privacy Policy%%"}))))))}))})}();