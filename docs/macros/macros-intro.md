---
sidebar_position: 1
title: Intro
---

This page is not meant to be a comprehensive macro guide. Instead, the goal is to provide an introduction to macros to have enough knowledge to be comfortable using all the macros on this site.

## Macro

A SAS macro is a subroutine that can be called within a larger program.
It is an "independent code module that fulfills some task and is referenced within a larger body of source code. The fundamental role is to offer a single point of reference for some goal or task that the programmer can trigger by invoking the macro." [ref](https://www.techopedia.com/definition/3727/procedure)

Subroutine is a "sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed. The content of a subroutine is its body, which is the piece of program code that is executed when the subroutine is called or invoked. A subroutine may be written so that it expects to obtain one or more data values from the calling program (to replace its parameters or formal parameters). The calling program provides actual values for these parameters, called arguments." [ref](https://en.wikipedia.org/wiki/Subroutine)

## Why

Macros increase efficiency and quality of life by providing solutions to reptitive tasks, not reinventing the wheel, etc.

Macros can make up the backbone behind an entire process (%rtfbreak) or a simple utility to check something small (%nobs)

## What Makes up a Macro?

Think of it this way. SAS has permanent, built in functions (e.g., index()). Macros are similar, but they are temporary, user-defined, and do not have to return a value. These are wiped from our SAS session after resetting(link) or closing out of SAS.

Syntactically, macros look like a function, but they act are more like a procedure.

There are three parts to a macro: the definition, the call (or invocation), and the outcome.

### Defintion

When you run the macro definition, you are basically defining a new procedure for SAS. Here is an example definition. The only requirement is %macro, %mend, and a name.

```sas
%macro exampleMacro;

    data test1;
        message = "Hello World!";
        put message;
    run;

%mend exampleMacro;
```

After running the definition, SAS has now compiled exampleMacro and stores the code it contains.

[Reference](https://www.lexjansen.com/nesug/nesug04/pm/pm07.pdf)

"Once a macro definition is submitted, the macro processor compiles the definition and produces a member in the WORK session SASMACR catalog."

### Call

Here is the call (invocation) of our macro.

```sas
%exampleMacro;
```

### Outcome

After running the call, we get the outcome of the original macro definition. This example macro created a dataset called "test1" and a message to the log, "Hello World!".

## Parameters and Arguments

Macros can be defined to have parameters. Parameters are variables in the macro definition that require the user to input arguments to be used inside the macro for specific purposes.

The macro below has three parameters: _date_, _refDate_, and _output_.

```sas
%macro studyDayDate (date, refDate, output);

    if ^cmiss(&date, &refDate) then do;
        studyDay = &date - &refDate + (&date >= &refDate);
        &output = strip(put(&date, date9.)) || " (" || strip(put(studyDay, best.)) || ")";
    end;
    else &output = strip(put(&date, date9.));

%mend;
```

Therefore, the user must input three arguments when calling the macro. In the call below, we input _aestdtn_, _trtsdt_, and _date1_.

```sas
data final;
    merge ae (in=a) adsl (in=b);
    by subjid;
    if a & b;

    %studyDayDate(aestdtn, trtsdt, date1);
run;
```

_aestdtn_ and _trtsdt_ get passed through the macro, and together they create _date1_ inside the dataset _final_.

## Optional Parameters

```sas
%macro test (date, fontsize = 9, var = true);



%mend;
```

_data_ is a required parameter, while _fontsize_ and _var_ are optional parameters.
