# Animation Callbacks in AnimeJS

**Summary:** This file covers topics related to "Animation Callbacks in AnimeJS". Key snippets include: Configuring Global Default for onUpdate Callback in AnimeJS, Implementing onBeforeUpdate Callback in AnimeJS Animation, Implementing onUpdate Callback in AnimeJS Animation.

---

## Configuring Global Default for onUpdate Callback in AnimeJS

**Description:** This snippet demonstrates how to change the default onUpdate callback globally for all animations using the engine.defaults object in AnimeJS.

```javascript
import { engine } from 'animejs';
engine.defaults.onUpdate = self => console.log(self.id);
```

---

## Implementing onBeforeUpdate Callback in AnimeJS Animation

**Description:** This example shows how to use the onBeforeUpdate callback in an AnimeJS animation. It animates a circle element, updates a counter, and modifies the animation based on its progress. The callback is executed before each frame update.

```javascript
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let mult = 1;
let updates = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  modifier: v => mult * v,
  loop: true,
  alternate: true,
  onBeforeUpdate: self => {
    $value.textContent = ++updates;
    // Update the mult value just before updating the tweens
    mult = 1 - self.iterationProgress;
  }
});
```

---

## Implementing onUpdate Callback in AnimeJS Animation

**Description:** This code creates an animation using AnimeJS, with an onUpdate callback that updates a DOM element's text content on each frame. It also demonstrates importing utilities and setting up loop and alternate options.

```javascript
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onUpdate: self => $value.textContent = ++updates
});
```

---