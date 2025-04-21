# AnimeJS Wrap Utility Documentation

**Summary:** This file covers topics related to "AnimeJS Wrap Utility Documentation". Key snippets include: Wrap Function with Chaining in JavaScript, Basic Wrap Function Usage in JavaScript.

---

## Wrap Function with Chaining in JavaScript

**Description:** Examples of using the wrap utility function with specific ranges and chaining with other utilities like round(). Shows practical applications for number wrapping.

```javascript
const wrapBetween0and100 = utils.wrap(0, 100);
wrapBetween0and100(105); // 5
wrapBetween0and100(220); // 20
wrapBetween0and100(-15); // 85

const wrapAndRound = utils.wrap(0, 100).round(2); // Wrap then round to 2 decimal places
wrapAndRound(105.7523); // 5.75
wrapAndRound(220.2514); // 20.25
```

---

## Basic Wrap Function Usage in JavaScript

**Description:** Demonstrates the basic usage of the wrap utility function to constrain numbers within a range. Shows both direct value wrapping and creating a wrapper function.

```javascript
const wrappedValue = utils.wrap(value, min, max);
const wrapperFunction = utils.wrap(min, max);
```

---