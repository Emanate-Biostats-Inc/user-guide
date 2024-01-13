---
sidebar_position: 2
---

# %batch

_Created by [**Kris Ilano**](mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%20batch)_

## Description

**batch** runs all programs from a specified folder.

## Syntax

```sas
%macro batch(
  dir,
  batch=XXX,
  type=ALL,
  inc=XXX,
  exc=XXX,
  depend1=XXX,
  depend2=XXX,
  depend3=XXX,
  depend4=XXX,
  depend5=XXX,
  QC=XXX,
  plog=XXX
);
```

## Required Parameters

### _dir_

Specified folder to run programs.

## Optional Parameters

### _batch_

### _type_

### _inc_

### _exc_

### _depend1_

### _depend2_

### _depend3_

### _depend4_

### _depend5_

### _QC_

### _plog_

## Examples

ADAE QC Program

```sas
%batch(&projdrv\programs\ADAM, inc="ADAE", QC=Y);
```

Batch program - run all SDTMs

```sas
%batch(&projdrv\programs\SDTM, batch=ON);
```

Batch program - run certain ADaMs, with ADSL and ADAE first

```sas
%batch(&projdrv\programs\ADaM,batch=ON, depend1=adsl, depend2=adae, inc="ADSL" "ADAE" "ADEFF" "ADLB" "ADGOUT");
```

## Outcome

## Notes
