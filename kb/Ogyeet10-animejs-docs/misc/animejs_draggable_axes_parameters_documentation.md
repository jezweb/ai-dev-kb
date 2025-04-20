# Animejs Draggable Axes Parameters Documentation

**Summary:** This file covers topics related to "Animejs Draggable Axes Parameters Documentation". Key snippets include: Configuring Draggable Axis Mapping with Anime.js.

---

## Configuring Draggable Axis Mapping with Anime.js

**Description:** Demonstrates how to create a draggable element with custom axis mapping. The x-axis movement is mapped to rotateY transformation and y-axis movement is mapped to z-index positioning. Includes initial setup of z-index using utils.set().

```javascript
import { createDraggable, utils } from 'animejs';

utils.set('.square', { z: 100 });

createDraggable('.square', {
  x: { mapTo: 'rotateY' },
  y: { mapTo: 'z' },
});
```

---