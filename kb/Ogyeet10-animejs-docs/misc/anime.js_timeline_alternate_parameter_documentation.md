# Anime.js Timeline Alternate Parameter Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Alternate Parameter Documentation". Key snippets include: Creating a Timeline with Alternate and Loop Parameters in Anime.js, Setting Global Default for Alternate Parameter in Anime.js.

---

## Creating a Timeline with Alternate and Loop Parameters in Anime.js

**Description:** Shows how to create an Anime.js timeline with the 'alternate' parameter set to true and looping enabled. The example also includes an onLoop callback that updates a counter display element.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');

let loops = 0;

const tl = createTimeline({
  loop: true,
  alternate: true,
  onLoop: self => $loops.innerHTML = ++loops,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

---

## Setting Global Default for Alternate Parameter in Anime.js

**Description:** Demonstrates how to change the default value of the 'alternate' parameter globally in Anime.js by updating the engine.defaults object. This affects all animations unless overridden locally.

```javascript
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

---