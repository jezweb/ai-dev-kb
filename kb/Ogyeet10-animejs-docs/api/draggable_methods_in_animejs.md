# Draggable Methods in AnimeJS

**Summary:** This file covers topics related to "Draggable Methods in AnimeJS". Key snippets include: Implementing Draggable Stop Method in AnimeJS.

---

## Implementing Draggable Stop Method in AnimeJS

**Description:** This snippet demonstrates how to use the 'stop' method on a Draggable object in AnimeJS. It creates a draggable square, animates it, and provides a button to stop all animations. The 'stop' method halts all running animations on the draggable, including container scroll and release animations.

```javascript
import { createDraggable, animate, utils } from 'animejs';

const [ $stopButton ] = utils.$('.stop');

const draggable = createDraggable('.square');

animate(draggable, {
  x: [-100, 100],
  alternate: true,
  loop: true
});

const stopDraggable = () => draggable.stop();

$stopButton.addEventListener('click', stopDraggable);
```

---