"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[520],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8570:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:4,title:"Listing"},l=void 0,c={unversionedId:"programming/templates/listing",id:"programming/templates/listing",title:"Listing",description:"Primary",source:"@site/docs/programming/templates/listing.md",sourceDirName:"programming/templates",slug:"/programming/templates/listing",permalink:"/user-guide/docs/programming/templates/listing",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/programming/templates/listing.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Listing"},sidebar:"programmingSidebar",previous:{title:"Table",permalink:"/user-guide/docs/programming/templates/table"},next:{title:"Init",permalink:"/user-guide/docs/programming/set-up/init"}},p=[{value:"Primary",id:"primary",children:[{value:"Template",id:"template",children:[],level:3}],level:2},{value:"Validator",id:"validator",children:[{value:"Template",id:"template-1",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"primary"},"Primary"),(0,o.kt)("h3",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},'/****************************************************************************************\nProgram Name    : <listing>.sas\nPurpose         : Create <listing>\nClient          : <Client>\nProject         : <Project>\nProgrammer      : <Programmer>\nVersion/Date    : Version/yyyy-dd-mm\n\nSAS Version     : 9.4\n\nComments        :\n\nModifications   :\n*****************************************************************************************/\n\n%let userdrv = C:\\Users\\&sysuserid\\Emanate Biostats, Inc\\EB - Projects - Documents;\n%include "&userdrv\\<Client>\\<Project>\\Programs\\Set-up\\init.sas";\n%setup(<listing>);\n\n/*\n\n    program code\n\n*/\n\nods listing close;\nods excel file = "&outpathx" &optionsx;\n\n    footnote1 "Abbreviations: <abbreviations>";\n    footnote3 "~{super [1]} Time (days) relative to date of first dose of study drug";\n\n    proc report data = final missing nowindows split = "@" style=[protectspecialchars=off] style(report)=[bordertopwidth=1.5];\n        columns var1 var2 var3;\n\n        define var1             /order   style=[just=l cellwidth=0.90 in] "Var 1 Label";\n        define var2             /order   style=[just=l cellwidth=0.80 in] "Var 2 Label";\n        define var3             /order   style=[just=c cellwidth=0.65 in] "Var 3 Label";\n\n    run;\n\nods excel close;\nods listing;\n\nods listing close;\nods tagsets.rtf file = "&outpath" style=rtf_tnr_9pt ;\n\n%macro procrpt;\n\n    title3 "&ttlnum";\n    title4 "&ttldesc";\n    title5 "&ttlpop";\n\n    footnote1 "Abbreviations: <abbreviations>";\n    footnote3 "~{super [1]} Time (days) relative to date of first dose of study drug";\n    footnote5 &fnpath;\n\n    proc report data = final missing nowindows split = "@" style=[protectspecialchars=off] style(report)=[bordertopwidth=1.5] rtfbreak;;\n        columns sortvar1 var1 sortvar2 var2 var3;\n\n        define sortvar1         /order   order=internal noprint;\n        define var1             /order   style=[just=l cellwidth=0.90 in] "Var 1 Label";\n        define sortvar2         /order   order=internal noprint;\n        define var2             /order   style=[just=l cellwidth=0.80 in] "Var 2 Label";\n        define var3             /order   style=[just=c cellwidth=0.65 in] "Var 3 Label";\n\n        compute before subjid;\n        line put \' \';\n        endcomp;\n    run;\n%mend procrpt;\n%rtfbreak;\n\nods tagsets.rtf close;\nods listing;\n\n%pagebrkchk\n\n%progcheck;\n')),(0,o.kt)("h2",{id:"validator"},"Validator"),(0,o.kt)("h3",{id:"template-1"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sas"},'/****************************************************************************************\nProgram Name    : <listing>-<initials>.sas\nPurpose         : QC <listing>\nClient          : <Client>\nProject         : <Project>\nProgrammer      : <Programmer>\nVersion/Date    : Version/yyyy-dd-mm\n\nSAS Version     : 9.4\n\nComments        :\n\nModifications   :\n*****************************************************************************************/\n\n%let userdrv = C:\\Users\\&sysuserid\\Emanate Biostats, Inc\\EB - Projects - Documents;\n%include "&userdrv\\<Client>\\<Project>\\Programs\\Set-up\\init.sas";\n%batch(&projdrv\\programs\\TFLs, inc="<listing>", QC=Y);\n\n/*\n\n    program code\n\n*/\n\n%primaryData;\n\ntitle3 "&ttlqc";\nfootnote "&qcfnpath";\n\nods listing close;\nods tagsets.rtf file = "&qcpath";\n\nproc compare base=primary1 compare=qcfinal listobs;\n    vars &compareVars1;\n    with part cohort subjid trt01a <etc.>;\nrun;\n\nods tagsets.rtf close;\nods listing;\n\n%progcheck;\n')))}u.isMDXComponent=!0}}]);