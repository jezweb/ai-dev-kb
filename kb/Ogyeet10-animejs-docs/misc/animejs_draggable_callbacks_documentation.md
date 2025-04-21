# AnimeJS Draggable Callbacks Documentation

**Summary:** This file covers topics related to "AnimeJS Draggable Callbacks Documentation". Key snippets include: Implementing Draggable onSnap Callback in AnimeJS.

---

## Implementing Draggable onSnap Callback in AnimeJS

**Description:** Creates a draggable element with snap functionality and a callback to count snap events. The code demonstrates how to use createDraggable with snap settings and update a counter display when snap events occur.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let snaps = 0;

createDraggable('.square', {
  container: '.grid',
  snap: 16,
  modifier: utils.snap(16), // also snap the element while draggin
  onSnap: () => $value.textContent = ++snaps
});
```

---