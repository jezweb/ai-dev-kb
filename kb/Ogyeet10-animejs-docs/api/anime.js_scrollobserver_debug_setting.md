# Anime.js ScrollObserver Debug Setting

**Summary:** This file covers topics related to "Anime.js ScrollObserver Debug Setting". Key snippets include: HTML Structure for Scroll-Triggered Animation, Enabling ScrollObserver Debug Mode in Anime.js.

---

## HTML Structure for Scroll-Triggered Animation

**Description:** This HTML structure provides a scrollable container and a target element for the Anime.js animation. The `.scroll-container` class defines the scrollable area, and the `.square` class targets the animated element.  The structure includes sections for scrolling down and up indications.

```html
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll up</div>
      </div>
    </div>
  </div>
</div>
```

---

## Enabling ScrollObserver Debug Mode in Anime.js

**Description:** This snippet demonstrates how to enable debug mode for an Anime.js animation triggered by scrolling.  The `debug: true` option within the `onScroll` configuration enables visual markers representing the enter and leave thresholds, helping to understand the animation trigger points. The `container` option specifies the scrollable container.

```javascript
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    debug: true,
  })
});
```

---