---
sidebar_position: 3
---

# %batchModeFile

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20batchModeFile)_

## Description

**batchModeFile** is alternative batch process to [**%batch**](.\batch.md). It creats a Windows `.bat` file that runs multiple programs independently using [**SAS Batch Mode**](https://documentation.sas.com/doc/en/vdmmlcdc/8.1/pgmcli/n1nor2ldajipsvn1x42cmpr8ugq3.htm). This allows you to continue to use SAS while batch is running and study macro overwrites will not break batch.

### Usage

Make sure your project has the following folders and files from the global folder structure:
- \Programs
  - \Batch
    - \Batch Mode
        - \Logs
        - batchMode.sas
        - batchModeLogReport.sas

batchMode.sas and batchModeLogReport.sas can be found here: `\<Client>\<Project>\Programs\Batch\Batch Mode`.  
  - batchMode.sas runs `%batchModeFile`. Think of this like our batch.sas file that runs the `%batch` calls.
  - batchModeLogReport.sas is automatically ran in the batch file. It just calls `%batchModeLogReport`

Follow the steps in `batchMode.sas` (also listed here)
  1. **Optional**: Set batch mode options. You can turn off individual progchecks, qc_tracker runs, or P21.
  2. Customize `%batchModeFile` parameters for your run
  3. Check `batch_mode_list` dataset or `\Programs\Batch\Batch Mode\batch_mode_list.xlsx` to confirm list
  4. Double click `\Programs\Batch\Batch Mode\runBatchMode.bat` in SAS Explorer or Windows to run
  5. If you ran async TFLs, call `%batchModeLogReport` or double click `\Programs\Batch\Batch Mode\runBatchModeLogReport.bat`

## Defintion

```sas
%macro batchModeFile(
  type      = null,
  dtype     = all,
  qc        = 0,
  topline   = 0,
  order     = null,
  only      = null,
  exclude   = null,
  batchfile = null,
  async     = 0,
  clear     = 0,
  debug     = 0
  );
```

## Parameters

### _type_

Set to one of the following:
- `ALL`
- `D`, `DATA`, `DATASET`, or `DATASETS`
- `S` or `SDTM`
- `A` or `ADAM`
- `TFL`, `TFLS`, `TLF`, or `TLFS`
- `T`, `TABLE`, or `TABLES`
- `F`, `FIGURE`, or `FIGURES`
- `L`, `LISTING`, or `LISTINGS`
- `ANC` or `ANCILLARY`

### _dtype_
Set to one of the following:
  - `AH`
  - `DMC`

### _qc_
Set to `1` or `Y` to overwrite default run of production programs to validation programs

### _topline_  
Set to `1` or `Y` to only run topline flagged programs

### _order_ 
Set to unquoted, space-delimited list of SDTM and ADaM names to overwrite default order (e.g. `order=DM EC EX ADSL ADAE ADGOUT ADMI`)

### _only_ 
Set to unquoted, space-delimited list of program names to be the only programs in the batch run subset (e.g. `only=DM AE ADSL ADAE t-teae l-ae`)

### _exclude_ 
Set to unquoted, space-delimited list of program names to be excluded from batch run subset (e.g. `exclude=SV`)

### _batchfile_ 
Set to unquoted string to overwrite default batch file name

### _async_
Set to `1` or `Y` to run TFLs asynchronously (at the same time). This will significantly speed up your runtime, but it may also produce unexpected results.

### _clear_ 
Set to `1` or `Y` to clear existing .log and .lst files in Batch folder

### _debug_ 
Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

Clear logs and run QC for SDTM and ADaM
```sas
%batchModeFile(
    clear = 1,
    qc = 1,
    type = data
);
```

Clear logs and run topline production for TFLs
```sas
%batchModeFile(
    clear = 1,
    topline = 1,
    type = TFL
);
```

Clear logs and run QC ADaMs in a specific order, excluding certain domains
```sas
%batchModeFile(
    clear = 1,
    qc = 1,
    order = ADAE ADLB ADQS ADMI ADSCR ADEFF,
    exclude = ADVS ADEG,
    type = ADAM
);
```

## Outcome

## Notes
