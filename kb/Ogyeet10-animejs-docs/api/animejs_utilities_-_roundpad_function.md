# AnimeJS Utilities - roundPad Function

**Summary:** This file covers topics related to "AnimeJS Utilities - roundPad Function". Key snippets include: Basic Usage of roundPad Function in AnimeJS, Using roundPad as a Modifier in AnimeJS Animation.

---

## Basic Usage of roundPad Function in AnimeJS

**Description:** Shows the basic syntax for using the roundPad utility in AnimeJS. It can be used directly to round and pad a value, or to create a reusable function with a pre-defined decimal length.

```javascript
const roundedPaddedValue = utils.roundPad(value, decimalLength);
const roundPadderFunction = utils.roundPad(decimalLength);
```

---

## Using roundPad as a Modifier in AnimeJS Animation

**Description:** Demonstrates using the roundPad utility as a modifier in an animation sequence. This example animates the innerHTML property of an element with class 'value' from its current value to '8.1', formatting the values with 3 decimal places during the animation.

```javascript
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: '8.1',
  modifier: utils.roundPad(3),
  duration: 10000,
  ease: 'linear',
});
```

---