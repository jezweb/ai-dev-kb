# Anime.js Timeline Stretch Method Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Stretch Method Documentation". Key snippets include: Timeline Stretch Method Implementation in JavaScript, HTML Structure for Timeline Animation Controls.

---

## Timeline Stretch Method Implementation in JavaScript

**Description:** Shows how to create and control an Anime.js timeline with the stretch method. Creates animations for multiple elements with different delays and allows dynamic duration adjustment through a range input.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $totalDuration ] = utils.$('.value');

const tl = createTimeline({
  loop: 1,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const stretchTimeline = () => {
  const newDuration = +$range.value;
  $totalDuration.textContent = newDuration;
  tl.stretch(newDuration).restart();
}

stretchTimeline();

$range.addEventListener('input', stretchTimeline);
```

---

## HTML Structure for Timeline Animation Controls

**Description:** Defines the HTML structure for displaying animated elements and timeline controls. Includes a pyramid of shapes and a range input for controlling animation duration.

```html
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
  <pre class="large log row">
    <span class="label">total duration</span>
    <span class="value">0</span>
  </pre>
</div>
<div class="medium centered row">
  <fieldset class="controls">
    <input type="range" min=100 max=2000 value=1000 step=100 class="seek range" />
  </fieldset>
</div>
```

---