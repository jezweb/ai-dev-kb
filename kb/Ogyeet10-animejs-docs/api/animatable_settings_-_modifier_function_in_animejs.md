# Animatable Settings - Modifier Function in AnimeJS

**Summary:** This file covers topics related to "Animatable Settings - Modifier Function in AnimeJS". Key snippets include: Using Modifier Functions with AnimeJS Animatable Elements, HTML Structure for Clock Animation Demo.

---

## Using Modifier Functions with AnimeJS Animatable Elements

**Description:** This example demonstrates how to use modifier functions with AnimeJS's createAnimatable method. It creates two clock elements that rotate based on mouse position - one with a snapping modifier that rounds rotation to specific increments, and another with an inverting modifier that reverses the rotation direction.

```javascript
import { createAnimatable, utils, stagger } from 'animejs';

const PI = Math.PI;

const clock1 = createAnimatable('.clock-1', {
  rotate: { unit: 'rad' },
  modifier: utils.snap(PI / 10),
  duration: 0,
});

const clock2 = createAnimatable('.clock-2', {
  rotate: { unit: 'rad' },
  modifier: v => -v,
  duration: 0,
});

const rotateClock = (animatable) => {
  return e => {
    const [ $clock ] = animatable.targets;
    const { width, height, left, top } = $clock.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    animatable.rotate(Math.atan2(y, x) + PI / 2);
  }
}

const rotateClock1 = rotateClock(clock1);
const rotateClock2 = rotateClock(clock2);

const onMouseMove = e => {
  rotateClock1(e);
  rotateClock2(e);
}

window.addEventListener('mousemove', onMouseMove);
```

---

## HTML Structure for Clock Animation Demo

**Description:** The HTML markup for the clock animation example. It defines two clock elements with labels, structured in a responsive grid layout. Each clock will demonstrate a different modifier behavior when animated.

```html
<div class="large centered row">
  <div class="col">
    <div class="clock clock-1"></div>
    <div class="label">snapped</div>
  </div>
  <div class="col">
    <div class="clock clock-2"></div>
    <div class="label">inverted</div>
  </div>
</div>
```

---