# Anime.js Timeline Call Functions Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Call Functions Documentation". Key snippets include: Adding Functions to Timeline in Anime.js.

---

## Adding Functions to Timeline in Anime.js

**Description:** Demonstrates how to add callback functions to a timeline at specific time positions using the call() method. The example selects DOM elements using utils.$() and updates their innerHTML at different timestamps (0ms, 800ms, and 1200ms).

```javascript
import { createTimeline, utils } from 'animejs';

const [ $functionA ] = utils.$('.function-A');
const [ $functionB ] = utils.$('.function-B');
const [ $functionC ] = utils.$('.function-C');

const tl = createTimeline()
.call(() => $functionA.innerHTML = 'A', 0)
.call(() => $functionB.innerHTML = 'B', 800)
.call(() => $functionC.innerHTML = 'C', 1200);
```

---