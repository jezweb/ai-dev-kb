# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day47.md
Language: python

## Snippet: Type Checking and Type Conversion in Python
Description: Demonstrates how to check variable types using the type() function and convert between different data types. This snippet shows converting between integer, float, and string types.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day47.md#2025-04-17_snippet_1
Language: python

```python
var3 = 90
var4 = "90"
var5 = 90.0

print(type(var3))
print(type(var4))
print(type(var5))

integer_number = 90 
float_number = float(integer_number)
print(float_number)
print(type(float_number))

number = 90.6
integer_number = int(number)
print(integer_number)
print(type(integer_number))
```

## Snippet: Capturing User Input in Python
Description: Shows how to receive user input with the input() function and store it in variables. Demonstrates using formatted strings to display the captured input.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day47.md#2025-04-17_snippet_2
Language: python

```python
Day = input("What day is it? ")
print(Day)

print(f"Today is {Day}")
```

## Snippet: Simple Arithmetic Operations in Python
Description: Basic arithmetic operations in Python including addition, subtraction, multiplication, division, and modulo. Shows how different operations behave with both integer and floating-point values.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day47.md#2025-04-17_snippet_4
Language: python

```python
a = 10
b = 5

print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division
print(a % b)  # Modulo - remainder after division
```

## Snippet: Declaring and Displaying Variables in Python
Description: Example of declaring string variables in Python and displaying them using the print function. Shows how to concatenate strings and use variables in output statements.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day47.md#2025-04-17_snippet_0
Language: python

```python
var1 = "90DaysOfDevOps"
var2 = "90 Days Of DevOps"

print(var1)
print(var2)
```

## Snippet: Conditional Logic with if-elif-else in Python
Description: Example of conditional logic using if, elif, and else statements to create a simple decision tree based on the day of the week. Demonstrates string comparison in conditionals.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day47.md#2025-04-17_snippet_3
Language: python

```python
Day = input("What day is it? ")

if Day == "Monday":
    print("It is Monday, a brand new week")
elif Day == "Friday":
    print("It is Friday, almost the weekend")
else:
    print(f"It is {Day}, a normal day")
```