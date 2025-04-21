# Using ScrollObserver Callbacks in Anime.js

**Summary:** This file covers topics related to "Using ScrollObserver Callbacks in Anime.js". Key snippets include: Animating Elements on Scroll Using Anime.js - JavaScript.

---

## Animating Elements on Scroll Using Anime.js - JavaScript

**Description:** This code snippet sets up a scrolling animation using the Anime.js library, where an 'onEnterForward' callback updates a counter indicating how many times the target element has entered the viewport.

```javascript
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let entered = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onEnterForward: () => $value.textContent = ++entered,
  })
});
```

---