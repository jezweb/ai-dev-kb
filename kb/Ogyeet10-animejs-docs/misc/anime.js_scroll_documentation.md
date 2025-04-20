# Anime.js Scroll Documentation

**Summary:** This file covers topics related to "Anime.js Scroll Documentation". Key snippets include: Anime.js Scroll Animation Example, Anime.js Timer with Scroll, Import onScroll from Anime.js, Animate with ScrollObserver, HTML Structure for Scroll Animation.

---

## Anime.js Scroll Animation Example

**Description:** This code snippet demonstrates the usage of Anime.js with scroll to trigger animations.  It defines a container element using `utils.$('.scroll-container')` and sets up an animation for elements with the class 'square', which moves them along the x-axis and rotates them when the container is scrolled.

```javascript
import { animate, utils, onScroll } from 'animejs';

const [ container ] = utils.$('.scroll-container');
const debug = true;

// Animation

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  autoplay: onScroll({ container, debug })
});
```

---

## Anime.js Timer with Scroll

**Description:** This code snippet shows how to synchronize a timer with scrolling. It uses `createTimer` (assumed to be a custom function) and updates the inner HTML of an element with the class 'timer' to display the timer's current time, controlled by the scroll position of a container.

```javascript
// Timer

const [ $timer ] = utils.$('.timer');

createTimer({
  duration: 2000,
  alternate: true,
  loop: true,
  onUpdate: self => {
    $timer.innerHTML = self.iterationCurrentTime
  },
  autoplay: onScroll({
    target: $timer.parentNode,
    container,
    debug
  })
});
```

---

## Import onScroll from Anime.js

**Description:** Imports the `onScroll` function along with `animate` from the Anime.js library. The `onScroll` function is used to create a ScrollObserver, which triggers animations based on scroll position.

```javascript
import { onScroll, animate } from 'animejs';
```

---

## Animate with ScrollObserver

**Description:** Animates the 'targets' element, setting its x position to 100.  The autoplay parameter uses `onScroll(parameters)` to trigger the animation based on scroll position. The parameters object configures the ScrollObserver settings, thresholds, sync modes, and callbacks.

```javascript
animate(targets, { x: 100, autoplay: onScroll(parameters) });
```

---

## HTML Structure for Scroll Animation

**Description:** This HTML snippet defines the structure for the scroll animation example. It includes a scrollable container with sections containing a square, a timer display, and circles that are animated based on the scroll position.

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
        <pre class="large log row">
          <span class="label">timer</span>
          <span class="timer value lcd">0</span>
        </pre>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</div>
```

---