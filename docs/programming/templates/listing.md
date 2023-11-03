---
sidebar_position: 4
title: Listing
---

## Primary

### Template

```sas
/****************************************************************************************
Program Name    : <listing>.sas
Purpose         : Create <listing>
Client          : <Client>
Project         : <Project>
Programmer      : <Programmer>
Version/Date    : Version/yyyy-dd-mm

SAS Version     : 9.4

Comments        :

Modifications   :
*****************************************************************************************/

%let userdrv = C:\Users\&sysuserid\Emanate Biostats, Inc\EB - Projects - Documents;
%include "&userdrv\<Client>\<Project>\Programs\Set-up\init.sas";
%setup(<listing>);

/*

    program code

*/

ods listing close;
ods excel file = "&outpathx" &optionsx;

	footnote1 "Abbreviations: <abbreviations>";
	footnote3 "~{super [1]} Time (days) relative to date of first dose of study drug";

	proc report data = final missing nowindows split = "@" style=[protectspecialchars=off] style(report)=[bordertopwidth=1.5];
		columns var1 var2 var3;

		define var1 	  		/order   style=[just=l cellwidth=0.90 in] "Var 1 Label";
		define var2 	  		/order   style=[just=l cellwidth=0.80 in] "Var 2 Label";
		define var3 	  		/order   style=[just=c cellwidth=0.65 in] "Var 3 Label";

	run;

ods excel close;
ods listing;

ods listing close;
ods tagsets.rtf file = "&outpath" style=rtf_tnr_9pt ;

%macro procrpt;

	title3 "&ttlnum";
	title4 "&ttldesc";
 	title5 "&ttlpop";

	footnote1 "Abbreviations: <abbreviations>";
	footnote3 "~{super [1]} Time (days) relative to date of first dose of study drug";
	footnote5 &fnpath;

	proc report data = final missing nowindows split = "@" style=[protectspecialchars=off] style(report)=[bordertopwidth=1.5] rtfbreak;;
		columns sortvar1 var1 sortvar2 var2 var3;

        define sortvar1         /order 	 order=internal noprint;
		define var1 	  		/order   style=[just=l cellwidth=0.90 in] "Var 1 Label";
        define sortvar2         /order 	 order=internal noprint;
		define var2 	  		/order   style=[just=l cellwidth=0.80 in] "Var 2 Label";
		define var3 	  		/order   style=[just=c cellwidth=0.65 in] "Var 3 Label";

		compute before subjid;
		line put ' ';
		endcomp;
	run;
%mend procrpt;
%rtfbreak;

ods tagsets.rtf close;
ods listing;

%pagebrkchk

%progcheck;
```

<!-- ### Documentation Links -->

<!--
- [init](init.md)
- [%progCheck](progcheck.md)
-->

## Validator

### Template

```sas
/****************************************************************************************
Program Name    : <listing>-<initials>.sas
Purpose         : QC <listing>
Client          : <Client>
Project         : <Project>
Programmer      : <Programmer>
Version/Date    : Version/yyyy-dd-mm

SAS Version     : 9.4

Comments        :

Modifications   :
*****************************************************************************************/

%let userdrv = C:\Users\&sysuserid\Emanate Biostats, Inc\EB - Projects - Documents;
%include "&userdrv\<Client>\<Project>\Programs\Set-up\init.sas";
%batch(&projdrv\programs\TFLs, inc="<listing>", QC=Y);

/*

    program code

*/

%primaryData;

%proc_compare(
	base    = primary1,
	compare = qc_final,
	var     = &compareVars1,
	with    = subjid trt date result1 result2
);

%progcheck;
```

<!-- ### Documentation Links -->

<!-- prettier-ignore -->
<!-- - [%compareNobs](..\..\macros\macros-validation\comparenobs.md) -->

<!--
- [init](init.md)
- [%batch](batch.md)
- [%qc_datafinal](qc_datafinal.md)
- [%nobs](nobs.md)

- [%proc_compare](proc_compare.md)
- [%progcheck](progcheck.md)
-->
