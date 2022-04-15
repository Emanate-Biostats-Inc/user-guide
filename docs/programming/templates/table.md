---
sidebar_position: 3
title: Table
---

## Primary

### Template

```sas
/****************************************************************************************
Program Name    : <table>.sas
Purpose         : Create <table> dataset
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
%presdtm(<table>);

/*

    program code

*/

%sdtm_(<final_dataset>);

data sdtm;
   set sdtm_;
   %transfer;
   %fixed;
   %auto;
run;

%postsdtm;

%progcheck;
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
%setup(progname=<table>);
%batch(&projdrv\programs\SDTM, inc="<table>", QC=Y);

/*

    program code

*/

%qc_datafinal(<final_dataset>, <table>);

%nobs(sdtm.<table>);
%nobs(qc_final);

** if unequal nobs call this **;
/*
%compareNobs(sdtm.<table>, qc_final, usubjid);
*/

%proc_compare(
	base=sdtm.<table>,
	compare=qc_<table>
);

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [%compareNobs](..\..\macros\macros-validation\comparenobs.md)

<!--
- [init](init.md)
- [%setup](setup.md)
- [%batch](batch.md)
- [%qc_datafinal](qc_datafinal.md)
- [%nobs](nobs.md)

- [%proc_compare](proc_compare.md)
- [%progcheck](progcheck.md)
-->
