# AnimeJS Timer Stretch Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Stretch Documentation". Key snippets include: Interactive Timer Stretch Implementation.

---

## Interactive Timer Stretch Implementation

**Description:** Complete implementation of a timer stretch demo that includes creating a timer with update callback and handling range input events to dynamically adjust timer duration.

```javascript
import { animate, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $duration ] = utils.$('.duration');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const stretchTimer = () => {
  timer.stretch(+$range.value);
  $duration.innerHTML = utils.round(timer.duration, 0);
  timer.restart();
}

$range.addEventListener('input', stretchTimer);
```

---