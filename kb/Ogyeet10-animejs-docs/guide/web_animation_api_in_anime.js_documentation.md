# Web Animation API in Anime.js Documentation

**Summary:** This file covers topics related to "Web Animation API in Anime.js Documentation". Key snippets include: Comparing WAAPI and JavaScript Animations in Anime.js.

---

## Comparing WAAPI and JavaScript Animations in Anime.js

**Description:** Demonstrates side-by-side comparison of WAAPI animation versus JavaScript animation using Anime.js. The WAAPI example uses hardware acceleration to animate CSS properties, while the JavaScript example manipulates object data with more control options and renders the values to the DOM.

```javascript
import { animate, waapi, utils } from 'animejs';

// WAAPI Animation

waapi.animate('.waapi.square', {
  x: '17rem',
  rotate: 180,
  loop: 3,
  alternate: true,
});

// JS Animation

const data = { x: '0rem', rotate: '0deg' }
const [ $log ] = utils.$('code');

animate(data, {
  x: 17,
  rotate: 180,
  modifier: utils.round(0),
  loop: 3,
  alternate: true,
  onRender: () => $log.innerHTML = JSON.stringify(data)
});
```

```html
<div class="medium row">
  <div class="square waapi"></div>
</div>
<div class="small row"></div>
<pre class="medium centered row">
  <code>{"x": '0rem',"rotate":"0deg"}</code>
</pre>
```

---