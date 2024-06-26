---
sidebar_position: 1
title: SDTM
---

## Primary

### Template

```sas
/****************************************************************************************
Program Name    : <domain>.sas
Purpose         : Create <domain> dataset
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

%sdtm(<final_dataset>);

%postsdtm;

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [**%init**](..\set-up\init.md)
- [**%presdtm**](..\..\macros\macros-sdtm\presdtm.md)
- [**%postsdtm**](..\..\macros\macros-sdtm\postsdtm.md)
- [**%progcheck**](..\..\macros\macros-general\progcheck.md)

## Validator

### Template

```sas
/****************************************************************************************
Program Name    : <domain>-<initials>.sas
Purpose         : QC <domain> dataset
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

%proc_compare(
	base=sdtm.<domain>,
	compare=qc_<domain>
);

%proc_compare(
	base=sdtm.supp<domain>,
	compare=qc_supp<domain>
);

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [**%init**](..\set-up\init.md)
- [**%batch**](..\..\macros\macros-general\batch.md)
- [**%proc_compare**](..\..\macros\macros-validation\proc-compare.md)
- [**%progcheck**](..\..\macros\macros-general\progcheck.md)
