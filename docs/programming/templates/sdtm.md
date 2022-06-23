---
sidebar_position: 1
title: SDTM
---

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
%presdtm(<domain>);

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
%batch(&projdrv\programs\SDTM, inc="<domain>", QC=Y);

/*

    program code

*/

%qc_datafinal(<final_dataset>, <domain>);

%nobs(sdtm.<domain>);
%nobs(qc_final);

** if unequal nobs call this **;
/*
%compareNobs(sdtm.<domain>, qc_final, usubjid);
*/

%proc_compare(
	base=sdtm.<domain>,
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
