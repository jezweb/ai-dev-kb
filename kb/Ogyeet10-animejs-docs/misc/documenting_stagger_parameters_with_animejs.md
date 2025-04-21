# Documenting Stagger Parameters with animejs

**Summary:** This file covers topics related to "Documenting Stagger Parameters with animejs". Key snippets include: Animating with animejs in JavaScript.

---

## Animating with animejs in JavaScript

**Description:** This JavaScript snippet illustrates how to use the 'stagger' function from 'animejs' to apply staggered animation effects to elements. It imports the 'animate' and 'stagger' functions and uses them to animate '.square' elements with staggered positions and delays. Dependencies include the animejs library. The key parameters are the stagger value ('1rem') and the start values for x position and delay (14 and 500 respectively).

```JavaScript
import { animate, stagger } from 'animejs';

animate('.square', {
  x: stagger('1rem', { start: 14 }), // adds 11 to the staggered value
  delay: stagger(100, { start: 500 }) // adds 500 to the staggered value
});
```

---