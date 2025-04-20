# AnimeJS Timeline Cancel Method Documentation

**Summary:** This file covers topics related to "AnimeJS Timeline Cancel Method Documentation". Key snippets include: Using Timeline cancel() Method with AnimeJS.

---

## Using Timeline cancel() Method with AnimeJS

**Description:** Demonstrates how to create a timeline with multiple animations and implement cancel functionality. The code creates a timeline that animates three shapes, then sets up event handlers for cancel and play buttons.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $cancelButton ] = utils.$('.cancel');
const [ $playButton ] = utils.$('.play');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const cancelTimeline = () => tl.cancel();
const playTimeline = () => tl.play();

$cancelButton.addEventListener('click', cancelTimeline);
$playButton.addEventListener('click', playTimeline);
```

---