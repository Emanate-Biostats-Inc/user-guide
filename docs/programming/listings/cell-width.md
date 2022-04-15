---
sidebar_position: 1
title: Cell Width
---

_Created by [Jonathan Amato](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20cellWidth)_

## Description

cellWidth creates a report that provides optimal cell width suggestions, considering all datapoint lengths across all variables, including the length of headers. Forced line breaks in the headers (@) and datapoints (~n) are also considered. The widths will rarely need to be adjusted after entering all the suggested cell widths.

## Syntax

cellWidth is already built into `%rtfbreak`. It automatically gets called so cellWidth report will always be displayed after rtfBreak report.

## Parameters

None

## Optional Parameters

None

## Example

None

## Outcome

### \_cwData

Dataset that shows unique cell width lengths for datapoints across all variables in the output. It is quite helpful if adjustments ever need to be made after using the suggested cell widths.

### cellWidth log report

Report displays two columns for each variable in the output:

- _min_: numeric value representing the minimum cell width needed to fit all of that variable's data on one line.
- _cellWidth_: suggested optimal cell width to use for each variable.

<!-- ![templateImage](img/cellWidth1.PNG) -->
