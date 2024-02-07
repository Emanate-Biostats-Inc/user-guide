---
sidebar_position: 3
title: Table
---

## Primary

### Template

```sas
/****************************************************************************************
Program Name    : <table>.sas
Purpose         : Create <table>
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
%setup(<table>);

/*

    program code

*/

ods listing close;
ods tagsets.rtf file = "&outpath" style=rtf_tnr_9pt ;

%macro procrpt;

	title3 "&ttlnum";
	title4 "&ttldesc";
 	title5 "&ttlpop";

	footnote1 "Abbreviations: <abbreviations>";
	footnote3 &fnpath;

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

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [**%init**](..\set-up\init.md)
- [**%setup**](..\..\macros\macros-general\setup.md)
- [**%rtfbreak**](..\..\macros\macros-tfl\rtfbreak.md)
- [**%progcheck**](..\..\macros\macros-general\progcheck.md)

## Validator

### Template

```sas
/****************************************************************************************
Program Name    : <table>-<initials>.sas
Purpose         : QC <table>
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
%batch(&projdrv\programs\TFLs, inc="<table>", QC=Y);

/*

    program code

*/

%primaryData;

%proc_compare(
	base    = primary1,
	compare = qc_final,
	var     = &compareVars1,
	with    = text1 text2 _1 _2 _3
);

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [**%init**](..\set-up\init.md)
- [**%batch**](..\..\macros\macros-general\batch.md)
- [**%primaryData**](..\..\macros\macros-tfl\primarydata.md)
- [**%proc_compare**](..\..\macros\macros-validation\proc-compare.md)
- [**%progcheck**](..\..\macros\macros-general\progcheck.md)
