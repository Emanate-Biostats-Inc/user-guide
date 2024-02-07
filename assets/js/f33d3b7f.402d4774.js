"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[847],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1694:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,title:"Style Guide"},s=void 0,d={unversionedId:"programming/style-guide",id:"programming/style-guide",title:"Style Guide",description:"These conventions are to improve the maintenance, readability, and efficiency of our code.",source:"@site/docs/programming/style-guide.md",sourceDirName:"programming",slug:"/programming/style-guide",permalink:"/user-guide/docs/programming/style-guide",editUrl:"https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/docs/programming/style-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Style Guide"},sidebar:"programmingSidebar",next:{title:"SDTM",permalink:"/user-guide/docs/programming/templates/sdtm"}},p=[{value:"Templates",id:"templates",children:[],level:2},{value:"Indentation",id:"indentation",children:[{value:"Good",id:"good",children:[],level:4},{value:"Bad",id:"bad",children:[],level:4}],level:2},{value:"Spacing",id:"spacing",children:[{value:"Good",id:"good-1",children:[],level:4},{value:"Bad",id:"bad-1",children:[],level:4}],level:2},{value:"Alignment",id:"alignment",children:[{value:"Good",id:"good-2",children:[],level:4},{value:"Bad",id:"bad-2",children:[],level:4},{value:"Good",id:"good-3",children:[],level:4},{value:"Bad",id:"bad-3",children:[],level:4}],level:2},{value:"Line Breaks",id:"line-breaks",children:[{value:"Good",id:"good-4",children:[],level:4},{value:"Bad",id:"bad-4",children:[],level:4}],level:2},{value:"Naming",id:"naming",children:[{value:"Good",id:"good-5",children:[],level:4},{value:"Bad",id:"bad-5",children:[],level:4}],level:2},{value:"Casing",id:"casing",children:[],level:2},{value:"Operators",id:"operators",children:[{value:"Arithmetic Operators",id:"arithmetic-operators",children:[],level:3},{value:"Comparison Operators",id:"comparison-operators",children:[],level:3},{value:"Colon Prefix",id:"colon-prefix",children:[],level:3},{value:"Logical (Boolean) Operators",id:"logical-boolean-operators",children:[],level:3}],level:2},{value:"Comments",id:"comments",children:[{value:"Minor Comments",id:"minor-comments",children:[],level:3},{value:"Slash Comments",id:"slash-comments",children:[],level:3},{value:"Sections",id:"sections",children:[],level:3}],level:2},{value:"Flow",id:"flow",children:[],level:2},{value:"Efficiency",id:"efficiency",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These conventions are to improve the maintenance, readability, and efficiency of our code."),(0,i.kt)("h2",{id:"templates"},"Templates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always use a template to start your first program type for a new study.")),(0,i.kt)("p",null,"Our SAS processes are dynamic, and our ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/docs/programming/templates/sdtm"},(0,i.kt)("strong",{parentName:"a"},"program templates"))," will always have the most current implementation. These templates also follow every rule in this style guide."),(0,i.kt)("p",null,"Identical program types involve repeated code. Therefore, it frequently makes sense to copy previous programs to create new ones. Feel free to do this only after you have copied over the template for your first program type."),(0,i.kt)("h2",{id:"indentation"},"Indentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always indent nested code such as data steps, proc statements, do blocks, and macro definitions. Use tab or two spaces.")),(0,i.kt)("p",null,"Whether you use tabs or spaces, the most important thing is to ",(0,i.kt)("strong",{parentName:"p"},"keep your code consistent")," (i.e., avoid switching between tabs or spaces for regular indentations)."),(0,i.kt)("h4",{id:"good"},"Good"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'proc sort data = test;\n    by visitnum;\nrun;\n\ndata indent;\n    set test;\n\n    if index(upcase(visit), "DAY") then do;\n        if visitnum < 5 then put "Visit Day is less than 5";\n        else if 5 <= visitnum < 10 then put "Visit Day is in between 5 and 9";\n        else put "Visit Day is greater than 9";\n    end;\nrun;\n')),(0,i.kt)("h4",{id:"bad"},"Bad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'proc sort data = test;\nby visitnum;\nrun;\n\ndata indent;\nset test;\n\nif index(upcase(visit), "DAY") then do;\nif visitnum < 5 then put "Visit Day is less than 5";\nelse if 5 <= visitnum < 10 then put "Visit Day is in between 5 and 9";\nelse put "Visit Day is greater than 9";\nend;\nrun;\n')),(0,i.kt)("h2",{id:"spacing"},"Spacing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Place spaces around all binary operators (=, +, -, <=, etc.). However, there are a couple exceptions. Spaces around (=) are optional when passing optional arguments through a macro call. Spaces around (-) are optional when initializing a range of variables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Place spaces around the logical operators (& and |), but not after (^).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Always place a space after a comma, but do not place one before a comma.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Place a space before left parenthesis, except for functions and macro calls.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not place spaces around code in parentheses or square brackets.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extra spacing is encouraged if it improves alignment of multiple lines with similar code"))),(0,i.kt)("h4",{id:"good-1"},"Good"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'data spacing;\n    length unsvisit $40;\n    set test;\n    where ^missing(visitnum) & (subjid =: "001" | site = "02");\n\n    if visitnum >= 100 & index(upcase(visit), "UNS") then do;\n        put "This is an unscheduled visit.";\n        unsvisit = strip(visit);\n    end;\nrun;\n')),(0,i.kt)("h4",{id:"bad-1"},"Bad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'data spacing;\n    set test;\n    where ^missing ( visitnum ) & (subjid=:"001"|site="02");\n\n    if visitnum>=100 & index(upcase(visit),"UNS") then do;\n        put "This visit is unscheduled.";\n        unsvisit = strip ( visit );\n    end;\nrun;\n')),(0,i.kt)("h2",{id:"alignment"},"Alignment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use extra spaces and consistent numerical precision to align similar lines of code (e.g., proc report statements, macro calls, etc.).")),(0,i.kt)("h4",{id:"good-2"},"Good"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'define space       / order   order = internal noprint;\ndefine subjid      / order   style = [cellwidth = 0.75 in just = c] "Subject ID";\ndefine trt01an     / order   order = internal noprint;\ndefine trt01a      / order   style = [cellwidth = 1.10 in just = l] "Treatment Group";\ndefine daten       / order   order = internal noprint;\ndefine visitnum    / order   order = internal noprint;\ndefine visit       / display style = [cellwidth = 1.00 in just = l] "Visit";\ndefine date        / display style = [cellwidth = 1.05 in just = c] "Collection Date@(Study Day~{super [1]})";\ndefine temp        / display style = [cellwidth = 0.80 in just = c] "Temperature@(\xb0C)";\ndefine hrate       / display style = [cellwidth = 0.80 in just = c] "Heart Rate@(beats/min)";\ndefine rrate       / display style = [cellwidth = 1.00 in just = c] "Respiratory Rate@(breaths/min)";\n')),(0,i.kt)("h4",{id:"bad-2"},"Bad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'define space     / order order = internal noprint;\ndefine subjid       / order style = [cellwidth = 0.75 in just = c] "Subject ID";\ndefine trt01an  / order order = internal noprint;\ndefine trt01a     / order style = [cellwidth = 1.1 in just = l] "Treatment Group";\ndefine daten    / order order = internal noprint;\ndefine visitnum    / order order = internal noprint;\ndefine visit        / display style = [cellwidth = 1 in just = l] "Visit";\ndefine date    / display style = [cellwidth = 1.05 in just = c] "Collection Date@(Study Day~{super [1]})";\ndefine temp     / display style = [cellwidth = .8 in just = c] "Temperature@(\xb0C)";\ndefine hrate      / display style = [cellwidth = 0.8 in just = c] "Heart Rate@(beats/min)";\ndefine rrate      / display style = [cellwidth = 1 in just = c] "Respiratory Rate@(breaths/min)";\n')),(0,i.kt)("h4",{id:"good-3"},"Good"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'%supp(atc3txt, "ATC3TXT", "ATC Level 3 Text",             %str(strip(upcase(atc3txt))), "ASSIGNED");\n%supp(atc3,    "ATC3",    "ATC Level 3 Code",             %str(strip(upcase(atc3))),    "ASSIGNED");\n%supp(scat,    "SCAT",    "Subcategory for Intervention", %str(strip(upcase(xnscat2))), "EDT");\n%supp(stdname, "STDNAME", "WHO Standard Name",            %str(strip(upcase(stdname))), "ASSIGNED");\n')),(0,i.kt)("h4",{id:"bad-3"},"Bad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'%supp(atc3txt, "ATC3TXT", "ATC Level 3 Text", %str(strip(upcase(atc3txt))), "ASSIGNED");\n%supp(atc3, "ATC3", "ATC Level 3 Code", %str(strip(upcase(atc3))), "ASSIGNED");\n%supp(scat, "SCAT", "Subcategory for Intervention", %str(strip(upcase(xnscat2))), "EDT");\n%supp(stdname, "STDNAME", "WHO Standard Name", %str(strip(upcase(stdname))), "ASSIGNED");\n')),(0,i.kt)("h2",{id:"line-breaks"},"Line Breaks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always break to a new line after the end of a line ( ; )."),(0,i.kt)("li",{parentName:"ul"},"Create a blank line to separate unique processes.")),(0,i.kt)("h4",{id:"good-4"},"Good"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'proc sort data = test;\n    by subjid;\nrun;\n\ndata linebreaks;\n    length reason $100;\n    set test;\n    where ^missing(stdtc);\n\n    visit = strip(visit_raw);\n\n    if ^missing(reas_oth) then reason = "Other: " || strip(reas_oth);\n    else reason = strip(reas);\nrun;\n')),(0,i.kt)("h4",{id:"bad-4"},"Bad"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'proc sort data = test; by subjid; run;\n\ndata linebreaks;\n    length reason $100;\n    set test;\n    where ^missing(stdtc);\n    visit = strip(visit_raw);\n    if ^missing(reas_oth) then reason = "Other: " || strip(reas_oth);\n    else reason = strip(reas);\nrun;\n')),(0,i.kt)("h2",{id:"naming"},"Naming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use unique names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Be succinct.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use meaningful names, especially for final variables. Someone else should be able to know what they are by the name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Avoid extraneous prefixes and suffixes such as (x, z, ","_",", -, etc.). However, ( ","_"," ) can be used as a prefix for datasets or macro variables to intentionally force their visibility to the bottom of explorer."))),(0,i.kt)("p",null,'With a listing column titled "Any Abnormal Findings?", here are example variable names.'),(0,i.kt)("h4",{id:"good-5"},"Good"),(0,i.kt)("p",null,"anyfind, findings, or abnfind"),(0,i.kt)("h4",{id:"bad-5"},"Bad"),(0,i.kt)("p",null,"xpeperf, var4, ","_","peorres, or aaa"),(0,i.kt)("h2",{id:"casing"},"Casing"),(0,i.kt)("p",null,"Certain casing makes sense for different code elements. Examples include lowercase, UPPERCASE, camelCase, PascalCase, and snake_case."),(0,i.kt)("p",null,"The most important thing is to ",(0,i.kt)("strong",{parentName:"p"},"keep your code consistent.")," If you decide to use uppercase for your variables, avoid having any lowercase variables and vice versa. Ctrl + Shift + L transforms your selection to lowercase. Ctrl + Shift + U transforms your selection to uppercase."),(0,i.kt)("h2",{id:"operators"},"Operators"),(0,i.kt)("h3",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"addition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"subtraction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"multiplication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/"),(0,i.kt)("td",{parentName:"tr",align:null},"division")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"*","*"),(0,i.kt)("td",{parentName:"tr",align:null},"exponentiation")))),(0,i.kt)("h3",{id:"comparison-operators"},"Comparison Operators"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Mnemonic"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"="),(0,i.kt)("td",{parentName:"tr",align:null},"eq"),(0,i.kt)("td",{parentName:"tr",align:null},"equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"^="),(0,i.kt)("td",{parentName:"tr",align:null},"ne"),(0,i.kt)("td",{parentName:"tr",align:null},"not equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},">"),(0,i.kt)("td",{parentName:"tr",align:null},"gt"),(0,i.kt)("td",{parentName:"tr",align:null},"greater than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"<"),(0,i.kt)("td",{parentName:"tr",align:null},"lt"),(0,i.kt)("td",{parentName:"tr",align:null},"less than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},">="),(0,i.kt)("td",{parentName:"tr",align:null},"ge"),(0,i.kt)("td",{parentName:"tr",align:null},"greater than or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"<="),(0,i.kt)("td",{parentName:"tr",align:null},"le"),(0,i.kt)("td",{parentName:"tr",align:null},"less than or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"in"),(0,i.kt)("td",{parentName:"tr",align:null},"equal to one of a list")))),(0,i.kt)("h3",{id:"colon-prefix"},"Colon Prefix"),(0,i.kt)("p",null,"You can compare a specified prefix of a character expression by using a colon ( : ) after the comparison operator."),(0,i.kt)("p",null,"This reads as ",(0,i.kt)("em",{parentName:"p"},'visit does not start with "UNS".')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'visit ^=: "UNS"\n')),(0,i.kt)("p",null,"This reads as ",(0,i.kt)("em",{parentName:"p"},'lbcat starts with "HEMA" or "CHEM".')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},'lbcat in: ("HEMA" "CHEM")\n')),(0,i.kt)("h3",{id:"logical-boolean-operators"},"Logical (Boolean) Operators"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Mnemonic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"&"),(0,i.kt)("td",{parentName:"tr",align:null},"and")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"|"),(0,i.kt)("td",{parentName:"tr",align:null},"or")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"^"),(0,i.kt)("td",{parentName:"tr",align:null},"not")))),(0,i.kt)("h2",{id:"comments"},"Comments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Comments are encouraged to identify or explain code."),(0,i.kt)("li",{parentName:"ul"},"Be consistent with how you comment.")),(0,i.kt)("p",null,"Commenting code helps everyone, especially your future self and anyone who has to go into your program."),(0,i.kt)("h3",{id:"minor-comments"},"Minor Comments"),(0,i.kt)("p",null,"Minor comments are for identifying or explaining code. Here are some notable examples."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"where clauses"),(0,i.kt)("li",{parentName:"ul"},"hardcodes"),(0,i.kt)("li",{parentName:"ul"},"purpose of a cryptic dataset"),(0,i.kt)("li",{parentName:"ul"},"algorithms")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},"** minor comment **;\n")),(0,i.kt)("h3",{id:"slash-comments"},"Slash Comments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inline comments"),(0,i.kt)("li",{parentName:"ul"},"multiline comments"),(0,i.kt)("li",{parentName:"ul"},"temporarily remove code that you don't want to run")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},"/* slash comment */\n")),(0,i.kt)("p",null,"Ctrl + / comments out a selection. Ctrl + Shift + / uncomments a selection. Be careful since any existing comments or slash comments could hinder commenting blocks of code. If you want to preserve those comments, wrap the code block in a macro definition."),(0,i.kt)("h3",{id:"sections"},"Sections"),(0,i.kt)("p",null,"These comments are for extremely long programs where you need to tag your attention towards a particular section (e.g., patient profile with 12 listings in a single program or QS domains with multiple questionnaires)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sas"},"/*****************************************************************************************\n** Section Name **************************************************************************\n*****************************************************************************************/\n")),(0,i.kt)("h2",{id:"flow"},"Flow"),(0,i.kt)("p",null,"The order of program elements is usually crucial. In other cases, it's still ideal to have standard flow to improve organization and readability."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Accurate header"),(0,i.kt)("li",{parentName:"ol"},"Init, setup, and formats at the top of the program"),(0,i.kt)("li",{parentName:"ol"},"Data processing"),(0,i.kt)("li",{parentName:"ol"},"Final output")),(0,i.kt)("h2",{id:"efficiency"},"Efficiency"),(0,i.kt)("p",null,"If you need to do the same process more than a few times, ",(0,i.kt)("strong",{parentName:"p"},"you should probably use an array or macro.")," Duplicated code is a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_smell"},"common code smell")," that should be avoided."))}m.isMDXComponent=!0}}]);