# Anime.js Documentation: Percentage-based Keyframes

**Summary:** This file covers topics related to "Anime.js Documentation: Percentage-based Keyframes". Key snippets include: Complete Anime.js Animation with Percentage-based Keyframes, Defining Percentage-based Keyframes in Anime.js.

---

## Complete Anime.js Animation with Percentage-based Keyframes

**Description:** A comprehensive example showing how to animate an element using percentage-based keyframes with the Anime.js library. It demonstrates multiple keyframes with different properties, custom easing, and animation configuration options.

```javascript
import { animate } from 'animejs';

animate('.square', {
  keyframes: {
    '0%'  : { x: '0rem', y: '0rem', ease: 'out' },
    '13%' : { x: '0rem', y: '-2.5rem', },
    '37%' : { x: '17rem', y: '-2.5rem', scale: .5 },
    '63%' : { x: '17rem', y: '2.5rem', scale: .5 },
    '87%' : { x: '0rem', y: '2.5rem', scale: 1 },
    '100%': { y: '0rem', ease: 'in' }
  },
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

---

## Defining Percentage-based Keyframes in Anime.js

**Description:** Shows the basic syntax for percentage-based keyframes in Anime.js. Each keyframe defines animation properties at specific percentage points in the animation duration, with optional easing parameters.

```javascript
keyframes: {
  '25%' : { x: 100, y: 50, ease: 'out' },
  '50%' : { x: 200, y: 75, },
}
```

---