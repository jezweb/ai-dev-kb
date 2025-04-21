# CSS Transform Animation with AnimeJS

**Summary:** This file covers topics related to "CSS Transform Animation with AnimeJS". Key snippets include: Animating CSS Transforms with AnimeJS.

---

## Animating CSS Transforms with AnimeJS

**Description:** Demonstrates two methods of animating CSS transforms using AnimeJS: direct property animation with JavaScript and WAAPI method. Shows how to use individual transform properties and the recommended WAAPI approach for direct transform animations.

```javascript
import { animate, waapi } from 'animejs';

animate('.square', {
  x: '15rem', // TranslateX shorthand
  scale: 1.25,
  skew: -45,
  rotate: '1turn',
});

// the WAAPI version is recommanded if you want to animate the transform property directly
waapi.animate('.square', {
  transform: 'translateX(15rem) scale(1.25) skew(-45deg) rotate(1turn)',
});
```

---