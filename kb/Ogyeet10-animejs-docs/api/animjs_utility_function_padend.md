# AnimJS Utility Function: padEnd

**Summary:** This file covers topics related to "AnimJS Utility Function: padEnd". Key snippets include: Animating with padEnd Modifier in Anime.js.

---

## Animating with padEnd Modifier in Anime.js

**Description:** Example of using the padEnd utility as a modifier in an animation to format the innerHTML value during animation.

```javascript
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: 1,
  modifier: utils.round(3).padEnd(6, '-'),
  duration: 100000,
  ease: 'linear',
});
```

---