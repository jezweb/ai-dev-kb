# Resume Timer Method Documentation - AnimeJS

**Summary:** This file covers topics related to "Resume Timer Method Documentation - AnimeJS". Key snippets include: Implementing Timer Controls with AnimeJS, Timer Control Interface HTML Structure.

---

## Implementing Timer Controls with AnimeJS

**Description:** Creates a timer instance with controls for resuming, pausing, and alternating playback. The timer updates a display element with the current iteration time every frame and loops continuously. Includes event listeners for button controls.

```javascript
import { createTimer, utils } from 'animejs';

const [ $resumeButton, $pauseButton, $alternateButton ] = utils.$('.button');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
  loop: true,
});

const resumeTimer = () => timer.resume();
const pauseTimer = () => timer.pause();
const alternateTimer = () => timer.alternate();

$resumeButton.addEventListener('click', resumeTimer);
$pauseButton.addEventListener('click', pauseTimer);
$alternateButton.addEventListener('click', alternateTimer);
```

---

## Timer Control Interface HTML Structure

**Description:** HTML structure for displaying the timer controls and time display. Includes a large LCD-style time display and three control buttons for resume, pause, and alternate functions.

```html
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">iteration time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Resume</button>
    <button class="button">Pause</button>
    <button class="button">Alternate</button>
  </fieldset>
</div>
```

---