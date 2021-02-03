(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(196)),c=r(197),i={id:"performance",title:"29.2 \u6027\u80fd\u6d4b\u8bd5",sidebar_label:"29.2 \u6027\u80fd\u6d4b\u8bd5"},u={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"29.2 \u6027\u80fd\u6d4b\u8bd5",description:"\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u5148\u770b\u65e7\u6587\u6863\uff1ahttps://monksoul.gitbook.io/hoa/",source:"@site/docs\\performance.mdx",slug:"/performance",permalink:"/docs/performance",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/performance.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1612020493,sidebar_label:"29.2 \u6027\u80fd\u6d4b\u8bd5",sidebar:"docs",previous:{title:"29.1 \u5355\u5143\u6d4b\u8bd5",permalink:"/docs/unittest"},next:{title:"29.3 \u57fa\u51c6\u6d4b\u8bd5",permalink:"/docs/benchmark"}},s=[],p={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.a,{mdxType:"JoinGroup"}),Object(a.b)("p",null,"\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u5148\u770b\u65e7\u6587\u6863\uff1a",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://monksoul.gitbook.io/hoa/"}),"https://monksoul.gitbook.io/hoa/")))}l.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var n=r(21),o=r(195);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},195:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},197:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r.n(n),a=r(194);r(55);function c(){const[e,t]=Object(n.useState)(!1);return o.a.createElement("div",{className:"furion-join-group"},e&&o.a.createElement("img",{src:Object(a.a)("img/dotnetchina2.jpg")}),o.a.createElement("button",{onClick:()=>t(!e)},"\u52a0\u5165QQ\u4ea4\u6d41\u7fa4"))}}}]);