---
sidebar_position: 1
title: Keys
---

## Description

Keys are customizable keyboard shortcuts for SAS that allow you to perform actions such as clear the log, submit SAS code, or reset your SAS session. Enhanced editor keys are built-in keyboard shortcuts you can use while in the enhanced editor.

## Keys

### View / Modify

**Tools** > **Options** > **Keys** (or F9)

Unfortunately, SAS doesn't allow copy paste in this window. You have to type out the key definition. Close out of the window to save.

![](/img/settings/keys1.png)

### Examples

This command resets your SAS session. It is highly recommended when running different programs (especially from different studies) or to solve session errors. [More detail on resetting your SAS session here.](reset-key.md)

```
wpgm;submit "%include 'O:\Biometrics\General\SAS\Set-up\reset.sas';"
```

This command clears your log and returns to your active enhanced editor window.

```
log;clear;wpgm
```

This command deletes all work datasets.

```
wpgm;submit "proc delete lib=work data=_all_;run;"
```

## Enhanced Editor Keys

### View

**View** > **Enhanced Editor**

**Tools** > **Options** > **Enhanced Editor Keys**

![](/img/settings/keys2.png)

### Examples

| Name                                   | Keys             |
| -------------------------------------- | ---------------- |
| Comment out current selection          | Ctrl + /         |
| Convert current selection to lowercase | Ctrl + Shift + L |
| Convert current selection to uppercase | Ctrl + Shift + U |
| Got to line                            | Ctrl + G         |
| Indent selection                       | Tab              |
| Uncomment current selection            | Ctrl + Shift + / |
| Unindent selection                     | Shift + Tab      |

Reference the above window in SAS to see the rest.
