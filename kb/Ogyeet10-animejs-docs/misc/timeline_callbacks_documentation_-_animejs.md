# Timeline Callbacks Documentation - AnimeJS

**Summary:** This file covers topics related to "Timeline Callbacks Documentation - AnimeJS". Key snippets include: Creating Timeline with onBegin Callback in AnimeJS.

---

## Creating Timeline with onBegin Callback in AnimeJS

**Description:** Demonstrates creating a timeline with a custom onBegin callback that updates DOM content. The timeline includes multiple animations with a 1000ms delay before the callback executes.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline({
  delay: 1000, // Delays the onBegin() callback by 1000ms
  onBegin: self => $value.textContent = self.began
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

---