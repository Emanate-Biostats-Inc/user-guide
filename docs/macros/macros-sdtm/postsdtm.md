---
sidebar_position: 2
---

# %postsdtm

_Created by [**Kris Ilano**](mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%20postsdtm)_

## Description

**postsdtm** does the following tasks:

- creates SDTM domain
- sorts based on KEYS column in Domains tab of specs
- creates xxSEQ vars
- creates xpt files
- creates SUPP domains

## Syntax

```sas
%macro postsdtm(
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
%postsdtm;
```

```sas
%postsdtm(P21=N);
```

## Outcome

## Notes
