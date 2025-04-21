# Anime.js Timeline restart() Method Documentation

**Summary:** This file covers topics related to "Anime.js Timeline restart() Method Documentation". Key snippets include: Implementing Timeline restart() Method in Anime.js, HTML Structure for Anime.js Timeline Demo.

---

## Implementing Timeline restart() Method in Anime.js

**Description:** This snippet demonstrates how to create a timeline with Anime.js and implement a restart button. The timeline animates three shapes sequentially with loop and alternate properties enabled. The restart() method resets the timeline to the beginning when a button is clicked.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $restartButton ] = utils.$('.restart');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const restartTimeline = () => tl.restart();

$restartButton.addEventListener('click', restartTimeline);
```

---

## HTML Structure for Anime.js Timeline Demo

**Description:** This HTML snippet defines the structure for demonstrating the restart() method. It includes shape elements (triangle, square, circle) that will be animated by the timeline, and a control button to trigger the restart function.

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
    <button class="button restart">Restart</button>
  </fieldset>
</div>
```

---