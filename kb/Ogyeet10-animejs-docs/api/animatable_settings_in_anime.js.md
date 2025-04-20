# Animatable Settings in Anime.js

**Summary:** This file covers topics related to "Animatable Settings in Anime.js". Key snippets include: Creating Animatable Clocks with Different Easing Functions in Anime.js.

---

## Creating Animatable Clocks with Different Easing Functions in Anime.js

**Description:** This snippet demonstrates how to create two animatable clocks using Anime.js, each with a different easing function. It includes functions to rotate the clocks based on mouse movement.

```javascript
import { createAnimatable, utils, stagger } from 'animejs';

const clock1 = createAnimatable('.clock-1', {
  rotate: { unit: 'rad' },
  ease: 'linear',
});

const clock2 = createAnimatable('.clock-2', {
  rotate: { unit: 'rad' },
  ease: 'outElastic',
});

const rotateClock = (animatable) => {
  const PI = Math.PI;
  let angle = PI / 2;
  let lastAngle = 0;
  return e => {
    const [ $clock ] = animatable.targets;
    const { width, height, left, top } = $clock.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const currentAngle = Math.atan2(y, x);
    const diff = currentAngle - lastAngle;
    angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
    lastAngle = currentAngle;
    animatable.rotate(angle);
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