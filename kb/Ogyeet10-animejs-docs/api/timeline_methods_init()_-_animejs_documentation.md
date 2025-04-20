# Timeline Methods: init() - AnimeJS Documentation

**Summary:** This file covers topics related to "Timeline Methods: init() - AnimeJS Documentation". Key snippets include: Initializing Timeline Elements with init() in AnimeJS.

---

## Initializing Timeline Elements with init() in AnimeJS

**Description:** Demonstrates how to use the init() method to set initial values for timeline animations. The code creates a timeline with three elements (.square, .triangle, and .circle), each with a specific 'from' value, and uses init() to force rendering of their initial states.

```javascript
import { createTimeline } from 'animejs';

const tl = createTimeline()
.add('.square',   { x: { from: '15rem' } })
.add('.triangle', { x: { from: '15rem' } }, 500)
.add('.circle',   { x: { from: '15rem' } }, 1000)
.init();
```

---