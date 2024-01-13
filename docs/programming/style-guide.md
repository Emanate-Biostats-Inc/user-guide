---
sidebar_position: 1
title: Style Guide
---

These conventions are to improve the maintenance, readability, and efficiency of our code.

## Templates

- Always use a template to start your first program type for a new study.

Our SAS processes are dynamic, and our [**program templates**](./templates/sdtm.md) will always have the most current implementation. These templates also follow every rule in this style guide.

Identical program types involve repeated code. Therefore, it frequently makes sense to copy previous programs to create new ones. Feel free to do this only after you have copied over the template for your first program type.

## Indentation

- Always indent nested code such as data steps, proc statements, do blocks, and macro definitions. Use tab or two spaces.

Whether you use tabs or spaces, the most important thing is to **keep your code consistent** (i.e., avoid switching between tabs or spaces for regular indentations).

#### Good

```sas
proc sort data = test;
    by visitnum;
run;

data indent;
    set test;

    if index(upcase(visit), "DAY") then do;
        if visitnum < 5 then put "Visit Day is less than 5";
        else if 5 <= visitnum < 10 then put "Visit Day is in between 5 and 9";
        else put "Visit Day is greater than 9";
    end;
run;
```

#### Bad

```sas
proc sort data = test;
by visitnum;
run;

data indent;
set test;

if index(upcase(visit), "DAY") then do;
if visitnum < 5 then put "Visit Day is less than 5";
else if 5 <= visitnum < 10 then put "Visit Day is in between 5 and 9";
else put "Visit Day is greater than 9";
end;
run;
```

## Spacing

- Place spaces around all binary operators (=, +, -, <=, etc.). However, there are a couple exceptions. Spaces around (=) are optional when passing optional arguments through a macro call. Spaces around (-) are optional when initializing a range of variables.

- Place spaces around the logical operators (& and |), but not after (^).

- Always place a space after a comma, but do not place one before a comma.

- Place a space before left parenthesis, except for functions and macro calls.
- Do not place spaces around code in parentheses or square brackets.

- Extra spacing is encouraged if it improves alignment of multiple lines with similar code

#### Good

```sas
data spacing;
    length unsvisit $40;
    set test;
    where ^missing(visitnum) & (subjid =: "001" | site = "02");

    if visitnum >= 100 & index(upcase(visit), "UNS") then do;
        put "This is an unscheduled visit.";
        unsvisit = strip(visit);
    end;
run;
```

#### Bad

```sas
data spacing;
    set test;
    where ^missing ( visitnum ) & (subjid=:"001"|site="02");

    if visitnum>=100 & index(upcase(visit),"UNS") then do;
        put "This visit is unscheduled.";
        unsvisit = strip ( visit );
    end;
run;
```

## Alignment

- Use extra spaces and consistent numerical precision to align similar lines of code (e.g., proc report statements, macro calls, etc.).

#### Good

```sas
define space       / order   order = internal noprint;
define subjid      / order   style = [cellwidth = 0.75 in just = c] "Subject ID";
define trt01an     / order   order = internal noprint;
define trt01a      / order   style = [cellwidth = 1.10 in just = l] "Treatment Group";
define daten       / order   order = internal noprint;
define visitnum    / order   order = internal noprint;
define visit       / display style = [cellwidth = 1.00 in just = l] "Visit";
define date        / display style = [cellwidth = 1.05 in just = c] "Collection Date@(Study Day~{super [1]})";
define temp        / display style = [cellwidth = 0.80 in just = c] "Temperature@(°C)";
define hrate       / display style = [cellwidth = 0.80 in just = c] "Heart Rate@(beats/min)";
define rrate       / display style = [cellwidth = 1.00 in just = c] "Respiratory Rate@(breaths/min)";
```

#### Bad

```sas
define space     / order order = internal noprint;
define subjid       / order style = [cellwidth = 0.75 in just = c] "Subject ID";
define trt01an  / order order = internal noprint;
define trt01a     / order style = [cellwidth = 1.1 in just = l] "Treatment Group";
define daten    / order order = internal noprint;
define visitnum    / order order = internal noprint;
define visit        / display style = [cellwidth = 1 in just = l] "Visit";
define date    / display style = [cellwidth = 1.05 in just = c] "Collection Date@(Study Day~{super [1]})";
define temp     / display style = [cellwidth = .8 in just = c] "Temperature@(°C)";
define hrate      / display style = [cellwidth = 0.8 in just = c] "Heart Rate@(beats/min)";
define rrate      / display style = [cellwidth = 1 in just = c] "Respiratory Rate@(breaths/min)";
```

#### Good

```sas
%supp(atc3txt, "ATC3TXT", "ATC Level 3 Text",             %str(strip(upcase(atc3txt))), "ASSIGNED");
%supp(atc3,    "ATC3", 	  "ATC Level 3 Code",             %str(strip(upcase(atc3))),    "ASSIGNED");
%supp(scat,    "SCAT", 	  "Subcategory for Intervention", %str(strip(upcase(xnscat2))), "EDT");
%supp(stdname, "STDNAME", "WHO Standard Name",            %str(strip(upcase(stdname))), "ASSIGNED");
```

