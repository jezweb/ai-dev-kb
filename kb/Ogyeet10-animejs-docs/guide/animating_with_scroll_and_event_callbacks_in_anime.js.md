# Animating with Scroll and Event Callbacks in Anime.js

**Summary:** This file covers topics related to "Animating with Scroll and Event Callbacks in Anime.js". Key snippets include: Animating Elements on Scroll with Anime.js in JavaScript.

---

## Animating Elements on Scroll with Anime.js in JavaScript

**Description:** This JavaScript snippet uses the Anime.js library to animate a '.square' element. The animation involves moving the element horizontally by '15rem' and rotating it one full turn. It is coupled with a scroll event handler that increments a display value each time the scrolling forward exceeds a specified threshold. The animation autoplays on scroll events triggered by the 'onScroll' method, with debug mode enabled for detailed interaction feedback. The 'onLeaveForward' callback function is utilized for counting the exits. Key dependencies include Anime.js and a structured HTML layout where elements with classes like '.value' and '.square' are manipulated.

```JavaScript
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let exits = 0;

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
    onLeaveForward: () => $value.textContent = ++exits,
  })
});
```

---