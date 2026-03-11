---
sidebar_position: 4
---

# %precision_format

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20precision_format)_

#### ✅ QC Version: %qc_precision_format

_Created by [**Emily Johnson**](mailto:emily.johnson@emanatebiostats.com?subject=User%20Guide:%20qc_precision_format)_

## Description

**precision_format** creates RESULT, LOW, and HIGH character variables from [**%precision_basis**](.\precision-basis.md) for use in listings.

## Defintion

```sas
%macro precision_format(
    o = null,
    c = null,
    l = null,
    h = null,
    debug = 0
);
```

### _o_

Set to the domain's xxORRES variable.

### _c_

Set to the domain's xxSTRESC variable.

## Optional Parameters

### _l_

Set to the domain's xxSTNRLO variable.

### _h_

Set to the domain's xxSTNRHI variable.

### _debug_

Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

### Listing

```sas
proc sort data = lb;
    by lbcat lbtestcd;
run;

%precision_basis(
    data  = lb,
    group = lbcat lbtestcd,
    var   = lbstresn
);

data lb1;
    merge lb (in=a) qc_precision_basis;
    by lbcat lbtestcd;
    if a;

    %precision_format(o=lborres, c=lbstresc);
run;
```

### Listing with ranges

```sas
proc sort data = lb;
    by lbcat lbtestcd;
run;

%precision_basis(
    data  = lb,
    group = lbcat lbtestcd,
    var   = lbstresn
);

data lb1;
    merge lb (in=a) qc_precision_basis;
    by lbcat lbtestcd;
    if a;

    %precision_format(o=lborres, c=lbstresc, l=lbstnrlo, h=lbstnrhi);
run;
```

## Outcome

### RESULT
RESULT character variable is created as your formatted value using precision_basis.

### LOW and HIGH
LOW and High character variables are created as your formatted value using precision_basis if you also pass L and H.