# Anime.js Stagger Parameters Examples

**Summary:** This file covers topics related to "Anime.js Stagger Parameters Examples". Key snippets include: Creating Anime.js Timeline with Stagger Effect.

---

## Creating Anime.js Timeline with Stagger Effect

**Description:** This code snippet demonstrates how to create an Anime.js timeline with a stagger effect using the `stagger` function. It imports `createtimeline` and `stagger` from the animejs library and defines a timeline with multiple animations, each applying a different 'from' value to the stagger function to control the starting point of the animation on a series of square elements.

```javascript
import { createtimeline, stagger } from 'animejs';

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.row:nth-child(1) .square', {
  scale: 0,
  delay: stagger(50, { from: 8 }),
})
.add('.row:nth-child(2) .square', {
  scale: 0,
  delay: stagger(50, { from: 'first' }),
})
.add('.row:nth-child(3) .square', {
  scale: 0,
  delay: stagger(50, { from: 'center' }),
})
.add('.row:nth-child(4) .square', {
  scale: 0,
  delay: stagger(50, { from: 'last' }),
});
```

---