# AnimeJS Stagger Documentation

**Summary:** This file covers topics related to "AnimeJS Stagger Documentation". Key snippets include: Implementing Time Staggering with AnimeJS, Using stagger function with AnimeJS for multi-target animations, HTML Structure for Staggered Animation Demo.

---

## Implementing Time Staggering with AnimeJS

**Description:** Demonstrates how to use the stagger() function to create staggered animations with different delays and durations for multiple elements. The example shows importing required functions and creating an animation with staggered timing properties.

```javascript
import { animate, stagger } from 'animejs';

animate('.square', {
  x: '17rem',
  delay: stagger(100),
  duration: stagger(200, { start: 500 }),
  loop: true,
  alternate: true
});
```

---

## Using stagger function with AnimeJS for multi-target animations

**Description:** This snippet demonstrates how to use the stagger function in AnimeJS to create staggered animations across multiple elements. It shows how to apply different y-position and rotation values to each target in sequence, with loop and alternate options enabled.

```javascript
import { animate, stagger } from 'animejs';

const animation = animate('.square', {
  y: stagger(['-2.75rem', '2.75rem']),
  rotate: { from: stagger('-.125turn') },
  loop: true,
  alternate: true
});
```

---

## HTML Structure for Staggered Animation Demo

**Description:** HTML markup showing the structure for demonstrating staggered animations with multiple square elements and their corresponding timing labels. Each row contains a square element and its timing information.

```html
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 0ms;&nbsp;&nbsp;&nbsp;duration: 500ms</div>
</div>
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 100ms; duration: 700ms</div>
</div>
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 200ms; duration: 900ms</div>
</div>
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 300ms; duration: 1100ms</div>
</div>
```

---