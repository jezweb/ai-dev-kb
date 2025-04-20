# Managing Scroll Animations with Anime.js - JavaScript

**Summary:** This file covers topics related to "Managing Scroll Animations with Anime.js - JavaScript". Key snippets include: Animating Elements on Scroll using Anime.js - JavaScript.

---

## Animating Elements on Scroll using Anime.js - JavaScript

**Description:** This snippet demonstrates how to use Anime.js to animate elements when specific scroll events occur. It uses `animate` and `onScroll` functions from the Anime.js library and configures various animation settings such as `enter`, `leave`, and `autoplay`. The snippet requires Anime.js and appropriate HTML structure for the scroll container and elements.

```JavaScript
import { animate, onScroll } from 'animejs';

const scrollSettings = {
  enter: 20,
  leave: 60,
}

const animation = animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: () => `bottom-=${scrollSettings.enter} top`,
    leave: () => `top+=${scrollSettings.leave} bottom`,
    sync: .5,
    debug: true,
  })
});

animate(scrollSettings, {
  enter: 90,
  leave: 100,
  loop: true,
  alternate: true,
  modifier: utils.round(0),
  onUpdate: () => animation._autoplay.refresh()
});
```

---