# Animation Methods: Pause in Anime.js

**Summary:** This file covers topics related to "Animation Methods: Pause in Anime.js". Key snippets include: HTML Structure for Anime.js Pause Demo, Implementing Animation Pause Functionality with Anime.js in JavaScript.

---

## HTML Structure for Anime.js Pause Demo

**Description:** HTML structure for demonstrating the pause functionality in Anime.js. It includes square elements that will be animated and a pause button to control the animation.

```html
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button pause">Pause</button>
  </fieldset>
</div>
```

---

## Implementing Animation Pause Functionality with Anime.js in JavaScript

**Description:** This code demonstrates how to create and pause an animation using Anime.js. It creates an animation that moves squares along the x-axis with staggered delays, and adds a pause button event listener to control the animation.

```javascript
import { animate, utils, stagger } from 'animejs';

const [ $pauseButton ] = utils.$('.pause');

const animation = animate('.square', {
  x: '17rem',
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const pauseAnimation = () => animation.pause();

$pauseButton.addEventListener('click', pauseAnimation);
```

---