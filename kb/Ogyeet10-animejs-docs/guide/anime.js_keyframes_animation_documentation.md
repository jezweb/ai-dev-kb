# Anime.js Keyframes Animation Documentation

**Summary:** This file covers topics related to "Anime.js Keyframes Animation Documentation". Key snippets include: Implementing Complex Keyframe Animation with Anime.js.

---

## Implementing Complex Keyframe Animation with Anime.js

**Description:** Demonstrates creating a complex animation sequence using keyframes in Anime.js. The animation includes multiple properties (x, y, scale, rotate) with individual timing, easing, and delay parameters for each keyframe. The animation is set to loop with a total duration of 3000ms.

```javascript
import { animate } from 'animejs';

animate('.square', {
  x: [
    { to: '17rem', duration: 700, delay: 400 },
    { to: 0, duration: 700, delay: 800 },
  ],
  y: [
    { to: '-2.5rem', ease: 'out', duration: 400 },
    { to: '2.5rem', duration: 800, delay: 700 },
    { to: 0, ease: 'in', duration: 400, delay: 700 },
  ],
  scale: [
    { to: .5, duration: 700, delay: 400 },
    { to: 1, duration: 700, delay: 800 },
  ],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

```html
<div class="medium row">
  <div class="square"></div>
</div>
```

---