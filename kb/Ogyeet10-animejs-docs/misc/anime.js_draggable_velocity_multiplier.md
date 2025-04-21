# Anime.js Draggable Velocity Multiplier

**Summary:** This file covers topics related to "Anime.js Draggable Velocity Multiplier". Key snippets include: Initializing Draggable with Velocity Multiplier, HTML Structure for Draggable Elements.

---

## Initializing Draggable with Velocity Multiplier

**Description:** This code snippet demonstrates how to initialize the Anime.js draggable functionality with the `velocityMultiplier` setting.  It shows examples using both a static number (0 and 5) to control the post-release velocity of the dragged elements within a specified container.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  velocityMultiplier: 0,
});

createDraggable('.circle', {
  container: '.grid',
  velocityMultiplier: 5,
});
```

---

## HTML Structure for Draggable Elements

**Description:** This HTML snippet defines the structure for the draggable elements used in the Anime.js examples. It creates a grid containing a square and a circle, both marked with the 'draggable' class, enabling them to be dragged.

```html
<div class="large centered grid square-grid">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

---