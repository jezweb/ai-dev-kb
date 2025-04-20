# AnimeJS Timer Methods Documentation

**Summary:** This file covers topics related to "AnimeJS Timer Methods Documentation". Key snippets include: Implementing Timer Revert Functionality with AnimeJS in JavaScript.

---

## Implementing Timer Revert Functionality with AnimeJS in JavaScript

**Description:** This code snippet demonstrates how to create and manipulate an AnimeJS timer using the revert() method. It sets up play and revert buttons, and updates a time display. The timer is created with an onUpdate callback to update the displayed time.

```javascript
import { createTimer, utils } from 'animejs';

const [ $playButton ] = utils.$('.play');
const [ $revertButton ] = utils.$('.revert');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const playTimer = () => timer.play();
const revertTimer = () => {
  timer.revert();
  $time.innerHTML = timer.currentTime
}

$playButton.addEventListener('click', playTimer);
$revertButton.addEventListener('click', revertTimer);
```

---