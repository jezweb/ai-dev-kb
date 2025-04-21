# AnimeJS Random Utility Documentation

**Summary:** This file covers topics related to "AnimeJS Random Utility Documentation". Key snippets include: Applying Random Values to AnimeJS Animations, HTML Structure for Random Animation Demo, Using Random Utility Function in AnimeJS.

---

## Applying Random Values to AnimeJS Animations

**Description:** Example showing how to use random utility to set dynamic properties for animation, including position, rotation, and scale transformations.

```javascript
import { utils } from 'animejs';

utils.set('.square', {
  x: () => utils.random(2, 18, 2) + 'rem',
  rotate: () => utils.random(0, 180),
  scale: () => utils.random(.25, 1.5, 3),
});
```

---

## HTML Structure for Random Animation Demo

**Description:** HTML markup structure showing multiple square elements that can be targeted for random animations.

```html
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
```

---

## Using Random Utility Function in AnimeJS

**Description:** Basic syntax for generating random numbers using AnimeJS utils.random() function. Takes minimum and maximum values with optional decimal places parameter.

```javascript
const randomValue = utils.random(min, max, decimalLength);
```

---