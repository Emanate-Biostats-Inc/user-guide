---
sidebar_position: 4
---

# %qc_tracker

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20qc_tracker)_

## Description

**qc_tracker** does the following:

- refreshes the qc_tracker by setting all the comparison datasets together from [**%proc_compare**](.\proc-compare.md)
- creates **qc_tracker_subset** dataset with the applied filters from optional macro parameters

## Defintion

```sas
%macro qc_tracker(
	name     = null,
	mismatch = null,
	topline  = null,
	before   = null,
	on       = null,
	after    = null,
	debug    = 0
);
```

## Required Parameters

None

## Optional Parameters

### _name_

Add subset by your name.

### _mismatch_

Add subset to outputs that aren't matching

### _topline_

Add subset by topline outputs.

### _before_

Add subset to outputs last run before the specified ISO Date

### _on_

Add subset to outputs last run on the specified ISO Date

### _after_

Add subset to outputs last run after the specified ISO Date

### _debug_

Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

get all my programs that are mismatching for topline that were ran on 2024-08-10

```sas
%qc_tracker(
  name     = FLastName,
  mismatch = Y,
  on       = 2024-08-10,
  topline  = Y
);
```

## Outcome

### ProjectFolder/Output/QC/Tracker/qc_tracker

Refreshes _qc_tracker_ SAS dataset and excel file that keeps track of all the relevant QC information across all programs

![](/img/macros/qc_tracker.png)

### qc_tracker_subset

Creates **qc_tracker_subset** dataset with the applied filters from optional macro parameters

## Notes
