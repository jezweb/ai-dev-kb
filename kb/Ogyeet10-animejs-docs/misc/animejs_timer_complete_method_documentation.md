# AnimeJS Timer Complete Method Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Complete Method Documentation". Key snippets include: Implementing Timer Complete Method in AnimeJS.

---

## Implementing Timer Complete Method in AnimeJS

**Description:** Demonstrates how to create and complete a timer using AnimeJS. The code creates a timer with a 100000ms duration that updates a display element, and includes a button to trigger instant completion.

```javascript
import { createTimer, utils } from 'animejs';

const [ $completeButton ] = utils.$('.complete');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 100000,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const completeTimer = () => timer.complete();

$completeButton.addEventListener('click', completeTimer);
```

---