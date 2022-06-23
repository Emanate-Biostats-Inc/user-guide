"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[227],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(y,i(i({ref:r},c),{},{components:t})):a.createElement(y,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4200:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},p="%primaryData",l={unversionedId:"macros/macros-validation/listings/primarydata",id:"macros/macros-validation/listings/primarydata",title:"%primaryData",description:"Created by",source:"@site/docs/macros/macros-validation/listings/primarydata.md",sourceDirName:"macros/macros-validation/listings",slug:"/macros/macros-validation/listings/primarydata",permalink:"/user-guide/docs/macros/macros-validation/listings/primarydata",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-validation/listings/primarydata.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"macrosSidebar",previous:{title:"%compareNobs",permalink:"/user-guide/docs/macros/macros-validation/comparenobs"},next:{title:"%sdtm_pre",permalink:"/user-guide/docs/macros/macros-sdtm/sdtm-pre"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Syntax",id:"syntax",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Outcome",id:"outcome",children:[{value:"primaryN (up to N parts)",id:"primaryn-up-to-n-parts",children:[],level:3},{value:"&amp;compareVarsN (up to N parts)",id:"comparevarsn-up-to-n-parts",children:[],level:3},{value:"primaryData log report",id:"primarydata-log-report",children:[],level:3}],level:2}],m={toc:c};function u(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"primarydata"},"%primaryData"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Created by ")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"primaryData creates comparison datasets and variables to be used in ",(0,o.kt)("inlineCode",{parentName:"p"},"proc compare"),". These dynamically update if the primary programmer changes their datasets or variables."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%primaryData;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},'%batch(P:\\Sponsor\\Project\\Biostats\\Programs\\TLFs, inc="l-listing");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%primaryData;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"proc compare base = primary1 compare = qc_part1 listobs;\n    var &compareVars1;\n    with /* my vars */;\nrun;\n\nproc compare base = primary2 compare = qc_part2 listobs;\n    var &compareVars2;\n    with /* my vars */;\nrun;\n")),(0,o.kt)("h2",{id:"outcome"},"Outcome"),(0,o.kt)("h3",{id:"primaryn-up-to-n-parts"},"primaryN (up to N parts)"),(0,o.kt)("p",null,"With N number of output parts, primaryData will create datasets to be used in the proc compare."),(0,o.kt)("h3",{id:"comparevarsn-up-to-n-parts"},"&compareVarsN (up to N parts)"),(0,o.kt)("p",null,"With N number of output parts, primaryData will create macro variables to store necessary compare variables."),(0,o.kt)("h3",{id:"primarydata-log-report"},"primaryData log report"),(0,o.kt)("p",null,"Log report shows the created datasets and compare variables. The log will also notify you if any of the primary variables are numeric. In this sample, the primary rtf output has two parts."))}u.isMDXComponent=!0}}]);