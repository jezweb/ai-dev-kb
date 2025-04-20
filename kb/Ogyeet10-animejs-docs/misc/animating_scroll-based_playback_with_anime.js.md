# Animating Scroll-based Playback with Anime.js

**Summary:** This file covers topics related to "Animating Scroll-based Playback with Anime.js". Key snippets include: Animating Elements with Scroll-based Autoplay - JavaScript/Anime.js, Scroll Container and Content Structure - HTML.

---

## Animating Elements with Scroll-based Autoplay - JavaScript/Anime.js

**Description:** This JavaScript snippet utilizes Anime.js to animate a square element's position and rotation based on scrolling within a specified container. The animation links its progress to the scroll position with a smooth easing effect, providing dynamic feedback to the user's scrolling action.

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
    sync: .25,
    debug: true,
  })
});
```

---

## Scroll Container and Content Structure - HTML

**Description:** This HTML structure provides a scrollable container with sections and a square element within it. It is necessary for the scroll observer to function properly, allowing the Anime.js animations to be triggered as the user scrolls.

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