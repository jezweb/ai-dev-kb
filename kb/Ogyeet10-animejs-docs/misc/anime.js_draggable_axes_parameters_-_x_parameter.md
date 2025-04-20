# Anime.js Draggable Axes Parameters - X Parameter

**Summary:** This file covers topics related to "Anime.js Draggable Axes Parameters - X Parameter". Key snippets include: Configuring X-axis Draggable Behavior in Anime.js.

---

## Configuring X-axis Draggable Behavior in Anime.js

**Description:** This example demonstrates how to enable or disable the x-axis dragging functionality using the 'createDraggable' function from Anime.js. It shows two implementations: one with x-axis enabled (default) and another with x-axis explicitly disabled.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square.enabled', {
  x: true
});

createDraggable('.square.disabled', {
  x: false
});
```

---