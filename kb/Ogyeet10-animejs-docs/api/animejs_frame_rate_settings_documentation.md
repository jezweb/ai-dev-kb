# AnimeJS Frame Rate Settings Documentation

**Summary:** This file covers topics related to "AnimeJS Frame Rate Settings Documentation". Key snippets include: Creating and Modifying Animation Frame Rate in AnimeJS, Setting Global Frame Rate in AnimeJS.

---

## Creating and Modifying Animation Frame Rate in AnimeJS

**Description:** Example showing how to create an animation with a specific frame rate and dynamically update it using a range input. The code initializes an animation with a frame rate of 60fps and allows changing it through a UI slider.

```javascript
import { animate } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');

const animation = animate('.circle', {
  x: '16rem',
  loop: true,
  alternate: true,
  frameRate: 60,
});

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  animation.fps = value;
}

$range.addEventListener('input', updateFps);
```

---

## Setting Global Frame Rate in AnimeJS

**Description:** Code snippet demonstrating how to change the default frame rate globally in AnimeJS by updating the engine.defaults object.

```javascript
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

---