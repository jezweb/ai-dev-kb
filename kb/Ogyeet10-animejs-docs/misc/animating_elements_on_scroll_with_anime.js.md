# Animating Elements on Scroll with Anime.js

**Summary:** This file covers topics related to "Animating Elements on Scroll with Anime.js". Key snippets include: Animating Elements with Scroll Observer in Anime.js.

---

## Animating Elements with Scroll Observer in Anime.js

**Description:** This snippet imports essential functions from the Anime.js library and uses the animate function to animate elements with the class '.square'. The animations are triggered by scroll events, defined by the minimum and maximum thresholds for entering and leaving the viewport.

```javascript
import { animate, onScroll, utils } from 'animejs';

utils.$('.square').forEach($square => {
  animate($square, {
    x: '15rem',
    rotate: '1turn',
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'max bottom',
      leave: 'min top',
      debug: true
    })
  });
});
```

---