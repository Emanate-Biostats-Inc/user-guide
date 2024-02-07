---
sidebar_position: 2
---

# %proc_compare

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20proc_compare)_

## Description

**proc_compare** serves a few different purposes.

- manages the handling of all program QC documentation
- automatically updates a SAS dataset and excel file that provides all current information about program QC status
- automatic snapshots of QC documentation and overall QC file for each program and day

## Defintion

```sas
%macro proc_compare(
  part = null,
  base = null,
  base_overwrite = null,
  compare = null,
  var = null,
  with = null,
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

### _part_ (only needed if there are multiple parts)

Set to 1 for the first call/part, 2 for the next, etc. See Example 3 below.

### _var_

This is the same value you would use in a normal proc compare.

### _with_

This is the same value you would use in a normal proc compare.

## Optional Parameters

### _base_overwrite_

This allows you to compare with a custom dataset for SDTM and ADaM if applicable.

### _criterion_

This is the same value you would use in a normal proc compare.

### _options_

This is the same value you would use in a normal proc compare. Defaults to "listall"

### _id_

This is the same value you would use in a normal proc compare.

### _explanation_

If applicable, set to "here is my explanation describing why there is a mismatch that isn't being corrected"

### _debug_

Set to 1 if you want **proc_compare** to preserve all datasets created in the macro for debugging purposes.

## Examples

1. SDTM/ADaM

```sas
%proc_compare(
  base    = sdtm.dm,
  compare = qc_dm
);

** if supp **;
%proc_compare(
  base    = sdtm.suppdm,
  compare = qc_suppdm
);
```

2. Table/Figure/Listing

```sas
%proc_compare(
  base    = final,
  compare = qc_final,
  var     = paramn ord text col1 col2 col3,
  with    = paramn ord stat trt1 trt2 trt3
);
```

3. Listing with multiple parts

```sas
%primaryData;

%proc_compare(
  part    = 1,
  base    = primary1,
  compare = qc_final,
  var     = &comparevars1,
  with    = subjid trt01a sudstxt suendat years cigarettes cigars
);

%proc_compare(
  part    = 2,
  base    = primary2,
  compare = qc_final,
  var     = &comparevars2,
  with    = subjid trt01a day six prob1 prob2 sub
);
```

4. Dataset with temporary subset comparison

```sas
data lb_subset;
  set sdtm.lb;
  where lbtestcd = "URATE";
run;

%proc_compare(
  base           = sdtm.lb,
  base_overwrite = lb_subset,
  compare        = qc_lb,
  explanation    = "Only comparing with LBTESTCD 'URATE' for Topline delivery 9/1"
);
```

## Outcome

### ProjectFolder/Output/QC/Tracker/qc_tacker

SAS dataset that keeps track of all the relevant QC information across all programs

![](/img/macros/qc_report.png)

### ProjectFolder/Output/QC/Archive

Directory containing excel backups of qc_tracker each new date a QC program is run

### ProjectFolder/Output/QC/Comparisons

Directory containing all QC docs in RTF format

## Notes

- This macro currently ignores the following and treats them as a clean compare
  - Dataset labels differ
  - Variable has different length
  - Variable has different label
  - Variable has different informat (TFL only)
  - Variable has different format (TFL only)
