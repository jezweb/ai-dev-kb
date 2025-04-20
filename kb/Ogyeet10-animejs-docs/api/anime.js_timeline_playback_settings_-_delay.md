# Anime.js Timeline Playback Settings - Delay

**Summary:** This file covers topics related to "Anime.js Timeline Playback Settings - Delay". Key snippets include: Creating a Timeline with Delay in Anime.js.

---

## Creating a Timeline with Delay in Anime.js

**Description:** Demonstrates creating a timeline with a 2000ms delay and adding sequential animations for different elements. Also includes a timer function to log the delayed time.

```javascript
import { createTimeline, createTimer, utils } from 'animejs';

const tl = createTimeline({
  delay: 2000,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

// For logging delayed time only

const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000 + tl.duration,
  onUpdate: self => $time.innerHTML = (2000 - self.currentTime) * -1,
});
```

---