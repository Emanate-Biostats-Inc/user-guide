---
sidebar_position: 2
title: Abbreviations
---

## Description

Abbreviations allow you to store much larger chunks of code inside a smaller abbreviation. Think of it as manually definining predictive text for SAS. After creating the abbreviation, you’ll be able to type the abbreviation + Tab (or Enter) and the text will be inserted. This is helpful if you frequently use a specific chunk of code that you want to recall without rewriting or copy pasting from another program.

## Example

In this example, we will be storing "retain code" that is frequently used in listings containing both unscheduled visits and other visits with a missing date.

### Add a new abbreviation

**View** > **Enhanced Editor**

**Tools** > **Add Abbreviation...** (or Ctrl + Shift + A)

Copy paste your code into the bottom text box.

![](/img/settings/abbreviations1.png)

### View or modify list of abbreviations

**View** > **Enhanced Editor**

**Tools** > **Keyboard Macros** > **Macros...** (or Ctrl + Shift + M)

This window shows all your abbreviations, allowing you to edit or rename any existing ones.

![](/img/settings/abbreviations2.png)

## Demonstration

SAS will now detect "retain" as an abbreviation.

![](/img/settings/abbreviations3.png)

After pressing Tab (or enter), the stored code is inserted.

![](/img/settings/abbreviations4.png)

## Samples

_retain_

```sas
proc sort data = XYZ;
    by subjid visitnum daten;
run;

data final;
    set XYZ;
    by subjid visitnum daten;

    retain datesort;
    if missing(daten) & first.subjid then datesort = .;
    else if ^missing(daten) then datesort = daten;

    format datesort date9.;
run;
```

_proc import_

```
proc import
    datafile = "file path.xlsx"
    out = outData
    dbms = xlsx
    replace;
    sheet = "Sheet1";
    getnames = yes;
/*  datarow = n;*/
run;
```

_mod_

```
  Date:      Programmer; Validator QC: Date (or N/A); - Modification
  DDMMMYYYY  FLast;      N/A                          - note
```

_put_

```
put "WARN" "ING: (AC)
```

_functions_

This can be useful for storing frequently used SAS functions. Sometimes it can be tricky to remember the order of all parameters.

```
catx("delimiter", var1, var2, ..., varN);
cmiss(var1, var2, ..., varN);
coalescec(aeterm4, aeterm3, aeterm2, aeterm);
compress(var, "remove these");
index(var, "target");
length(var);
missing(var);
n(var1, var2, ..., varN);
repeat(var, n=count);
reverse(var);
scan(var, n=count, "delimiter");
substr(var, n=start, n=length);
tranwrd(var, "target", "replacement");
```

_%compareNobs_

Another useful application is abbreviating the syntax for a macro if you forget the parameters.

```
%compareNobs(data1, var1, data2, var2);
```
