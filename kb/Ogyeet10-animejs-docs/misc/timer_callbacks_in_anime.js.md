# Timer Callbacks in Anime.js

**Summary:** This file covers topics related to "Timer Callbacks in Anime.js". Key snippets include: Implementing Timer with Status Update in Anime.js, Using then() with createTimer in Anime.js, Modifying Default onComplete Callback in Anime.js, Implementing onComplete and onUpdate Callbacks in Anime.js Timer.

---

## Implementing Timer with Status Update in Anime.js

**Description:** Creates a timer using Anime.js createTimer function, updates a time display during the timer's progress, and changes a status message upon completion. This example showcases the use of onUpdate and then() methods.

```javascript
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime,
})
.then(() => $status.innerHTML = 'fulfilled');
```

---

## Using then() with createTimer in Anime.js

**Description:** Demonstrates how to use the then() method with createTimer to execute a callback when the timer completes. This snippet shows both inline usage and async/await implementation.

```javascript
createTimer({duration: 500}).then(callback);

async function waitForTimerToComplete() {
  return createTimer({ duration: 250 })
}

const asyncTimer = await waitForTimerToComplete();
```

---

## Modifying Default onComplete Callback in Anime.js

**Description:** This snippet shows how to change the default onComplete callback globally for all Anime.js timers. It imports the engine from Anime.js and sets a new default function that logs the timer's ID.

```javascript
import { engine } from 'animejs';
engine.defaults.onComplete = self => console.log(self.id);
```

---

## Implementing onComplete and onUpdate Callbacks in Anime.js Timer

**Description:** This example demonstrates the usage of onComplete and onUpdate callbacks in an Anime.js timer. It creates a timer with a duration of 2000ms, updates the status when completed, and continuously updates the current time.

```javascript
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onComplete: self => $status.innerHTML = 'true',
  onUpdate: self => $time.innerHTML = self.currentTime
});
```

---