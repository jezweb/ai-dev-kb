# Timer Methods in AnimeJS

**Summary:** This file covers topics related to "Timer Methods in AnimeJS". Key snippets include: Implementing Timer Seek Functionality with AnimeJS in JavaScript, Implementing Timer Alternation in AnimeJS, Implementing Timer Restart Functionality with AnimeJS in JavaScript.

---

## Implementing Timer Seek Functionality with AnimeJS in JavaScript

**Description:** This snippet demonstrates how to create and control a timer using AnimeJS. It includes functions for seeking to a specific time, playing/pausing the timer, and updating the UI accordingly. The timer is created with a duration of 2000ms and includes callbacks for updates and completion.

```javascript
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');
const [ $time ] = utils.$('.time');

const updateButtonLabel = timer => {
  $playPauseButton.textContent = timer.paused ? 'Play' : 'Pause';
}

const timer = createTimer({
  duration: 2000,
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    $time.innerHTML = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
});

const seekTimer = () => timer.seek(+$range.value);

const playPauseTimer = () => {
  if (timer.paused) {
    timer.play();
  } else {
    timer.pause();
    updateButtonLabel(timer);
  }
}

$range.addEventListener('input', seekTimer);
$playPauseButton.addEventListener('click', playPauseTimer);
```

---

## Implementing Timer Alternation in AnimeJS

**Description:** This snippet demonstrates how to create and use a timer with the alternate() method in AnimeJS. It sets up a timer with a duration of 10 seconds, loops continuously, and updates a display element with the current iteration time. A button is set up to trigger the alternate() method, which reverses the playback direction.

```javascript
import { createTimer, utils } from 'animejs';

const [ $alternateButton ] = utils.$('.button');
const [ $iterationTime ] = utils.$('.iteration-time');

const timer = createTimer({
  duration: 10000,
  loop: true,
  onUpdate: self => {
    $iterationTime.innerHTML = self.iterationCurrentTime;
  }
});

const alternateTimer = () => timer.alternate();

$alternateButton.addEventListener('click', alternateTimer);
```

---

## Implementing Timer Restart Functionality with AnimeJS in JavaScript

**Description:** This code snippet demonstrates how to create and restart a timer using AnimeJS. It sets up a timer that updates a time display and adds a click event listener to a restart button. The timer's current time is displayed and can be reset to 0 using the restart method.

```javascript
import { createTimer, utils } from 'animejs';

const [ $restartButton ] = utils.$('.restart');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const restartTimer = () => timer.restart();

$restartButton.addEventListener('click', restartTimer);
```

---