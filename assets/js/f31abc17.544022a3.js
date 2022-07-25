"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[35],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,title:"Keys"},l=void 0,u={unversionedId:"settings/shortcuts/keys",id:"settings/shortcuts/keys",title:"Keys",description:"Description",source:"@site/docs/settings/shortcuts/keys.md",sourceDirName:"settings/shortcuts",slug:"/settings/shortcuts/keys",permalink:"/user-guide/docs/settings/shortcuts/keys",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/settings/shortcuts/keys.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Keys"},sidebar:"settingsSidebar",previous:{title:"Intro",permalink:"/user-guide/docs/settings/settings-intro"},next:{title:"Abbreviations",permalink:"/user-guide/docs/settings/shortcuts/abbreviations"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Keys",id:"keys",children:[{value:"View / Modify",id:"view--modify",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2},{value:"Enhanced Editor Keys",id:"enhanced-editor-keys",children:[{value:"View",id:"view",children:[],level:3},{value:"Examples",id:"examples-1",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Keys are customizable keyboard shortcuts for SAS that allow you to perform actions such as clear the log, submit SAS code, or reset your SAS session. Enhanced editor keys are built-in keyboard shortcuts you can use while in the enhanced editor."),(0,o.kt)("h2",{id:"keys"},"Keys"),(0,o.kt)("h3",{id:"view--modify"},"View / Modify"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tools")," > ",(0,o.kt)("strong",{parentName:"p"},"Options")," > ",(0,o.kt)("strong",{parentName:"p"},"Keys")," (or F9)"),(0,o.kt)("p",null,"Unfortunately, SAS doesn't allow copy paste in this window. You have to type out the key definition. Close out of the window to save."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6312).Z})),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"This command resets your SAS session. It is highly recommended when running different programs (especially from different studies) or to solve session errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wpgm;submit \"%include '<path>\\reset.sas';\"\n")),(0,o.kt)("p",null,"This command opens the most resent dataset that was created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vt &syslast\n")),(0,o.kt)("p",null,"This command clears your log and returns to your active enhanced editor window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"log;clear;wpgm\n")),(0,o.kt)("p",null,"This command deletes all work datasets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'wpgm;submit "proc delete lib=work data=_all_;run;"\n')),(0,o.kt)("h2",{id:"enhanced-editor-keys"},"Enhanced Editor Keys"),(0,o.kt)("h3",{id:"view"},"View"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"View")," > ",(0,o.kt)("strong",{parentName:"p"},"Enhanced Editor")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tools")," > ",(0,o.kt)("strong",{parentName:"p"},"Options")," > ",(0,o.kt)("strong",{parentName:"p"},"Enhanced Editor Keys")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(422).Z})),(0,o.kt)("h3",{id:"examples-1"},"Examples"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Keys"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Comment out current selection"),(0,o.kt)("td",{parentName:"tr",align:null},"Ctrl + /")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Convert current selection to lowercase"),(0,o.kt)("td",{parentName:"tr",align:null},"Ctrl + Shift + L")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Convert current selection to uppercase"),(0,o.kt)("td",{parentName:"tr",align:null},"Ctrl + Shift + U")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Got to line"),(0,o.kt)("td",{parentName:"tr",align:null},"Ctrl + G")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Indent selection"),(0,o.kt)("td",{parentName:"tr",align:null},"Tab")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Uncomment current selection"),(0,o.kt)("td",{parentName:"tr",align:null},"Ctrl + Shift + /")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Unindent selection"),(0,o.kt)("td",{parentName:"tr",align:null},"Shift + Tab")))),(0,o.kt)("p",null,"Reference the above window in SAS to see the rest."))}d.isMDXComponent=!0},6312:function(e,t,n){t.Z=n.p+"assets/images/keys1-ed9eae196d6652737851accddc217689.png"},422:function(e,t,n){t.Z=n.p+"assets/images/keys2-63e9a2168a2c5b3f1442e1da36a93f52.png"}}]);