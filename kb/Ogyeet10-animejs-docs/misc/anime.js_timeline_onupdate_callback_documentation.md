# Anime.js Timeline onUpdate Callback Documentation

**Summary:** This file covers topics related to "Anime.js Timeline onUpdate Callback Documentation". Key snippets include: Implementing onUpdate in an Anime.js Timeline, HTML Structure for Anime.js Animation Demo, Setting Global onUpdate Default in Anime.js.

---

## Implementing onUpdate in an Anime.js Timeline

**Description:** Demonstrates how to use the onUpdate callback in a timeline to update a DOM element's content on every frame. The example creates a looping animation with multiple elements and tracks the number of updates.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onUpdate: self => $value.textContent = ++updates
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

---

## HTML Structure for Anime.js Animation Demo

**Description:** The HTML markup that structures the animation demo, containing the elements being animated (triangle, square, circle) and a counter display that shows the number of updates triggered by the onUpdate callback.

```html
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
  <pre class="large log row">
    <span class="label">updates</span>
    <span class="value">0</span>
  </pre>
</div>
```

---

## Setting Global onUpdate Default in Anime.js

**Description:** Shows how to change the default onUpdate callback globally by updating the engine.defaults object in Anime.js.

```javascript
import { engine } from 'animejs';
engine.defaults.onUpdate = self => console.log(self.id);
```

---