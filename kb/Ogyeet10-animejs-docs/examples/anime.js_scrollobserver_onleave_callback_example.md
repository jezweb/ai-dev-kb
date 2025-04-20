# Anime.js ScrollObserver onLeave Callback Example

**Summary:** This file covers topics related to "Anime.js ScrollObserver onLeave Callback Example". Key snippets include: Anime.js ScrollObserver onLeave Callback, HTML Structure for ScrollObserver Example.

---

## Anime.js ScrollObserver onLeave Callback

**Description:** This JavaScript code snippet demonstrates how to use the `onLeave` callback within Anime.js's `onScroll` function. It imports necessary modules from Anime.js, selects an HTML element with class 'value', initializes a counter, and animates a '.square' element based on scroll position. The `onLeave` callback increments the counter and updates the text content of the selected element when the square leaves the defined threshold.

```JavaScript
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let exits = 0;

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
    onLeave: () => $value.textContent = ++exits,
  })
});
```

---

## HTML Structure for ScrollObserver Example

**Description:** This HTML snippet defines the structure for the Anime.js ScrollObserver example. It includes a scrollable container (`scroll-container`) with nested divs representing scrollable sections and content.  The 'square' div is the element animated by Anime.js, and the 'value' span is updated by the `onLeave` callback.

```HTML
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded sticky">
      <div class="large row">
        <pre class="large log row">
          <span class="label">exits</span>
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