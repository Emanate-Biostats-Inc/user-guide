---
sidebar_position: 2
title: Standards
---

These macro conventions are to improve the usability, reliability, and efficiency of our code. 
Macros defined within your individual programs and used only by you are not required to follow these rules.

## Why

It's important to design our macros in a way that strive to meet the following goals

#### Intuitive and simple to use
Users shouldn't 

#### Reliable
Macro's should implement robust error handling so the user is never stumped with an error or issue. If the macro doesn't work, it should at least provide a message to explain why.

#### Quality of Life
Macros should add efficiency to our workflow and not complexity. 

## Overview
* Store QC Macros in the `\Macros\QC` subfolder and use the same name (prefixed with "qc_"), parameters, and parameter order.
* Use %put at the end to tell the user what the macro accomplished (e.g. the name of the resulting dataset and/or variables it created)
* Add debug mode to all macros
* Sanitize user inputs

## %qc macros

QC macros must adhere to the following conditions:
* stored in the `\Macros\QC` subfolder
* must use the same name as production version with "qc_" prefix
* must use the same parameters and order as production version

## %put result
If your macro produces a dataset or output for the user, %put a simple and helpful messages at the end of the macro telling the user this information such as the name and/or where it is located.

## Dataset naming
Prefix all datasets created inside a macro with “\_macro name acronym_”. For example, in %proc_compare, all datasets are prefixed with “\_pc_”. The exception to this rule is when you want to provide the user or subsequent macros with a dataset (e.g. %epoch creates a new dataset with epoch, %rtfbreak creates cellwidth and style_guide datasets, %presdtm creates controlled terminology datasets). This accomplishes the following:
* Sorts all temp datasets after other datasets that don’t start with an underscore
* Declutters the user’s working dataset library with only necessary datasets so they can find things easier (in combination with next standard)
* Avoids clashes with existing datasets
I already added a reserved prefix column to our macro tracker. For example, %proc_compare uses \_pc_: and %progcheck uses \_pchk_:

## Preserve Original Dataset
Never overwrite or modify the original dataset. Instead, use it to create a new one.

## Don't assume 
* For example, unless it's passed as a macro argument don't assume a specific variable exisists. If the macro requires it, you can run a proc contents on the data and provide a log warning for the expectation or have it as a required macro parameter.

## Debug Mode
By default, macros should do the following:
* delete temporary macro datesets and variables
* turn off log text while running

Debug mode doesn't delete datasets and keeps log text.

Add debug option to all macros with the following code.
* Because we prefixed all datasets with “\_mm_” we can delete them all at once. However, if you need to debug you can bring them back with the debug option -> `%my_macro(debug=1);` or `%my_macro(debug=Y);`
 
### Example
```sas
%macro my_macro(param1, param2, param3, debug=0);
    %if "&debug" = "0" %then %do;
		options nonotes nomprint;
	%end;

    ** my_macro code **;
 
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
Sanitize all user inputs so they don’t have to remember if the macro is expecting uppercase, lowercase, or a certain value. If the user then inputs something unexpected, provide a log warning that notifies the user they did something wrong.

## %global variable naming
If you need to create a %global macro variable, prefix it with the same dataset prefix “\_macro name acronym_” to avoid clashing with other macro variables.
Example

## Macros used inside a data step
If a macro is used inside a data step such as `%iso8601` or `%propcase` we have less flexibility with some of the above standards, but we can still apply the same principles. In this example we prefix the variables created by `%procase` with \_prop_, and that allows us to avoid clashes and delete the temporary macro variables by default. If the user turns on debug mode then it will keep the temporary macro variables.

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


## Bringing it all together
 
%macro epoch(indata, isodate, debug=0);
* Should only create one dataset with the new EPOCH variable. If you want to debug the macro and see all its datasets, you can call %epoch(indata, isodate, debug=1).
* Should tell the user what dataset it just created for them
* %put &indata._epoch has been created with the new variable EPOCH;

```sas
%macro epoch(indata, isodate, debug=0);
    %if "&debug" = "0" %then %do;
		options nonotes nomprint;
	%end;

    ** my_macro code **;
 
    ** unless debug = 1 or debug = Y is provided, delete all temp datasets **;
    %if "&debug" = "0" %then %do;
        proc datasets library=work memtype=data nolist;
        delete _mm_:;
         quit;
    %end;

    %if "&debug" = "0" %then %do;
	  options notes mprint;
	%end;
%mend epoch;

```
