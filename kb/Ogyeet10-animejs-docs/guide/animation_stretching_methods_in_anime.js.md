# Animation Stretching Methods in Anime.js

**Summary:** This file covers topics related to "Animation Stretching Methods in Anime.js". Key snippets include: HTML Structure for Animation Demo, Using stretch() Method in Anime.js.

---

## HTML Structure for Animation Demo

**Description:** HTML markup for the animation demo interface, including display elements for duration value, animated squares, and a range input control for adjusting the animation duration.

```html
<pre class="large log row">
  <span class="label">total duration</span>
  <span class="value">0</span>
</pre>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium centered row">
  <fieldset class="controls">
    <input type="range" min=100 max=2000 value=1000 step=100 class="seek range" />
  </fieldset>
</div>
```

---

## Using stretch() Method in Anime.js

**Description:** Demonstrates how to use the stretch() method to modify animation duration. The animation moves squares horizontally with staggered timing, allowing runtime duration adjustment via a range input.

```javascript
import { animate, utils, stagger } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $totalDuration ] = utils.$('.value');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(200),
});

const stretchAnimation = () => {
  const newDuration = +$range.value;
  $totalDuration.textContent = newDuration;
  animation.stretch(newDuration).restart();
}

stretchAnimation();

$range.addEventListener('input', stretchAnimation);
```

---