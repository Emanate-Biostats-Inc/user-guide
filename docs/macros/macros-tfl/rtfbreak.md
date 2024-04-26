---
sidebar_position: 2
---

# %rtfbreak

_Created by [**Mark Mortier**](mailto:mark.mortier@emanatebiostats.com?subject=User%20Guide:%rtfbreak)_

## Description

**rtfbreak** macro is to be used on PROC REPORT syntax. It displays the first record at the top of a page for order variables were values span across pages and otherwise suppress the display. It also serves as a container to run other macros such as [**cellWidth**](../../programming/listings/cell-width.md) or [**style_guide_checks**](../macros-general/style-guide-checks.md).

## Defintion

```sas
%macro rtfbreak (
    _magicno =,
    _ttlrows =,
    _fnrows =,
    _headrows =,
    _debug =,
    _nodata =
);
```

## Required Parameters

None

### _base_

This is the same value you would use in a normal proc compare.

## Optional Parameters

### _\_magicno_

Overrides the value determined by the macro for the total number of observations that fit on one page of data

### _\_ttlrows_

Overrides the value determined by the macro for the total number of title statements

### _\_fnrows_

Overrides the value determined by the macro for the total number of rows absorbed by column header and column spanner text in the output

### _\_headrows_

Overrides the value determined by the macro for the total number of rows absorbed by footnotes in the output

### _\_debug_

Creates a report to the log to assist in debugging the macro by comparing the derived observational row counting performed by the macro against the actual number of rows absorbed within each record on the output

### _\_nodata_

Creates a text string for display on the output in the case where the final dataset of interest contains zero observations

## Examples

See the [**Listing Template**](../../programming/templates/listing.md) for example usage.

## Outcome

## Notes
