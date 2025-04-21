# Animating with Reverse Staggering in Anime.js

**Summary:** This file covers topics related to "Animating with Reverse Staggering in Anime.js". Key snippets include: Animating with Reverse Stagger in Anime.js.

---

## Animating with Reverse Stagger in Anime.js

**Description:** This code snippet demonstrates the use of the stagger function in Anime.js to create a staggered animation effect that operates in reverse. The 'reversed' parameter is set to true, which alters the animation timing for each element. The expected input is a series of elements with the class 'square', and the output is an animation that translates each element to the right over specified delays.

```javascript
import { animate, stagger } from 'animejs';

animate('.square', {
  translateX: '17rem',
  delay: stagger(100, { reversed: true }),
});
```

---