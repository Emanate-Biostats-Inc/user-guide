---
sidebar_position: 2
---

# %compare

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20compare)_

## Description

**compare** provides more comparison mismatch details such as the following:
- unique differences by variable
- NOBS differences
- differences after excluding NOBS differences
- number of occurrences
- full values that aren't truncated

## Defintion

```sas
%macro compare(
	base    = null,
	compare = null,
	by      = null,
	keep    = null,
	var     = null,
	with    = null,
	debug   = 0
);
```

## Required Parameters

### _base_

This is the same value you would use in a normal proc compare.

### _compare_

This is the same value you would use in a normal proc compare.

## Conditionally Required Parameter

### _by_

If NOBS are mismatching, then you have to set the categorization variables to compare NOBS by (e.g. `lbtestcd visitnum visit`)

## Optional Parameters

### _var_

This is the same value you would use in a normal proc compare.

### _with_

This is the same value you would use in a normal proc compare.

### _keep_

Set to the variables you want to keep in the `Compare_nobs` subset datasets

### _debug_

Set to 1 or Y if you want **compare** to preserve all datasets, variables, and log text created in the macro for debugging purposes.

## Examples

### SDTM/ADaM

```sas
/*
%compare(
	by      = paramcd visitnum visit,
	base    = adlb,
	compare = qc_adlb
);
*/
```

### Table/Figure/Listing

```sas
/*
%compare(
  base    = final,
  compare = qc_final,
  var     = paramn ord text col1 col2 col3,
  with    = paramn ord stat trt1 trt2 trt3
);
*/
```

## Outcome

### Datasets
#### NOBS Differences
`Compare_nobs` – Mismatching NOBS by user-provided variables

`Compare_nobs_base` – Base dataset subset to mismatching NOBS

`Compare_nobs_compare` – Compare dataset subset to mismatching NOBS

#### Value Differences
`Compare_by_var_unique` – unique mismatches sorted by variable name

`Compare_by_var` – all mismatches sorted by variable name

`Compare_by_obs` – all mismatches sorted by observation then variable name

![](/img/macros/compare1.png)

## Notes

If NOBS are mismatching, the macro will provide a warning to use the `by=` parameter if it's not already used. It will provide compare_nobs results and subset the base/compare datasets to excluding mismatching nobs to provide value mismatch details.

❗Always keep compare wrapped in a comment so it doesn't run during batch and you can still run it to isolate mismatches.

### Possible REASONS values
* Casing
* Precision or rounding
* Base populated, compare missing
* Base missing, compare populated
* Value mismatch

