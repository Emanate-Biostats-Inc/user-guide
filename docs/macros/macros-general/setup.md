---
sidebar_position: 1
---

# %setup

_Created by [**Mark Mortier**](mailto:mark.mortier@emanatebiostats.com?subject=User%20Guide:%setup)_

## Description

**setup** creates dynamic titles and pathnames for use in project programming. It will import the Programming Log and create the following macro variables:

- PROGNAME: Filename of TLF program (e.g., t-disp)
- TTLDESC(#): Summary title (e.g., Subject Disposition)
- TTLPOP(#): Population group title (e.g., ITT Population)
- TTLNUM(#): Summary number (e.g., 14.1.1.1)
- OUTPATH(#): Path and filename for TLF RTF output (e.g., EB - Projects\...\t14.1.1.1-disp 17Apr2013)
- FNPATH(#): Path and filename for use in TLF footnotes, to include execution date and time
- FNREF(#): List of reference listings for use in table and figure footnote
- QCPATH: Path and filename for QC documentation (e.g., EB - Projects\...\t14.1.1.-disp-qcdoc 17Apr2013)
- TTLQC: Summary title for QC program
- QCFNPATH: Path and filename for use in QC footnote

## Syntax

```sas
%macro setup(
    progname =,
    debug = 0
);
```

## Required Parameters

### _progname_

Set to the name of the program.

## Optional Parameters

### _debug_

Set to 1 if you want **setup** to preserve all datasets created in the macro for debugging purposes.

## Examples

```sas
%setup(progname = t-chem-shift);
```

## Outcome

## Notes
