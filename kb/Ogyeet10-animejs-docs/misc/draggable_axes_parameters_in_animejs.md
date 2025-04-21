# Draggable Axes Parameters in AnimeJS

**Summary:** This file covers topics related to "Draggable Axes Parameters in AnimeJS". Key snippets include: Applying Axis Modifiers in AnimeJS Draggable.

---

## Applying Axis Modifiers in AnimeJS Draggable

**Description:** This snippet demonstrates how to use the 'modifier' parameter in createDraggable to limit the movement range of a draggable element. It uses the utils.wrap function to constrain the movement globally and specifically for the x-axis.

```javascript
import { createDraggable, utils } from 'animejs';

createDraggable('.square', {
  modifier: utils.wrap(-32, 32), // Global to both x and y
  x: { modifier: utils.wrap(-128, 128) }, // Specific to x 
});
```

---