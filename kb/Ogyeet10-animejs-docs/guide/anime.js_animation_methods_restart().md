# Anime.js Animation Methods: restart()

**Summary:** This file covers topics related to "Anime.js Animation Methods: restart()". Key snippets include: Using restart() Method with Anime.js, HTML Structure for Anime.js restart() Demo.

---

## Using restart() Method with Anime.js

**Description:** This snippet demonstrates how to create an animation with Anime.js and implement a restart functionality. It animates squares with a staggered delay and provides a button that calls the restart() method when clicked.

```javascript
import { animate, utils, stagger } from 'animejs';

const [ $restartButton ] = utils.$('.restart');

const animation = animate('.square', {
  x: '17rem',
  direction: 'alternate',
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100)
});

const restartAnimation = () => animation.restart();

$restartButton.addEventListener('click', restartAnimation);
```

---

## HTML Structure for Anime.js restart() Demo

**Description:** This HTML markup creates the structure needed for the restart() method demonstration. It includes square elements that will be animated and a restart button that triggers the animation restart.

```html
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button restart">Restart</button>
  </fieldset>
</div>
```

---