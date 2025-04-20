# Draggable Callbacks in AnimeJS

**Summary:** This file covers topics related to "Draggable Callbacks in AnimeJS". Key snippets include: Implementing onAfterResize Callback in AnimeJS Draggable.

---

## Implementing onAfterResize Callback in AnimeJS Draggable

**Description:** This snippet demonstrates how to use the onAfterResize callback in AnimeJS Draggable. It creates a draggable element and updates a counter each time the container or target sizes change. The callback also triggers an animation to bring the dragged element into view.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let resizes = 0;

const draggable = createDraggable('.square', {
  container: '.grid',
  onAfterResize: self => {
    $value.textContent = ++resizes;
    self.animateInView(1000, 30);
  }
});
```

---