# SVG Motion Path Creation with Anime.js

**Summary:** This file covers topics related to "SVG Motion Path Creation with Anime.js". Key snippets include: Implementing Motion Path Animation with Anime.js, Creating Motion Path Parameters in Anime.js.

---

## Implementing Motion Path Animation with Anime.js

**Description:** Demonstrates how to animate an element along a motion path using Anime.js, including both the element animation and path drawing animation.

```javascript
import { animate, svg } from 'animejs';

// Animate the transforms properties of .car the motion path values
const carAnimation = animate('.car', {
  ease: 'linear',
  duration: 5000,
  loop: true,
  ...svg.createMotionPath('path')
});

// Line drawing animation following the motion path values
// For demo aesthetic only
animate(svg.createDrawable('path'), {
  draw: '0 1',
  ease: 'linear',
  duration: 5000,
  loop: true
});
```

---

## Creating Motion Path Parameters in Anime.js

**Description:** Creates pre-defined Tween parameter objects that animate along an SVG path's coordinates and inclination, returning translateX, translateY, and rotate properties.

```javascript
const { translateX, translateY, rotate } = svg.createMotionPath(path);
```

---