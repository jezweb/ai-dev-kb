# Anime.js Draggable Release Mass Configuration

**Summary:** This file covers topics related to "Anime.js Draggable Release Mass Configuration". Key snippets include: Initializing Draggable Element with Release Mass in Anime.js, HTML Structure for Draggable Elements.

---

## Initializing Draggable Element with Release Mass in Anime.js

**Description:** This snippet demonstrates how to initialize a draggable element using Anime.js and set the `releaseMass` property.  The `releaseMass` affects the element's behavior after it is released, influencing its movement and bounciness. Two elements, square and circle, are initialized with different releaseMass values.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseMass: .1,
});

createDraggable('.circle', {
  container: '.grid',
  releaseMass: 10,
});
```

---

## HTML Structure for Draggable Elements

**Description:** This HTML snippet defines the structure for the draggable elements and their container.  The `.square` and `.circle` elements are defined as draggable, and they are placed within a container element with the class `.grid`. This structure allows the Anime.js code to select and initialize the draggable behavior for these elements.

```html
<div class="large centered grid square-grid">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

---