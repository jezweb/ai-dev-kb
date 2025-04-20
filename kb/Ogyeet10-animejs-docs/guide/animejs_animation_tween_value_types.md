# AnimeJS Animation Tween Value Types

**Summary:** This file covers topics related to "AnimeJS Animation Tween Value Types". Key snippets include: Defining Function-Based Animation Values with AnimeJS, HTML Structure for AnimeJS Animation Targets.

---

## Defining Function-Based Animation Values with AnimeJS

**Description:** Example of how to use function-based values in AnimeJS animations. This snippet shows how to access target element attributes, use index and length parameters, and implement random values for various animation properties.

```javascript
import { animate } from 'animejs';

animate('.square', {
  x: $el => /** @type {HTMLElement} */($el).getAttribute('data-x'),
  y: (_, i) => 50 + (-50 * i),
  scale: (_, i, l) => (l - i) * .75,
  rotate: () => utils.random(-360, 360),
  borderRadius: () => `+=${utils.random(0, 8)}`,
  duration: () => utils.random(1200, 1800),
  delay: () => utils.random(0, 400),
  ease: 'outElastic(1, .5)',
});
```

---

## HTML Structure for AnimeJS Animation Targets

**Description:** HTML markup defining the target elements for the animation. Each square element has a data-x attribute that's used in the animation to set different x values for each target.

```html
<div class="medium row">
  <div class="square" data-x="170"></div>
</div>
<div class="medium row">
  <div class="square" data-x="80"></div>
</div>
<div class="medium row">
  <div class="square" data-x="270"></div>
</div>
```

---