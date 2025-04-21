# Angular Expression Syntax Guide

**Summary:** This file covers topics related to "Angular Expression Syntax Guide". Key snippets include: Angular Logical and Comparison Operators, Angular RegExp Literals (Unsupported), Angular Object and Array Literals, Angular Unsupported Declarations, Angular Arithmetic Operators....

---

## Angular Logical and Comparison Operators

**Description:** Examples of supported logical and comparison operators in Angular expressions

```javascript
a > b ? true : false
&&
||
!
possiblyNullValue ?? 'default'
<, <=, >, >=, ==, ===, !==
```

---

## Angular RegExp Literals (Unsupported)

**Description:** Example of unsupported RegExp literal syntax in Angular expressions

```javascript
/\d+/
```

---

## Angular Object and Array Literals

**Description:** Examples of supported object and array literal syntax in Angular expressions

```javascript
{name: 'Alice'}
['Onion', 'Cheese', 'Garlic']
```

---

## Angular Unsupported Declarations

**Description:** Examples of declaration syntax that is not supported in Angular expressions

```javascript
let label = 'abc'
const item = 'apple'
function myCustomFunction() { }
() => { }
class Rectangle { }
```

---

## Angular Arithmetic Operators

**Description:** Examples of supported arithmetic operators in Angular expressions

```javascript
1 + 2
52 - 3
41 * 6
20 / 4
17 % 5
10 ** 3
9 * (8 + 4)
```

---

## Angular Special Operators

**Description:** Examples of Angular-specific operators including pipes and optional chaining

```javascript
{{ total | currency }}
someObj.someProp?.nestedProp
someObj!.someProp
```

---