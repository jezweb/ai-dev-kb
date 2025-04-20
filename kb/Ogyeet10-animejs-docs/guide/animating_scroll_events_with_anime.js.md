# Animating Scroll Events with Anime.js

**Summary:** This file covers topics related to "Animating Scroll Events with Anime.js". Key snippets include: Animating a Square on Scroll with Anime.js, HTML Structure for Scroll Animation.

---

## Animating a Square on Scroll with Anime.js

**Description:** This snippet demonstrates how to animate a square element by changing its position and rotation when the user scrolls horizontally. It uses the 'onScroll' function from the Anime.js library to trigger the animation based on the scroll container defined by the user.

```javascript
import { createTimer, utils, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    axis: 'x',
  })
});
```

---

## HTML Structure for Scroll Animation

**Description:** This snippet provides the HTML structure necessary for implementing the scroll animation. It includes a scroll container that wraps the animated square and additional sections to demonstrate the scrolling effect visually.

```html
<div class="scroll-container scroll-x">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll right →</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
  </div>
</div>
```

---