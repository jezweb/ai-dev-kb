# Draggable Y-Axis Configuration in Anime.js

**Summary:** This file covers topics related to "Draggable Y-Axis Configuration in Anime.js". Key snippets include: Configuring Y-Axis Draggable Behavior with Anime.js.

---

## Configuring Y-Axis Draggable Behavior with Anime.js

**Description:** This snippet demonstrates how to create draggable elements with different y-axis configurations using Anime.js. It shows enabling and disabling vertical movement for square elements.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square.enabled', {
  y: true
});

createDraggable('.square.disabled', {
  y: false
});
```

---