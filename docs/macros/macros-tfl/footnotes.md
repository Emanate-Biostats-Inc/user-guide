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

### _part_

Set to part number

### _population_

Set to population number

## Examples

### Programming Log - Footnotes Tab
**Codes** are shorthand codes you can use in the Abbreviations, Notes, and Supers columns that translate to their associated value (and abbreviation). This helps manage updates by having one source instead of having to apply updates across many outputs.
![](/img/macros/footnotes2.png)

### Programming Log - Tables and Listings Columns
- Wrap all footnote codes or actual footnotes in double curly braces (e.g. `{{Here is my first footnote}}` or `{{STUDY DAY}}`). 
- Order matters for **Notes** and **Supers**, as that is the order that will be inherited in the output.
- Order does not matter for **Abbreviations**

#### Multiple Parts or Populations
- If you want to create different footnotes across multiple parts or populations, prefix these with a rhombus `<>`
- If you do this, you must always include as many `<>` as parts or populations in your output
- Any **Abbreviations** footnotes before the first `<>` are included across all parts.
![](/img/macros/footnotes1.png)

### SAS Program

**%footnotes** replaces your previous footnote statements.

1. Table/Listing

```sas
%footnotes;
```

2. Listing with multiple parts
Use part parameter to set which population that proc report corresponds to.

```sas
%footnotes(part=3);
```

3. Table with multiple populations
Use population parameter to set which population that proc report corresponds to.

```sas
%footnotes(population=2);
```

## Outcome

## Notes
