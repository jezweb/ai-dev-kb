# Timer Callbacks in AnimeJS

**Summary:** This file covers topics related to "Timer Callbacks in AnimeJS". Key snippets include: Implementing onUpdate Callback with AnimeJS Timer.

---

## Implementing onUpdate Callback with AnimeJS Timer

**Description:** This example shows how to create a timer with AnimeJS and use the onUpdate callback. It updates HTML elements with the number of updates and the current time of the timer on each frame.

```javascript
import { createTimer, utils } from 'animejs';

const [ $updates ] = utils.$('.updates');
const [ $time ] = utils.$('.time');

let updates = 0;

createTimer({
  onUpdate: self => {
    $updates.innerHTML = ++updates;
    $time.innerHTML = self.currentTime;
  }
});
```

---