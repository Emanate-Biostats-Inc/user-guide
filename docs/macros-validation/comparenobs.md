---
sidebar_position: 1
---

# %compareNobs

<!-- This document is used as the live template for other macro documentation -->

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20compareNobs)_

## Description

compareNobs creates a dataset that compares mismatching observation counts between two datasets by the specified variables. It also creates _comparenobs_dataset1_ and _comparenobs_dataset2_ datasets that are subsets of the original datasets (based on mismatches). This macro should be used whenever there is a mismatch on observation counts with the production programmer. It is not meant to be left in your code, so always call this macro while inside a comment block.

## Syntax

```sas
/*
%macro compareNobs(dataset1, dataset2, vars, keep=_all_, debug=0);
*/
```

## Required Parameters

### _dataset1_

Specifies the name of the first dataset being compared. Arguments can be from libraries other than work (e.g., adam.adlb).

### _dataset2_

Specifies the name of the second dataset being compared.

### _vars_

Specifies the name of the variables being compared

## Optional Parameters

### _keep_

TODO

### _debug_

TODO

## Examples

1.

```sas
/*
%compareNobs(prod_final, qc_final, subjid);
*/
```

2.

```sas
/*
%compareNobs(adam.adlb, qc_final, usubjid paramn paramcd);
*/
```

## Outcome

### cnobs datasets

TODO 1, 2, 3 "comparenobs_datasets"
