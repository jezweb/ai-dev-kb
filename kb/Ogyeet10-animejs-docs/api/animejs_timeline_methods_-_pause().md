# AnimeJS Timeline Methods - pause()

**Summary:** This file covers topics related to "AnimeJS Timeline Methods - pause()". Key snippets include: Implementing pause() Method with AnimeJS Timeline.

---

## Implementing pause() Method with AnimeJS Timeline

**Description:** This code demonstrates how to create a timeline with AnimeJS and pause it using the pause() method. The example creates a timeline with three animations that run in sequence with specific timings, and adds a pause button event listener to control the timeline.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $pauseButton ] = utils.$('.pause');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const pauseTimeline = () => tl.pause();

$pauseButton.addEventListener('click', pauseTimeline);
```

---