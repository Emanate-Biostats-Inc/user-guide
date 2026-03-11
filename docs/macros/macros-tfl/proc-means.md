---
sidebar_position: 5
---

# %proc_means

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20proc_means)_

#### ✅ QC Version: %qc_proc_means

_Created by [**Emily Johnson**](mailto:emily.johnson@emanatebiostats.com?subject=User%20Guide:%20qc_proc_means)_

## Description

**proc_means** does three main things:
1. Performs `proc means`
2. Creates character values for each test based on the precision basis from [**%precision_basis**](.\precision-basis.md)
3. Adjusts individual values (e.g. extending precision for `"-0.0"` values to the first nonzero number or setting STD to `"N/A"` when n=1) 

## Defintion

```sas
%macro proc_means(
    data  = null,
	group = null,
    by    = null,
    var   = null,
    out   = null,
    debug = 0
);
```

### _data_

This is the same value you would use in a normal proc means.

### _group_

This must be the same value used in [**%precision_basis**](.\precision-basis.md) `group=`. This should be excluded for subject-level summary stats such as `ADSL.HEIGHTBL` in a demographics table where the precision basis is the same across all records.

### _by_

This is the same value you would use in a normal proc means.

### _var_

This is the same value you would use in a normal proc means.

### _out_

This is the same value you would use in a normal proc means.

## Optional Parameters

### _debug_

Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

### Summary statistics

```sas
** get precision_basis **;
%precision_basis(
    data  = adlb,
    group = paramcd,
    var   = aval
);

** AVAL summary stats **;
%proc_means(
	data  = adlb,
	group = paramcd,
	by    = paramn param avisitn avisit trt01an,
	var   = aval,
	out   = adlb_stats_aval
);

** CHG summary stats **;
%proc_means(
	data  = adlb,
	group = paramcd,
	by    = paramn param avisitn avisit trt01an,
	var   = chg,
	out   = adlb_stats_chg
);
```

### Subject-level summary statistics

```sas
%precision_basis(
    data  = adsl,
    var   = heightbl
);

%proc_means(
	data  = adsl,
	by    = trt01an,
	var   = heightbl,
	out   = adsl_stats_heightbl
);
```

### Overwriting precision basis for specific parameters

```sas
** get precision_basis **;
%precision_basis(
    data  = adlb,
    group = paramcd,
    var   = aval
);

** overwrite precision basis for specific parameters **;
data precision_basis;
    set precision_basis;
    
    if paramcd = "HDL" then precision_basis = 2;
    if paramcd = "MCH" then precision_basis = 1;
Run;

** AVAL summary stats **;
%proc_means(
	data  = adlb,
	group = paramcd,
	by    = paramn param avisitn avisit trt01an,
	var   = aval,
	out   = adlb_stats_aval
);

** CHG summary stats **;
%proc_means(
	data  = adlb,
	group = paramcd,
	by    = paramn param avisitn avisit trt01an,
	var   = chg,
	out   = adlb_stats_chg
);
```

## Outcome

### _out_ dataset

Dataset with character statistics.

![](/img/macros/proc_means1.png)
