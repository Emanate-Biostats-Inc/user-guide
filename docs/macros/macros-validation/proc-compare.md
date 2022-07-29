---
sidebar_position: 2
---

# %proc_compare

<!-- This document is used as the live template for other macro documentation -->

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20proc_compare)_

## Description

**proc_compare** serves a few different purposes.

- manages the handling of all program QC documentation
- automatically updates a SAS dataset and excel file that provides all current information about program QC status
- automatic snapshots of QC documentation and overall QC file for each program and day

#### QC Version Available?

N/A

## Syntax

```sas
%macro proc_compare(
  base = null,
  compare = null,
  program = null,
  vars = null,
  with = null,
  part = null,
  criterion = null,
  options = listall,
  id = null,
  explanation = "",
  debug = 0
);
```

## Required Parameters

### _base_

This is the same value you would use in a normal proc compare.

### _compare_

This is the same value you would use in a normal proc compare.

## Additional Required Parameters for TFLs

### _program_

This is the value of the **Program** column in the programming log.

### _vars_

This is the same value you would use in a normal proc compare.

### _with_

This is the same value you would use in a normal proc compare.

### _part_

Set to 1 for the first call/part, 2 for the next, etc. See Example 3 below.

## Optional Parameters

### _criterion_

This is the same value you would use in a normal proc compare.

### _options_

This is the same value you would use in a normal proc compare. Defaults to "listall"

### _id_

This is the same value you would use in a normal proc compare.

### _explanation_

If applicable, set to "here is my explanation describing why there is a mismatch that isn't being corrected"

### _debug_

Set to 1 if you want **proc_compare** to preserve all datasets used in the macro for debugging purposes.

## Examples

1. SDTM/ADaM

```sas
%proc_compare(
  base = adam.adae,
  compare = qc_final
);
```

2. Single part Table/Listing

```sas
%proc_compare(
  base = final,
  compare = qc_final,
  program = t-lb,
  vars = paramn ord text col1 col2 col3,
  with = paramn ord stat trt1 trt2 trt3
);
```

3. Multiple part Listing

```sas
%primaryData; /* this macro is if you want to get the dataset and variables from production */

%proc_compare(
  base = primary1,
  compare = qc_final,
  program = l-substance,
  part = 1,
  vars = &comparevars1,
  with = subjid trt01a sudstxt suendat years cigarettes cigars pipes ecigs
);

%proc_compare(
  base = primary2,
  compare = qc_final,
  program = l-substance,
  part = 2,
  vars = &comparevars2,
  with = subjid trt01a day six prob1 prob2 sub
);
```

## Outcome

### ProjectFolder/Output/QC/qc_report

SAS dataset that keeps track of all the relevant QC information across all programs

![](/img/macros/qc_report.png)

### ProjectFolder/Output/QC/Reports

Directory containing excel backups of qc_report each new date a QC program is run

### ProjectFolder/Output/QC/Comparisons

Directory containing all QC docs in RTF format

## Notes

- The macro has 80 lines of checks so it should always provide helpful information in your SAS log if you happen to use it incorrectly. It won't run unless everything is in order.
- This macro currently ignores the following and treats them as a clean compare
  - Dataset labels differ
  - Variable has different length
  - Variable has different label
