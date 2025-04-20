# AnimeJS Timeline Revert Method Documentation

**Summary:** This file covers topics related to "AnimeJS Timeline Revert Method Documentation". Key snippets include: Implementing Timeline Revert Animation with AnimeJS - JavaScript.

---

## Implementing Timeline Revert Animation with AnimeJS - JavaScript

**Description:** Demonstrates how to create and control an animation timeline with revert functionality using AnimeJS. Sets up initial positions for shapes, creates a looping timeline animation, and implements revert and restart button handlers.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $restartButton ] = utils.$('.restart');

// Set an initial x value
utils.set(['.circle', '.triangle', '.square'], { x: '15rem' });

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: 0 })
.add('.triangle', { x: 0 }, 500)
.add('.square',   { x: 0 }, 1000);

const revertTimeline = () => tl.revert();
const restartTimeline = () => tl.restart();

$revertButton.addEventListener('click', revertTimeline);
$restartButton.addEventListener('click', restartTimeline);
```

---