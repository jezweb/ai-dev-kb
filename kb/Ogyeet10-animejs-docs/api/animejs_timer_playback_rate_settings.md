# AnimeJS Timer Playback Rate Settings

**Summary:** This file covers topics related to "AnimeJS Timer Playback Rate Settings". Key snippets include: Creating a Timer with Custom Playback Rate and Interactive Controls, Setting Global Default Playback Rate in AnimeJS.

---

## Creating a Timer with Custom Playback Rate and Interactive Controls

**Description:** Demonstrates how to create a timer with a custom playback rate and implement interactive controls to adjust the speed in real-time. The timer updates a time display and allows changing the speed via a range input.

```javascript
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  playbackRate: 2,
  onUpdate: self => $time.innerHTML = utils.round(self.currentTime, 0),
});

const updateSpeed = () => {
  const speed = utils.roundPad(+$range.value, 1);
  $speed.innerHTML = speed;
  utils.sync(() => timer.speed = speed);
}

$range.addEventListener('input', updateSpeed);
```

---

## Setting Global Default Playback Rate in AnimeJS

**Description:** Shows how to change the default playback rate for all timers globally by updating the engine.defaults object. This affects all timers that don't explicitly specify a playback rate.

```javascript
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

---