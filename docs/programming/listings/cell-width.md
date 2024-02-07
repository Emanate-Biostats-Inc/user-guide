---
sidebar_position: 1
title: Cell Width
---

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20cellWidth)_

## Description

cellWidth creates a report that provides optimal cell width suggestions, considering all datapoint lengths across all variables, including the length of headers. Forced line breaks in the headers (@) and datapoints (~n) are also considered. The widths will rarely need to be adjusted after entering all the suggested cell widths.

cellWidth is integrated into [**%rtfbreak**](../../macros/macros-tfl/rtfbreak.md) so you don't need to call it.

## Outcome

### aa_cellwidthN

Dataset that shows the suggested cell widths for part N.

- HEADER_MAX: width of the column's largest header line
- DATA_MAX: width of the column's largest data point
- CELLWIDTH_SUGGESTION: suggested cell widths to be used in the listing code
- CELLWIDTH: current cell widths being used in the the listing
- CELLWIDTH_USED: current total cell width used across all columns
- CELLWIDTH_AVAILABLE: current total cell width available to be used

![](/img/programming/cellwidth1.png)

### aa_cellwidth_dataN

Dataset that shows unique cell width lengths for datapoints across all variables in the output for part N. It is quite helpful if adjustments ever need to be made after using the suggested cell widths.

![](/img/programming/cellwidth2.png)

### cellWidth log report

Report displays two columns for each variable in the output:

- _min_: numeric value representing the minimum cell width needed to fit all of that variable's data on one line.
- _cellWidth_: suggested optimal cell width to use for each variable.

![](/img/programming/cellwidth3.png)
