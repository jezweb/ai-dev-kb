# Timer Callbacks Documentation - AnimeJS

**Summary:** This file covers topics related to "Timer Callbacks Documentation - AnimeJS". Key snippets include: Configuring Global Timer Pause Callback in AnimeJS, Implementing Timer Pause Functionality with AnimeJS.

---

## Configuring Global Timer Pause Callback in AnimeJS

**Description:** Shows how to set up a default global pause callback handler by modifying the engine defaults. The callback receives the timer instance as an argument.

```javascript
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

---

## Implementing Timer Pause Functionality with AnimeJS

**Description:** Demonstrates creating a timer with pause callback functionality, updating UI elements on pause and time update. Includes event listeners for pause/resume controls.

```javascript
import { createTimer, utils } from 'animejs';

const [ $resumeButton, $pauseButton ] = utils.$('.button');
const [ $paused ] = utils.$('.paused');
const [ $time ] = utils.$('.time');

let paused = 0;

const timer = createTimer({
  onPause: () => $paused.innerHTML = ++paused,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const pauseTimer = () => timer.pause();
const resumeTimer = () => timer.resume();

$resumeButton.addEventListener('click', resumeTimer);
$pauseButton.addEventListener('click', pauseTimer);
```

---