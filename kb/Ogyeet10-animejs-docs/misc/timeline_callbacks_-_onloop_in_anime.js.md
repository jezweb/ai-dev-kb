# Timeline Callbacks - onLoop in Anime.js

**Summary:** This file covers topics related to "Timeline Callbacks - onLoop in Anime.js". Key snippets include: Implementing onLoop Callback in an Anime.js Timeline, Setting Global Default onLoop Callback in Anime.js.

---

## Implementing onLoop Callback in an Anime.js Timeline

**Description:** Demonstrates how to create a timeline with an onLoop callback that increments and displays a counter for each completed loop. The timeline animates three shapes with a loop delay and updates the DOM with the loop count.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let loops = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 500,
  loop: true,
  onLoop: self => $value.textContent = ++loops
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

---

## Setting Global Default onLoop Callback in Anime.js

**Description:** Shows how to change the default onLoop callback globally by updating the engine.defaults object. This example sets a function that logs the timeline's ID every time a loop completes.

```javascript
import { engine } from 'animejs';
engine.defaults.onLoop = self => console.log(self.id);
```

---