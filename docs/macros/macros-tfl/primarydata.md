---
sidebar_position: 4
---

# %primaryData

_Created by _

## Description

primaryData creates comparison datasets and variables to be used in `proc compare`. These dynamically update if the primary programmer changes their datasets or variables.

## Defintion

```sas
%macro primaryData;
```

## Parameters

None

## Optional Parameters

None

## Example

```sas
%batch(P:\Sponsor\Project\Biostats\Programs\TLFs, inc="l-listing");
```

```sas
%primaryData;
```

```sas
%proc_compare(
  part = 1,
  base = primary1,
  compare = qc_part1,
  var = &comparevars1,
  with = /* my vars */;
);

%proc_compare(
  part = 2,
  base = primary2,
  compare = qc_part2,
  var = &comparevars2,
  with = /* my vars */;
);
```

## Outcome

### primaryN (up to N parts)

With N number of output parts, primaryData will create datasets to be used in the proc compare.

### &compareVarsN (up to N parts)

With N number of output parts, primaryData will create macro variables to store necessary compare variables.

### primaryData log report

Log report shows the created datasets and compare variables. The log will also notify you if any of the primary variables are numeric. In this sample, the primary rtf output has two parts.

<!-- ![templateImage](img/primaryData1.PNG) -->
