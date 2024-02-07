---
sidebar_position: 1
---

# %batch_qc

_Created by [**Kris Ilano**](mailto:kristoffer.ilano@emanatebiostats.com?subject=User%20Guide:%20batch)_

## Description

**batch** runs all programs from a specified folder.

## Defintion

```sas
%macro batch_qc(
  qc_dir,
  qc_batch=XXX,
  qc_type=XXX,
  qc_inc=XXX,
  qc_exc=XXX,
  qc_validator=XXX
  );
```

## Required Parameters

### _qc_dir_

Specified folder to run programs.

## Optional Parameters

### _qc_batch_

### _qc_type_

### _qc_inc_

### _qc_exc_

### _qc_validato_

## Examples

Run all ADaM QC programs

```sas
%batch_qc(&projdrv\programs\QC, qc_batch=ON, qc_type=ADAM);
```

## Outcome

## Notes
