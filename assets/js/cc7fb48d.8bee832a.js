"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[920],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1333:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:2,title:"Using this Guide"},l=void 0,u={unversionedId:"macros/using-this-guide",id:"macros/using-this-guide",title:"Using this Guide",description:"Macros are divided into the different categories in the sidebar. The documentation pages use this general template. However, there may be some unique topics that deviate from this layout.",source:"@site/docs/macros/using-this-guide.md",sourceDirName:"macros",slug:"/macros/using-this-guide",permalink:"/user-guide/docs/macros/using-this-guide",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/using-this-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Using this Guide"},sidebar:"macrosSidebar",previous:{title:"Intro",permalink:"/user-guide/docs/macros/macros-intro"},next:{title:"Docs Template",permalink:"/user-guide/docs/macros/macros-template"}},c=[{value:"Macro Name",id:"macro-name",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Syntax",id:"syntax",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[],level:2},{value:"Example(s)",id:"examples",children:[],level:2},{value:"Outcome",id:"outcome",children:[],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Macros are divided into the different categories in the sidebar. The documentation pages use this general template. However, there may be some unique topics that deviate from this layout."),(0,a.kt)("p",null,"Some sort of (Usage: Required/suggested) colored note at the top? Or, anything listed in this guide should be used in the respective programs."),(0,a.kt)("h2",{id:"macro-name"},"Macro Name"),(0,a.kt)("p",null,"Subheader shows compatible studies and the creator (with mail link)."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Description of the macro's purpose, summary of what it does, etc..."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"Default way to call the macro without any optional parameters."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"Lists all mandatory parameters with a short description."),(0,a.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,a.kt)("p",null,"Lists all optional parameters with a short description. In order to call these, you must set the optional parameter to an argument (e.g., optParam = arg1)"),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"Example will default to show the best way to fully utilize the macro\u2019s features (e.g., code snippets in addition to the macro call). Assume running the project's init is always a prerequisite to calling a macro. Other ambiguous prerequisites will be part of the example."),(0,a.kt)("h2",{id:"outcome"},"Outcome"),(0,a.kt)("p",null,"Lists all outcomes of calling the macro that the programmer should utilize (such as macro variables or a log report). Outcomes with a corresponding screenshot will always be listed last."))}m.isMDXComponent=!0}}]);