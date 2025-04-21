# Anime.js ScrollObserver Relative Position Values

**Summary:** This file covers topics related to "Anime.js ScrollObserver Relative Position Values". Key snippets include: Anime.js Scroll Animation with Relative Positions.

---

## Anime.js Scroll Animation with Relative Positions

**Description:** This JavaScript snippet uses Anime.js to animate a '.square' element when it enters and leaves a specified scroll container. The 'onScroll' function is used to trigger the animation based on scroll position, and relative values are applied to the 'enter' and 'leave' thresholds to define when the animation should start and stop.

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
    enter: 'center+=1em top-=100%',
    leave: 'center-=1em bottom+=100%',
    debug: true
  })
});
```

---