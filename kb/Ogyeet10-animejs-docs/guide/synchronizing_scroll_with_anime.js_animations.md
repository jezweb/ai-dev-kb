# Synchronizing Scroll with Anime.js Animations

**Summary:** This file covers topics related to "Synchronizing Scroll with Anime.js Animations". Key snippets include: Animating Element with Scroll Synchronization using Anime.js in JavaScript, HTML Structure for Scroll Synchronized Animation.

---

## Animating Element with Scroll Synchronization using Anime.js in JavaScript

**Description:** This snippet demonstrates how to animate an element's properties and synchronize its playback with the scroll position using Anime.js. It utilizes the 'animate' function and 'onScroll' method, with set parameters for scroll tracking and sync. Required dependencies include Anime.js and a scroll container element.

```JavaScript
import { animate, onScroll } from 'animejs';

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
  })
});
```

---

## HTML Structure for Scroll Synchronized Animation

**Description:** The HTML snippet outlines the necessary structure for implementing scroll-synchronized animations using Anime.js. It includes a scroll container with sections and a square element that will be animated. The setup assumes integration with a JavaScript animation script using Anime.js.

```HTML
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

---