# Timeline Methods in Anime.js

**Summary:** This file covers topics related to "Timeline Methods in Anime.js". Key snippets include: Implementing Timeline Completion with Anime.js in JavaScript.

---

## Implementing Timeline Completion with Anime.js in JavaScript

**Description:** This snippet demonstrates how to create a timeline using Anime.js, add animations to it, and implement a function to complete the timeline instantly. It also shows how to attach this function to a button click event.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $completeButton ] = utils.$('.complete');

const tl = createTimeline({
  loop: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const completeTimeline = () => tl.complete();

$completeButton.addEventListener('click', completeTimeline);
```

---