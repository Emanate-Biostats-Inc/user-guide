---
sidebar_position: 4
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
    by    = null,
    var   = null,
    out   = null,
    debug = 0
);
```

### _data_

This is the same value you would use in a normal proc means.

### _by_

This is the same value you would use in a normal proc means.

### _var_

This is the same value you would use in a normal proc means.

### _out_ or _output_

This is the same value you would use in a normal proc means.

## Optional Parameters

### _debug_

Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

### Table summary stats

```sas
** get precision_basis **;
%precision_basis(
    data = adlb,
    by   = paramcd param,
    var  = aval
);

** AVAL summary stats **;
%proc_means(
	data = adlb,
	by   = paramcd param avisitn avisit trt01an,
	var  = aval,
	out  = adlb_stats_aval
);

** CHG summary stats **;
%proc_means(
	data = adlb,
	by   = paramcd param avisitn avisit trt01an,
	var  = chg,
	out  = adlb_stats_chg
);
```

### Overwriting precision basis for specific parameters

```sas
** get precision_basis **;
%precision_basis(
    data = adlb,
    by   = paramcd param,
    var  = aval
);

** overwrite precision basis for specific parameters **;
data precision_basis;
    set precision_basis;
    
    if paramcd = "HDL" then precision_basis = 2;
    if paramcd = "MCH" then precision_basis = 1;
Run;

** AVAL summary stats **;
%proc_means(
	data = adlb,
	by   = paramcd param avisitn avisit trt01an,
	var  = aval,
	out  = adlb_stats_aval
);

** CHG summary stats **;
%proc_means(
	data = adlb,
	by   = paramcd param avisitn avisit trt01an,
	var  = chg,
	out  = adlb_stats_chg
);
```

## Outcome

### _out_ dataset

Dataset with character statistics.

![](/img/macros/proc_means1.png)
