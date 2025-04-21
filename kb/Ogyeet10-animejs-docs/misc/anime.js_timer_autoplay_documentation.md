# Anime.js Timer Autoplay Documentation

**Summary:** This file covers topics related to "Anime.js Timer Autoplay Documentation". Key snippets include: Setting Global Autoplay Default in Anime.js, Creating Manual Timer Control with Anime.js, HTML Structure for Timer Display and Controls.

---

## Setting Global Autoplay Default in Anime.js

**Description:** Shows how to change the default autoplay parameter value globally by updating the engine.defaults object in Anime.js.

```javascript
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

---

## Creating Manual Timer Control with Anime.js

**Description:** Demonstrates how to create a timer with autoplay disabled and manually play it using a button click event. The timer updates a time display on each update.

```javascript
const [ $time ] = utils.$('.time');
const [ $playButton ] = utils.$('.play');

const timer = createTimer({
  autoplay: false,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const playTimer = () => timer.play();

$playButton.addEventListener('click', playTimer);
```

---

## HTML Structure for Timer Display and Controls

**Description:** HTML layout for displaying the current time of the timer and a play button to manually control the timer. Includes containers with styling classes.

```html
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="play">Play</button>
  </fieldset>
</div>
```

---