---
sidebar_position: 3
---

# %batchModeFile

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20batchModeFile)_

## Description

**batchModeFile** is alternative batch process to [**%batch**](.\batch.md). It creats a Windows `.bat` file that runs multiple programs independently using [**SAS Batch Mode**](https://documentation.sas.com/doc/en/vdmmlcdc/8.1/pgmcli/n1nor2ldajipsvn1x42cmpr8ugq3.htm). This allows you to continue to use SAS while batch is running and study macro overwrites will not break batch.

### Usage

Make sure your project has the following folders and files from the global folder structure. The 3 `.sas` files will need their init paths updated to your project, and those template files can be found here `\EB - Public - Documents\Standards\Program Templates\Batch Mode`.
- \Programs
  - \Batch
    - \Batch Mode
        - batchMode.sas
        - runBatchModeClearLogs.sas
        - runBatchModeLogReport.sas
- \Output
  - \Logs
    - \Batch Mode
- \Restricted Data
  - \Output
    - \Logs
      - \Batch Mode

init.sas needs the following code at the bottom from the most recent global version:
```sas
%if %upcase("&sysparm") = "BATCHMODE" %then %do;
    %let progcheck = 0;
    %let p21 = 0;
    %let qc_tracker = 0;
%end;
```

  - batchMode.sas runs `%batchModeFile`. Think of this like our batch.sas file that runs the `%batch` calls.
  - runBatchModeClearLogs.sas is automatically ran in the batch file. It just runs `%batchModeClearLogs`
  - runBatchModeLogReport.sas is automatically ran in the batch file. It just runs `%batchModeLogReport`

Follow the steps in `batchMode.sas` (also listed here)
  1. Customize `%batchModeFile` parameters for your run
  2. Check `batch_mode_list` dataset or `runBatchMode.bat` file to confirm list
  3. Double click `\Programs\Batch\Batch Mode\runBatchMode.bat` in SAS Explorer or Windows to run
  4. If you ran async TFLs, after they finish call `%batchModeLogReport` or double click `\Programs\Batch\Batch Mode\runBatchModeLogReport.bat`

## Defintion

```sas
%macro batchModeFile(
  type      = null,
  dtype     = null,
  qc        = 0,
  topline   = 0,
  order     = null,
  only      = null,
  exclude   = null,
  out       = null,
  filename  = null,
  async     = 0,
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

### _dtype_
Set to one of the following:
  - `ALL`
  - `AH`
  - `DMC`

### _qc_
Set to `1` or `Y` to overwrite default run of production programs to validation programs

### _topline_  
Set to `1` or `Y` to only run topline flagged programs

### _order_ 
Set to unquoted, space-delimited list of SDTM and ADaM names to overwrite default order (e.g. `order=EC EX ADAE ADLB ADMI ADEFF`)

### _only_ 
Set to unquoted, space-delimited list of program names to be the only programs in the batch run subset (e.g. `only=DM AE ADSL ADAE t-teae l-ae`)

### _exclude_ 
Set to unquoted, space-delimited list of program names to be excluded from batch run subset (e.g. `exclude=SV`)

### _out_ or _filename_ 
Set to unquoted string to overwrite default batch file name

### _async_
Set to `1` or `Y` to run TFLs asynchronously (at the same time). This will significantly speed up your runtime, but it may also produce unexpected results.

### _debug_ 
Set to `1` or `Y` if you want to preserve all datasets, variables, and log text created by the macro for debugging purposes.

## Examples

Run QC for SDTM and ADaM
```sas
%batchModeFile(
    qc = 1,
    type = data
);
```

Run topline production for TFLs with custom name
```sas
%batchModeFile(
    topline = 1,
    type = TFL,
    filename = run_topline_TFL
);
```

Run QC ADaMs in a specific order, excluding certain domains
```sas
%batchModeFile(
    qc = 1,
    order = ADAE ADLB ADQS ADMI ADSCR ADEFF,
    exclude = ADVS ADEG,
    type = ADAM
);
```

## Outcome

## Notes
