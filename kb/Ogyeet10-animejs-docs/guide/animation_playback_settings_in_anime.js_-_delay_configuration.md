# Animation Playback Settings in Anime.js - Delay Configuration

**Summary:** This file covers topics related to "Animation Playback Settings in Anime.js - Delay Configuration". Key snippets include: Creating Animation with Delay in Anime.js, Setting Global Default Delay in Anime.js.

---

## Creating Animation with Delay in Anime.js

**Description:** Shows how to apply a 500ms delay to a specific animation. This delay is applied to all properties in the animation, which moves and scales an element with the 'delay' class while looping and alternating.

```javascript
import { animate } from 'animejs';

const playbackDelay = animate('.delay', {
  x: '16rem',
  scale: 1.8,
  delay: 500, // Global delay applied to all properties
  loop: true,
  alternate: true
});
```

---

## Setting Global Default Delay in Anime.js

**Description:** Demonstrates how to change the default delay value globally for all animations by updating the engine.defaults object. This code sets a 500ms delay for all animations across the application.

```javascript
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

---