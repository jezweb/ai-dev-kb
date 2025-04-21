# Adding Timers to AnimeJS Timeline

**Summary:** This file covers topics related to "Adding Timers to AnimeJS Timeline". Key snippets include: Creating and Adding Timer to AnimeJS Timeline.

---

## Creating and Adding Timer to AnimeJS Timeline

**Description:** This snippet demonstrates how to create a timeline and add timers using the add() method. It also shows how to synchronize an existing timer using the sync() method.

```javascript
import { createTimeline, createTimer, utils } from 'animejs';

const [ $timer01, $timer02, $timer03 ] = utils.$('.timer');

const timer1 = createTimer({
  duration: 1500,
  onUpdate: self => $timer01.innerHTML = self.currentTime,
});

const tl = createTimeline()
.sync(timer1)
.add({
  duration: 500,
  onUpdate: self => $timer02.innerHTML = self.currentTime,
})
.add({
  onUpdate: self => $timer03.innerHTML = self.currentTime,
  duration: 1000
});
```

---