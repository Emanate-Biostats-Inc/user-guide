---
sidebar_position: 8
---

# %await

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%await)_

## Description

**await** waits until a file exists before continuing.

## Defintion

```sas
%macro await(
    file,
    wait_seconds = 1,
    max_wait     = 60,
    debug        = 0
);
```

## Required Parameters

### _file_
Pass `%str(your_file_path)`

## Optional Parameters

### _wait\_seconds_

Default is 1. Set to number of seconds to wait between each check.

### _max\_wait_

Default is 60. Set to number of seconds until the macro times out if the file still does not exist.

### _debug_

Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

```sas
%await(%str(C:\test\test.sas7bdat), max_wait=30);
```

## Outcome

Log messages

## Notes