#### Bad

```sas
%supp(atc3txt, "ATC3TXT", "ATC Level 3 Text", %str(strip(upcase(atc3txt))), "ASSIGNED");
%supp(atc3, "ATC3", "ATC Level 3 Code", %str(strip(upcase(atc3))), "ASSIGNED");
%supp(scat, "SCAT", "Subcategory for Intervention", %str(strip(upcase(xnscat2))), "EDT");
%supp(stdname, "STDNAME", "WHO Standard Name", %str(strip(upcase(stdname))), "ASSIGNED");
```

## Line Breaks

- Always break to a new line after the end of a line ( ; ).
- Create a blank line to separate unique processes.

#### Good

```sas
proc sort data = test;
    by subjid;
run;

data linebreaks;
    length reason $100;
    set test;
    where ^missing(stdtc);

    visit = strip(visit_raw);

    if ^missing(reas_oth) then reason = "Other: " || strip(reas_oth);
    else reason = strip(reas);
run;
```

#### Bad

```sas
proc sort data = test; by subjid; run;

data linebreaks;
    length reason $100;
    set test;
    where ^missing(stdtc);
    visit = strip(visit_raw);
    if ^missing(reas_oth) then reason = "Other: " || strip(reas_oth);
    else reason = strip(reas);
run;
```

## Naming

- Use unique names.

- Be succinct.

- Use meaningful names, especially for final variables. Someone else should be able to know what they are by the name.

- Avoid extraneous prefixes and suffixes such as (x, z, \_, -, etc.). However, ( \_ ) can be used as a prefix for datasets or macro variables to intentionally force their visibility to the bottom of explorer.

With a listing column titled "Any Abnormal Findings?", here are example variable names.

#### Good

anyfind, findings, or abnfind

#### Bad

xpeperf, var4, \_peorres, or aaa

## Casing

Certain casing makes sense for different code elements. Examples include lowercase, UPPERCASE, camelCase, PascalCase, and snake_case.

The most important thing is to **keep your code consistent.** If you decide to use uppercase for your variables, avoid having any lowercase variables and vice versa. Ctrl + Shift + L transforms your selection to lowercase. Ctrl + Shift + U transforms your selection to uppercase.

## Operators

### Arithmetic Operators

| Symbol | Definition     |
| ------ | -------------- |
| +      | addition       |
| -      | subtraction    |
| \*     | multiplication |
| /      | division       |
| \*\*   | exponentiation |

### Comparison Operators

| Symbol | Mnemonic | Definition               |
| ------ | -------- | ------------------------ |
| =      | eq       | equal to                 |
| ^=     | ne       | not equal to             |
| >      | gt       | greater than             |
| <      | lt       | less than                |
| >=     | ge       | greater than or equal to |
| <=     | le       | less than or equal to    |
|        | in       | equal to one of a list   |

### Colon Prefix

You can compare a specified prefix of a character expression by using a colon ( : ) after the comparison operator.

This reads as _visit does not start with "UNS"._

```sas
visit ^=: "UNS"
```

This reads as _lbcat starts with "HEMA" or "CHEM"._

```sas
lbcat in: ("HEMA" "CHEM")
```

### Logical (Boolean) Operators

| Symbol | Mnemonic |
| ------ | -------- |
| &      | and      |
| &#x7c; | or       |
| ^      | not      |

## Comments

- Comments are encouraged to identify or explain code.
- Be consistent with how you comment.

Commenting code helps everyone, especially your future self and anyone who has to go into your program.

### Minor Comments

Minor comments are for identifying or explaining code. Here are some notable examples.

- where clauses
- hardcodes
- purpose of a cryptic dataset
- algorithms

```sas
** minor comment **;
```

### Slash Comments

- inline comments
- multiline comments
- temporarily remove code that you don't want to run

```sas
/* slash comment */
```

Ctrl + / comments out a selection. Ctrl + Shift + / uncomments a selection. Be careful since any existing comments or slash comments could hinder commenting blocks of code. If you want to preserve those comments, wrap the code block in a macro definition.

### Sections

These comments are for extremely long programs where you need to tag your attention towards a particular section (e.g., patient profile with 12 listings in a single program or QS domains with multiple questionnaires)

```sas
/*****************************************************************************************
** Section Name **************************************************************************
*****************************************************************************************/
```

## Flow

The order of program elements is usually crucial. In other cases, it's still ideal to have standard flow to improve organization and readability.

1. Accurate header
2. Init, setup, and formats at the top of the program
3. Data processing
4. Final output

## Efficiency

If you need to do the same process more than 1-2 times, **you should probably use an array or macro.** Duplicated code is a [common code smell](https://en.wikipedia.org/wiki/Code_smell) that should be avoided.

### Keep

TODO

### Drop

TODO

### Rename

TODO

### If

TODO

### Where

TODO
