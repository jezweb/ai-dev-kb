# Interpolate Utility in Anime.js

**Summary:** This file covers topics related to "Interpolate Utility in Anime.js". Key snippets include: HTML Structure for Anime.js Animation Demo, Basic Interpolation in JavaScript using Anime.js, Animating with Interpolation in JavaScript using Anime.js, Advanced Interpolation Examples in JavaScript using Anime.js.

---

## HTML Structure for Anime.js Animation Demo

**Description:** Provides the HTML structure for demonstrating the difference between normal and interpolated animations using Anime.js. It creates two clock elements with labels.

```html
<div class="x-large spaced-evenly row">
  <div class="col">
    <div class="clock normal"></div>
    <div class="label">normal</div>
  </div>
  <div class="col">
    <div class="clock interpolated"></div>
    <div class="label">interpolated [0,12]</div>
  </div>
</div>
```

---

## Basic Interpolation in JavaScript using Anime.js

**Description:** Demonstrates how to use the interpolate utility function to calculate a value between two numbers based on a progress value. It also shows how to create an interpolation function for repeated use.

```javascript
const interpolatedValue = utils.interpolate(start, end, progress);
const interpolatorFunction = utils.interpolate(start, end);
```

---

## Animating with Interpolation in JavaScript using Anime.js

**Description:** Demonstrates how to use the interpolate utility within animation configurations. It shows two animations: one normal rotation and one using interpolation for rotation.

```javascript
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.interpolated', {
  rotate: '1turn',
  modifier: utils.interpolate(0, 12), // Interpolates 0 to 12 by passing the rotate progress value 0 to 1
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

---

## Advanced Interpolation Examples in JavaScript using Anime.js

**Description:** Shows more complex usage of the interpolate function, including creating a reusable interpolation function, chaining with rounding, and using it within animation configurations.

```javascript
const interpolateBetween0and100 = utils.interpolate(0, 100);
interpolateBetween0and100(0.5);  // 50
interpolateBetween0and100(0.75); // 75
interpolateBetween0and100(0.25); // 25

const interpolateAndRound = utils.interpolate(0, 100).round(2); // Interpolate then round to 2 decimal places
interpolateAndRound(0.677523); // 67.75
interpolateAndRound(1.202514); // 100
```

---