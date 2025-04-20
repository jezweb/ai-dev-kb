# Clamp Utility in Anime.js

**Summary:** This file covers topics related to "Clamp Utility in Anime.js". Key snippets include: Animating with clamp utility in Anime.js, Using clamp utility in Anime.js, HTML structure for clamp demonstration in Anime.js.

---

## Animating with clamp utility in Anime.js

**Description:** Shows how to use the clamp utility in animation settings. It compares a normal animation with a clamped animation using the clamp function as a modifier.

```javascript
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.clamped', {
  rotate: '1turn',
  modifier: utils.clamp(.25, .75), // Used as a function
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

---

## Using clamp utility in Anime.js

**Description:** Demonstrates how to use the clamp utility function from Anime.js to restrict values or create a clamping function. It shows basic usage and chaining with other utilities.

```javascript
const clampedValue = utils.clamp(value, min, max);
const clamperFunction = utils.clamp(min, max);
```

```javascript
const clampBetween0and100 = utils.clamp(0, 100);
clampBetween0and100(90);  // 90
clampBetween0and100(120); // 100
clampBetween0and100(-15); // 0

const clampAndRound = utils.clamp(0, 100).round(2); // Clamp then round to 2 decimal places
clampAndRound(72.7523); // 72.75
clampAndRound(120.2514); // 100
```

---

## HTML structure for clamp demonstration in Anime.js

**Description:** Provides the HTML structure for demonstrating the difference between normal and clamped animations using Anime.js.

```html
<div class="x-large spaced-evenly row">
  <div class="col">
    <div class="clock normal"></div>
    <div class="label">normal</div>
  </div>
  <div class="col">
    <div class="clock clamped"></div>
    <div class="label">clamped [.25,.75]</div>
  </div>
</div>
```

---