# Anime.js padStart Utility Function Documentation

**Summary:** This file covers topics related to "Anime.js padStart Utility Function Documentation". Key snippets include: Creating and Using padStart Function with Examples, Using padStart Utility Function in Anime.js.

---

## Creating and Using padStart Function with Examples

**Description:** Examples demonstrating how to create a reusable padding function with predefined parameters and how to chain utility functions together to perform multiple operations like rounding and padding.

```javascript
const padTo5WithZeros = utils.padStart(5, '0');
padTo5WithZeros('123');  // '00123'
padTo5WithZeros(78);     // '00078'
padTo5WithZeros('1234'); // '01234'

const roundAndPad = utils.round(2).padStart(5, '0'); // Round to 2 decimal places then pad to 5 characters
roundAndPad(12.345);  // '12.35'
roundAndPad(7.8);     // '07.80'
```

---

## Using padStart Utility Function in Anime.js

**Description:** Shows basic usage of the padStart utility function which pads a value from the start with a specified string until it reaches a desired length. It can be used directly with a value or as a chainable function.

```javascript
const paddedValue = utils.padStart(value, totalLength, padString);
const padderFunction = utils.padStart(totalLength, padString);
```

---