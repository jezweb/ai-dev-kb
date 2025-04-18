# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md
Language: python

## Snippet: Handling Exceptions in Python with Try/Except
Description: This code demonstrates exception handling using try/except blocks to catch and handle runtime errors. The example attempts to write to a file and catches any exceptions that might occur during the operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md#2025-04-17_snippet_6
Language: python

```python
try:
  f = open("90DaysOfDevOps.txt")
  try:
    f.write("Python is great")
  except:
    print("Something went wrong when writing to the file")
```

## Snippet: Calling a Python Function with Arguments
Description: This code shows how to call the previously defined add_numbers function with specific arguments. The function receives the values 5 and 2, adds them, and prints the result.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md#2025-04-17_snippet_3
Language: python

```python
# calling the function with arguments to add 5 and 2
add_numbers(5, 2)

# Output: The sum is: 9
```

## Snippet: Reading Data from a File in Python
Description: This snippet shows how to open a file in read mode, read its entire contents, and then close the file. File handling is an essential operation for many DevOps tasks involving configuration and log files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md#2025-04-17_snippet_5
Language: python

```python
f = open("90DaysOfDevOps.txt", "r")
print(f.read())
f.close()
```

## Snippet: Iterating Through a List Using Python For Loop
Description: This snippet demonstrates how to use a for loop to iterate through a list of programming languages and print each item. The for loop executes the code block once for each element in the sequence.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md#2025-04-17_snippet_0
Language: python

```python
languages = ['Python', 'Go', 'JavaScript']

# for loop
for language in languages:
    print(language)
```

## Snippet: Importing and Using Python Modules
Description: This example demonstrates importing the built-in math module and using its sqrt() function to calculate the square root of a number. Python's standard library provides numerous modules with useful functions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md#2025-04-17_snippet_4
Language: python

```python
import math

print(math.sqrt(16)) # 4.0
```

## Snippet: Counting with Python While Loop
Description: This example shows how to implement a while loop that continues executing as long as a condition remains True. The loop prints numbers from 1 to 5 by incrementing a counter variable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md#2025-04-17_snippet_1
Language: python

```python
i = 1
n = 5

# while loop from i = 1 to 5
while i <= n:
    print(i)
    i = i + 1
```

## Snippet: Defining and Using a Python Function
Description: This snippet demonstrates how to define a function using the def keyword that accepts two parameters and performs addition. Functions allow for code reuse and encapsulation of logic.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day43.md#2025-04-17_snippet_2
Language: python

```python
# function has two arguments num1 and num2
def add_numbers(num1, num2):
    sum = num1 + num2
    print('The sum is: ',sum)
```