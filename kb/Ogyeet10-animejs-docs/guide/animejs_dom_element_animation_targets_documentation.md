# AnimeJS DOM Element Animation Targets Documentation

**Summary:** This file covers topics related to "AnimeJS DOM Element Animation Targets Documentation". Key snippets include: HTML Structure for AnimeJS Animation Demo, Animating DOM Elements with AnimeJS.

---

## HTML Structure for AnimeJS Animation Demo

**Description:** HTML structure showing the target elements for the animation example. Contains a container with multiple nested square elements that will be animated.

```html
<div id="selector-demo">
  <div class="medium row">
    <div class="square"></div>
  </div>
  <div class="medium row">
    <div class="square"></div>
  </div>
  <div class="medium row">
    <div class="square"></div>
  </div>
</div>
```

---

## Animating DOM Elements with AnimeJS

**Description:** Demonstrates how to target and animate single and multiple DOM elements using AnimeJS. Shows scaling a single element and moving multiple elements horizontally using querySelector and querySelectorAll.

```javascript
import { animate } from 'animejs';

const $demo = document.querySelector('#selector-demo');
const $squares = $demo.querySelectorAll('.square');

animate($demo, { scale: .75 });
animate($squares, { x: '23rem' });
```

---