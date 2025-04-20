# Unit Conversion in AnimeJS

**Summary:** This file covers topics related to "Unit Conversion in AnimeJS". Key snippets include: Converting Units in AnimeJS Animations with JavaScript, HTML Structure for AnimeJS Animation Target.

---

## Converting Units in AnimeJS Animations with JavaScript

**Description:** Demonstrates how to use the animate() method to convert between different unit types during animation. The example shows converting from pixels to percentage, pixels to rem, and degrees to turns.

```javascript
import { animate, utils } from 'animejs';

animate('.square', {
  width: '25%', // from '48px' to '25%',
  x: '15rem', // from '0px' to '15rem',
  rotate: '.75turn', // from `0deg` to '.75turn',
});
```

---

## HTML Structure for AnimeJS Animation Target

**Description:** The HTML markup that defines the target element for the animation. It shows a square element inside a container with 'large row' classes.

```html
<div class="large row">
  <div class="square"></div>
</div>
```

---