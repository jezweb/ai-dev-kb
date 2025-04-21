# Animating Elements on Scroll - Anime.js - JavaScript

**Summary:** This file covers topics related to "Animating Elements on Scroll - Anime.js - JavaScript". Key snippets include: Animating Elements on Scroll with Enter Callback - Anime.js - JavaScript.

---

## Animating Elements on Scroll with Enter Callback - Anime.js - JavaScript

**Description:** This snippet sets up an animation on a '.square' element that triggers when the user scrolls backward and meets a specified threshold. It updates a value displayed on the screen each time the enter threshold is met. The animation utilizes the onScroll method from the Anime.js library and requires the library to be imported. The key parameters include 'container' for the scrolling element and 'enter' defining the point where the callback is triggered.

```JavaScript
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
    onEnterBackward: () => $value.textContent = ++entered,
  })
});
```

---