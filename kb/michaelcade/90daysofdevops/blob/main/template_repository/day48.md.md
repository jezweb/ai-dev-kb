# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md
Language: bash

## Snippet: Comparing Strings in BASH
Description: Script that demonstrates string comparison in BASH using the = operator to check if two strings are equal and the != operator to check if they are different.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md#2025-04-17_snippet_3
Language: bash

```bash
#!/bin/bash

stringvar1="Michael"
stringvar2="Michael"
stringvar3="Cade"

if [ "$stringvar1" = "$stringvar2" ]
then
    echo "String are equal"
else
    echo "Strings are not equal"
fi

#Check if strings are not equal
if [ "$stringvar1" != "$stringvar3" ]
then
    echo "Strings are not equal"
else
    echo "Strings are equal"
fi
```

## Snippet: Arithmetic Operations in BASH Script
Description: Script showing arithmetic operations in BASH including addition, multiplication, and modulus. It demonstrates using the let command and different operators for calculations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md#2025-04-17_snippet_4
Language: bash

```bash
#!/bin/bash

let a=5+4
echo $a

let "a = 5 + 4"
echo $a

let a++
echo $a

let "a = 4 * 5"
echo $a

let "a = $1 + 30"
echo $a
```

## Snippet: Using File Test Operators in BASH
Description: Examples of various file test operators used in BASH scripting to check file properties such as existence, readable status, and whether a file is a directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md#2025-04-17_snippet_1
Language: bash

```bash
-e: Returns true value if file exists
-f: Return true value if file exists and regular file
-r: Return true value if file exists and is readable
-w: Return true value if file exists and is writable
-x: Return true value if file exists and is executable
-d: Return true value if exists and is a directory
```

## Snippet: Creating a BASH Script for File Existence Check
Description: Script that checks if a file exists and prints appropriate messages. It demonstrates the use of the -f flag with the test command to verify file existence.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md#2025-04-17_snippet_0
Language: bash

```bash
#!/bin/bash

file=~/randomfile

if [ -f "$file" ]
then
    echo "$file exists"
else 
    echo "$file doesn't exist"
    touch ~/randomfile
fi
```

## Snippet: BASH Script for File Comparison
Description: Script comparing two files using the -ef operator. It demonstrates how to check if two file paths point to the same inode on the filesystem.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md#2025-04-17_snippet_2
Language: bash

```bash
#!/bin/bash

if [ ~/randomfile -ef ~/randomfile2 ]
then
    echo "Same file"
else
    echo "Different files"
fi
```

## Snippet: BASH Script with Multiple Arithmetic Comparisons
Description: An expanded script showing multiple arithmetic comparison operations in BASH including -eq, -ne, -gt, -ge, -lt, and -le to check various numeric relationships.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md#2025-04-17_snippet_6
Language: bash

```bash
#!/bin/bash

A=4

if [ $A -eq 4 ]
then
    echo "$A is equal to 4"
fi

if [ $A -ne 3 ]
then
    echo "$A is not equal to 3"
fi

if [ $A -gt 3 ]
then
    echo "$A is greater than 3"
fi

if [ $A -ge 4 ]
then
    echo "$A is greater than or equal to 4"
fi

if [ $A -lt 5 ]
then
    echo "$A is less than 5"
fi

if [ $A -le 4 ]
then
    echo "$A is less than or equal to 4"
fi
```

## Snippet: Arithmetic Comparisons in BASH
Description: Script demonstrating arithmetic comparisons in BASH using operators like -eq, -ne, -gt, and others to compare numeric values and output appropriate messages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day48.md#2025-04-17_snippet_5
Language: bash

```bash
#!/bin/bash

A=4

if [ $A -gt 3 ]
then
    echo "$A is greater than 3"
else
    echo "$A is less than or equal to 3"
fi
```