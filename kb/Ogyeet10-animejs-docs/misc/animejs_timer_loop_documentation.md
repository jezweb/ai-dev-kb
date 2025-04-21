# AnimeJS Timer Loop Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Loop Documentation". Key snippets include: Creating Looped Timer with Counter Display, Configuring Global Timer Loop Defaults in AnimeJS.

---

## Creating Looped Timer with Counter Display

**Description:** Creates a timer that loops indefinitely, updates a loop counter, and displays the current iteration time. Uses utility functions for DOM selection and implements loop and update callbacks.

```javascript
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime
});
```

---

## Configuring Global Timer Loop Defaults in AnimeJS

**Description:** Shows how to modify the default loop behavior globally in AnimeJS by updating the engine defaults. This affects all timers created afterward unless overridden.

```javascript
import { engine } from 'animejs';
engine.defaults.loop = true;
```

---