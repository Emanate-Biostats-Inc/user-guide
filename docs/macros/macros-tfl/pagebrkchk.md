---
sidebar_position: 2
---

# %pagebrkchk

_Created by [**Kris Ilano**](mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%pagebrkchk)_

## Description

**pagebrkchk** checks indended number of pages in rtfbreak vs actual number of pages in the listing and provides a log message. This works in conjuction with the rtfbreak macro.

## Defintion

```sas
%macro pagebrkchk;
```

## Required Parameters

None

## Optional Parameters

None

## Examples

```sas
** previuos proc report code here **;
%rtfbreak;

ods tagsets.rtf close;
ods listing;

%pagebrkchk;
```

## Outcome

## Notes
