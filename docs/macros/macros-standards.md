---
sidebar_position: 2
title: Standards
---

These macro conventions are to improve the usability, reliability, and efficiency of our code. 
Macros defined within your individual programs and used only by you are not required to follow these rules.

## Goals

It's important to design our macros in a way that strive to meet the following goals:

### Usability
Macros should be designed in a consistent and simple fashion so users can intuitively use them. 

### Error Handling
Macro's should implement robust error handling so the user doesn't have to debug a broken macro. If the macro doesn't work, it should provide a message to explain why.

### Quality of Life
Macros should add efficiency to our workflow, not complexity. 

## %qc macros

QC macros must adhere to the following rules:
* stored in the `\Macros\QC` subfolder
* must use the same name as production version with `qc_` prefix
* must use the same parameters and order as production version
* must produce the same outcomes as production version

## %put result
If your macro produces a dataset or output for the user, %put a simple and helpful messages at the end of the macro telling the user this information such as the name and/or where it is located.

## Dataset and variable naming
Prefix all temporary datasets and variables created inside a macro with `_macro name acronym_`. For example, in %proc\_compare, all datasets are prefixed with `_pc_`. The exception to this rule is when you want to provide the user or subsequent macros with a dataset (e.g. %importProgLog creates _\_programminglog_, %rtfbreak creates _cellwidth_ and _style\_guide_ datasets, %presdtm creates controlled terminology datasets). This accomplishes the following:
* Sorts all temp datasets after other datasets that don’t start with an underscore
* Declutters the user’s working dataset library with only necessary datasets so they can find things easier (in combination with next standard)
* Avoids clashes with existing datasets
* The macro tracker has reserved prefixes for macros. For example, %proc\_compare uses `_pc_` and %progcheck uses `_pchk_`

## Preserve original dataset
Never overwrite or modify the original dataset. Instead, create a new, temporary one inside the macro. The user's original dataset should be left alone, as is the case when you use it in a datastep or procedure.

## Don't assume 
Unless it's passed as a macro argument don't assume a specific variable exisists. If the macro requires it, you can run a proc contents on the data and provide a log warning for the expectation or have it as a macro parameter.

## Debug Mode
By default, macros should do the following:
* delete temporary macro datesets and variables
* turn off log text while running
* have a debug parameter the user can use to turn debug mode on to preserve all datasets, variables, and log text created by the macro for debugging purposes.

Add debug option to all macros with the following code.
* Because we prefixed all datasets with `_mm_` we can delete them all at once. However, if you need to debug you can bring them back with the debug option `%my_macro(debug=1);` or `%my_macro(debug=Y);`
 
### Example
```sas
%macro my_macro(param1, param2, param3, debug=0);
    %if "&debug" = "0" %then %do;
        options nonotes nomprint;
    %end;

    /*
    my_macro code
    */
 
    ** unless debug = 1 or debug = Y is provided, delete all temp datasets **;
    %if "&debug" = "0" %then %do;
        proc datasets library=work memtype=data nolist;
            delete _mm_:;
        quit;
    %end;

    %if "&debug" = "0" %then %do;
      options notes mprint;
    %end;
%mend my_macro;
```

## Sanitize user inputs
Sanitize all user inputs so they don’t have to remember if the macro is expecting uppercase, lowercase, or a certain value. If the user then inputs something unexpected, provide a log warning that notifies the user of the macro's expectation.

## %global variable naming
If you absolutely need to create a %global macro variable for another macro, prefix it with the same dataset and variable prefix `_macro name acronym_` to avoid clashing with other macro variables.

## Macros used inside a data step
If a macro is used inside a data step such as `%iso8601` or `%propcase` we have less flexibility with some of the above standards, but we can still apply the same principles. In this example we prefix the variables created by `%procase` with `_prop_`, and that allows us to avoid clashes and delete the temporary macro variables by default. If the user turns on debug mode then it will keep the temporary macro variables.

### Example
```sas
%macro propcase(var, debug=0);

    ** %propcase code **;
    length _prop_word1 - _prop_word40 $12;

    %if "&debug" = "0" %then %do;
	      drop _prop_:;
    %end;

    %put %upcase(NO)TE:(EB) PROPCASE - %upcase(&var) has been propcased ignoring title words.;

%mend;
```
