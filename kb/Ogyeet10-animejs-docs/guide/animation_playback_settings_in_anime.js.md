# Animation Playback Settings in Anime.js

**Summary:** This file covers topics related to "Animation Playback Settings in Anime.js". Key snippets include: Implementing playbackEase Animation in Anime.js (JavaScript).

---

## Implementing playbackEase Animation in Anime.js (JavaScript)

**Description:** Demonstrates how to animate an element with keyframes while applying a global easing function across all keyframes using the playbackEase parameter. This example creates a looping animation with multiple position, rotation, and scale changes.

```javascript
import { animate } from 'animejs';

animate('.square', {
  keyframes: [
    { y: '-2.5rem', duration: 400 },
    { x: '17rem', rotate: 180, scale: .5 },
    { y: '2.5rem' },
    { x: 0, rotate: 360, scale: 1 },
    { y: 0, duration: 400 }
  ],
  duration: 4000,
  playbackEase: 'inOut(3)', // this ease is applied accross all keyframes
  loop: true,
});
```

---