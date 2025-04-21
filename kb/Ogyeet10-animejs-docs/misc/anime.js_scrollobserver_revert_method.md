# Anime.js ScrollObserver Revert Method

**Summary:** This file covers topics related to "Anime.js ScrollObserver Revert Method". Key snippets include: Initializing ScrollObserver with Scroll-Based Animation, HTML Structure for Scroll Container.

---

## Initializing ScrollObserver with Scroll-Based Animation

**Description:** Creates a scroll-triggered animation for an element using Anime.js onScroll configuration with revert method

```javascript
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: 1,
    debug: true,
    onSyncComplete: self => self.revert()
  })
});
```

---

## HTML Structure for Scroll Container

**Description:** Defines the HTML layout for scroll-based animation with nested scroll sections and target element

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
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

---