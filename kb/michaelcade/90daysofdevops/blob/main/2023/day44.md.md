# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md
Language: python

## Snippet: Set Operations in Python
Description: Shows how to create sets and perform common set operations like union, intersection, and difference. Sets are mutable collections that store unique immutable elements and are often used for mathematical operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md#2025-04-17_snippet_3
Language: python

```python
my_set = {1, 2, 3, 4, 5}
other_set = {3, 4, 5, 6, 7}
print(my_set.union(other_set))  # {1, 2, 3, 4, 5, 6, 7}
print(my_set.intersection(other_set)) # {3, 4, 5}
print(my_set.difference(other_set))  # {1, 2}
```

## Snippet: Implementing Polymorphism in Python
Description: Demonstrates polymorphism through method overriding in inherited classes. This example shows how a speak() method behaves differently when implemented in both the Person parent class and Student child class.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md#2025-04-17_snippet_6
Language: python

```python
class Person:
    def __init__(self, name, country):
        self.name = name
        self.country = country

    def speak(self):
        print("Hello, my name is {} and I am from {}.".format(self.name, self.country))

class Student(Person):
    def __init__(self, name, country, major):
        super().__init__(name, country)
        self.major = major

    def speak(self):
        print("Hello, my name is {} and I am a {} major.".format(self.name, self.major))

person = Person("Rishab", "Canada")
student = Student("John", "Canada", "Computer Science")

person.speak()   # "Hello, my name is Rishab and I am from Canada."
student.speak()  # "Hello, my name is John and I am a Computer Science major."
```

## Snippet: Implementing Inheritance in Python
Description: Shows how to create a subclass that inherits from a parent class. This example defines a Student class that inherits from Person, demonstrating how to extend the parent class with additional attributes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md#2025-04-17_snippet_5
Language: python

```python
class Student(Person):
    def __init__(self, name, country, major):
        super().__init__(name, country)
        self.major = major

student = Student("Rishab", "Canada", "Computer Science")
print(student.name)   # OUTPUT "Rishab"
print(student.country)    # OUTPUT "Canada"
print(student.major)  # OUTPUT "Computer Science"
```

## Snippet: Creating and Accessing Lists in Python
Description: Demonstrates how to create a list and access its elements by index. Lists are mutable data structures that can store multiple items of any type in a single variable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md#2025-04-17_snippet_0
Language: python

```python
thislist = ["apple", "banana", "orange"]
print(thislist[0]) # OUTPUT apple
print(thislist[2]) # OUTPUT orange
```

## Snippet: Creating Classes and Objects in Python
Description: Demonstrates how to define a class with attributes and create an object instance. This example defines a Person class with a constructor and creates a person object with name and country attributes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md#2025-04-17_snippet_4
Language: python

```python
class Person:
    def __init__(self, name, country):
        self.name = name
        self.country = country
person = Person("Rishab", "Canada")
print(person.name)   # OUTPUT "Alice"
print(person.country)    # OUTPUT "Canada"
```

## Snippet: Working with Tuples in Python
Description: Shows how to create a tuple and access its elements. Tuples are immutable data structures similar to lists but cannot be changed once created. This example includes a nested list within the tuple.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md#2025-04-17_snippet_1
Language: python

```python
my_tuple = (1, 2, [4, 5])
print(my_tuple[0])   # OUTPUT 1
print(my_tuple[2])   # OUTPUT "three"
print(my_tuple[3][0]) # OUTPUT 4
```

## Snippet: Creating and Accessing Dictionaries in Python
Description: Demonstrates creating a dictionary with key-value pairs and accessing values using keys. Dictionaries store collections of key-value pairs where keys must be unique and immutable while values can be of any type.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day44.md#2025-04-17_snippet_2
Language: python

```python
my_dict = {"name": "Rishab", "project": "90DaysOfDevOps", "country": "Canada"}
print(my_dict["name"])   # OUTPUT "Rishab"
print(my_dict["project"])   # OUTPUT "90DaysOfDevOps"
print(my_dict["country"])  # OUTPUT "Canada"
```