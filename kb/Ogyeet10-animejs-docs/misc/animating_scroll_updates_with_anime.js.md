# Animating Scroll Updates with Anime.js

**Summary:** This file covers topics related to "Animating Scroll Updates with Anime.js". Key snippets include: Scroll Layout Structure - HTML, Animating Scroll Updates with Anime.js - JavaScript.

---

## Scroll Layout Structure - HTML

**Description:** This snippet provides the HTML structure necessary to demonstrate the scroll-enabled animations defined in the JavaScript snippet. It includes a scroll container with elements that respond to scroll events.

```html
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded sticky">
      <div class="large row">
        <pre class="large log row">
          <span class="label">updates</span>
          <span class="value">0</span>
        </pre>
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

## Animating Scroll Updates with Anime.js - JavaScript

**Description:** This snippet imports the necessary functions from Anime.js and sets up an animation on a square element that updates a displayed value during scroll events. It uses the onScroll callback to handle synchronization with the scroll container.

```javascript
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: .5,
    debug: true,
    onUpdate: () => $value.textContent = ++updates,
  })
});
```

---