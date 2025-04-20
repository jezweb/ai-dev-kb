# Timeline Label Method Documentation

**Summary:** This file covers topics related to "Timeline Label Method Documentation". Key snippets include: Adding Labels to AnimeJS Timeline in JavaScript.

---

## Adding Labels to AnimeJS Timeline in JavaScript

**Description:** This snippet demonstrates how to create a timeline and add labels at specific time positions. It then uses these labels to add animations to different elements at the labeled positions.

```javascript
import { createTimeline } from 'animejs';

const tl = createTimeline()
.label('circle', 0)
.label('square', 500)
.label('triangle', 1000)
.add('.square', {
  x: '17rem',
  duration: 500,
}, 'square')
.add('.circle', {
  x: '13rem',
  duration: 1000,
}, 'circle')
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
}, 'triangle');
```

---