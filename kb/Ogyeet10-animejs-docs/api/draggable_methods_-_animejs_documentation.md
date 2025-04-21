# Draggable Methods - Animejs Documentation

**Summary:** This file covers topics related to "Draggable Methods - Animejs Documentation". Key snippets include: Implementing Draggable setX Method - JavaScript.

---

## Implementing Draggable setX Method - JavaScript

**Description:** Demonstrates how to use the setX method to programmatically set the x-position of a draggable element. The example shows creating a draggable instance and setting random x positions via button click.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $setButton ] = utils.$('.set');

const draggable = createDraggable('.square');

const setRandomX = () => draggable.setX(utils.random(-100, 100));

$setButton.addEventListener('click', setRandomX);
```

---