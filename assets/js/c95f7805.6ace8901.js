"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[235],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7539:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},l="%postadam",c={unversionedId:"macros/macros-adam/postadam",id:"macros/macros-adam/postadam",title:"%postadam",description:"Created by **Kris Ilano**",source:"@site/docs/macros/macros-adam/postadam.md",sourceDirName:"macros/macros-adam",slug:"/macros/macros-adam/postadam",permalink:"/user-guide/docs/macros/macros-adam/postadam",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-adam/postadam.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"macrosSidebar",previous:{title:"%preadam",permalink:"/user-guide/docs/macros/macros-adam/preadam"},next:{title:"%suppAdd",permalink:"/user-guide/docs/macros/macros-adam/suppadd"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Defintion",id:"defintion",children:[],level:2},{value:"Required Parameters",id:"required-parameters",children:[],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[{value:"<em>p21</em>",id:"p21",children:[],level:3},{value:"<em>p21_excl</em>",id:"p21_excl",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Outcome",id:"outcome",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2}],m={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postadam"},"%postadam"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Created by ",(0,o.kt)("a",{parentName:"em",href:"mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%20postadam"},(0,o.kt)("strong",{parentName:"a"},"Kris Ilano")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"postadam")," does the following tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creates ADaM dataset"),(0,o.kt)("li",{parentName:"ul"},"sorts based on KEYS column in Domains tab of specs"),(0,o.kt)("li",{parentName:"ul"},"creates xpt files"),(0,o.kt)("li",{parentName:"ul"},"other post processing")),(0,o.kt)("h2",{id:"defintion"},"Defintion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},'%macro postadam(\n    p21=YES,\n    p21_excl=""\n);\n')),(0,o.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,o.kt)("h3",{id:"p21"},(0,o.kt)("em",{parentName:"h3"},"p21")),(0,o.kt)("p",null,"Can set to N to turn off P21 checks."),(0,o.kt)("h3",{id:"p21_excl"},(0,o.kt)("em",{parentName:"h3"},"p21_excl")),(0,o.kt)("p",null,"Exclude certain P21 ID codes"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%postadam;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%postadam(P21=N);\n")),(0,o.kt)("h2",{id:"outcome"},"Outcome"),(0,o.kt)("h2",{id:"notes"},"Notes"))}u.isMDXComponent=!0}}]);