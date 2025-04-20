# Synchronizing Animation Speed with Anime.js

**Summary:** This file covers topics related to "Synchronizing Animation Speed with Anime.js". Key snippets include: Initializing Animation and Speed Control with Anime.js in JavaScript, Creating HTML Structure for Animation and Speed Control.

---

## Initializing Animation and Speed Control with Anime.js in JavaScript

**Description:** This snippet sets up an animation using Anime.js, creates a range input for speed control, and uses utils.sync() to update the animation speed. It demonstrates how to synchronize speed changes with the animation engine loop.

```javascript
import { animate, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');

const animation = animate('.circle', {
  x: '16rem',
  loop: true,
  alternate: true,
  playbackRate: 1,
});

const updateSpeed = () => {
  const { value } = $range;
  $speed.innerHTML = utils.roundPad(+value, 2);
  utils.sync(() => animation.speed = value);
}

$range.addEventListener('input', updateSpeed);
```

---

## Creating HTML Structure for Animation and Speed Control

**Description:** This HTML snippet provides the structure for displaying the animated circle, speed value, and range input for controlling the animation speed. It works in conjunction with the JavaScript code to create an interactive animation speed control interface.

```html
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">speed</span>
    <span class="speed value">1.00</span>
  </pre>
</div>
<div class="medium row">
  <fieldset class="controls">
    <input type="range" min=0 max=5 value=1 step=.01 class="range" />
  </fieldset>
</div>
```

---