# Animation Callbacks: onComplete in Anime.js

**Summary:** This file covers topics related to "Animation Callbacks: onComplete in Anime.js". Key snippets include: Using onComplete Callback in Anime.js Animation, HTML Structure for Anime.js onComplete Demo.

---

## Using onComplete Callback in Anime.js Animation

**Description:** Shows how to implement the onComplete callback in an Anime.js animation. This example creates an animation that moves an element with class 'circle', loops twice with alternating direction, and updates text content when the animation completes.

```javascript
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 500,
  loop: 2,
  alternate: true,
  onComplete: self => $value.textContent = self.completed
});
```

---

## HTML Structure for Anime.js onComplete Demo

**Description:** Shows the HTML markup structure used for demonstrating the onComplete callback. It includes a div with class 'circle' that will be animated, and a pre element that displays the completion status of the animation.

```html
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">completed</span>
    <span class="value">false</span>
  </pre>
</div>
```

---