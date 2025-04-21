# Chain-able Utility Functions in Anime.js

**Summary:** This file covers topics related to "Chain-able Utility Functions in Anime.js". Key snippets include: Chaining Multiple Utility Functions in JavaScript, Creating and Using Simple Chain-able Functions in JavaScript, Creating and Using Chain-able Utility Functions in JavaScript.

---

## Chaining Multiple Utility Functions in JavaScript

**Description:** Demonstrates how to chain multiple utility functions together to create a more complex operation. This example normalizes a value and rounds it to one decimal place.

```javascript
const normalizeAndRound = utils.mapRange(0, 255, 0, 1).round(1);
normalizeAndRound(128); // '0.5'
normalizeAndRound(64);  // '0.3'
```

---

## Creating and Using Simple Chain-able Functions in JavaScript

**Description:** Shows how to create a simple chain-able function using the clamp utility and how to use it without chaining.

```javascript
const chainableClamp = utils.clamp(0, 100); // Returns a chain-able function
const result = chainableClamp(150); // 100
```

---

## Creating and Using Chain-able Utility Functions in JavaScript

**Description:** Demonstrates how to create and use chain-able utility functions in Anime.js. The example shows clamping, rounding, and padding operations chained together.

```javascript
const clampRoundPad = utils.clamp(0, 100).round(2).padStart(6, '0');
clampRoundPad(125)   // '000100'
clampRoundPad(75.25) // '075.25'
```

---