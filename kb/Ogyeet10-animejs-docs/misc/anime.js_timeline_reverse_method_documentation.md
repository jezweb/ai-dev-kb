# Anime.js Timeline Reverse Method Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Reverse Method Documentation". Key snippets include: Implementing Timeline Reverse Animation with Anime.js, HTML Structure for Anime.js Timeline Animation.

---

## Implementing Timeline Reverse Animation with Anime.js

**Description:** Creates an animation timeline with sequential animations for multiple elements and implements a reverse functionality triggered by a button click. The timeline animates circle, triangle, and square elements along the x-axis with different delays.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');

const tl = createTimeline()
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const reverseTimeline = () => tl.reverse();

$reverseButton.addEventListener('click', reverseTimeline);
```

---

## HTML Structure for Anime.js Timeline Animation

**Description:** Defines the HTML structure for the animation elements including a pyramid of shapes (triangle, square, circle) and a control button for triggering the reverse animation.

```html
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button reverse">Reverse</button>
  </fieldset>
</div>
```

---