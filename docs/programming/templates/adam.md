---
sidebar_position: 2
title: ADaM
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
%preadam(<domain>);

%suppAdd(<domain>);

/*

    program code

*/

%postadam;

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [**%init**](..\set-up\init.md)
- [**%preadam**](..\..\macros\macros-adam\preadam.md)
- [**%suppAdd**](..\..\macros\macros-adam\suppadd.md)
- [**%postadam**](..\..\macros\macros-adam\postadam.md)
- [**%progcheck**](..\..\macros\macros-general\progcheck.md)

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

%qc_suppAdd(<domain>);

/*

    program code

*/

%proc_compare(
	base=adam.<domain>,
	compare=qc_<domain>
);

%progcheck;
```

### Documentation Links

<!-- prettier-ignore -->
- [**%init**](..\set-up\init.md)
- [**%batch**](..\..\macros\macros-general\batch.md)
- [**%qc_suppAdd**](..\..\macros\macros-adam\suppadd.md)
- [**%proc_compare**](..\..\macros\macros-validation\proc-compare.md)
- [**%progcheck**](..\..\macros\macros-general\progcheck.md)
