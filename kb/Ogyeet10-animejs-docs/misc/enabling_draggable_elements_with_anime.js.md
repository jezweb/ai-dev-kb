# Enabling Draggable Elements with Anime.js

**Summary:** This file covers topics related to "Enabling Draggable Elements with Anime.js". Key snippets include: Enabling Draggable Elements with Anime.js in JavaScript.

---

## Enabling Draggable Elements with Anime.js in JavaScript

**Description:** This code snippet demonstrates how to create a draggable element, disable it, and then enable it using a button click event. It utilizes the createDraggable and utils functions from the animejs library.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $enableButton ] = utils.$('.enable');

const draggable = createDraggable('.square');

draggable.disable();

const enableDraggable = () => draggable.enable();

$enableButton.addEventListener('click', enableDraggable);
```

---