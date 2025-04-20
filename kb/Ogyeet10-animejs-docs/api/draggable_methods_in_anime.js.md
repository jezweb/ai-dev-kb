# Draggable Methods in Anime.js

**Summary:** This file covers topics related to "Draggable Methods in Anime.js". Key snippets include: Implementing animateInView for Draggable Elements in Anime.js.

---

## Implementing animateInView for Draggable Elements in Anime.js

**Description:** This snippet demonstrates how to create a draggable element and use the animateInView method to bring it back into the viewport. It includes event listener setup and initial positioning of the draggable element.

```javascript
import { createDraggable } from 'animejs';

const [ $animateInView ] = utils.$('.animate-button');

const draggable = createDraggable('.square', {
  container: '.grid',
});

const animateInView = () => {
  draggable.animateInView(400, 16);
}

// Set the draggable position outside the container
draggable.x = -24;
draggable.y = 72;

$animateInView.addEventListener('click', animateInView);
```

---