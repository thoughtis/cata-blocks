!function(){"use strict";var c=window.wp.blocks,h=window.wp.element,t=window.wp.blockEditor,e=window.wp.components,l=window.wp.i18n,s=window.wp.primitives;const v=()=>(0,h.createElement)(s.SVG,{height:"33",width:"290",viewBox:"0 0 290 33"},(0,h.createElement)(s.Path,{d:"M11.04 32.26H6.13V5.03H0V.52h17.23v4.51H11.1l-.05 27.23h-.02Zm14.5-14v14h-4.9V.52h4.9v13.23h7.01V.52h4.9v31.74h-4.9V18.28h-7.01v-.02Zm33.73 3.9c0 3.56-.54 5.72-1.81 7.53-1.44 1.99-3.81 3.07-6.86 3.07s-5.42-1.03-6.86-3.07c-1.29-1.81-1.85-3.95-1.85-7.53V10.6c0-3.56.52-5.72 1.81-7.53C45.14 1.03 47.51 0 50.56 0s5.42 1.03 6.86 3.07c1.31 1.81 1.85 3.95 1.85 7.53v11.56Zm-12.43-.1c0 2.52.15 3.38.62 4.33a3.721 3.721 0 0 0 5.14 1.13c.46-.29.85-.67 1.13-1.13.52-1.03.62-1.76.62-4.33V10.7c0-2.56-.1-3.33-.62-4.33a3.758 3.758 0 0 0-5.19-1.09c-.44.28-.82.65-1.09 1.09-.47.96-.62 1.81-.62 4.33v11.38l.02-.02ZM80.57.52v21.51c0 4-.47 6.04-1.81 7.86a7.827 7.827 0 0 1-6.57 2.86c-2.91 0-5.23-1.03-6.62-2.86s-1.81-3.85-1.81-7.86V.52h4.9v22.31c0 3.76 1.03 5.29 3.51 5.29s3.48-1.52 3.48-5.29V.52h4.92Zm21.81 15.99v15.75h-2.52l-.9-2.71A6.652 6.652 0 0 1 93 32.74a7.16 7.16 0 0 1-6.57-3.71c-1.03-2.04-1.37-4.08-1.37-8.48v-8.76c0-5.05.38-6.84 1.85-8.8A8.013 8.013 0 0 1 93.62.03c3.1-.2 6.04 1.45 7.46 4.23.8 1.57 1.14 3.53 1.14 6.57h-4.9c0-4.38-1.09-6.19-3.76-6.19-1.21-.08-2.34.56-2.91 1.62-.57 1.03-.72 2.04-.72 4.57v9.72c-.1 1.75.08 3.5.52 5.18a3.43 3.43 0 0 0 3.35 2.38c2.56 0 3.66-1.86 3.66-6.29v-1.27h-4.08v-4.08l8.98.05Zm9.28 1.76v14h-4.9V.52h4.9v13.23h7.01V.52h4.9v31.74h-4.9V18.28h-7.01Zm26.36 14h-4.9V5.03h-6.13V.52h17.25v4.51h-6.19v27.23l-.03.02Zm28.13-21.46v-.62c0-3.68-1.29-5.52-3.72-5.52-1.19-.08-2.32.52-2.91 1.57-.62 1.03-.75 2.04-.75 4.57v10.57c-.1 1.58.08 3.19.52 4.7a3.29 3.29 0 0 0 3.14 2.04c1.81 0 3.01-1.03 3.53-3.14.23-1.27.33-2.56.29-3.87h4.95v1.11c0 6.89-2.99 10.52-8.71 10.52-3.19 0-5.72-1.24-7.09-3.53-1.19-1.96-1.52-3.81-1.52-8.51v-8.91c0-5.05.38-6.81 1.86-8.8C157.23 1 159.5.03 162.5.03c5.42 0 8.62 3.63 8.62 9.85v.95l-4.95-.05-.03.03Zm14 14.52-1.29 6.94h-4.82L180.17.52h6.71l6.44 31.75h-5.05l-1.32-6.89-6.78-.05h-.03Zm3.33-18.75-2.58 14.28h5.19l-2.61-14.28Zm20.86 25.66h-4.9V5.03h-6.13V.52h17.25v4.51h-6.19v27.2l-.03.02Zm12.54-6.89-1.24 6.94h-4.8L216.97.52h6.71l6.44 31.75h-5.05l-1.32-6.89-6.84-.05-.03.02Zm3.33-18.75-2.53 14.28h5.18L220.21 6.6Zm18.1 21.14h9.77v4.52h-14.65V.52h4.9V27.7l-.02.03Zm30.17-5.57c0 3.56-.54 5.72-1.81 7.53-1.44 1.99-3.81 3.07-6.86 3.07s-5.42-1.03-6.86-3.07c-1.29-1.81-1.81-3.95-1.81-7.53V10.6c0-3.56.52-5.72 1.81-7.53 1.44-2.04 3.81-3.07 6.86-3.07s5.42 1.03 6.86 3.07c1.27 1.81 1.81 3.95 1.81 7.53v11.56Zm-12.43-.1c0 2.52.15 3.38.62 4.33a3.721 3.721 0 0 0 5.14 1.13c.46-.29.85-.67 1.13-1.13.52-1.03.62-1.76.62-4.33V10.7c0-2.56-.1-3.33-.62-4.33a3.758 3.758 0 0 0-5.19-1.09c-.44.28-.82.65-1.09 1.09-.47.96-.62 1.81-.62 4.33v11.35l.02.02Zm33.94-5.57v15.79h-2.52l-.91-2.71a6.605 6.605 0 0 1-5.95 3.19 7.16 7.16 0 0 1-6.57-3.71c-1.03-2.04-1.37-4.08-1.37-8.48v-8.79c0-5.05.39-6.84 1.86-8.8a8.013 8.013 0 0 1 6.71-2.96c3.1-.2 6.04 1.45 7.46 4.23.8 1.57 1.14 3.53 1.14 6.57h-4.9c0-4.38-1.09-6.19-3.76-6.19-1.21-.08-2.34.56-2.91 1.62-.57 1.03-.72 2.04-.72 4.57v9.72c-.1 1.75.08 3.5.52 5.18a3.409 3.409 0 0 0 3.33 2.38c2.58 0 3.68-1.86 3.68-6.29v-1.27H281v-4.08h8.98l-.02.03Z"})),a=[{isDefault:!1,name:"collectiveworld",attributes:{service:"collectiveworld",url:"https://collective.world/"},title:"Collective World",icon:()=>(0,h.createElement)(s.SVG,{height:"30",width:"300",viewBox:"0 0 300 30"},(0,h.createElement)(s.Path,{d:"M0 15.27C0 6 6.95.44 14.33.44S25.85 4.7 27.14 9.68l-4.53 1.51c-.84-3.45-3.49-6.23-8.27-6.23S4.92 8.37 4.92 15.27s4.57 10.2 9.44 10.2 7.5-3.06 8.46-6.27l4.43 1.46c-1.28 4.82-5.62 9.43-12.89 9.43C6.7 30.09 0 24.56 0 15.27Zm49.78 4.42c0 6.03-4.3 10.39-10.16 10.39s-10.11-4.38-10.11-10.4S33.82 9.33 39.62 9.33s10.16 4.37 10.16 10.35Zm-4.68 0c0-4.05-2.56-6.15-5.47-6.15s-5.47 2.09-5.47 6.15 2.61 6.22 5.47 6.22 5.47-2.13 5.47-6.23Zm8.37 9.78V.44h4.67v29.05h-4.67v-.02Zm9.87 0V.44h4.67v29.05h-4.67v-.02Zm27.19-5.58c-1.05 3.4-4.12 6.18-8.83 6.18-5.29 0-10-3.87-10-10.48 0-6.18 4.57-10.29 9.51-10.29 6.03 0 9.55 3.98 9.55 10.15.01.49-.01 1.01-.1 1.5H76.38c.1 2.97 2.46 5.1 5.34 5.1s4.26-1.5 4.91-3.41l3.93 1.23-.02.02Zm-4.47-6.33c-.09-2.28-1.6-4.34-4.81-4.34-1.2-.02-2.35.42-3.24 1.23s-1.43 1.92-1.53 3.12h9.58Zm12.28 2.12c0 3.93 2.54 6.15 5.48 6.15s4.46-2.13 4.9-3.6l4.11 1.47c-.92 3.06-3.87 6.39-8.98 6.39-5.76 0-10.11-4.45-10.11-10.4s4.38-10.35 10-10.35c5.25 0 8.16 3.3 8.94 6.42l-4.17 1.52c-.44-1.74-1.75-3.65-4.73-3.65s-5.43 2.13-5.43 6.06v-.02Zm24.48-9.76h4.05v4.13h-4.05v9.08c0 1.74.77 2.46 2.5 2.46.54 0 1.08-.06 1.6-.15v3.87c-.29.12-1.17.44-2.83.44-3.63 0-5.87-2.18-5.87-5.82V14.1h-3.63V9.94h1c2.08 0 3.02-1.32 3.02-3.06v-2.9h4.21v5.96h-.01ZM133.96.01c1.68 0 3.05 1.35 3.06 3.03a3.04 3.04 0 0 1-3.06 3.03c-1.22 0-2.32-.74-2.79-1.86-.08-.18-.13-.37-.18-.57A3.05 3.05 0 0 1 133.95 0h.01Zm-2.28 29.49V9.93h4.62v19.56h-4.62Zm20.64 0h-4.67l-7.94-19.56h5.15l5.19 13.98 5.06-13.98h4.9l-7.68 19.56h-.01Zm27.78-5.58c-1.05 3.4-4.14 6.18-8.83 6.18-5.29 0-10-3.87-10-10.48 0-6.18 4.58-10.29 9.51-10.29 6.03 0 9.56 3.98 9.56 10.15.02.51-.02 1.01-.12 1.5h-14.27c.12 2.97 2.46 5.1 5.34 5.1s4.26-1.5 4.9-3.41l3.93 1.23v.02Zm-4.47-6.33c-.09-2.28-1.6-4.34-4.81-4.34-1.2-.02-2.35.42-3.25 1.23s-1.44 1.92-1.53 3.12h9.6Zm52.24-16.55h4.96l-8 28.47h-4.96l-6.9-21.53-6.9 21.51h-4.95l-8.07-28.45h5.05l5.71 20.79 6.66-20.79h5.01l6.79 20.97 5.59-20.97h-.01Zm24.97 18.66c0 6.03-4.3 10.39-10.16 10.39s-10.11-4.38-10.11-10.4 4.3-10.35 10.11-10.35 10.16 4.37 10.16 10.35Zm-4.7 0c0-4.05-2.57-6.15-5.47-6.15s-5.47 2.09-5.47 6.15 2.61 6.22 5.47 6.22 5.45-2.15 5.47-6.23Zm19.82-5.15c-.5-.08-1-.12-1.51-.1-3.63 0-5.25 2.09-5.25 5.76v9.32h-4.67V9.96h4.53v3.14c.92-2.13 3.08-3.36 5.67-3.36.42 0 .83.05 1.23.12v4.69Zm3.91 14.94V.44h4.67v29.05h-4.67Zm27.93-3.56c0 1.2.06 2.4.2 3.58h-4.46c-.13-.84-.2-1.69-.2-2.54-.93 1.65-2.97 3-5.73 3-5.62 0-9.41-4.43-9.41-10.3s3.83-10.24 9.32-10.24c3.41 0 5.14 1.56 5.76 2.82V.44h4.53l-.03 25.5h.02Zm-9.66-.05c3.06 0 5.19-2.54 5.19-6.27s-2.08-6.06-5.14-6.06-5.29 2.37-5.29 6.11 2.05 6.22 5.25 6.22Z"}))},{isDefault:!1,name:"creepycatalog",attributes:{service:"creepycatalog",url:"https://creepycatalog.com/"},title:"Creepy Catalog",icon:()=>(0,h.createElement)(s.SVG,{height:"35",width:"240",viewBox:"0 0 240 35"},(0,h.createElement)(s.Path,{d:"M4.69 31.93c-1.53-1.91-2.6-4.14-3.13-6.52C.74 22.05.37 18.6.42 15.13c0-4.59.61-8.21 1.85-10.88 1.24-2.67 3.22-4 5.93-4 .75 0 1.48.05 2.21.17.63.1 1.44.31 2.45.58l1.97.51.93 10.08-.48.05c-1.26-2.7-2.26-4.71-2.99-6.03a12.71 12.71 0 0 0-2.11-2.97 3.12 3.12 0 0 0-2.23-.97c-1.1 0-1.85.68-2.28 2.04-.49 1.9-.7 3.86-.63 5.81-.02 3.38.22 6.76.73 10.11.34 2.57 1.07 5.06 2.16 7.41.95 1.87 2.09 2.79 3.4 2.79 1.97 0 4.01-3.06 6.1-9.16l.53.14c-1.36 4.89-2.7 8.34-4.06 10.35-1.36 2.02-2.92 3.02-4.67 3.02a6.018 6.018 0 0 1-4.57-2.23l.02-.02Zm20.46-12.27v11.89c.19.34.42.65.73.88.32.24.66.42 1.02.58v.46h-8.41v-.46c.36-.19.68-.39 1-.63.29-.22.54-.51.73-.82V2.85a3.63 3.63 0 0 0-1.77-1.44V.93h8.7c2.26-.12 4.47.59 6.25 1.97 1.56 1.33 2.34 3.3 2.34 5.91.05 2.31-.68 4.59-2.07 6.44a11.299 11.299 0 0 1-4.98 3.84h3.21c2.01 7.27 4.55 14.38 7.61 21.27l-.37.27c-2.46-3.18-4.76-6.49-6.88-9.91-2.13-3.56-3.93-7.3-5.39-11.18-.36.05-.71.08-1.07.1h-.66Zm0-17.33v15.92h.75c1.43.07 2.77-.63 3.53-1.84.8-1.22 1.19-3.28 1.19-6.19 0-5.27-1.41-7.9-4.23-7.9h-1.24Zm13 30.67a8.8 8.8 0 0 0 1-.63c.29-.22.53-.51.73-.82V2.85a3.63 3.63 0 0 0-1.77-1.44V.93h14.65l.71 8.65-.42.14c-1.44-3.38-3.04-5.85-4.83-7.39h-3.38v13.71h5.49l-1.77 1.39h-3.7v14.63h3.53c.97-.88 1.82-1.92 2.5-3.04.93-1.56 1.78-3.18 2.53-4.84l.48.08-.88 9.19H38.19v-.46h-.03Zm17.14 0c.36-.19.7-.39 1.02-.63.29-.22.53-.51.73-.82V2.85a3.63 3.63 0 0 0-1.77-1.44V.93h14.65l.7 8.65-.42.14c-1.44-3.38-3.06-5.85-4.83-7.39h-3.38v13.71h5.45l-1.77 1.39h-3.7v14.63h3.53c.97-.88 1.82-1.92 2.5-3.04.93-1.56 1.78-3.18 2.53-4.84l.48.08-.88 9.19h-14.8v-.46h-.03Zm17.14 0c.36-.19.68-.39 1-.63.29-.22.53-.51.73-.82V2.85a3.63 3.63 0 0 0-1.77-1.44V.93h8.39c2.28-.14 4.52.59 6.29 2.04 1.53 1.38 2.31 3.4 2.31 6.08.03 2.11-.49 4.18-1.5 6.02-.91 1.68-2.23 3.11-3.84 4.15a8.581 8.581 0 0 1-4.57 1.5h-.48v10.82c.19.34.42.65.73.88.32.22.66.42 1.02.58v.46h-8.33V33Zm7.27-13.66c1.38 0 2.63-.78 3.26-2.01.83-1.34 1.24-3.53 1.24-6.64s-.36-5.3-1.05-6.52a3.36 3.36 0 0 0-3.02-1.84h-1.07v17.01h.65ZM94.21 33c.36-.19.68-.39 1-.63.29-.22.54-.51.73-.82V19.71l-5.4-16.96a7.62 7.62 0 0 0-1.84-1.34V.93h8.28v.48c-.29.12-.54.31-.75.53-.22.25-.39.56-.48.88l4.13 14.58 4.42-14.14c-.48-.97-1.53-1.58-3.19-1.85V.93h5.45l-5.68 17.93v12.69c.19.34.42.65.73.88s.65.42 1 .58v.46h-8.39v-.49l-.02.02Zm27.54-1.07a15.95 15.95 0 0 1-3.11-6.52c-.82-3.36-1.19-6.81-1.14-10.28 0-4.59.61-8.21 1.85-10.87 1.24-2.65 3.21-3.99 5.9-3.99.75 0 1.48.05 2.21.17.63.1 1.44.31 2.45.58l1.97.51.9 10.08-.48.05c-1.26-2.7-2.24-4.71-2.97-6.03-.56-1.09-1.27-2.09-2.12-2.97a3.12 3.12 0 0 0-2.23-.97c-1.09 0-1.85.68-2.28 2.04-.49 1.9-.7 3.86-.63 5.81-.02 3.38.22 6.76.73 10.11a24.37 24.37 0 0 0 2.16 7.41c.95 1.87 2.09 2.79 3.42 2.79 1.97 0 4.01-3.06 6.1-9.16l.51.14c-1.34 4.89-2.7 8.34-4.06 10.35s-2.92 3.01-4.67 3.02c-1.75-.05-3.4-.87-4.5-2.23v-.02Zm29.09-.32c.32.51.7.97 1.14 1.39v.46h-7.56V33c.29-.15.56-.34.8-.56.22-.25.41-.56.51-.88l-1.6-7.12h-6.05l-1.77 6.59c.42.76 1.51 1.43 3.25 1.95v.46h-5.4l6.63-24.16-.75-3.3L142.96 0h.48l7.41 31.59v.02Zm-9.43-19.44-2.92 10.93h5.35l-2.45-10.93h.02Zm13.39 20.87c.36-.19.68-.39 1-.63.29-.22.54-.51.73-.82V2.34h-1.89c-.48.76-1.05 1.84-1.77 3.21-.71 1.38-1.68 3.28-2.94 5.74h-.48L150.59.98h16.72l1.14 10.31h-.42l-.99-1.94c-.93-1.84-1.7-3.3-2.29-4.42-.59-1.12-1.07-1.97-1.46-2.6h-1.84v29.22c.19.34.42.65.73.88s.65.42 1 .58v.46h-8.39v-.44Zm28.09-1.39c.32.49.71.95 1.16 1.38v.46h-7.56v-.46c.29-.15.56-.34.8-.56.22-.25.41-.56.51-.88l-1.6-7.12h-6.02l-1.77 6.59c.44.76 1.51 1.43 3.25 1.95v.46h-5.4l6.61-24.16-.75-3.3L175 .02h.48l7.43 31.61v.02Zm-9.45-19.49-2.91 10.93h5.35l-2.45-10.93Zm11.04 20.87c.36-.19.7-.39 1.02-.63.29-.22.53-.51.73-.82V2.85a3.63 3.63 0 0 0-1.77-1.44V.93h8.43v.48c-.75.25-1.36.76-1.77 1.44v29.21h4.13a15.7 15.7 0 0 0 2.51-3.11c.87-1.33 1.9-3.08 3.08-5.25l.48.1-1.41 9.65H184.5v-.46l-.02.02Zm22.17-.93c-1.61-1.67-2.79-3.7-3.45-5.93-.92-2.89-1.36-5.9-1.29-8.92-.05-3.02.39-6.03 1.29-8.92a14.57 14.57 0 0 1 3.45-5.95 6.692 6.692 0 0 1 4.77-2.09c1.81.03 3.52.79 4.77 2.09a14.66 14.66 0 0 1 3.47 5.95c.9 2.89 1.34 5.9 1.29 8.92.05 3.02-.39 6.03-1.29 8.92-.66 2.23-1.85 4.26-3.47 5.93a6.733 6.733 0 0 1-4.77 2.09 6.635 6.635 0 0 1-4.77-2.09Zm7.95-2.91c.65-2.4.99-6.39.99-11.96.03-3.02-.1-6.05-.42-9.06-.12-1.72-.59-3.4-1.38-4.94a2.773 2.773 0 0 0-2.36-1.56c-1.5 0-2.58 1.21-3.25 3.6-.66 2.4-.99 6.39-.99 11.96s.32 9.53.99 11.93c.66 2.41 1.77 3.62 3.25 3.62s2.55-1.19 3.21-3.59h-.03Zm17.76-12.57h8.04v17.52h-.48l-1.97-5.52c-.29 1.53-1 2.96-2.06 4.13a4.52 4.52 0 0 1-3.36 1.48c-1.84 0-3.59-.75-4.89-2.04-1.6-1.65-2.76-3.67-3.38-5.88a30.07 30.07 0 0 1-1.22-9.04c-.05-3.06.36-6.12 1.22-9.06.61-2.21 1.77-4.23 3.38-5.88a6.97 6.97 0 0 1 4.89-2.02c.76-.02 1.53.03 2.28.17.54.1 1.19.27 1.94.49.71.24 1.43.44 2.16.59l.88 9.72h-.42l-.65-1.39c-.77-1.67-1.57-3.31-2.41-4.94a9.164 9.164 0 0 0-1.82-2.51c-.53-.51-1.24-.8-1.97-.82-1.05 0-2.02.63-2.46 1.6-.75 1.56-1.21 3.26-1.34 5-.31 2.97-.44 5.96-.41 8.95-.03 2.99.1 5.98.41 8.97.14 1.73.59 3.43 1.34 5 .46.97 1.43 1.6 2.51 1.6s1.78-1.12 2.26-3.36c.58-3.53.83-7.12.76-10.7a7.943 7.943 0 0 0-3.19-1.63l-.03-.41Z"}),(0,h.createElement)(s.Path,{fill:"#ee2724",d:"M34.32 26.93c.53 1.6 1.56 4.66 2.65 7.58.19.46.49 1.26.93 2.33.61 1.46 1.16 2.65 1.58 3.53a.2.2 0 0 1-.12.08l-.22.19c-1.77-2.01-7.95-11.16-9.06-13.85.25.53.87.75 1.39.51l.39-.32c.24-.34.58-.61.97-.78.71-.2 1.5.75 1.5.75l-.02-.02Z"}))},{isDefault:!1,name:"quotecatalog",attributes:{service:"quotecatalog",url:"https://quotecatalog.com/"},title:"Quote Catalog",icon:()=>(0,h.createElement)(s.SVG,{height:"39",width:"220",viewBox:"0 0 220 39"},(0,h.createElement)(s.Path,{d:"M11.84 30.64c-2.32 0-4.4-.65-6.2-1.98s-3.19-3.13-4.17-5.43-1.48-4.86-1.48-7.7.5-5.45 1.5-7.74c1-2.3 2.38-4.09 4.13-5.41C7.39 1.07 9.4.42 11.69.42s4.43.67 6.2 1.98c1.77 1.31 3.17 3.13 4.13 5.43s1.46 4.88 1.46 7.74-.5 5.41-1.48 7.7c-.98 2.3-2.36 4.09-4.11 5.41s-3.78 1.96-6.07 1.96h.02Zm7.83-3.57c-1.19 1.48-3.13 2.78-5.84 3.94-2.71 1.15-5.24 1.96-7.62 2.44l.08.33c2.3-.38 4.32-.58 6.01-.58.73 0 1.42.04 2.07.12s1.36.17 2.15.33c.69.12 1.31.21 1.86.27.56.06 1.11.1 1.67.1 1.11 0 2.02-.15 2.71-.44.67-.29 1.23-.77 1.63-1.42l.84.61c-.4 1.55-1.04 2.74-1.9 3.59-.84.84-1.96 1.25-3.34 1.25-.9 0-1.77-.12-2.63-.36-.84-.25-1.88-.61-3.09-1.09-1.27-.48-2.3-.84-3.15-1.06-.84-.21-1.73-.33-2.67-.33-.84 0-1.67.08-2.48.25-.81.17-1.65.42-2.55.73l-.81-2.76c1.46-.25 3.09-.63 4.91-1.15 1.82-.52 3.51-1.13 5.11-1.82 1.57-.69 2.71-1.42 3.38-2.21l3.65-.73v.02Zm-7.03 1.86c1.25 0 2.28-.46 3.13-1.36.84-.9 1.5-2.11 1.94-3.61s.65-3.11.65-4.82c0-2.74-.29-5.41-.86-8.02s-1.42-4.76-2.55-6.45c-1.13-1.69-2.48-2.53-4.07-2.53-1.21 0-2.27.46-3.13 1.36-.88.9-1.54 2.11-1.98 3.59s-.65 3.09-.65 4.8c0 2.76.29 5.45.86 8.06s1.42 4.76 2.55 6.45c1.13 1.69 2.5 2.53 4.09 2.53h.02Zm25.09 1.02-.04-3.24h-.12c-.52.81-1.04 1.48-1.57 2.03-.54.56-1.15 1.02-1.84 1.36s-1.48.52-2.34.52c-1.31 0-2.34-.48-3.11-1.46s-1.15-2.3-1.15-3.97v-9.97c0-.84-.04-1.44-.13-1.79-.08-.35-.29-.52-.6-.56-.33-.04-.84.08-1.61.35l-.25-.88 2.96-1.02 3.38-1.06.56.52v13.99c0 1.07.15 1.84.48 2.32s.81.73 1.46.73 1.31-.25 1.98-.73c.65-.48 1.31-1.17 1.94-2.03v-9.84c0-.84-.06-1.44-.15-1.79-.1-.35-.31-.52-.61-.56-.33-.04-.84.08-1.57.35l-.29-.88 2.99-1.02 3.34-1.06.56.52v14.86c.02.83.08 1.4.15 1.73s.29.5.58.52c.31 0 .81-.13 1.52-.42l.36.88-2.96 1.25-3.01 1.06-.88-.69v-.02Zm16.24.69c-1.71 0-3.19-.42-4.43-1.27-1.25-.84-2.23-2.05-2.92-3.59s-1.04-3.34-1.04-5.37.33-3.78 1-5.36 1.63-2.82 2.9-3.72 2.76-1.34 4.47-1.34 3.13.42 4.4 1.27c1.25.84 2.21 2.05 2.9 3.61s1.02 3.34 1.02 5.36-.33 3.78-.98 5.37c-.65 1.59-1.61 2.82-2.88 3.72-1.27.9-2.74 1.32-4.43 1.32Zm.54-1.79c1.11 0 1.94-.61 2.5-1.82.54-1.21.83-2.67.83-4.38s-.15-3.46-.5-5.13c-.33-1.67-.83-3.03-1.52-4.11-.67-1.07-1.5-1.61-2.44-1.61-1.11 0-1.94.61-2.5 1.82-.54 1.21-.83 2.67-.83 4.38s.15 3.46.5 5.13c.33 1.67.83 3.03 1.52 4.11.67 1.07 1.5 1.61 2.44 1.61Zm21.02-7.18c0 3.09-.38 5.36-1.15 6.8s-2.07 2.17-3.92 2.17c-1.55 0-2.73-.54-3.49-1.59s-1.17-2.86-1.17-5.39V12.3h-2.51v-1.5c1.4-.08 2.57-.58 3.47-1.5.92-.92 1.5-2.27 1.73-4.05h1.5v5.39h4.38v1.63h-4.26v10.56c0 1.13.06 2.07.15 2.78s.31 1.27.6 1.67c.29.4.69.6 1.21.6.81 0 1.4-.52 1.79-1.55s.58-2.61.58-4.72h1.09l.02.06Zm11.36-3.9c0-1.36-.08-2.46-.21-3.32-.15-.84-.4-1.54-.77-2.03s-.88-.77-1.54-.77c-.75 0-1.34.31-1.79.9-.44.61-.75 1.46-.92 2.53-.17 1.07-.27 2.44-.27 4.09s.17 3.17.52 4.43c.35 1.25.84 2.21 1.54 2.9.69.67 1.52 1.02 2.51 1.02.92 0 1.79-.42 2.61-1.25.81-.84 1.42-2.21 1.8-4.09h.9c-.38 2.9-1.19 5.01-2.38 6.39-1.21 1.36-2.76 2.05-4.68 2.05-1.44 0-2.69-.4-3.74-1.21-1.06-.81-1.88-1.96-2.48-3.44-.6-1.5-.88-3.26-.88-5.3s.31-3.72.88-5.36c.6-1.63 1.44-2.92 2.55-3.88 1.09-.96 2.4-1.44 3.92-1.44 2.19 0 3.84.88 4.95 2.63s1.67 4.01 1.67 6.81H80.41v-1.67h6.49l-.02-.02Zm14.4-1.98c0-2.94.52-5.59 1.55-7.95s2.48-4.2 4.32-5.53c1.84-1.34 3.97-2 6.37-2 1.21 0 2.32.19 3.34.56 1 .38 1.94.96 2.78 1.73.27.25.5.33.67.27s.29-.27.35-.6l.21-1.63h.92l.54 10.42h-.9c-.54-2.92-1.38-5.14-2.53-6.66-1.15-1.54-2.65-2.3-4.49-2.3-1.57 0-2.94.56-4.09 1.67s-2.03 2.67-2.65 4.65c-.61 1.98-.9 4.22-.9 6.76s.31 4.8.9 6.74 1.5 3.46 2.67 4.55 2.53 1.63 4.11 1.63c2.09 0 3.8-.9 5.13-2.73s2.19-4.22 2.61-7.22h1.06c-.35 3.97-1.36 7.04-3.07 9.21s-4.13 3.24-7.24 3.24c-2.42 0-4.51-.65-6.26-1.96s-3.07-3.07-3.99-5.32c-.9-2.25-1.36-4.76-1.36-7.56l-.04.02Zm27.93 14.84c-1.29 0-2.32-.42-3.07-1.23-.77-.83-1.15-1.86-1.15-3.13s.42-2.46 1.25-3.44c.84-.98 1.84-1.8 3.01-2.44s2.67-1.34 4.49-2.13c.19-.1.38-.17.56-.23.19-.06.36-.13.52-.23v1.27c-.12.08-.25.13-.36.17s-.25.12-.36.17c-1.04.54-1.9 1.07-2.59 1.59-.67.54-1.25 1.13-1.67 1.82-.44.67-.65 1.44-.65 2.27 0 .71.15 1.27.48 1.67.33.42.77.61 1.34.61.77 0 1.52-.4 2.23-1.21s1.27-2.02 1.67-3.65l.21 2.15h-.36c-.33 1.84-.96 3.3-1.94 4.36-.96 1.06-2.19 1.59-3.65 1.59h.06Zm9.14-.04c-1.19 0-2.09-.4-2.73-1.21s-.94-2.09-.94-3.9v-9.74c0-1.54-.21-2.61-.65-3.24-.44-.63-1.09-.94-1.98-.94-.67 0-1.23.17-1.63.5s-.61.77-.61 1.32c0 .27.08.61.25 1.06.06.19.1.38.15.58.06.19.08.4.08.61 0 .56-.17 1.02-.52 1.36s-.86.52-1.52.52c-.73 0-1.29-.21-1.67-.65-.38-.44-.58-1.02-.58-1.75 0-.92.29-1.79.88-2.57.58-.79 1.38-1.42 2.42-1.88s2.19-.69 3.47-.69c1.96 0 3.49.54 4.57 1.59 1.07 1.07 1.61 2.59 1.61 4.55v10.52c0 .81.08 1.34.21 1.63.15.29.38.44.69.44.38 0 .71-.23.96-.67s.4-1.19.46-2.25h.9c-.1 1.55-.44 2.74-1.02 3.55-.58.81-1.52 1.23-2.8 1.23l-.02.04Zm15.63-8.93c0 3.09-.38 5.36-1.15 6.8-.77 1.44-2.07 2.17-3.92 2.17-1.55 0-2.73-.54-3.49-1.59s-1.17-2.86-1.17-5.39V12.3h-2.51v-1.5c1.4-.08 2.57-.58 3.47-1.5.92-.92 1.5-2.27 1.73-4.05h1.5v5.39h4.38v1.63h-4.26v10.56c0 1.13.06 2.07.15 2.78s.31 1.27.6 1.67c.29.4.69.6 1.21.6.81 0 1.4-.52 1.79-1.55s.58-2.61.58-4.72h1.09l.02.06Zm5.64 8.96c-1.29 0-2.32-.42-3.07-1.23-.77-.83-1.15-1.86-1.15-3.13s.42-2.46 1.25-3.44c.84-.98 1.84-1.8 3.01-2.44s2.67-1.34 4.49-2.13c.19-.1.38-.17.56-.23.19-.06.36-.13.52-.23v1.27c-.12.08-.25.13-.36.17s-.25.12-.36.17c-1.04.54-1.9 1.07-2.59 1.59-.67.54-1.25 1.13-1.67 1.82-.44.67-.65 1.44-.65 2.27 0 .71.15 1.27.48 1.67.33.42.77.61 1.34.61.77 0 1.52-.4 2.23-1.21.71-.81 1.27-2.02 1.67-3.65l.21 2.15h-.36c-.33 1.84-.96 3.3-1.94 4.36-.96 1.06-2.19 1.59-3.65 1.59h.06Zm9.14-.04c-1.19 0-2.09-.4-2.73-1.21s-.94-2.09-.94-3.9v-9.73c0-1.54-.21-2.61-.65-3.24s-1.09-.94-1.98-.94c-.67 0-1.23.17-1.63.5s-.61.77-.61 1.32c0 .27.08.61.25 1.06.06.19.1.38.15.58.06.19.08.4.08.61 0 .56-.17 1.02-.52 1.36s-.86.52-1.52.52c-.73 0-1.29-.21-1.67-.65-.38-.44-.58-1.02-.58-1.75 0-.92.29-1.79.88-2.57.58-.79 1.38-1.42 2.42-1.88 1.04-.46 2.19-.69 3.47-.69 1.96 0 3.49.54 4.57 1.59 1.07 1.07 1.61 2.59 1.61 4.55v10.52c0 .81.08 1.34.21 1.63.15.29.38.44.69.44.38 0 .71-.23.96-.67s.4-1.19.46-2.25h.9c-.1 1.55-.44 2.74-1.02 3.55s-1.52 1.23-2.8 1.23l-.02.04Zm11.29-4.45c0 .84.08 1.48.19 1.88s.38.69.77.86.94.25 1.69.25v.9h-9.62v-.9c.77 0 1.36-.08 1.73-.25.38-.17.63-.46.77-.86s.19-1.02.19-1.88V5.72l-.04-.12c.02-.88 0-1.46-.08-1.77-.08-.31-.27-.46-.58-.48-.33 0-.84.15-1.61.5l-.4-.81 3.05-1.38 3.28-1.67.61.54v25.61h.04Zm12.09 4.49c-1.71 0-3.19-.42-4.43-1.27s-2.23-2.05-2.92-3.59-1.04-3.34-1.04-5.37.33-3.78 1-5.36 1.63-2.82 2.9-3.72 2.76-1.34 4.47-1.34 3.13.42 4.4 1.27c1.25.84 2.21 2.05 2.9 3.61s1.02 3.34 1.02 5.36-.33 3.78-.98 5.37-1.61 2.82-2.88 3.72-2.74 1.32-4.43 1.32Zm.54-1.79c1.11 0 1.94-.61 2.5-1.82.54-1.21.83-2.67.83-4.38s-.15-3.46-.5-5.13c-.33-1.67-.83-3.03-1.52-4.11-.67-1.07-1.5-1.61-2.44-1.61-1.11 0-1.94.61-2.5 1.82-.54 1.21-.83 2.67-.83 4.38s.15 3.46.5 5.13c.33 1.67.83 3.03 1.52 4.11.67 1.07 1.5 1.61 2.44 1.61Zm16.34 9.79c-1.44 0-2.73-.17-3.88-.52s-2.07-.84-2.76-1.5-1.04-1.46-1.04-2.4c0-1.04.38-1.92 1.15-2.63.77-.71 1.98-1.36 3.63-1.96l1.67-.17c-.92.58-1.65 1.19-2.17 1.82-.52.63-.79 1.27-.79 1.94 0 .83.42 1.54 1.25 2.11.84.58 2.17.86 3.99.86 1.46 0 2.76-.19 3.92-.6s2.05-.9 2.71-1.54c.65-.61.96-1.25.96-1.88s-.25-1.02-.75-1.23c-.5-.21-1.38-.31-2.67-.31h-4.84c-1.38 0-2.55-.15-3.51-.46s-1.67-.73-2.15-1.27-.71-1.19-.71-1.92c0-1.04.38-1.94 1.15-2.67.77-.75 1.82-1.42 3.15-2.02l.52.73c-.6.38-1.06.75-1.36 1.07s-.46.69-.46 1.07.1.65.27.88c.19.21.56.4 1.11.54.56.13 1.4.19 2.55.19h4.43c1.94 0 3.36.33 4.26.96s1.34 1.65 1.34 3.01-.48 2.71-1.42 3.92-2.25 2.17-3.92 2.88-3.53 1.07-5.62 1.07l-.02-.02Zm1.17-14.61c-1.44 0-2.69-.29-3.76-.88a6.453 6.453 0 0 1-2.53-2.44c-.61-1.04-.9-2.25-.9-3.61s.29-2.55.88-3.63 1.44-1.94 2.55-2.55 2.4-.92 3.88-.92c1.38 0 2.61.29 3.7.88 1.07.58 1.92 1.4 2.5 2.46s.88 2.27.88 3.63-.29 2.61-.88 3.69c-.58 1.07-1.42 1.9-2.51 2.5-1.09.6-2.36.88-3.78.88h-.02Zm.48-1.54c.81 0 1.4-.36 1.82-1.09.4-.73.61-1.69.61-2.92 0-1.11-.12-2.21-.36-3.28s-.61-1.96-1.11-2.65-1.13-1.04-1.88-1.04c-.84 0-1.48.38-1.88 1.17s-.6 1.77-.6 2.96c0 1.77.29 3.36.84 4.76.56 1.4 1.4 2.09 2.55 2.09Zm2.98-11.25c.75-.52 1.55-.88 2.42-1.15.86-.25 1.63-.38 2.3-.38.54 0 .92.12 1.15.33.23.21.35.52.35.88 0 .4-.12.75-.36 1.02s-.58.4-1.02.4c-.27 0-.52-.04-.77-.13-.25-.08-.52-.19-.84-.35-.54-.19-.98-.33-1.31-.38-.34-.06-.69-.03-1.02.1l-.92-.33h.02Z"}))},{isDefault:!1,name:"shopcatalog",attributes:{service:"shopcatalog",url:"https://shopcatalog.com/"},title:"Shop Catalog",icon:()=>(0,h.createElement)(s.SVG,{height:"43",width:"215",viewBox:"0 0 215 43"},(0,h.createElement)(s.Path,{d:"M-40.19 22.55v-2.72h35.45v2.72h-35.45Zm51.8-5.31c-.87-2.61-2.35-4.31-4.49-4.31a2.796 2.796 0 0 0-2.84 3.01c0 1.92 1.74 2.92 3.66 3.75 3.32 1.37 5.54 2.92 5.54 5.93 0 3.96-3.71 6.02-7.2 6.02-1.77.04-3.51-.49-4.98-1.48-.47-1.68-.71-3.41-.74-5.15l1.17-.22c.75 2.88 2.72 5.41 5.32 5.41.4 0 .81-.06 1.19-.22.76-.3 1.37-.9 1.68-1.65.15-.38.23-.78.22-1.19 0-1.92-1.26-2.96-3.41-3.96-2.61-1.18-5.45-2.66-5.45-5.97 0-3.05 2.61-5.67 6.62-5.67 1.31-.02 2.61.26 3.82.81.48 1.51.79 3.05.96 4.63l-1.1.29h.02ZM27.8 31.1v-1.13c2.52-.26 2.88-.52 2.88-3.36v-7.24c0-3.58-1.37-5.36-4.28-5.36-1.76.05-3.41.86-4.53 2.22v10.4c0 2.79.22 3.09 2.84 3.36v1.13h-9.29l.04-1.13c2.61-.24 2.97-.5 2.97-3.36V5.81c0-2.72-.09-2.92-2.96-3.18V1.58c2.17-.36 4.31-.87 6.41-1.53v14.66c1.56-1.56 3.88-3.18 6.24-3.18 3.53 0 6.02 2.23 6.02 7.46v7.66c0 2.88.35 3.14 2.88 3.36v1.13l-9.2-.02Zm30.58-9.86c0 7.02-5.15 10.38-9.47 10.38-5.97 0-9.54-4.77-9.54-9.64 0-7.2 5.58-10.47 9.6-10.47 5.4 0 9.42 4.36 9.42 9.72Zm-15-.67c0 5.49 2.35 9.6 5.97 9.6 2.72 0 4.92-2 4.92-7.98 0-5.06-2.05-9.25-5.93-9.25-2.62 0-4.98 2.72-4.98 7.64Zm27.53-8.35c.65-.4 1.38-.64 2.14-.68 4.84 0 7.72 3.97 7.72 8.25 0 6.59-5.18 10.82-10.85 11.86a7.304 7.304 0 0 1-3.01-.78v5.71c0 3.32.3 3.57 3.66 3.84v1.17H60.28v-1.2c2.79-.27 3.18-.52 3.18-3.41V17.27c0-2.83-.17-2.92-2.88-3.26v-1.05a32.44 32.44 0 0 0 6.33-1.88v3.41l4.01-2.27v.02Zm-4.03 15.57a5.976 5.976 0 0 0 4.09 1.7c3.66 0 6.14-3.14 6.14-8.02s-2.72-7.32-5.85-7.32c-1.37 0-3.18.96-4.36 1.88l-.02 11.78Zm42.34-.62c-1.91 2.52-4.77 4.45-7.37 4.45-5.49 0-8.77-4.45-8.77-9.12 0-3.38 1.64-6.55 4.4-8.5 1.86-1.47 4.13-2.35 6.5-2.49h.04c1.4-.06 2.79.35 3.93 1.18.22.14.4.33.52.57.13.22.19.49.18.75 0 .92-.96 1.88-1.44 1.88-.26 0-.48-.13-.84-.48a6.403 6.403 0 0 0-4.4-1.8c-2.88 0-5.36 2.4-5.36 6.98 0 6.06 4.09 8.07 6.59 8.07 1.88 0 3.27-.52 5.28-2.4l.74.92Zm16.01 4.45c-.76-.04-1.48-.36-2.05-.87-.51-.54-.88-1.19-1.05-1.92-1.74 1.18-3.84 2.79-5.15 2.79a5.235 5.235 0 0 1-3.76-1.57c-.99-1-1.53-2.35-1.51-3.74 0-2.14 1.14-3.5 3.54-4.32 2.61-.87 5.8-2.05 6.76-2.84v-.75c0-3.18-1.48-4.92-3.7-4.92-.37 0-.73.05-1.06.2s-.64.36-.89.63c-.63.86-1.06 1.84-1.27 2.88-.05.29-.22.55-.45.73-.23.18-.52.28-.82.27-1-.08-1.8-.87-1.88-1.88 0-.61.52-1.14 1.37-1.74 1.98-1.41 4.2-2.44 6.54-3.05a5.62 5.62 0 0 1 3.57 1.18c1.53 1.31 1.99 3.03 1.99 5.36v8.06c0 1.96.78 2.61 1.53 2.61.56-.02 1.1-.18 1.56-.48l.44 1.14-3.74 2.22h.02Zm-3.21-10.99c-.92.48-3.01 1.4-3.93 1.83-1.71.78-2.66 1.62-2.66 3.23-.02.42.04.84.19 1.24s.39.76.68 1.07a3.186 3.186 0 0 0 2.24 1.01c1.31-.11 2.54-.66 3.49-1.56l-.02-6.81Zm16.36 10.42c-.56.32-1.19.52-1.82.58-2.72 0-4.28-1.74-4.28-5.19V13.81h-3.01l-.18-.48 1.23-1.27h1.96V8.92L135.12 6l.61.09v5.97h4.92c.1.13.17.28.22.44.08.32.03.66-.14.94a1.3 1.3 0 0 1-.34.36h-4.67v11.17c0 3.53 1.44 4.19 2.58 4.19a5.87 5.87 0 0 0 2.65-.75l.4 1.14-2.96 1.52v-.02Zm18.72.58c-.76-.04-1.48-.36-2.05-.87-.51-.54-.88-1.19-1.05-1.92-1.74 1.18-3.84 2.79-5.15 2.79a5.235 5.235 0 0 1-3.76-1.57c-.99-1-1.53-2.35-1.51-3.74 0-2.14 1.14-3.5 3.54-4.32 2.61-.87 5.8-2.05 6.76-2.84v-.75c0-3.18-1.48-4.92-3.71-4.92-.37 0-.73.05-1.07.2s-.64.36-.89.63a7.44 7.44 0 0 0-1.26 2.88c-.06.29-.22.55-.45.73-.23.18-.52.28-.82.27-.99-.09-1.77-.88-1.85-1.88 0-.61.52-1.14 1.37-1.74 1.98-1.41 4.2-2.44 6.54-3.05 1.29-.03 2.55.39 3.58 1.18 1.53 1.31 1.96 3.05 1.96 5.36v8.06c0 1.96.78 2.61 1.53 2.61.56-.02 1.1-.19 1.56-.48l.44 1.14-3.72 2.22Zm-3.17-10.99c-.92.48-3.01 1.4-3.93 1.83-1.7.78-2.65 1.62-2.65 3.23-.02.42.04.84.19 1.24s.39.76.68 1.07c.58.62 1.38.99 2.24 1.01 1.31-.11 2.54-.66 3.49-1.56l-.02-6.81Zm8.03 10.47v-1.13c2.72-.26 3.14-.52 3.14-3.41V5.95c0-2.96-.27-3.05-3.01-3.32V1.58c2.2-.3 4.36-.8 6.45-1.53v26.52c0 2.88.35 3.14 3.14 3.41v1.14h-9.73Zm31.01-9.86c0 7.02-5.15 10.38-9.46 10.38-5.97 0-9.54-4.77-9.54-9.64 0-7.2 5.58-10.47 9.59-10.47 5.41 0 9.42 4.36 9.42 9.72Zm-14.95-.67c0 5.49 2.35 9.6 5.97 9.6 2.72 0 4.92-2 4.92-7.98 0-5.06-2.05-9.25-5.92-9.25-2.62 0-4.98 2.72-4.98 7.64ZM215 12.39c-.49.88-1.15 1.64-1.96 2.23l-2.49-.13a5.943 5.943 0 0 1 1.31 3.84c0 4.71-3.93 6.97-7.64 6.97-.75 0-1.49-.08-2.22-.22-.57.39-1.31 1.22-1.31 1.82 0 .84.78 1.65 2.72 1.65 1.62 0 3.14-.04 4.62-.04 2.72 0 6.24.87 6.24 5.15s-5.06 8.63-10.85 8.63c-4.88 0-7.55-2.84-7.58-5.32 0-.92.38-1.8 1.04-2.44.87-.87 2.58-2.22 3.62-3.05a5.86 5.86 0 0 1-3.23-2.4c-.34-.55-.5-1.19-.48-1.83 1.48-.55 2.8-1.46 3.84-2.66a6.281 6.281 0 0 1-3.84-5.84c0-4.92 4.45-7.24 7.81-7.24h.04c1.47 0 2.93.4 4.19 1.18 2.09-.13 4.32-.4 5.93-.68l.24.37v.02ZM201.3 32.5c-1.14.96-2.01 2.18-2.01 3.41 0 2.4 2.53 4.19 5.76 4.19 4.14 0 6.28-2.13 6.28-4.84.06-1.34-.72-2.58-1.96-3.09-1.37-.46-2.83-.66-4.28-.57-2 0-3.01.27-3.79.92v-.02Zm-.75-14.43c0 3.41 1.71 5.84 4.09 5.84 1.92-.04 3.63-1.74 3.63-5.18s-1.62-5.84-4.14-5.84c-1.83 0-3.58 1.83-3.58 5.19Z"}))},{isDefault:!0,name:"thoughtcatalog",attributes:{service:"thoughtcatalog",url:"https://thoughtcatalog.com/"},title:"Thought Catalog",icon:v},{isDefault:!1,name:"thoughtcatalogbooks",attributes:{service:"thoughtcatalogbooks",url:"https://thoughtcatalog.com/books/"},title:"Thought Catalog Books",icon:()=>(0,h.createElement)(s.SVG,{height:"127",width:"120",viewBox:"0 0 120 127"},(0,h.createElement)(s.Path,{d:"M10.09 5.04h5.27V.49H0v4.55h5.19v28.07h4.88V5.04h.02ZM26.7 18.39v14.72h4.88V.49H26.7v13.35h-5.42V.49H16.4v32.62h4.88V18.39h5.42Zm22.86-7.28c0-4.83-.39-6.61-1.96-8.5C46.34 1 44.17.02 41.93.02S37.54 1 36.2 2.61c-1.57 1.91-1.96 3.72-1.96 8.5V22.5c0 4.8.39 6.61 1.96 8.5 1.32 1.61 3.43 2.59 5.73 2.59s4.36-.98 5.68-2.59c1.57-1.91 1.96-3.67 1.96-8.5V11.11Zm-10.41.54c0-2.5.1-4.26.2-4.83.34-1.42 1.27-2.25 2.59-2.25 1.13 0 1.96.64 2.4 1.76.24.73.34 2.01.34 5.32v10.33c0 2.59-.05 4.21-.2 4.83-.34 1.42-1.27 2.25-2.53 2.25-1.13 0-2.01-.64-2.45-1.76-.24-.73-.34-2.1-.34-5.32V11.65ZM62.73.49v21.46c0 2.59-.05 4.21-.2 4.83-.34 1.42-1.27 2.25-2.53 2.25-1.13 0-2.01-.64-2.45-1.76-.24-.73-.34-2.1-.34-5.32V.49h-4.88v22c0 4.8.39 6.61 1.96 8.5 1.32 1.61 3.43 2.59 5.73 2.59s4.36-.98 5.68-2.59c1.57-1.91 1.96-3.67 1.96-8.5v-22h-4.92Zm22.92 16.09h-7.87v4.06h2.99v1.32c0 2.53-.05 4.16-.24 4.83-.29 1.37-1.22 2.2-2.5 2.2-1.13 0-2.06-.69-2.4-1.76-.24-.64-.39-2.69-.39-5.27V11.64c0-2.45.1-4.21.2-4.8.34-1.42 1.27-2.25 2.53-2.25 1.13 0 2.01.64 2.4 1.66.24.64.34 1.86.34 4.16v.73h4.93V9.48c0-3.02-.24-4.36-1.13-5.86C83.29 1.32 80.84 0 78 0c-2.3 0-4.39.93-5.73 2.59-1.61 1.96-1.96 3.62-1.96 8.7v11.39c0 4.06.39 6.25 1.47 8.11 1.08 1.76 3.02 2.79 5.37 2.79s3.77-.83 5.14-3.08l.93 2.59h2.4V16.58h.02Zm13.15 1.81v14.72h4.88V.49H98.8v13.35h-5.42V.49H88.5v32.62h4.88V18.39h5.42Zm15.94-13.35h5.27V.49h-15.36v4.55h5.19v28.07h4.88V5.04h.02ZM17.05 54.75v-1.76c0-3.18-.24-4.36-1.13-5.97-1.22-2.25-3.67-3.57-6.51-3.57-2.35 0-4.39.93-5.73 2.59-1.61 1.96-1.96 3.57-1.96 8.7v11.05c0 5.09.34 6.69 1.96 8.65C5 76.1 7.11 77.03 9.41 77.03c2.89 0 5.27-1.42 6.51-3.82.88-1.71 1.13-2.99 1.13-6.35V65h-4.93v.83c0 1.52-.15 3.95-.24 4.39-.29 1.42-1.22 2.25-2.5 2.25-1.13 0-1.96-.64-2.4-1.76-.24-.73-.34-2.01-.34-5.27V55.08c0-2.59.05-4.21.2-4.83C7.18 48.83 8.11 48 9.37 48c1.13 0 2.01.64 2.4 1.66.24.64.34 1.86.34 4.31v.78h4.93Zm12.61 14.62 1.13 7.18h5.04l-5.68-32.62H23.8l-5.32 32.62h4.83l1.13-7.18h5.22Zm-.73-4.55h-3.82l1.86-13.01 1.96 13.01Zm16.9-16.32h5.27v-4.55H35.74v4.55h5.19v28.07h4.88V48.5h.02Zm16.61 20.89 1.13 7.18h5.04l-5.68-32.62h-6.35l-5.32 32.62h4.83l1.13-7.18h5.22Zm-.73-4.55h-3.82l1.86-13.01 1.96 13.01Zm21.7 7.18H75.3V43.95h-4.88v32.62h13.01v-4.55h-.02Zm16.46-17.46c0-4.83-.39-6.61-1.96-8.5-1.27-1.61-3.43-2.59-5.68-2.59s-4.39.98-5.73 2.59c-1.57 1.91-1.96 3.72-1.96 8.5v11.39c0 4.8.39 6.61 1.96 8.5 1.32 1.61 3.43 2.59 5.73 2.59s4.36-.98 5.68-2.59c1.57-1.91 1.96-3.67 1.96-8.5V54.56Zm-10.41.54c0-2.5.1-4.26.2-4.83.34-1.42 1.27-2.25 2.59-2.25 1.13 0 1.96.64 2.4 1.76.24.73.34 2.01.34 5.32v10.33c0 2.59-.05 4.21-.2 4.83-.34 1.42-1.27 2.25-2.53 2.25-1.13 0-2.01-.64-2.45-1.76-.24-.73-.34-2.1-.34-5.32V55.1Zm28.31 4.93h-7.87v4.06h2.99v1.32c0 2.53-.05 4.16-.24 4.83-.29 1.37-1.22 2.2-2.5 2.2-1.13 0-2.06-.69-2.4-1.76-.24-.64-.39-2.69-.39-5.27V55.08c0-2.45.1-4.21.2-4.8.34-1.42 1.27-2.25 2.53-2.25 1.13 0 2.01.64 2.4 1.66.24.64.34 1.86.34 4.16v.73h4.93v-1.66c0-3.02-.24-4.36-1.13-5.86-1.22-2.3-3.67-3.62-6.51-3.62-2.3 0-4.39.93-5.73 2.59-1.61 1.96-1.96 3.62-1.96 8.7v11.39c0 4.06.39 6.25 1.47 8.11 1.08 1.76 3.02 2.79 5.37 2.79s3.77-.83 5.14-3.08l.93 2.59h2.4V60l.02.03ZM6.74 103.81V90.85h3.87c4.93 0 10.85-.29 10.85 6.4s-6.25 6.56-11.15 6.56H6.74Zm0 3.43h5.14c8.37 0 10.46 3.33 10.46 7.87 0 4.16-1.61 6.95-10.85 6.95H6.74v-14.82Zm7.05 18.23c10.61 0 12.57-6.12 12.57-10.61 0-4.83-2.64-8.06-7.18-9.43 3.95-.98 6.3-4.16 6.3-8.21s-2.53-9.78-12.27-9.78H2.75v38.04h11.04Zm26.4.78c6.02 0 10.8-4.16 10.8-14.28s-4.8-14.28-10.8-14.28-10.8 4.16-10.8 14.28 4.8 14.28 10.8 14.28Zm0-3.23c-5.86 0-7-6.46-7-11.05s1.13-11.05 7-11.05 7 6.46 7 11.05-1.13 11.05-7 11.05Zm24.59 3.23c6.02 0 10.8-4.16 10.8-14.28s-4.8-14.28-10.8-14.28-10.8 4.16-10.8 14.28 4.8 14.28 10.8 14.28Zm0-3.23c-5.86 0-7-6.46-7-11.05s1.13-11.05 7-11.05 7 6.46 7 11.05-1.13 11.05-7 11.05Zm18.37-35.59h-3.82v38.04h3.82v-9.24l4.39-5.42 6.89 14.67h4.11l-8.55-17.74 7.44-9.24h-4.26l-10.02 12.52V87.45Zm35.54 14.96c-2.1-3.13-5.24-4.7-8.99-4.7-4.44 0-8.26 2.84-8.26 7.49 0 9.68 14.23 6.46 14.23 13.25 0 3.08-2.5 4.6-5.27 4.6-3.23 0-5.58-1.57-7.05-4.36l-3.02 1.91c2.2 3.77 5.73 5.68 10.07 5.68 5.09 0 8.86-3.23 8.86-8.5 0-9.09-14.23-6.2-14.23-12.81 0-2.74 2.35-4.01 4.83-4.01 2.84 0 4.65 1.32 6.17 3.57l2.69-2.1-.02-.02Z"}))}];a.forEach((c=>{c.isActive||(c.isActive=(c,h)=>c.service===h.service)}));var m=a,i=c=>{let{clientId:s,attributes:{width:v},setAttributes:a}=c;const m=(0,e.__experimentalUseCustomUnits)({availableUnits:(0,t.useSetting)("spacing.units")||["px","%","vw","em","rem"]});return(0,h.createElement)(t.InspectorControls,{group:"dimensions"},(0,h.createElement)(e.__experimentalToolsPanelItem,{className:"single-column",hasValue:()=>!!v,label:(0,l.__)("Width"),onDeselect:()=>a({width:""}),resetAllFilter:()=>({width:""}),isShownByDefault:!0,panelId:s},(0,h.createElement)(e.__experimentalUnitControl,{label:(0,l.__)("Width"),labelPosition:"top",value:v||"",min:0,onChange:c=>((c,h)=>{const t=parseFloat(h);isNaN(t)&&h||a({width:t<0?"":h})})(0,c),units:m})))};(0,c.registerBlockType)("cata/network-link",{edit:function(c){let{clientId:s,attributes:a,setAttributes:Z}=c;const{service:o,width:n,isLink:r}=a,V=(c=>{const h=m.find((h=>h.name===c));return h?h.icon:v})(o),u=(c=>{const h=m.find((h=>h.name===c));return h?h.title:(0,l.__)("Thought Catalog")})(o),g=(0,t.useBlockProps)({style:{width:n}});return(0,h.createElement)(h.Fragment,null,(0,h.createElement)(i,{clientId:s,attributes:a,setAttributes:Z}),(0,h.createElement)("li",g,(0,h.createElement)(e.Button,{attributes:a,setAttributes:Z},(0,h.createElement)(V,null),(0,h.createElement)("span",{className:"cata-network-link-label screen-reader-text"},u))))},variations:m})}();