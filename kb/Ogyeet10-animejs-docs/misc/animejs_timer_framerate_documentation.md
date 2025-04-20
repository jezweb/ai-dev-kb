# AnimeJS Timer Framerate Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Framerate Documentation". Key snippets include: Setting Global Framerate Defaults in AnimeJS, Dynamic Timer Framerate Control Implementation.

---

## Setting Global Framerate Defaults in AnimeJS

**Description:** Demonstrates how to modify the default framerate globally using the engine.defaults object. This affects all subsequent timer instances.

```javascript
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

---

## Dynamic Timer Framerate Control Implementation

**Description:** Creates a timer instance with configurable framerate and implements real-time FPS updating through range input control. Includes DOM manipulation for displaying current time and FPS values.

```javascript
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  frameRate: 60,
  onUpdate: self => $time.innerHTML = self.currentTime,
});

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  timer.fps = value;
}

$range.addEventListener('input', updateFps);
```

---