# Synchronizing Timelines in Anime.js

**Summary:** This file covers topics related to "Synchronizing Timelines in Anime.js". Key snippets include: Synchronizing Multiple Timelines in Anime.js.

---

## Synchronizing Multiple Timelines in Anime.js

**Description:** This example demonstrates how to synchronize multiple timelines and animations in Anime.js. It creates a main timeline that syncs with two child timelines (tlA and tlB), with tlB starting 2000ms before the end of tlA due to the offset parameter.

```javascript
import { createTimeline, animate } from 'animejs';

const circleAnimation = animate('.circle', {
  x: '15rem'
});

const tlA = createTimeline()
.sync(circleAnimation)
.add('.triangle', {
  x: '15rem',
  duration: 2000,
})
.add('.square', {
  x: '15rem',
});

const tlB = createTimeline({ defaults: { duration: 2000 } })
.add(['.triangle', '.square'], {
  rotate: 360,
}, 0)
.add('.circle', {
  scale: [1, 1.5, 1],
}, 0);

const tlMain = createTimeline()
.sync(tlA)
.sync(tlB, '-=2000');
```

---