"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[488],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1422:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},p="%suppAdd",d={unversionedId:"macros/macros-adam/suppadd",id:"macros/macros-adam/suppadd",title:"%suppAdd",description:"Created by Emily Johnson",source:"@site/docs/macros/macros-adam/suppadd.md",sourceDirName:"macros/macros-adam",slug:"/macros/macros-adam/suppadd",permalink:"/user-guide/docs/macros/macros-adam/suppadd",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-adam/suppadd.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"macrosSidebar",previous:{title:"%postadam",permalink:"/user-guide/docs/macros/macros-adam/postadam"},next:{title:"%pagebrkchk",permalink:"/user-guide/docs/macros/macros-tfl/pagebrkchk"}},c=[{value:"\u2705 QC Version: %qc_suppAdd",id:"-qc-version-qc_suppadd",children:[],level:4},{value:"Description",id:"description",children:[],level:2},{value:"Defintion",id:"defintion",children:[],level:2},{value:"Required Parameters",id:"required-parameters",children:[{value:"<em>domain</em>",id:"domain",children:[],level:3}],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],l={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"suppadd"},"%suppAdd"),(0,o.kt)("p",null,"Created by ",(0,o.kt)("a",{parentName:"p",href:"mailto:emily.johnson@emanatebiostats.com?subject=User%20Guide:%20suppAdd"},(0,o.kt)("strong",{parentName:"a"},"Emily Johnson"))),(0,o.kt)("h4",{id:"-qc-version-qc_suppadd"},"\u2705 QC Version: %qc_suppAdd"),(0,o.kt)("p",null,"Created by ",(0,o.kt)("a",{parentName:"p",href:"mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20qc_suppAdd"},(0,o.kt)("strong",{parentName:"a"},"Jonathan Amato"))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"suppAdd")," merges the transposed supplemental dataset to its parent domain."),(0,o.kt)("h2",{id:"defintion"},"Defintion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%macro suppAdd(domain);\n")),(0,o.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,o.kt)("h3",{id:"domain"},(0,o.kt)("em",{parentName:"h3"},"domain")),(0,o.kt)("p",null,"Parent domain name"),(0,o.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%suppAdd(dm);\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%qc_suppAdd(vs);\n")))}u.isMDXComponent=!0}}]);