"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[597],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),d=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(o.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,h=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return t?n.createElement(h,l(l({ref:r},p),{},{components:t})):n.createElement(h,l({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9484:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],c={sidebar_position:2},o="%batch",d={unversionedId:"macros/macros-general/batch",id:"macros/macros-general/batch",title:"%batch",description:"Created by **Kris Ilano**",source:"@site/docs/macros/macros-general/batch.md",sourceDirName:"macros/macros-general",slug:"/macros/macros-general/batch",permalink:"/user-guide/docs/macros/macros-general/batch",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-general/batch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"macrosSidebar",previous:{title:"%setup",permalink:"/user-guide/docs/macros/macros-general/setup"},next:{title:"%style_guide_checks",permalink:"/user-guide/docs/macros/macros-general/style-guide-checks"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Defintion",id:"defintion",children:[],level:2},{value:"Required Parameters",id:"required-parameters",children:[{value:"<em>dir</em>",id:"dir",children:[],level:3}],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[{value:"<em>batch</em>",id:"batch-1",children:[],level:3},{value:"<em>type</em>",id:"type",children:[],level:3},{value:"<em>inc</em>",id:"inc",children:[],level:3},{value:"<em>exc</em>",id:"exc",children:[],level:3},{value:"<em>depend1</em>",id:"depend1",children:[],level:3},{value:"<em>depend2</em>",id:"depend2",children:[],level:3},{value:"<em>depend3</em>",id:"depend3",children:[],level:3},{value:"<em>depend4</em>",id:"depend4",children:[],level:3},{value:"<em>depend5</em>",id:"depend5",children:[],level:3},{value:"<em>QC</em>",id:"qc",children:[],level:3},{value:"<em>plog</em>",id:"plog",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Outcome",id:"outcome",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2}],m={toc:p};function s(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"batch"},"%batch"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Created by ",(0,i.kt)("a",{parentName:"em",href:"mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%20batch"},(0,i.kt)("strong",{parentName:"a"},"Kris Ilano")))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"batch")," runs all programs from a specified folder."),(0,i.kt)("h2",{id:"defintion"},"Defintion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},"%macro batch(\n  dir,\n  batch=XXX,\n  type=ALL,\n  inc=XXX,\n  exc=XXX,\n  depend1=XXX,\n  depend2=XXX,\n  depend3=XXX,\n  depend4=XXX,\n  depend5=XXX,\n  QC=XXX,\n  plog=XXX\n);\n")),(0,i.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,i.kt)("h3",{id:"dir"},(0,i.kt)("em",{parentName:"h3"},"dir")),(0,i.kt)("p",null,"Specified folder to run programs."),(0,i.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,i.kt)("h3",{id:"batch-1"},(0,i.kt)("em",{parentName:"h3"},"batch")),(0,i.kt)("h3",{id:"type"},(0,i.kt)("em",{parentName:"h3"},"type")),(0,i.kt)("h3",{id:"inc"},(0,i.kt)("em",{parentName:"h3"},"inc")),(0,i.kt)("h3",{id:"exc"},(0,i.kt)("em",{parentName:"h3"},"exc")),(0,i.kt)("h3",{id:"depend1"},(0,i.kt)("em",{parentName:"h3"},"depend1")),(0,i.kt)("h3",{id:"depend2"},(0,i.kt)("em",{parentName:"h3"},"depend2")),(0,i.kt)("h3",{id:"depend3"},(0,i.kt)("em",{parentName:"h3"},"depend3")),(0,i.kt)("h3",{id:"depend4"},(0,i.kt)("em",{parentName:"h3"},"depend4")),(0,i.kt)("h3",{id:"depend5"},(0,i.kt)("em",{parentName:"h3"},"depend5")),(0,i.kt)("h3",{id:"qc"},(0,i.kt)("em",{parentName:"h3"},"QC")),(0,i.kt)("h3",{id:"plog"},(0,i.kt)("em",{parentName:"h3"},"plog")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"ADAE QC Program"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'%batch(&projdrv\\programs\\ADAM, inc="ADAE", QC=Y);\n')),(0,i.kt)("p",null,"Batch program - run all SDTMs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},"%batch(&projdrv\\programs\\SDTM, batch=ON);\n")),(0,i.kt)("p",null,"Batch program - run certain ADaMs, with ADSL and ADAE first"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'%batch(&projdrv\\programs\\ADaM,batch=ON, depend1=adsl, depend2=adae, inc="ADSL" "ADAE" "ADEFF" "ADLB" "ADGOUT");\n')),(0,i.kt)("h2",{id:"outcome"},"Outcome"),(0,i.kt)("h2",{id:"notes"},"Notes"))}s.isMDXComponent=!0}}]);