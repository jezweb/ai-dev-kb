# Anime.js Tween Parameters Documentation

**Summary:** This file covers topics related to "Anime.js Tween Parameters Documentation". Key snippets include: Configuring Tween Parameters in Anime.js.

---

## Configuring Tween Parameters in Anime.js

**Description:** Demonstrates how to animate elements using the 'to' parameter with specific easing functions. The example shows x-axis translation and rotation animations.

```javascript
import { animate } from 'animejs';

animate('.square', {
  x: {
    to: '16rem', // From 0px to 16rem
    ease: 'outCubic',
  },
  rotate: {
    to: '.75turn', // From 0turn to .75turn
    ease: 'inOutQuad'
  },
});
```

---