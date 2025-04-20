# Anime.js Draggable Release Stiffness Configuration

**Summary:** This file covers topics related to "Anime.js Draggable Release Stiffness Configuration". Key snippets include: Initializing Draggable Elements with Release Stiffness in Anime.js.

---

## Initializing Draggable Elements with Release Stiffness in Anime.js

**Description:** This snippet demonstrates how to initialize draggable elements using the `createDraggable` function from Anime.js and configure the `releaseStiffness` property. The `releaseStiffness` parameter controls the bounciness and speed of the element after it is released.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseStiffness: 20,
});

createDraggable('.circle', {
  container: '.grid',
  releaseStiffness: 300,
});
```

---