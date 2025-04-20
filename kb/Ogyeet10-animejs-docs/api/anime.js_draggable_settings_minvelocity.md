# Anime.js Draggable Settings: minVelocity

**Summary:** This file covers topics related to "Anime.js Draggable Settings: minVelocity". Key snippets include: Creating Draggable Elements with minVelocity in Anime.js.

---

## Creating Draggable Elements with minVelocity in Anime.js

**Description:** This snippet demonstrates how to create draggable elements using Anime.js with different minVelocity settings. It shows two examples: one with default minVelocity and another with a custom value.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  minVelocity: 0,
});

createDraggable('.circle', {
  container: '.grid',
  minVelocity: 10,
});
```

---