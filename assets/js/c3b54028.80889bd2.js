"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[748],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8910:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:4},s="%nobs",l={unversionedId:"macros/macros-general/nobs",id:"macros/macros-general/nobs",title:"%nobs",description:"Description",source:"@site/docs/macros/macros-general/nobs.md",sourceDirName:"macros/macros-general",slug:"/macros/macros-general/nobs",permalink:"/user-guide/docs/macros/macros-general/nobs",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-general/nobs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"macrosSidebar",previous:{title:"%style_guide_checks",permalink:"/user-guide/docs/macros/macros-general/style-guide-checks"},next:{title:"%progcheck",permalink:"/user-guide/docs/macros/macros-general/progcheck"}},u=[{value:"Description",id:"description",children:[],level:2},{value:"Defintion",id:"defintion",children:[],level:2},{value:"Required Parameters",id:"required-parameters",children:[{value:"<em>dataset</em>",id:"dataset",children:[],level:3}],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Outcome",id:"outcome",children:[],level:2}],p={toc:u};function m(e){var r=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,c,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nobs"},"%nobs"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"nobs")," prints the number of observations for the given dataset."),(0,a.kt)("h2",{id:"defintion"},"Defintion"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sas"},"%macro nobs(dataset);\n")),(0,a.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,a.kt)("h3",{id:"dataset"},(0,a.kt)("em",{parentName:"h3"},"dataset")),(0,a.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sas"},"%nobs(sdtm.vs);\n")),(0,a.kt)("h2",{id:"outcome"},"Outcome"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9755).Z})))}m.isMDXComponent=!0},9755:function(e,r,t){r.Z=t.p+"assets/images/nobs-b564f42e8c9d32ff2f1500dc2e854856.png"}}]);