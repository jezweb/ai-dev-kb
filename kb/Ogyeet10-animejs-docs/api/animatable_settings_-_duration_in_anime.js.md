# Animatable Settings - Duration in Anime.js

**Summary:** This file covers topics related to "Animatable Settings - Duration in Anime.js". Key snippets include: Initializing and Animating Circles with Anime.js, HTML Structure for Animated Circles.

---

## Initializing and Animating Circles with Anime.js

**Description:** This snippet creates animatable circles and sets up mouse move event handling to animate their positions. It uses createAnimatable, stagger, and utility functions from Anime.js.

```javascript
import { createAnimatable, utils, stagger } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circles = createAnimatable('.circle', {
  x: 0, // Imediatly set the value without animation
  y: stagger(200, { from: 'center', start: 200 }),
  ease: 'out(4)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  circles.x(x).y(y);
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

## HTML Structure for Animated Circles

**Description:** This HTML snippet defines the structure for the animated circles and includes a label instructing users to move the cursor around.

```html
<div class="medium centered row">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
<div class="small centered row">
  <span class="label"><br><br><br>Move cursor around</span>
</div>
```

---