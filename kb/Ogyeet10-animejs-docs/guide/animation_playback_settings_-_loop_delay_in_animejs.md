# Animation Playback Settings - Loop Delay in AnimeJS

**Summary:** This file covers topics related to "Animation Playback Settings - Loop Delay in AnimeJS". Key snippets include: Setting Global Loop Delay in AnimeJS, Configuring Loop Delay for Specific Animation in AnimeJS.

---

## Setting Global Loop Delay in AnimeJS

**Description:** Demonstrates how to set the default loop delay globally for all animations using the engine.defaults object.

```javascript
import { engine } from 'animejs';
engine.defaults.loopDelay = 500;
```

---

## Configuring Loop Delay for Specific Animation in AnimeJS

**Description:** Shows how to create an animation with specific loop delay settings, including scale transformation and alternating animation.

```javascript
const loopDelayAnimation = animate('.circle', {
  x: '16rem',
  scale: {
    to: 1.8,
    delay: 500,
    duration: 500,
  },
  loopDelay: 1000,
  loop: true,
  alternate: true,
});
```

---