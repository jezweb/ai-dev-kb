# Anime.js Draggable Refresh Method Documentation

**Summary:** This file covers topics related to "Anime.js Draggable Refresh Method Documentation". Key snippets include: Implementing Draggable Refresh Method in JavaScript with Anime.js.

---

## Implementing Draggable Refresh Method in JavaScript with Anime.js

**Description:** This snippet demonstrates how to create a draggable element and implement a refresh function using Anime.js. It creates a draggable square with randomized snap and drag speed, and adds a refresh button to recalculate these values.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const draggable = createDraggable('.square', {
  snap: () => utils.random(0, 32, 0),
  dragSpeed: () => utils.random(.5, 1.5, 1),
});

const refreshDraggable = () => draggable.refresh();

$refreshButton.addEventListener('click', refreshDraggable);
```

---