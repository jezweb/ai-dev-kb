# Anime.js ScrollObserver Thresholds with Numeric Values

**Summary:** This file covers topics related to "Anime.js ScrollObserver Thresholds with Numeric Values". Key snippets include: Anime.js Scroll Animation with Numeric Thresholds, HTML Structure for Scroll Container and Animated Element.

---

## Anime.js Scroll Animation with Numeric Thresholds

**Description:** This JavaScript snippet uses Anime.js to create a scroll-triggered animation on an element with the class '.square'. The animation moves the element along the x-axis, rotates it, and sets its duration, easing, and loop properties.  The `onScroll` function is used to trigger the animation based on the scroll position of the element relative to the scroll container. The `enter` and `leave` properties define the scroll thresholds for triggering the animation.

```JavaScript
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
    // -48px from the top of the target, 80px from the top of the container 
    enter: '80 -48',
    // 250% from the top of the target, 67.5% from the top of the container
    leave: '67.5% 250%',
    debug: true
  })
});
```

---

## HTML Structure for Scroll Container and Animated Element

**Description:** This HTML snippet defines the structure for a scroll container and an element that will be animated using Anime.js. The `.scroll-container` div is set to enable vertical scrolling (`scroll-y`).  Inside the container, there are nested divs to structure the content and the `.square` div, which will be the target of the Anime.js scroll animation.

```HTML
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
    <div class="scroll-section">
    </div>
  </div>
</div>
```

---