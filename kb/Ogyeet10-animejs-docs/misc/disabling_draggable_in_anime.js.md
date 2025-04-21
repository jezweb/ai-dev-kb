# Disabling Draggable in Anime.js

**Summary:** This file covers topics related to "Disabling Draggable in Anime.js". Key snippets include: Disabling a Draggable Element in Anime.js - JavaScript.

---

## Disabling a Draggable Element in Anime.js - JavaScript

**Description:** This code snippet demonstrates how to disable a draggable element by using the Anime.js library. It imports necessary functions, sets up an event listener on a button, and invokes the disable method on the draggable object when the button is clicked. The draggable functionality is tied to a square div, and requires the Anime.js library to function properly.

```JavaScript
import { createDraggable, utils } from 'animejs';

const [ $disableButton ] = utils.$('.disable');

const draggable = createDraggable('.square');

const disableDraggable = () => draggable.disable();

$disableButton.addEventListener('click', disableDraggable);
```

---