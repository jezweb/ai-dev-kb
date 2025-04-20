# Anime.js Animation Alternate Method Documentation

**Summary:** This file covers topics related to "Anime.js Animation Alternate Method Documentation". Key snippets include: Implementing Alternate Animation with Anime.js in JavaScript, HTML Structure for Anime.js Alternate Animation Demo.

---

## Implementing Alternate Animation with Anime.js in JavaScript

**Description:** This snippet demonstrates how to use the alternate() method in Anime.js to toggle the playback direction of an animation. It creates an animation for multiple squares, moving them horizontally with a staggered delay, and sets up a button to trigger the alternate() method.

```javascript
import { animate, utils, stagger } from 'animejs';

const [ $alternateButton ] = utils.$('.button');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const alternateAnimation = () => animation.alternate();

$alternateButton.addEventListener('click', alternateAnimation);
```

---

## HTML Structure for Anime.js Alternate Animation Demo

**Description:** This HTML snippet provides the structure for the Anime.js alternate animation demo. It includes multiple rows with squares that will be animated, and a button to trigger the alternate() method.

```html
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Alternate</button>
  </fieldset>
</div>
```

---