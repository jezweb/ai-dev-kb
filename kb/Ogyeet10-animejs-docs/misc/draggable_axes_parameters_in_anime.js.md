# Draggable Axes Parameters in Anime.js

**Summary:** This file covers topics related to "Draggable Axes Parameters in Anime.js". Key snippets include: Creating a Draggable Element with Snap Parameters in Anime.js, HTML Structure for Draggable Element in Anime.js.

---

## Creating a Draggable Element with Snap Parameters in Anime.js

**Description:** This code snippet demonstrates how to create a draggable element using Anime.js with various snap parameters. It shows how to set a global snap value applied to both axes, as well as a specific snap array for the x-axis only.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  snap: 56, // Global to both x and y
  x: { snap: [0, 200] }, // Specific to x 
});
```

---

## HTML Structure for Draggable Element in Anime.js

**Description:** This HTML snippet shows the required DOM structure for implementing a draggable element. It includes a container with the 'grid' and 'square-grid' classes, and the draggable element with 'square' and 'draggable' classes.

```html
<div class="large grid square-grid">
  <div class="square draggable"></div>
</div>
```

---