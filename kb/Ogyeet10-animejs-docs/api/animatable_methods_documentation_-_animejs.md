# Animatable Methods Documentation - AnimeJS

**Summary:** This file covers topics related to "Animatable Methods Documentation - AnimeJS". Key snippets include: Implementing Mouse-tracking Animation with Revert Functionality - JavaScript, Animation Demo HTML Structure.

---

## Implementing Mouse-tracking Animation with Revert Functionality - JavaScript

**Description:** Creates an interactive animation where circles follow mouse movement with staggered positioning. Includes functionality to revert the animation using a button click and handles cleanup of event listeners.

```javascript
const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');
const [ $revertButton ] = utils.$('.revert');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circles = createAnimatable('.circle', {
  x: stagger(50, { from: 'center', start: 100 }),
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

const revertAnimatable = () => {
  window.removeEventListener('mousemove', onMouseMove);
  circles.revert();
}

$revertButton.addEventListener('click', revertAnimatable);
window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

## Animation Demo HTML Structure

**Description:** HTML structure for the animation demo containing multiple circles and a revert button control.

```html
<div class="large centered row">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button revert">Revert</button>
  </fieldset>
</div>
```

---