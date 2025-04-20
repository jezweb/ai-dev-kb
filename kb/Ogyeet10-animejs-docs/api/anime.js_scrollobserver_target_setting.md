# Anime.js ScrollObserver Target Setting

**Summary:** This file covers topics related to "Anime.js ScrollObserver Target Setting". Key snippets include: Anime.js ScrollObserver with Target.

---

## Anime.js ScrollObserver with Target

**Description:** This code snippet demonstrates how to use the `target` property within `onScroll` to specify which element triggers the scroll event. The `createTimer` function creates an animation that updates the timer's inner HTML based on the scroll position of the specified target element within the scroll container.

```javascript
import { createTimer, utils, onScroll } from 'animejs';

const [ $timer ] = utils.$('.timer');

createTimer({
  duration: 2000,
  alternate: true,
  loop: true,
  onUpdate: self => {
    $timer.innerHTML = self.iterationCurrentTime
  },
  autoplay: onScroll({
    target: $timer,
    container: '.scroll-container',
  })
});
```

---