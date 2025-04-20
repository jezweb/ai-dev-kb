# Anime.js Loop Animation Setting Documentation

**Summary:** This file covers topics related to "Anime.js Loop Animation Setting Documentation". Key snippets include: Implementing Various Loop Behaviors in Anime.js, Setting Global Default Loop Value in Anime.js.

---

## Implementing Various Loop Behaviors in Anime.js

**Description:** Shows different ways to implement loop behaviors in Anime.js animations including basic looping with a specified count, looping with alternating direction, looping with reversed animation, and infinite looping. Each example moves an element 17.5rem along the x-axis with different loop configurations.

```javascript
import { animate } from 'animejs';

animate('.loop', {
  x: '17.5rem',
  loop: 3,
});

animate('.loop-alternate', {
  x: '17.5rem',
  loop: 3,
  alternate: true,
});

animate('.loop-reverse', {
  x: '17.5rem',
  loop: 3,
  reversed: true,
});

animate('.loop-infinity', {
  x: '17.5rem',
  loop: true, // Or Infinity
});
```

---

## Setting Global Default Loop Value in Anime.js

**Description:** Demonstrates how to change the default loop value globally by updating the engine.defaults object in Anime.js. This allows all animations to use the specified loop behavior without explicitly defining it for each animation.

```javascript
import { engine } from 'animejs';
engine.defaults.loop = true;
```

---