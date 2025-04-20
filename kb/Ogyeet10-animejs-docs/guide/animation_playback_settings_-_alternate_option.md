# Animation Playback Settings - Alternate Option

**Summary:** This file covers topics related to "Animation Playback Settings - Alternate Option". Key snippets include: Configuring Alternate Option in anime.js Animations, Setting Global Default for Alternate in anime.js.

---

## Configuring Alternate Option in anime.js Animations

**Description:** This code shows three different configurations of the 'alternate' option in anime.js animations. It includes a normal animation, an alternating animation, and an alternating animation with reverse direction.

```javascript
import { animate } from 'animejs';

animate('.dir-normal', {
  x: '17rem',
  alternate: false, // Default
  loop: 1,
});

animate('.dir-alternate', {
  x: '17rem',
  alternate: true,
  loop: 1, // Required to see the second iteration
});

animate('.dir-alternate-reverse', {
  x: '17rem',
  alternate: true,
  reversed: true,
  loop: 1,
});
```

---

## Setting Global Default for Alternate in anime.js

**Description:** This snippet demonstrates how to change the default value of the 'alternate' option globally for all animations using the engine.defaults object.

```javascript
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

---