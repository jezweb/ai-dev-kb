# Anime.js Timer Documentation: Duration Property

**Summary:** This file covers topics related to "Anime.js Timer Documentation: Duration Property". Key snippets include: Creating an Anime.js Timer with Duration Setting, HTML Structure for Timer Display.

---

## Creating an Anime.js Timer with Duration Setting

**Description:** This code demonstrates how to create a timer using Anime.js with a specified duration of 2000 milliseconds. The timer updates a DOM element with the current time value on each timer update.

```javascript
import { createTimer, utils } from 'animejs';

const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});
```

---

## HTML Structure for Timer Display

**Description:** This HTML snippet creates a layout for displaying the current time of the Anime.js timer. It consists of a container with a label and a value display element that will be updated by the timer.

```html
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
```

---