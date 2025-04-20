# anime.js Snap Utility Documentation

**Summary:** This file covers topics related to "anime.js Snap Utility Documentation". Key snippets include: Using the snap utility function for value rounding in anime.js, Applying snap utility as a modifier in anime.js animations.

---

## Using the snap utility function for value rounding in anime.js

**Description:** Demonstrates basic usage of the utils.snap function to round a number to the nearest increment or create a snapping function with a predefined increment parameter.

```javascript
const snappedValue = utils.snap(value, increment);
const snapperFunction = utils.snap(increment);
```

---

## Applying snap utility as a modifier in anime.js animations

**Description:** Practical example showing how to apply the snap utility as a modifier in anime.js animations to create normal and snapped rotation animations.

```javascript
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.snapped', {
  rotate: '1turn',
  modifier: utils.snap(.25), // Used as a modifier
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

---