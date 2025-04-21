# Anime.js ScrollObserver Thresholds and Positions

**Summary:** This file covers topics related to "Anime.js ScrollObserver Thresholds and Positions". Key snippets include: Animating with ScrollObserver using Position Shorthands - JavaScript.

---

## Animating with ScrollObserver using Position Shorthands - JavaScript

**Description:** This JavaScript snippet demonstrates how to use Anime.js to animate a '.square' element based on scroll position within a '.scroll-container'.  The `onScroll` function is used to trigger the animation when the element enters or leaves the specified scroll positions (center top, center bottom).

```javascript
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'center top',
    leave: 'center bottom',
    debug: true
  })
});
```

---