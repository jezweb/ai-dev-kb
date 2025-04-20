# AnimeJS Animatable Settings Documentation - Unit Property

**Summary:** This file covers topics related to "AnimeJS Animatable Settings Documentation - Unit Property". Key snippets include: Creating Rotatable Clock Animation with Radians in AnimeJS, HTML Structure for Clock Demo.

---

## Creating Rotatable Clock Animation with Radians in AnimeJS

**Description:** Demonstrates how to create an interactive clock animation using AnimeJS with radians as the rotation unit. The code tracks mouse movement to rotate a clock element, calculating angles using Math.atan2 and handling angle transitions across the full rotation range.

```javascript
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const [ $clock ] = utils.$('.clock');
let bounds = $clock.getBoundingClientRect();
const refreshBounds = () => bounds = $clock.getBoundingClientRect();

const clock = createAnimatable($clock, {
  rotate: { unit: 'rad' }, // Set the unit to 'rad'
  duration: 400,
});

const { PI } = Math;
let lastAngle = 0
let angle = PI / 2;

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;
  const currentAngle = Math.atan2(y, x);
  const diff = currentAngle - lastAngle;
  angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
  lastAngle = currentAngle;
  clock.rotate(angle); // Pass the new angle value in rad
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

## HTML Structure for Clock Demo

**Description:** Defines the HTML structure for the clock demo interface, including the clock element container and user instruction label.

```html
<div class="large centered row">
  <div class="col">
    <div class="clock"></div>
  </div>
</div>
<div class="small centered row">
  <span class="label">Move cursor around</span>
</div>
```

---