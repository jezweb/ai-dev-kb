# Draggable Reset Method Documentation

**Summary:** This file covers topics related to "Draggable Reset Method Documentation". Key snippets include: Implementing Draggable Reset Functionality in JavaScript with Anime.js.

---

## Implementing Draggable Reset Functionality in JavaScript with Anime.js

**Description:** This snippet demonstrates how to create a draggable element and implement a reset function using Anime.js. It imports necessary functions, creates a draggable element, and sets up an event listener for a reset button.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $resetButton ] = utils.$('.reset');

const draggable = createDraggable('.square');

const resetDraggable = () => draggable.reset();

$resetButton.addEventListener('click', resetDraggable);
```

---