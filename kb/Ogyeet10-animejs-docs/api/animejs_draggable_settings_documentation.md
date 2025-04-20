# AnimeJS Draggable Settings Documentation

**Summary:** This file covers topics related to "AnimeJS Draggable Settings Documentation". Key snippets include: HTML Structure for Draggable Elements, Configuring Draggable Elements with maxVelocity in AnimeJS.

---

## HTML Structure for Draggable Elements

**Description:** Shows the HTML markup required to create a grid container with draggable square and circle elements. The elements are styled with 'large centered grid' classes.

```html
<div class="large centered grid square-grid">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

---

## Configuring Draggable Elements with maxVelocity in AnimeJS

**Description:** Demonstrates how to create draggable elements with different maxVelocity settings. The first example shows a square with no velocity after release (0), while the second shows a circle with maximum velocity of 100.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  maxVelocity: 0,
});

createDraggable('.circle', {
  container: '.grid',
  maxVelocity: 100,
});
```

---