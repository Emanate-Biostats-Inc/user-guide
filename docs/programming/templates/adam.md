---
sidebar_position: 2
title: ADaM
---

_This page is not final so some of the macros and processes are still being tested_

## Primary

### Template

```sas
/****************************************************************************************
Program Name    : <domain>.sas
Purpose         : Create <Domain> dataset
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
%preadam(<domain>);

%mergeSupp(<domain>);

/*

    program code

*/

%postadam;

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
Program Name    : <domain>-<initials>.sas
Purpose         : QC <Domain> dataset
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
%batch(&projdrv\programs\ADAM, inc="<domain>", QC=Y);

%qc_mergeSupp(<domain>);

/*

    program code

*/

%qc_datafinal(<final_dataset>, <domain>);

/*
%nobs(adam.<domain>);
%nobs(qc_final);
%compareNobs(adam.<domain>, qc_final, usubjid);
*/

%proc_compare(
	base=adam.<domain>,
	compare=qc_<domain>
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
