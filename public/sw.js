if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/R-GTfJ7bJShJBs10sqPCR/_buildManifest.js",revision:"a46ad970db5e07acd581ff95ebccb676"},{url:"/_next/static/R-GTfJ7bJShJBs10sqPCR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-6ad1a3aacd57a819.js",revision:"6ad1a3aacd57a819"},{url:"/_next/static/chunks/1bfc9850-4031192dd55f06dc.js",revision:"4031192dd55f06dc"},{url:"/_next/static/chunks/448-47943c7085a3866a.js",revision:"47943c7085a3866a"},{url:"/_next/static/chunks/d7eeaac4-8e0d6956cb9620e0.js",revision:"8e0d6956cb9620e0"},{url:"/_next/static/chunks/framework-63157d71ad419e09.js",revision:"63157d71ad419e09"},{url:"/_next/static/chunks/main-982fa453cb45ae71.js",revision:"982fa453cb45ae71"},{url:"/_next/static/chunks/pages/_app-307f917cbcabc535.js",revision:"307f917cbcabc535"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-4b07109e33db11e4.js",revision:"4b07109e33db11e4"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/03d6bb8daf881933.css",revision:"03d6bb8daf881933"},{url:"/_next/static/css/b7a62ebba47fd1a2.css",revision:"b7a62ebba47fd1a2"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/imgs/Taha.jpg",revision:"df5e24ae02b7f707f139d2b96f9e342c"},{url:"/imgs/avatar-1.jpg",revision:"96d8732ec34692a66a755d38912e6388"},{url:"/imgs/avatar-2.jpeg",revision:"058f20c94482fa608693af826d6a5532"},{url:"/imgs/avatar.jpeg",revision:"4c0cc889fcf026a0218025935b21742e"},{url:"/imgs/logo.png",revision:"c566a5625e3bc3ecb41f0f7cffe1ca44"},{url:"/imgs/me.jpg",revision:"7b54d6a513198c5fe38e69ef1dffb7b5"},{url:"/manifest.json",revision:"7f9e7f7c1a80b0eab188780cd701ce8f"},{url:"/sitemap.xml",revision:"1954a45efb755688a59d0be97bb1943e"},{url:"/svg/newseo.svg",revision:"1e47f2564523aca7fc2420cf45aa5660"},{url:"/svg/skills/api.svg",revision:"0b3c7990bafed4e7b5294074796096a4"},{url:"/svg/skills/bootstrap.svg",revision:"1cfe378d615e2ac382f3b3db9184fc37"},{url:"/svg/skills/css.svg",revision:"3b07ee46b8bd3409cb59a53c684d66c6"},{url:"/svg/skills/figma_.svg",revision:"14fb8d901c3ba51a1ef00450e797cb9a"},{url:"/svg/skills/git.svg",revision:"67a18acc12cc40d3cd343e24755895ee"},{url:"/svg/skills/github.svg",revision:"63b0dbcc85e67cc93be679be025cc269"},{url:"/svg/skills/html.svg",revision:"6f3d69949ef38223d94a5a78a0ecd6ca"},{url:"/svg/skills/js.svg",revision:"71acfaf870082299bcbde21aa400964d"},{url:"/svg/skills/nextjs.svg",revision:"c6e541a732690f4f3335d8c102c892c3"},{url:"/svg/skills/npm.svg",revision:"44d9fcf39e490bef7350a15a44db7909"},{url:"/svg/skills/pug.svg",revision:"f6e8faf87d7f653940b1531b9dabf94d"},{url:"/svg/skills/react.svg",revision:"7fca2996c86834b9a0d9e0daac11b635"},{url:"/svg/skills/redux.svg",revision:"634f1627b9383255b0796e44457b8f30"},{url:"/svg/skills/rq.svg",revision:"c29d6a4dcdbe7c8c2a45f8188db1ac3f"},{url:"/svg/skills/scss.svg",revision:"07452ffc367edef73ab46b7dc5df7571"},{url:"/svg/skills/tailwindcss.svg",revision:"788ffe0998fa8c675dc256412d129f46"},{url:"/svg/skills/ts.svg",revision:"34098a114e1ca33b98f0703299686c6b"},{url:"/svg/skills/vite.svg",revision:"275eb7281d2a9315cdc7f59c4f0b1fa7"},{url:"/svg/ui_ux.svg",revision:"d6956d36bf6eb28cff468e477c47739c"},{url:"/svg/webpack.svg",revision:"d9e506630c7a1d594c230cd5cf9adae4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
