# Animating Scroll Effects with Anime.js

**Summary:** This file covers topics related to "Animating Scroll Effects with Anime.js". Key snippets include: Animating Element Position with Eased Scroll Synchronization - Anime.js - JavaScript, HTML Structure for Scroll Animation - HTML.

---

## Animating Element Position with Eased Scroll Synchronization - Anime.js - JavaScript

**Description:** This code snippet demonstrates how to use Anime.js to animate a '.square' element with easing functions based on the scroll position of a container. It utilizes the 'onScroll' callback to trigger animations as scrolling occurs, creating a dynamic visual effect. The code includes parameters for animation settings such as rotation, delay, and synchronization mode.

```javascript
import { animate, stagger, onScroll } from 'animejs';

animate('.square', {
  x: '12rem',
  rotate: '1turn',
  ease: 'linear',
  delay: stagger(100, { from: 'last' }),
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: 'inOutCirc',
    debug: true,
  })
});
```

---

## HTML Structure for Scroll Animation - HTML

**Description:** This code snippet provides the necessary HTML structure to complement the JavaScript animation. It defines a scrollable container with multiple sections and squares that will be animated as the user scrolls down the page. The proper division and class names ensure that the scrolling and animation functionalities work in tandem.

```html
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
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

---