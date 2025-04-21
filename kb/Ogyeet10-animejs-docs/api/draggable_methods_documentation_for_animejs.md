# Draggable Methods Documentation for AnimeJS

**Summary:** This file covers topics related to "Draggable Methods Documentation for AnimeJS". Key snippets include: Implementing Draggable Revert Method with AnimeJS.

---

## Implementing Draggable Revert Method with AnimeJS

**Description:** Demonstrates how to create a draggable element and implement revert functionality using AnimeJS. The code creates a draggable square element with buttons to revert it to its initial position and enable dragging.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $enableButton ] = utils.$('.enable');

const draggable = createDraggable('.square');

const revertDraggable = () => draggable.revert();
const enableDraggable = () => draggable.enable();

$revertButton.addEventListener('click', revertDraggable);
$enableButton.addEventListener('click', enableDraggable);
```

---