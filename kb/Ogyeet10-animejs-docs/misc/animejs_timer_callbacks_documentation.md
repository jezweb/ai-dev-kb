# AnimeJS Timer Callbacks Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Callbacks Documentation". Key snippets include: Implementing Timer Loop Counter with AnimeJS, Setting Default Timer Loop Callback in AnimeJS.

---

## Implementing Timer Loop Counter with AnimeJS

**Description:** Creates a timer with loop functionality that updates UI elements showing the loop count and current iteration time. Uses utility functions for DOM selection and implements both onLoop and onUpdate callbacks.

```javascript
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  onLoop: self => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
});
```

---

## Setting Default Timer Loop Callback in AnimeJS

**Description:** Shows how to globally configure the default onLoop callback by updating the engine defaults. The callback receives the timer instance as an argument.

```javascript
import { engine } from 'animejs';
engine.defaults.onLoop = self => console.log(self.id);
```

---