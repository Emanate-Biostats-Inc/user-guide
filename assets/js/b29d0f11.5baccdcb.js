"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[167],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||c;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6302:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),i=["components"],o={sidebar_position:1},l="%batch_qc",s={unversionedId:"macros/macros-lead/batch_qc",id:"macros/macros-lead/batch_qc",title:"%batch_qc",description:"Created by **Kris Ilano**",source:"@site/docs/macros/macros-lead/batch_qc.md",sourceDirName:"macros/macros-lead",slug:"/macros/macros-lead/batch_qc",permalink:"/user-guide/docs/macros/macros-lead/batch_qc",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-lead/batch_qc.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"macrosSidebar",previous:{title:"%proc_compare",permalink:"/user-guide/docs/macros/macros-validation/proc-compare"}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Defintion",id:"defintion",children:[],level:2},{value:"Required Parameters",id:"required-parameters",children:[{value:"<em>qc_dir</em>",id:"qc_dir",children:[],level:3}],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[{value:"<em>qc_batch</em>",id:"qc_batch",children:[],level:3},{value:"<em>qc_type</em>",id:"qc_type",children:[],level:3},{value:"<em>qc_inc</em>",id:"qc_inc",children:[],level:3},{value:"<em>qc_exc</em>",id:"qc_exc",children:[],level:3},{value:"<em>qc_validato</em>",id:"qc_validato",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Outcome",id:"outcome",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2}],m={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"batch_qc"},"%batch_qc"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Created by ",(0,c.kt)("a",{parentName:"em",href:"mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%20batch"},(0,c.kt)("strong",{parentName:"a"},"Kris Ilano")))),(0,c.kt)("h2",{id:"description"},"Description"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"batch")," runs all programs from a specified folder."),(0,c.kt)("h2",{id:"defintion"},"Defintion"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sas"},"%macro batch_qc(\n  qc_dir,\n  qc_batch=XXX,\n  qc_type=XXX,\n  qc_inc=XXX,\n  qc_exc=XXX,\n  qc_validator=XXX\n  );\n")),(0,c.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,c.kt)("h3",{id:"qc_dir"},(0,c.kt)("em",{parentName:"h3"},"qc_dir")),(0,c.kt)("p",null,"Specified folder to run programs."),(0,c.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,c.kt)("h3",{id:"qc_batch"},(0,c.kt)("em",{parentName:"h3"},"qc_batch")),(0,c.kt)("h3",{id:"qc_type"},(0,c.kt)("em",{parentName:"h3"},"qc_type")),(0,c.kt)("h3",{id:"qc_inc"},(0,c.kt)("em",{parentName:"h3"},"qc_inc")),(0,c.kt)("h3",{id:"qc_exc"},(0,c.kt)("em",{parentName:"h3"},"qc_exc")),(0,c.kt)("h3",{id:"qc_validato"},(0,c.kt)("em",{parentName:"h3"},"qc_validato")),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("p",null,"Run all ADaM QC programs"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sas"},"%batch_qc(&projdrv\\programs\\QC, qc_batch=ON, qc_type=ADAM);\n")),(0,c.kt)("h2",{id:"outcome"},"Outcome"),(0,c.kt)("h2",{id:"notes"},"Notes"))}p.isMDXComponent=!0}}]);