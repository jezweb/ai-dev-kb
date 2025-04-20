# Anime.js Animation Keyframes Documentation

**Summary:** This file covers topics related to "Anime.js Animation Keyframes Documentation". Key snippets include: Creating a Complex Animation with Keyframes in Anime.js, Defining Duration-Based Keyframes in Anime.js.

---

## Creating a Complex Animation with Keyframes in Anime.js

**Description:** This example shows how to create a complex animation using keyframes in Anime.js. It animates a square element with multiple keyframes, including translations, scaling, and rotation. The animation also demonstrates the use of different easing functions and looping.

```javascript
import { animate } from 'animejs';

animate('.square', {
  keyframes: [
    { y: '-2.5rem', ease: 'out', duration: 400 },
    { x: '17rem', scale: .5, duration: 800 },
    { y: '2.5rem' }, // The duration here is 3000 / 5 = 600ms
    { x: 0, scale: 1, duration: 800 },
    { y: 0, ease: 'in', duration: 400 }
  ],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

---

## Defining Duration-Based Keyframes in Anime.js

**Description:** This snippet demonstrates how to define duration-based keyframes in Anime.js. Each keyframe object can include an animatable property and tween parameters. The default duration of a keyframe is calculated by dividing the total animation duration by the number of keyframes.

```javascript
keyframes: [
  { y: 50, ease: 'out', duration: 400 },
  { x: 75, scale: .5, duration: 800 },
]
```

---