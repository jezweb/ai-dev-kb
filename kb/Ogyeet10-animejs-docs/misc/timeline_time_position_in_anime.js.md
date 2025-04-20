# Timeline Time Position in Anime.js

**Summary:** This file covers topics related to "Timeline Time Position in Anime.js". Key snippets include: Creating a Timeline with Various Position Types in Anime.js, HTML Structure for Anime.js Timeline Animation.

---

## Creating a Timeline with Various Position Types in Anime.js

**Description:** This example demonstrates how to create an Anime.js timeline with different time position strategies. It creates a timeline with labeled positions, absolute positioning (at 500ms), label-based positioning ('start'), and relative positioning ('<-=250') for different elements.

```javascript
import { createTimeline } from 'animejs';

const tl = createTimeline()
.label('start', 0)
.add('.square', {
  x: '15rem',
  duration: 500,
}, 500)
.add('.circle', {
  x: '15rem',
  duration: 500,
}, 'start')
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
}, '<-=250');
```

---

## HTML Structure for Anime.js Timeline Animation

**Description:** HTML structure containing the target elements for the Anime.js timeline animation. It includes a pyramid with triangle, square, and circle elements that will be animated according to the timeline positioning.

```html
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
```

---