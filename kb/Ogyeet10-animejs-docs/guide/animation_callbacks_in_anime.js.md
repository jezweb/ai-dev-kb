# Animation Callbacks in Anime.js

**Summary:** This file covers topics related to "Animation Callbacks in Anime.js". Key snippets include: Configuring Animation Callbacks in Anime.js, Using onBegin Callback in Anime.js Animation, Setting Default onRender Callback Globally in Anime.js, Practical Animation Callback Example in Anime.js, Async/Await Animation Pattern in Anime.js....

---

## Configuring Animation Callbacks in Anime.js

**Description:** This snippet demonstrates how to set up various animation callbacks in Anime.js. It includes settings for animation properties like duration, delay, easing, and looping, along with placeholder callback functions.

```javascript
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

---

## Using onBegin Callback in Anime.js Animation

**Description:** This code snippet shows how to create an animation using Anime.js and implement the onBegin callback. The callback updates a DOM element with the animation's 'began' status when it starts.

```javascript
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 1000, // Delays the onBegin() callback by 1000ms
  onBegin: self => $value.textContent = self.began
});
```

---

## Setting Default onRender Callback Globally in Anime.js

**Description:** This snippet demonstrates how to set a default onRender callback globally for all Anime.js animations by updating the engine.defaults object.

```javascript
import { engine } from 'animejs';
engine.defaults.onRender = self => console.log(self.id);
```

---

## Practical Animation Callback Example in Anime.js

**Description:** Complete example showing how to import Anime.js, create an animation, and update DOM content on completion.

```javascript
import { animate } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 500,
});

animation.then(() => $value.textContent = 'fulfilled');
```

---

## Async/Await Animation Pattern in Anime.js

**Description:** Demonstrates how to use async/await syntax with Anime.js animations for better flow control.

```javascript
async function waitForAnimationToComplete() {
  return animate(target, {
    x: 100,
    duration: 500,
  });
}

const asyncAnimation = await waitForAnimationToComplete();
```

---

## Animation with onPause Callback Implementation in Anime.js

**Description:** Complete example showing how to implement the onPause callback in an animation. This creates an animation that moves a circle element horizontally while incrementing a counter each time the animation is paused via buttons or target removal.

```javascript
import { animate, utils } from 'animejs';

const [ $animateButton, $pauseButton, $removeButton ] = utils.$('.button');
const [ $value ] = utils.$('.value');
const [ $circle ] = utils.$('.circle');

let paused = 0;
let alternate = 0;
let animation;

const animateX = () => {
  alternate = !alternate;
  animation = animate($circle, {
    x: () => (alternate ? 16 : 0) + 'rem',
    duration: 2000,
    onPause: () => $value.innerHTML = ++paused,
  });
}

const pauseAnimation = () => {
  if (animation) animation.pause();
}

const removeTarget = () => {
  utils.remove($circle);
}

animateX();

$animateButton.addEventListener('click', animateX);
$pauseButton.addEventListener('click', pauseAnimation);
$removeButton.addEventListener('click', removeTarget);
```

---

## Implementing onRender Callback in Anime.js Animation

**Description:** This example shows how to use the onRender callback in an Anime.js animation. It animates a circle element and updates a render count display on each render.

```javascript
import { animate, utils } from 'animejs';

const [ $rendersLog ] = utils.$('.value');

let renders = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onRender: self => $rendersLog.textContent = ++renders
});
```

---

## Setting Default onPause Callback Globally in Anime.js

**Description:** Example of how to change the default onPause callback function globally by updating the engine.defaults object. This sets a default handler that logs the animation's ID whenever any animation is paused.

```javascript
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

---