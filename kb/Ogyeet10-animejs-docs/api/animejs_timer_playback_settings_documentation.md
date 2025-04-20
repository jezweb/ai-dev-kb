# AnimeJS Timer Playback Settings Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Playback Settings Documentation". Key snippets include: Creating Alternating Timer Animation with Loop Counter.

---

## Creating Alternating Timer Animation with Loop Counter

**Description:** Shows how to create a timer animation with alternating direction and loop counting functionality. Includes loop and update callbacks to display current iteration count and time.

```javascript
import { animate } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  alternate: true,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime
});
```

---