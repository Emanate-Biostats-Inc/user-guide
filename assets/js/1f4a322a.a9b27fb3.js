"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[793],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(a),u=n,k=p["".concat(c,".").concat(u)]||p[u]||l[u]||o;return a?r.createElement(k,s(s({ref:t},d),{},{components:a})):r.createElement(k,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4322:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],i={sidebar_position:1},c="%compareNobs",m={unversionedId:"macros/macros-validation/comparenobs",id:"macros/macros-validation/comparenobs",title:"%compareNobs",description:"Created by **Jonathan Amato**",source:"@site/docs/macros/macros-validation/comparenobs.md",sourceDirName:"macros/macros-validation",slug:"/macros/macros-validation/comparenobs",permalink:"/user-guide/docs/macros/macros-validation/comparenobs",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-validation/comparenobs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"macrosSidebar",previous:{title:"Docs Template",permalink:"/user-guide/docs/macros/macros-template"},next:{title:"%primaryData",permalink:"/user-guide/docs/macros/macros-validation/listings/primarydata"}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Syntax",id:"syntax",children:[],level:2},{value:"Required Parameters",id:"required-parameters",children:[{value:"<em>dataset1</em>",id:"dataset1",children:[],level:3},{value:"<em>dataset2</em>",id:"dataset2",children:[],level:3},{value:"<em>vars</em>",id:"vars",children:[],level:3}],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[{value:"<em>keep</em>",id:"keep",children:[],level:3},{value:"<em>debug</em>",id:"debug",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Outcome",id:"outcome",children:[{value:"cnobs datasets",id:"cnobs-datasets",children:[],level:3}],level:2}],l={toc:d};function p(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comparenobs"},"%compareNobs"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Created by ",(0,o.kt)("a",{parentName:"em",href:"mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20compareNobs"},(0,o.kt)("strong",{parentName:"a"},"Jonathan Amato")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"compareNobs creates a dataset that compares mismatching observation counts between two datasets by the specified variables. It also creates ",(0,o.kt)("em",{parentName:"p"},"comparenobs_dataset1")," and ",(0,o.kt)("em",{parentName:"p"},"comparenobs_dataset2")," datasets that are subsets of the original datasets (based on mismatches). This macro should be used whenever there is a mismatch on observation counts with the production programmer. It is not meant to be left in your code, so always call this macro while inside a comment block."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"/*\n%macro compareNobs(dataset1, dataset2, vars, keep=_all_, debug=0);\n*/\n")),(0,o.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,o.kt)("h3",{id:"dataset1"},(0,o.kt)("em",{parentName:"h3"},"dataset1")),(0,o.kt)("p",null,"Specifies the name of the first dataset being compared. Arguments can be from libraries other than work (e.g., adam.adlb)."),(0,o.kt)("h3",{id:"dataset2"},(0,o.kt)("em",{parentName:"h3"},"dataset2")),(0,o.kt)("p",null,"Specifies the name of the second dataset being compared."),(0,o.kt)("h3",{id:"vars"},(0,o.kt)("em",{parentName:"h3"},"vars")),(0,o.kt)("p",null,"Specifies the name of the variables being compared"),(0,o.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,o.kt)("h3",{id:"keep"},(0,o.kt)("em",{parentName:"h3"},"keep")),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"debug"},(0,o.kt)("em",{parentName:"h3"},"debug")),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"/*\n%compareNobs(prod_final, qc_final, subjid);\n*/\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"/*\n%compareNobs(adam.adlb, qc_final, usubjid paramn paramcd);\n*/\n")),(0,o.kt)("h2",{id:"outcome"},"Outcome"),(0,o.kt)("h3",{id:"cnobs-datasets"},"cnobs datasets"),(0,o.kt)("p",null,'TODO 1, 2, 3 "comparenobs_datasets"'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7177).Z})))}p.isMDXComponent=!0},7177:function(e,t){t.Z="data:image/png;base64,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"}}]);