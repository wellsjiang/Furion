(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(191)),c=n(192),l={id:"db",title:"2. Db \u9759\u6001\u7c7b",sidebar_label:"2. Db \u9759\u6001\u7c7b"},b={unversionedId:"global/db",id:"global/db",isDocsHomePage:!1,title:"2. Db \u9759\u6001\u7c7b",description:"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",source:"@site/docs\\global\\db.mdx",slug:"/global/db",permalink:"/furion/docs/global/db",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/global/db.mdx",version:"current",lastUpdatedBy:"zuohuaijun",lastUpdatedAt:1610600041,sidebar_label:"2. Db \u9759\u6001\u7c7b",sidebar:"global",previous:{title:"1. App \u9759\u6001\u7c7b",permalink:"/furion/docs/global/app"},next:{title:"3. DataValidator \u9759\u6001\u7c7b",permalink:"/furion/docs/global/datavalidator"}},i=[{value:"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",id:"21-\u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",children:[]},{value:"2.2 \u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8",id:"22-\u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8",children:[]},{value:"2.3 \u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8",id:"23-\u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8",children:[]},{value:"2.4 \u83b7\u53d6 <code>Sql</code> \u4ed3\u50a8",id:"24-\u83b7\u53d6-sql-\u4ed3\u50a8",children:[]},{value:"2.5 \u83b7\u53d6 <code>Sql</code> \u5b9a\u4f4d\u5668\u4ed3\u50a8",id:"25-\u83b7\u53d6-sql-\u5b9a\u4f4d\u5668\u4ed3\u50a8",children:[]},{value:"2.6 \u83b7\u53d6 <code>Sql</code> \u4ee3\u7406\u5bf9\u8c61",id:"26-\u83b7\u53d6-sql-\u4ee3\u7406\u5bf9\u8c61",children:[]},{value:"2.7 \u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"27-\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.7 \u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"27-\u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.8 \u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"28-\u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.9 \u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"29-\u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{mdxType:"JoinGroup"}),Object(o.b)("h2",{id:"21-\u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8"},"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var repository = Db.GetRepository();\n")),Object(o.b)("h2",{id:"22-\u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8"},"2.2 \u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var entityRepository = Db.GetRepository<TEntity>();\n")),Object(o.b)("h2",{id:"23-\u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8"},"2.3 \u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var locatorRepository = Db.GetRepository<TEntity, TDbContextLocator>();\n")),Object(o.b)("h2",{id:"24-\u83b7\u53d6-sql-\u4ed3\u50a8"},"2.4 \u83b7\u53d6 ",Object(o.b)("inlineCode",{parentName:"h2"},"Sql")," \u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var sqlRepository = Db.GetSqlRepository();\n")),Object(o.b)("h2",{id:"25-\u83b7\u53d6-sql-\u5b9a\u4f4d\u5668\u4ed3\u50a8"},"2.5 \u83b7\u53d6 ",Object(o.b)("inlineCode",{parentName:"h2"},"Sql")," \u5b9a\u4f4d\u5668\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var sqlLocatorRepository = Db.GetSqlRepository<TDbContextLocator>();\n")),Object(o.b)("h2",{id:"26-\u83b7\u53d6-sql-\u4ee3\u7406\u5bf9\u8c61"},"2.6 \u83b7\u53d6 ",Object(o.b)("inlineCode",{parentName:"h2"},"Sql")," \u4ee3\u7406\u5bf9\u8c61"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var sqlProxy= Db.GetSqlProxy<TSqlDispatchProxy>();\n")),Object(o.b)("h2",{id:"27-\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.7 \u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var dbContext = Db.GetDbContext();\n")),Object(o.b)("h2",{id:"27-\u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.7 \u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var locatorDbContext = Db.GetDbContext<TDbContextLocator>();\nvar locatorDbContext2 = Db.GetDbContext(typeof(TDbContextLocator));\n")),Object(o.b)("h2",{id:"28-\u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.8 \u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var dbContext = Db.GetNewDbContext();\n")),Object(o.b)("h2",{id:"29-\u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.9 \u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"var locatorDbContext = Db.GetNewDbContext<TDbContextLocator>();\nvar locatorDbContext2 = Db.GetNewDbContext(typeof(TDbContextLocator));\n")))}s.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(21),a=n(190);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},190:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return n?a.a.createElement(f,l(l({ref:t},i),{},{components:n})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(189);n(55);function c(){const[e,t]=Object(r.useState)(!1);return a.a.createElement("div",{className:"furion-join-group"},e&&a.a.createElement("img",{src:Object(o.a)("img/dotnetchina2.jpg")}),a.a.createElement("button",{onClick:()=>t(!e)},"\u52a0\u5165QQ\u4ea4\u6d41\u7fa4"))}}}]);