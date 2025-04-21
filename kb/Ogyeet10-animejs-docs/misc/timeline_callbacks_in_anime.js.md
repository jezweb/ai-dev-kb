# Timeline Callbacks in Anime.js

**Summary:** This file covers topics related to "Timeline Callbacks in Anime.js". Key snippets include: Creating Timeline with onComplete Callback in Anime.js, Implementing onBeforeUpdate Callback in Anime.js Timeline, Setting Default onRender Callback Globally in Anime.js.

---

## Creating Timeline with onComplete Callback in Anime.js

**Description:** This code creates a timeline using Anime.js, setting up animations for multiple elements. It demonstrates how to use the onComplete callback to update a DOM element when the timeline completes.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline({
  defaults: { duration: 500 },
  loop: 1,
  onComplete: self => $value.textContent = self.completed
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

---

## Implementing onBeforeUpdate Callback in Anime.js Timeline

**Description:** This code creates an Anime.js timeline with an onBeforeUpdate callback. The callback updates a DOM element with the number of updates. The timeline animates three shapes sequentially with loops and delays.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onBeforeUpdate: self => $value.textContent = ++updates
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

---

## Setting Default onRender Callback Globally in Anime.js

**Description:** This snippet demonstrates how to set a default onRender callback globally for all timelines using the engine.defaults object in Anime.js.

```javascript
import { engine } from 'animejs';
engine.defaults.onRender = self => console.log(self.id);
```

---