"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[520],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8570:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:4,title:"Listing"},l=void 0,c={unversionedId:"programming/templates/listing",id:"programming/templates/listing",title:"Listing",description:"Primary",source:"@site/docs/programming/templates/listing.md",sourceDirName:"programming/templates",slug:"/programming/templates/listing",permalink:"/user-guide/docs/programming/templates/listing",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/programming/templates/listing.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Listing"},sidebar:"programmingSidebar",previous:{title:"Table",permalink:"/user-guide/docs/programming/templates/table"},next:{title:"Init",permalink:"/user-guide/docs/programming/set-up/init"}},p=[{value:"Primary",id:"primary",children:[{value:"Template",id:"template",children:[],level:3},{value:"Documentation Links",id:"documentation-links",children:[],level:3}],level:2},{value:"Validator",id:"validator",children:[{value:"Template",id:"template-1",children:[],level:3},{value:"Documentation Links",id:"documentation-links-1",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"primary"},"Primary"),(0,i.kt)("h3",{id:"template"},"Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'/****************************************************************************************\nProgram Name    : <listing>.sas\nPurpose         : Create <listing>\nClient          : <Client>\nProject         : <Project>\nProgrammer      : <Programmer>\nVersion/Date    : Version/yyyy-dd-mm\n\nSAS Version     : 9.4\n\nComments        :\n\nModifications   :\n*****************************************************************************************/\n\n%let userdrv = C:\\Users\\&sysuserid\\Emanate Biostats, Inc\\EB - Projects - Documents;\n%include "&userdrv\\<Client>\\<Project>\\Programs\\Set-up\\init.sas";\n%setup(<listing>);\n\n/*\n\n    program code\n\n*/\n\nods listing close;\nods excel file = "&outpathx" &optionsx;\n\n    footnote1 "Abbreviations: <abbreviations>";\n    footnote3 "~{super [1]} Time (days) relative to date of first dose of study drug";\n\n    proc report data = final missing nowindows split = "@" style=[protectspecialchars=off] style(report)=[bordertopwidth=1.5];\n        columns var1 var2 var3;\n\n        define var1             /order   style=[just=l cellwidth=0.90 in] "Var 1 Label";\n        define var2             /order   style=[just=l cellwidth=0.80 in] "Var 2 Label";\n        define var3             /order   style=[just=c cellwidth=0.65 in] "Var 3 Label";\n\n    run;\n\nods excel close;\nods listing;\n\nods listing close;\nods tagsets.rtf file = "&outpath" style=rtf_tnr_9pt ;\n\n%macro procrpt;\n\n    title3 "&ttlnum";\n    title4 "&ttldesc";\n    title5 "&ttlpop";\n\n    footnote1 "Abbreviations: <abbreviations>";\n    footnote3 "~{super [1]} Time (days) relative to date of first dose of study drug";\n    footnote5 &fnpath;\n\n    proc report data = final missing nowindows split = "@" style=[protectspecialchars=off] style(report)=[bordertopwidth=1.5] rtfbreak;;\n        columns sortvar1 var1 sortvar2 var2 var3;\n\n        define sortvar1         /order   order=internal noprint;\n        define var1             /order   style=[just=l cellwidth=0.90 in] "Var 1 Label";\n        define sortvar2         /order   order=internal noprint;\n        define var2             /order   style=[just=l cellwidth=0.80 in] "Var 2 Label";\n        define var3             /order   style=[just=c cellwidth=0.65 in] "Var 3 Label";\n\n        compute before subjid;\n        line put \' \';\n        endcomp;\n    run;\n%mend procrpt;\n%rtfbreak;\n\nods tagsets.rtf close;\nods listing;\n\n%pagebrkchk;\n\n%progcheck;\n')),(0,i.kt)("h3",{id:"documentation-links"},"Documentation Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/programming/set-up/init"},(0,i.kt)("strong",{parentName:"a"},"%init"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-general/setup"},(0,i.kt)("strong",{parentName:"a"},"%setup"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-tfl/rtfbreak"},(0,i.kt)("strong",{parentName:"a"},"%rtfbreak"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-tfl/pagebrkchk"},(0,i.kt)("strong",{parentName:"a"},"%pagebrkchk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-general/progcheck"},(0,i.kt)("strong",{parentName:"a"},"%progcheck")))),(0,i.kt)("h2",{id:"validator"},"Validator"),(0,i.kt)("h3",{id:"template-1"},"Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'/****************************************************************************************\nProgram Name    : <listing>-<initials>.sas\nPurpose         : QC <listing>\nClient          : <Client>\nProject         : <Project>\nProgrammer      : <Programmer>\nVersion/Date    : Version/yyyy-dd-mm\n\nSAS Version     : 9.4\n\nComments        :\n\nModifications   :\n*****************************************************************************************/\n\n%let userdrv = C:\\Users\\&sysuserid\\Emanate Biostats, Inc\\EB - Projects - Documents;\n%include "&userdrv\\<Client>\\<Project>\\Programs\\Set-up\\init.sas";\n%batch(&projdrv\\programs\\TFLs, inc="<listing>", QC=Y);\n\n/*\n\n    program code\n\n*/\n\n%primaryData;\n\n%proc_compare(\n    base    = primary1,\n    compare = qc_final,\n    var     = &compareVars1,\n    with    = subjid trt date result1 result2\n);\n\n%progcheck;\n')),(0,i.kt)("h3",{id:"documentation-links-1"},"Documentation Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/programming/set-up/init"},(0,i.kt)("strong",{parentName:"a"},"%init"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-general/batch"},(0,i.kt)("strong",{parentName:"a"},"%batch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-tfl/primarydata"},(0,i.kt)("strong",{parentName:"a"},"%primaryData"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-validation/proc-compare"},(0,i.kt)("strong",{parentName:"a"},"%proc_compare"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/user-guide/docs/macros/macros-general/progcheck"},(0,i.kt)("strong",{parentName:"a"},"%progcheck")))))}u.isMDXComponent=!0}}]);