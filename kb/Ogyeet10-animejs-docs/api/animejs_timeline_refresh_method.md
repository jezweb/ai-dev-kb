# AnimeJS Timeline Refresh Method

**Summary:** This file covers topics related to "AnimeJS Timeline Refresh Method". Key snippets include: Using Timeline Refresh Method in AnimeJS.

---

## Using Timeline Refresh Method in AnimeJS

**Description:** This snippet demonstrates how to use the refresh() method with an AnimeJS timeline. It creates a timeline with random x-position animations for three shapes (circle, triangle, square) and sets up a button to refresh and restart the animation. The timeline also has a loop property with an onLoop callback that automatically refreshes the animations.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const tl = createTimeline({
  loop: true,
  onLoop: self => self.refresh()
})
.add('.circle',   { x: () => utils.random(0, 15) + 'rem' }, 0)
.add('.triangle', { x: () => utils.random(0, 15) + 'rem' }, 0)
.add('.square',   { x: () => utils.random(0, 15) + 'rem' }, 0);

const refreshTimeline = () => tl.refresh().restart();

$refreshButton.addEventListener('click', refreshTimeline);
```

---