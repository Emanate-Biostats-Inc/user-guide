---
sidebar_position: 2
---

# %postadam

_Created by [**Kris Ilano**](mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%20postadam)_

## Description

**postadam** does the following tasks:

- creates ADaM dataset
- sorts based on KEYS column in Domains tab of specs
- creates xpt files
- other post processing

## Defintion

```sas
%macro postadam(
    p21=YES,
    p21_excl=""
);
```

## Required Parameters

None

## Optional Parameters

### _p21_

Can set to N to turn off P21 checks.

### _p21_excl_

Exclude certain P21 ID codes

## Examples

```sas
%postadam;
```

```sas
%postadam(P21=N);
```

## Outcome

## Notes
