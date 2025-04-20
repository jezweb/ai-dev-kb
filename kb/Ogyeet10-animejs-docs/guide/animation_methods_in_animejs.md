# Animation Methods in AnimeJS

**Summary:** This file covers topics related to "Animation Methods in AnimeJS". Key snippets include: Implementing Animation Refresh with AnimeJS in JavaScript, HTML Structure for AnimeJS Animation Demo.

---

## Implementing Animation Refresh with AnimeJS in JavaScript

**Description:** This snippet demonstrates how to use the refresh() method in AnimeJS to update animated property values. It creates an animation with random values for position, rotation, and scale, and implements a button to refresh and restart the animation.

```javascript
import { animate } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const animation = animate('.square', {
  x: () => utils.random(0, 17) + 'rem',
  y: () => utils.random(-1, 1) + 'rem',
  rotate: () => utils.random(-360, 360, 1),
  scale: () => utils.random(.1, 1.5, 2),
  duration: 750,
  loop: true,
  onLoop: self => self.refresh()
});

const refreshAnimation = () => animation.refresh().restart();

$refreshButton.addEventListener('click', refreshAnimation);
```

---

## HTML Structure for AnimeJS Animation Demo

**Description:** This HTML snippet provides the structure for demonstrating the AnimeJS animation refresh functionality. It includes containers for animated squares and a button to trigger the refresh and restart actions.

```html
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button refresh">Refresh & Restart</button>
  </fieldset>
</div>
```

---