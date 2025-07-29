---
sidebar_position: 3
---

# %precision_basis

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20precision_basis)_

#### ✅ QC Version: %qc_precision_basis

_Created by [**Emily Johnson**](mailto:emily.johnson@emanatebiostats.com?subject=User%20Guide:%20qc_precision_basis)_

## Description

**precision_basis** assigns the precision basis to the given result variable based on the given by variables.

## Defintion

```sas
%macro precision_basis(
    data = null,
    by = null,
    var = null,
    debug = 0
);
```

### _data_

Set to input dataset.

### _by_

Set to unique test variables for grouping precision basis. (e.g. `LBCAT LBTESTCD LBTEST` for SDTM.LB and `PARAMCD PARAM` for ADaMs).

### _var_

Set to the name of the result variable. (e.g. `LBSTRESN` for LB and `AVAL` for ADaMs)

## Optional Parameters

### _debug_

Set to 1 or Y if you want **precision_basis** to preserve all datasets and variables created in the macro for debugging purposes.

## Examples

### Table 

_see [**%proc_means**](.\proc-means.md) for full process_

```sas
** get precision_basis **;
%precision_basis(
    data = adlb,
    by   = paramcd param,
    var  = aval
);
```

### Listing

```sas
%precision_basis(
    data = lb,
    by   = lbcat lbtestcd lbtest,
    var  = lbstresn
);
```

## Outcome

### precision_basis

Dataset with the assigned precision_basis.

![](/img/macros/precision_basis1.png)
