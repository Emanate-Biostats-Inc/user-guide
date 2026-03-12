---
sidebar_position: 4
---

# %importProgLog

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20importProgLog)_

## Description

Imports the programming log tabs into one dataset with standardized column names.

## Defintion

```sas
%macro importProgLog(debug=0);
```

## Required Parameters

None

## Optional Parameters

### _debug_

Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Example

If the `_programminglog` dataset doesn't exist, run the macro to create it. This code is already included in init.sas.
```sas
%if ^%sysfunc(exist(_programminglog)) %then %do;
    %importProgLog;
%end;
```

## Outcome

### _programminglog dataset
