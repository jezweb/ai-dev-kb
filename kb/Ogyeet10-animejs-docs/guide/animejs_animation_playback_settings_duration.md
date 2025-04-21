# AnimeJS Animation Playback Settings: Duration

**Summary:** This file covers topics related to "AnimeJS Animation Playback Settings: Duration". Key snippets include: Setting Global Default Duration in AnimeJS, Implementing Multiple Animations with Different Durations in AnimeJS.

---

## Setting Global Default Duration in AnimeJS

**Description:** Code showing how to change the default animation duration globally by updating the engine.defaults object. This affects all animations that don't specify a duration.

```javascript
import { engine } from 'animejs';
engine.defaults.duration = 500;
```

---

## Implementing Multiple Animations with Different Durations in AnimeJS

**Description:** Example showing three animations with different durations (0ms, 500ms, and 2000ms). The first animation completes instantly, the second takes half a second, and the third takes two seconds to complete.

```javascript
import { animate } from 'animejs';

animate('.dur-0', {
  x: '17rem',
  duration: 0,
});

animate('.dur-500', {
  x: '17rem',
  duration: 500,
});

animate('.dur-2000', {
  x: '17rem',
  duration: 2000
});
```

---