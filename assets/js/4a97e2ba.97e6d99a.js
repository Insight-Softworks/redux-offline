"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,title:"Getting Started"},l=void 0,c={unversionedId:"basics/getting-started",id:"basics/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Making offline-friendly apps is not rocket science, but to make them work well involves dealing with finicky details around persisting state, resilience against flaky networks, optimistically updating user interface state, reliably reverting it back in case of failures, synchronising state in the background, and managing the evolution of the persistent state over long, long periods of time.",source:"@site/docs/basics/getting-started.md",sourceDirName:"basics",slug:"/basics/getting-started",permalink:"/redux-offline/docs/basics/getting-started",editUrl:"https://github.com/redux-offline/redux-offline/blob/develop/docs/basics/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/redux-offline/docs/introduction"},next:{title:"Read Resilience",permalink:"/redux-offline/docs/basics/read-resilience"}},u=[{value:"Quick start",id:"quick-start",children:[{value:"Install",id:"install",children:[],level:4},{value:"Add the store enhancer",id:"add-the-store-enhancer",children:[],level:4},{value:"Make a request",id:"make-a-request",children:[],level:4}],level:2}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Making offline-friendly apps is not rocket science, but to make them work well involves dealing with finicky details around persisting state, resilience against flaky networks, optimistically updating user interface state, reliably reverting it back in case of failures, synchronising state in the background, and managing the evolution of the persistent state over long, long periods of time."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Redux Offline helps you with offline state management, but it ",(0,a.kt)("strong",{parentName:"p"},"does not")," automatically make your web site available offline. For caching assets (HTML pages, scripts, images, and other resources) your website needs to implement a ServiceWorker. To get started with PWAs and React, ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-3-offline-support-and-network-resilience-c84db889162c"},"this article provides great list of resources")," to begin with.")),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("h4",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save @redux-offline/redux-offline\n")),(0,a.kt)("h4",{id:"add-the-store-enhancer"},"Add the store enhancer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux';\nimport { offline } from '@redux-offline/redux-offline';\nimport offlineConfig from '@redux-offline/redux-offline/lib/defaults';\n\nconst store = createStore(reducer, offline(offlineConfig));\n")),(0,a.kt)("h4",{id:"make-a-request"},"Make a request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'store.dispatch({\n  type: "MY_OFFLINE_ACTION",\n  meta: {\n    offline: {\n      effect: { url: "https://my-api.com/resource" }\n    }\n  }\n})\n')))}d.isMDXComponent=!0}}]);