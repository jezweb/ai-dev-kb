# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md
Language: multiple

## Snippet: Unit Testing in Python with unittest
Description: Shows how to implement unit tests using Python's unittest framework. The example tests a prime number checking function with multiple test cases and assertions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md#2025-04-17_snippet_1
Language: python

```python
import unittest

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

class TestIsPrime(unittest.TestCase):
    def test_is_prime(self):
        self.assertTrue(is_prime(2))
        self.assertTrue(is_prime(3))
        self.assertTrue(is_prime(5))
        self.assertFalse(is_prime(4))

if __name__ == '__main__':
    unittest.main()
```

## Snippet: Regular Expressions in Python with re Module
Description: Demonstrates how to use Python's re module for pattern matching in strings. The example shows how to search for a phone number pattern and extract email addresses from text.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md#2025-04-17_snippet_3
Language: python

```python
import re

# Search for a phone number in a string
text = 'My phone number is 555-7777'
match = re.search(r'\d{3}-\d{4}', text)
if match:
    print(match.group(0))

# Extract email addresses from a string
text = 'My email is example@devops.com, but I also use other@cloud.com'
matches = re.findall(r'\S+@\S+', text)
print(matches)
```

## Snippet: Unit Test Output Example
Description: Shows the expected terminal output when running the unittest example. The output indicates that the test was successful.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md#2025-04-17_snippet_2
Language: bash

```bash

```

## Snippet: Datetime Output Example
Description: Shows the expected terminal output from running the datetime examples, displaying the current datetime, a custom datetime, and the difference between them.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md#2025-04-17_snippet_6
Language: bash

```bash
2023-02-17 11:33:27.257712
2023-02-01 12:00:00
15 days, 23:33:27.257712
```

## Snippet: Date and Time Manipulation with datetime Module
Description: Shows how to work with dates and times in Python using the datetime module. Examples include getting the current datetime, creating a specific datetime object, and calculating time differences.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md#2025-04-17_snippet_5
Language: python

```python
from datetime import datetime, timedelta

# Get the current date and time
now = datetime.now()
print(now) # Output: 2023-02-17 11:33:27.257712

# Create a datetime object for a specific date and time
date = datetime(2023, 2, 1, 12, 0)
print(date) # Output: 2023-02-01 12:00:00

# Calculate the difference between two dates
delta = now - date
print(delta) # Output: 15 days, 23:33:27.257712
```

## Snippet: Regular Expression Output Example
Description: Displays the expected terminal output from running the regular expression examples, showing the matched phone number and extracted email addresses.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md#2025-04-17_snippet_4
Language: bash

```bash
555-7777
['example@devops.com,', 'other@cloud.com']
```

## Snippet: Debugging in Python with pdb
Description: Demonstrates how to use Python's built-in debugger (pdb) to pause execution at a specific point and inspect variables during runtime. The example shows a simple add_numbers function with a debugger breakpoint.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day45.md#2025-04-17_snippet_0
Language: python

```python
import pdb

def add_numbers(x, y):
    result = x + y
    pdb.set_trace() # Start the debugger at this point in the code
    return result

result = add_numbers(2, 3)
print(result)
```