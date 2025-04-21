# AnimeJS Draggable Methods Documentation

**Summary:** This file covers topics related to "AnimeJS Draggable Methods Documentation". Key snippets include: Implementing Draggable ScrollInView with AnimeJS.

---

## Implementing Draggable ScrollInView with AnimeJS

**Description:** Creates a draggable element and implements scroll-into-view functionality. The code demonstrates how to initialize a draggable element and trigger scrolling animation when the element is outside the viewport. Includes event listener setup and position configuration.

```javascript
import { createDraggable } from 'animejs';

const [ $scrollInView ] = utils.$('.scroll-button');

const draggable = createDraggable('.square', {
  container: '.scroll-container',
});

const scrollInView = () => {
  draggable.scrollInView(400, 100);
}

// Set the draggable position outside the scroll viewport
draggable.x = 120;
draggable.y = 200;

$scrollInView.addEventListener('click', scrollInView);
```

---