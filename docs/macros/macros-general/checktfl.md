---
sidebar_position: 3
---

# %checkTFL

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20checkTFL)_

## Description

**checkTFL** checks your final TFL dataset for Style Guide rules and provided datasets and log reports. This is automatically called inside [**%rtfbreak**](../macros-tfl/rtfbreak.md) for production table and listing programs. Validation TFL programmers can also call this if they want on their final datasets.

## Syntax

```sas
%macro checkTFL(
    dataset,
    footnotes = null,
    part = 0,
    debug = 0);
```

## Required Parameters

### _dataset_

## Optional Parameters

### _footnotes_

Set to footnote dataset. This is only used inside the %rtfbreak call.

### _part_

Set to part number. This is only used inside the %rtfbreak call.

### _debug_

Set to 1 if you want **checkTFL** to preserve all datasets created in the macro for debugging purposes.

## Examples

```sas
%checkTFL(qc_final);
```

## Outcome

Log warnings for any style guide voilations.

![](/img/macros/checktfl1.png)

### aa_style_guide_bodyN

Dataset that provides more detail for the body violations. It shows expected values and even code to copy in order to fix the style guide issue.

![](/img/macros/checktfl2.png)

### aa_style_guide_footN

Dataset that provides more detail for the footnote violations and expected fixes.

![](/img/macros/checktfl3.png)

## Notes
