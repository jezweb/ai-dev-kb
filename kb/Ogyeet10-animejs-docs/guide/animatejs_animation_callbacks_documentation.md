# AnimateJS Animation Callbacks Documentation

**Summary:** This file covers topics related to "AnimateJS Animation Callbacks Documentation". Key snippets include: HTML Structure for AnimateJS Loop Counter Example, Implementing onLoop Callback in AnimateJS Animation.

---

## HTML Structure for AnimateJS Loop Counter Example

**Description:** This HTML snippet provides the structure for the AnimateJS loop counter example. It includes a div for the animated circle and a pre element to display the loop count.

```html
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">loops</span>
    <span class="value">0</span>
  </pre>
</div>
```

---

## Implementing onLoop Callback in AnimateJS Animation

**Description:** This example shows how to use the onLoop callback in an AnimateJS animation. It creates an animation that moves a circle element and updates a counter for each loop iteration.

```javascript
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let loops = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onLoop: self => $value.textContent = ++loops
});
```

---