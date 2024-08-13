---
sidebar_position: 1
---

# %footnotes

_Created by [**Jonathan**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%footnotes)_

## Description

**footnotes** is used in combination with the programming log to create your Table and Listing footnote statements.

## Defintion

```sas
%footnotes;
```

## Required Parameters

None

## Optional Parameters

### _part_ (default is 1)

Set to part or population number

### _excel_ (default is false)

Turn on by setting to either 1, Y, Yes, YES, On, ON

### _rtfbreak_ (default is true)

Turn off by setting to either 0, N, No, NO, Off, OFF

## Examples

### Programming Log - Footnotes Tab
**Codes** are shorthand codes you can reuse in the **Abbreviations**, **Notes**, and **Supers** columns that translate to their associated value (and abbreviation). This helps manage updates by having one footnote source instead of across many programs.
![](/img/macros/footnotes2.png)

### Programming Log - Tables and Listings Columns
- Wrap all footnote codes or actual footnotes in double curly braces (e.g. `{{Here is my first footnote}}` or `{{STUDY DAY}}`). 
- Order matters for **Notes** and **Supers**, as that is the order that will be inherited in the output.
- Order does not matter for **Abbreviations**

#### Multiple Parts or Populations
- If you want to create different footnotes across multiple parts or populations, prefix these with a rhombus `<>`
- If you do this, you must always include as many `<>` as parts or populations in your output
- Any footnotes before the first `<>` are included across all parts.
![](/img/macros/footnotes1.png)

### SAS Program

**%footnotes** replaces your previous footnote statements.

1. Table/Listing

```sas
%footnotes;
```

2. Excel Listing
```sas
%footnotes(excel=Y);
```

3. Table/Listing without %rtfbreak

```sas
%footnotes(rtfbreak=N);
```

4. Listing with multiple parts

Use _part_ parameter to set which part that proc report corresponds to.

```sas
%footnotes(part=3);
```

5. Table with multiple populations

Use _part_ parameter to set which population that proc report corresponds to.

```sas
%footnotes(part=2);
```

## Outcome

## Notes
