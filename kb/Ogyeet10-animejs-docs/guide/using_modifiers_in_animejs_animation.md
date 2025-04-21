# Using Modifiers in AnimeJS Animation

**Summary:** This file covers topics related to "Using Modifiers in AnimeJS Animation". Key snippets include: Setting Global Modifiers in AnimeJS, Applying Different Modifiers in AnimeJS Animations.

---

## Setting Global Modifiers in AnimeJS

**Description:** Shows how to change the default modifier globally by updating the engine.defaults object. This example demonstrates setting a global modifier that negates all animated values.

```javascript
import { engine } from 'animejs';
engine.defaults.modifier = v => -v; // Don't do this :D
```

---

## Applying Different Modifiers in AnimeJS Animations

**Description:** Demonstrates how to apply different modifiers to animations, including using utility functions and custom modifiers. Shows modifiers applied both globally to an animation and to specific properties.

```javascript
import { animate, utils } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  modifier: utils.round(0), // Round to 0 decimals
  duration: 4000,
});

animate('.row:nth-child(2) .square', {
  x: '85rem',
  modifier: v => v % 17,
  duration: 4000,
});

animate('.row:nth-child(3) .square', {
  x: '17rem',
  y: {
    to: '70rem',
    modifier: v => Math.cos(v) / 2, // Specific modifier to y property
  },
  duration: 4000,
});
```

---