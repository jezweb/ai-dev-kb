# Syncing WAAPI Animations with Anime.js Timeline

**Summary:** This file covers topics related to "Syncing WAAPI Animations with Anime.js Timeline". Key snippets include: Synchronizing WAAPI Animations with Anime.js Timeline.

---

## Synchronizing WAAPI Animations with Anime.js Timeline

**Description:** Shows how to create WAAPI animations for different shapes and synchronize them to an Anime.js timeline using the sync() method with different positions. This allows precise control over when each animation starts within the timeline sequence.

```javascript
import { createTimeline, waapi } from 'animejs';

const circle = waapi.animate('.circle', {
  x: '15rem',
});

const triangle = waapi.animate('.triangle', {
  x: '15rem',
  y: [0, '-1.5rem', 0],
  ease: 'out(4)',
  duration: 750,
});

const square = waapi.animate('.square', {
  x: '15rem',
  rotateZ: 360,
});

const tl = createTimeline()
.sync(circle, 0)
.sync(triangle, 350)
.sync(square, 250);
```

---