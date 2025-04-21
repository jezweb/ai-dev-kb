# AnimeJS Timer Reverse Method Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Reverse Method Documentation". Key snippets include: Implementing Timer Reverse Functionality with AnimeJS in JavaScript.

---

## Implementing Timer Reverse Functionality with AnimeJS in JavaScript

**Description:** This code snippet demonstrates how to create and use a timer with AnimeJS, including a reverse functionality. It sets up a timer with a duration of 2000ms and updates a UI element with the current time. A button event listener is added to trigger the reverse method.

```javascript
import { createTimer, utils } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
});

const reverseTimer = () => timer.reverse();

$reverseButton.addEventListener('click', reverseTimer);
```

---