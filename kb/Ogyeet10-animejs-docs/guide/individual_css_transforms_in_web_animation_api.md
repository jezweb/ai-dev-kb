# Individual CSS Transforms in Web Animation API

**Summary:** This file covers topics related to "Individual CSS Transforms in Web Animation API". Key snippets include: Animating Individual CSS Transforms with anime.js Web Animation API, HTML Structure for Animating Squares with anime.js.

---

## Animating Individual CSS Transforms with anime.js Web Animation API

**Description:** This example demonstrates how to use anime.js WAAPI module to animate individual transform properties on multiple elements. The code randomly positions and rotates square elements continuously by using function-based values for x, y, rotateX, and rotateY properties.

```javascript
import { waapi, utils } from 'animejs';

const $squares = utils.$('.square');

const animateSquares = () => {
  waapi.animate($squares, {
    x: () => utils.random(0, 17) + 'rem',
    y: () => utils.random(-1, 1) + 'rem',
    rotateX: () => utils.random(-90, 90),
    rotateY: () => utils.random(-90, 90),
    onComplete: () => animateSquares()
  });
}

animateSquares();
```

---

## HTML Structure for Animating Squares with anime.js

**Description:** HTML markup that creates a series of square elements organized in rows. These elements are targeted by the anime.js animation to demonstrate individual CSS transform properties.

```html
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
```

---