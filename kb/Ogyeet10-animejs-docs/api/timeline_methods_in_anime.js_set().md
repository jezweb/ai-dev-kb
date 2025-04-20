# Timeline Methods in Anime.js: set()

**Summary:** This file covers topics related to "Timeline Methods in Anime.js: set()". Key snippets include: Using set() Method in Anime.js Timeline.

---

## Using set() Method in Anime.js Timeline

**Description:** Demonstrates how to use the set() method in an Anime.js timeline to instantly set property values for different targets at specific times. The example creates a timeline and sets the x position of three different elements (.circle, .triangle, .square) at different time positions.

```javascript
import { createTimeline } from 'animejs';

const tl = createTimeline()
.set('.circle', { x: '15rem' })
.set('.triangle', { x: '15rem' }, 500)
.set('.square', { x: '15rem' }, 1000);
```

---