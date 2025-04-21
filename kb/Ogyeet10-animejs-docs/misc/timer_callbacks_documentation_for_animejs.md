# Timer Callbacks Documentation for AnimeJS

**Summary:** This file covers topics related to "Timer Callbacks Documentation for AnimeJS". Key snippets include: Creating Timers with onBegin Callback, Setting Default onBegin Callback in AnimeJS.

---

## Creating Timers with onBegin Callback

**Description:** Shows how to create timers with custom onBegin callbacks and update DOM elements. Creates two timers: one with an onBegin callback to update status, and another to track and display the current time.

```javascript
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  delay: 2000,
  duration: 2000,
  onBegin: self => $status.innerHTML = 'true'
});

const logTimer = createTimer({
  duration: 4000,
  onUpdate: self => $time.innerHTML = timer.currentTime
});
```

---

## Setting Default onBegin Callback in AnimeJS

**Description:** Demonstrates how to globally set the default onBegin callback using the engine.defaults object. The callback receives the timer instance as its argument.

```javascript
import { engine } from 'animejs';
engine.defaults.onBegin = self => console.log(self.id);
```

---