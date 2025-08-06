# %macro name

_Created by [**First Last**](mailto:first.last@emanatebiostats.com?subject=User%20Guide:%20macro_name)_

## Description

**macro name** does this

## Defintion

```sas
%macro macro (
  param1 = null,
  param2 = null,
  debug  = 0
);
```

## Required Parameters

None

### _base_

This is the same value you would use in a normal proc compare.

## Optional Parameters

None

### _debug_

Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

SDTM/ADaM

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

## Outcome

### ProjectFolder/Output/QC/Tracker/qc_tacker

SAS dataset that keeps track of all the relevant QC information across all programs

![](/img/macros/test.png)

## Notes

- This macro currently ignores the following and treats them as a clean compare
  - Dataset labels differ
  - Variable has different length
  - Variable has different label
  - Variable has different informat (TFL only)
  - Variable has different format (TFL only)
