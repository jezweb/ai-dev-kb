# Creating Draggable Elements in Anime.js

**Summary:** This file covers topics related to "Creating Draggable Elements in Anime.js". Key snippets include: Creating Draggable Elements with Custom Easing - JavaScript, Creating Draggable Element with Custom Trigger - JavaScript - Anime.js, Creating Draggable Elements with Scroll Speed - JavaScript.

---

## Creating Draggable Elements with Custom Easing - JavaScript

**Description:** This code snippet demonstrates how to create draggable elements using the Anime.js library. It allows for customization of the easing that takes effect when the draggable elements are released. The code utilizes the createDraggable function from Anime.js to assign draggable behavior to specified elements while setting the releaseEase property for the easing effect upon release.

```JavaScript
import { createDraggable, createSpring } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseEase: 'outElastic',
});

createDraggable('.circle', {
  container: '.grid',
  releaseEase: createSpring({
    stiffness: 150,
    damping: 15,
  })
});
```

---

## Creating Draggable Element with Custom Trigger - JavaScript - Anime.js

**Description:** This code snippet demonstrates how to create a draggable element in Anime.js, specifying a different trigger element for dragging. It uses the createDraggable function to initialize the draggable behavior, where the trigger can be a CSS selector or a DOM element.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.row', {
  trigger: '.circle',
});
```

---

## Creating Draggable Elements with Scroll Speed - JavaScript

**Description:** This code snippet demonstrates how to initialize a draggable square element with a specified scrolling speed within a designated container using the Anime.js library. The scroll speed is adjustable through a numerical value or a refreshable function.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.scroll-container',
  scrollSpeed: 2,
});
```

---