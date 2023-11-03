---
sidebar_position: 3
title: Table
---

_This page is not final so some of the macros and processes are still being tested_

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

** to do **;
```

### Documentation Links

<!--
- [init](init.md)
- [%progCheck](progcheck.md)
-->

## Validator

### Template

```sas
/****************************************************************************************
Program Name    : <table>-<initials>.sas
Purpose         : QC <table> dataset
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

%proc_compare(
	base    = final,
	compare = qc_final,
	var     = avisit text col1 col2 col3,
	with    = text1 text2 _1 _2 _3
);

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [%compareNobs](..\..\macros\macros-validation\comparenobs.md)

<!--
- [init](init.md)
- [%batch](batch.md)
- [%qc_datafinal](qc_datafinal.md)
- [%nobs](nobs.md)

- [%proc_compare](proc_compare.md)
- [%progcheck](progcheck.md)
-->
