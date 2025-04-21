# AnimeJS Animatable Documentation

**Summary:** This file covers topics related to "AnimeJS Animatable Documentation". Key snippets include: Initializing Animatable in AnimeJS, Using Animatable with Mouse Movement in AnimeJS.

---

## Initializing Animatable in AnimeJS

**Description:** Basic syntax for importing and creating an Animatable instance which can be used to animate properties efficiently.

```javascript
import { createAnimatable } from 'animejs';

const animatable = createAnimatable(targets, parameters);
```

---

## Using Animatable with Mouse Movement in AnimeJS

**Description:** A complete example demonstrating how to use Animatable to create smooth animations that follow mouse movement. The snippet creates an animatable square that responds to cursor position with customized easing and duration.

```javascript
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');

let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const animatableSquare = createAnimatable('.square', {
  x: 500, // Define the x duration to be 500ms
  y: 500, // Define the y duration to be 500ms
  ease: 'out(3)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  animatableSquare.x(x); // Animate the x value in 500ms
  animatableSquare.y(y); // Animate the y value in 500ms
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---