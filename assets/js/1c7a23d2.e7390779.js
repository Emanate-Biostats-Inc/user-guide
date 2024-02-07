"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[181],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},s),{},{components:r})):a.createElement(h,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4891:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:2},c="%proc_compare",p={unversionedId:"macros/macros-validation/proc-compare",id:"macros/macros-validation/proc-compare",title:"%proc_compare",description:"Created by **Jonathan Amato**_",source:"@site/docs/macros/macros-validation/proc-compare.md",sourceDirName:"macros/macros-validation",slug:"/macros/macros-validation/proc-compare",permalink:"/user-guide/docs/macros/macros-validation/proc-compare",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/macros/macros-validation/proc-compare.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"macrosSidebar",previous:{title:"%compareNobs",permalink:"/user-guide/docs/macros/macros-validation/comparenobs"},next:{title:"%batch_qc",permalink:"/user-guide/docs/macros/macros-lead/batch_qc"}},s=[{value:"Description",id:"description",children:[],level:2},{value:"Defintion",id:"defintion",children:[],level:2},{value:"Required Parameters",id:"required-parameters",children:[{value:"<em>base</em>",id:"base",children:[],level:3},{value:"<em>compare</em>",id:"compare",children:[],level:3}],level:2},{value:"Additional Required Parameters for TFLs",id:"additional-required-parameters-for-tfls",children:[{value:"<em>part</em> (only needed if there are multiple parts)",id:"part-only-needed-if-there-are-multiple-parts",children:[],level:3},{value:"<em>var</em>",id:"var",children:[],level:3},{value:"<em>with</em>",id:"with",children:[],level:3}],level:2},{value:"Optional Parameters",id:"optional-parameters",children:[{value:"<em>base_overwrite</em>",id:"base_overwrite",children:[],level:3},{value:"<em>criterion</em>",id:"criterion",children:[],level:3},{value:"<em>options</em>",id:"options",children:[],level:3},{value:"<em>id</em>",id:"id",children:[],level:3},{value:"<em>explanation</em>",id:"explanation",children:[],level:3},{value:"<em>debug</em>",id:"debug",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Outcome",id:"outcome",children:[{value:"ProjectFolder/Output/QC/Tracker/qc_tacker",id:"projectfolderoutputqctrackerqc_tacker",children:[],level:3},{value:"ProjectFolder/Output/QC/Archive",id:"projectfolderoutputqcarchive",children:[],level:3},{value:"ProjectFolder/Output/QC/Comparisons",id:"projectfolderoutputqccomparisons",children:[],level:3}],level:2},{value:"Notes",id:"notes",children:[],level:2}],m={toc:s};function u(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proc_compare"},"%proc_compare"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Created by ",(0,o.kt)("a",{parentName:"em",href:"mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20proc_compare"},(0,o.kt)("strong",{parentName:"a"},"Jonathan Amato")))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"proc_compare")," serves a few different purposes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"manages the handling of all program QC documentation"),(0,o.kt)("li",{parentName:"ul"},"automatically updates a SAS dataset and excel file that provides all current information about program QC status"),(0,o.kt)("li",{parentName:"ul"},"automatic snapshots of QC documentation and overall QC file for each program and day")),(0,o.kt)("h2",{id:"defintion"},"Defintion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},'%macro proc_compare(\n  part = null,\n  base = null,\n  base_overwrite = null,\n  compare = null,\n  var = null,\n  with = null,\n  criterion = null,\n  options = listall,\n  id = null,\n  explanation = "",\n  debug = 0\n);\n')),(0,o.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,o.kt)("h3",{id:"base"},(0,o.kt)("em",{parentName:"h3"},"base")),(0,o.kt)("p",null,"This is the same value you would use in a normal proc compare."),(0,o.kt)("h3",{id:"compare"},(0,o.kt)("em",{parentName:"h3"},"compare")),(0,o.kt)("p",null,"This is the same value you would use in a normal proc compare."),(0,o.kt)("h2",{id:"additional-required-parameters-for-tfls"},"Additional Required Parameters for TFLs"),(0,o.kt)("h3",{id:"part-only-needed-if-there-are-multiple-parts"},(0,o.kt)("em",{parentName:"h3"},"part")," (only needed if there are multiple parts)"),(0,o.kt)("p",null,"Set to 1 for the first call/part, 2 for the next, etc. See Example 3 below."),(0,o.kt)("h3",{id:"var"},(0,o.kt)("em",{parentName:"h3"},"var")),(0,o.kt)("p",null,"This is the same value you would use in a normal proc compare."),(0,o.kt)("h3",{id:"with"},(0,o.kt)("em",{parentName:"h3"},"with")),(0,o.kt)("p",null,"This is the same value you would use in a normal proc compare."),(0,o.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,o.kt)("h3",{id:"base_overwrite"},(0,o.kt)("em",{parentName:"h3"},"base_overwrite")),(0,o.kt)("p",null,"This allows you to compare with a custom dataset for SDTM and ADaM if applicable."),(0,o.kt)("h3",{id:"criterion"},(0,o.kt)("em",{parentName:"h3"},"criterion")),(0,o.kt)("p",null,"This is the same value you would use in a normal proc compare."),(0,o.kt)("h3",{id:"options"},(0,o.kt)("em",{parentName:"h3"},"options")),(0,o.kt)("p",null,'This is the same value you would use in a normal proc compare. Defaults to "listall"'),(0,o.kt)("h3",{id:"id"},(0,o.kt)("em",{parentName:"h3"},"id")),(0,o.kt)("p",null,"This is the same value you would use in a normal proc compare."),(0,o.kt)("h3",{id:"explanation"},(0,o.kt)("em",{parentName:"h3"},"explanation")),(0,o.kt)("p",null,'If applicable, set to "here is my explanation describing why there is a mismatch that isn\'t being corrected"'),(0,o.kt)("h3",{id:"debug"},(0,o.kt)("em",{parentName:"h3"},"debug")),(0,o.kt)("p",null,"Set to 1 if you want ",(0,o.kt)("strong",{parentName:"p"},"proc_compare")," to preserve all datasets created in the macro for debugging purposes."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SDTM/ADaM")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%proc_compare(\n  base    = sdtm.dm,\n  compare = qc_dm\n);\n\n** if supp **;\n%proc_compare(\n  base    = sdtm.suppdm,\n  compare = qc_suppdm\n);\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Table/Figure/Listing")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%proc_compare(\n  base    = final,\n  compare = qc_final,\n  var     = paramn ord text col1 col2 col3,\n  with    = paramn ord stat trt1 trt2 trt3\n);\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Listing with multiple parts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},"%primaryData;\n\n%proc_compare(\n  part    = 1,\n  base    = primary1,\n  compare = qc_final,\n  var     = &comparevars1,\n  with    = subjid trt01a sudstxt suendat years cigarettes cigars\n);\n\n%proc_compare(\n  part    = 2,\n  base    = primary2,\n  compare = qc_final,\n  var     = &comparevars2,\n  with    = subjid trt01a day six prob1 prob2 sub\n);\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Dataset with temporary subset comparison")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},'data lb_subset;\n  set sdtm.lb;\n  where lbtestcd = "URATE";\nrun;\n\n%proc_compare(\n  base           = sdtm.lb,\n  base_overwrite = lb_subset,\n  compare        = qc_lb,\n  explanation    = "Only comparing with LBTESTCD \'URATE\' for Topline delivery 9/1"\n);\n')),(0,o.kt)("h2",{id:"outcome"},"Outcome"),(0,o.kt)("h3",{id:"projectfolderoutputqctrackerqc_tacker"},"ProjectFolder/Output/QC/Tracker/qc_tacker"),(0,o.kt)("p",null,"SAS dataset that keeps track of all the relevant QC information across all programs"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(4961).Z})),(0,o.kt)("h3",{id:"projectfolderoutputqcarchive"},"ProjectFolder/Output/QC/Archive"),(0,o.kt)("p",null,"Directory containing excel backups of qc_tracker each new date a QC program is run"),(0,o.kt)("h3",{id:"projectfolderoutputqccomparisons"},"ProjectFolder/Output/QC/Comparisons"),(0,o.kt)("p",null,"Directory containing all QC docs in RTF format"),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This macro currently ignores the following and treats them as a clean compare",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Dataset labels differ"),(0,o.kt)("li",{parentName:"ul"},"Variable has different length"),(0,o.kt)("li",{parentName:"ul"},"Variable has different label"),(0,o.kt)("li",{parentName:"ul"},"Variable has different informat (TFL only)"),(0,o.kt)("li",{parentName:"ul"},"Variable has different format (TFL only)")))))}u.isMDXComponent=!0},4961:function(e,t,r){t.Z=r.p+"assets/images/qc_report-469cf9f0a272478121c4f7158a0c1232.png"}}]);