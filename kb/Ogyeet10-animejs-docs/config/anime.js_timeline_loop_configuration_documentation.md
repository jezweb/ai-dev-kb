# Anime.js Timeline Loop Configuration Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Loop Configuration Documentation". Key snippets include: Creating Looped Timeline Animation.

---

## Creating Looped Timeline Animation

**Description:** Demonstrates creating a timeline animation with infinite loops and a loop counter callback. The animation moves three shapes sequentially with overlapping timing.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');

let loops = 0;

const tl = createTimeline({
  loop: true,
  onLoop: self => $loops.innerHTML = ++loops,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

---