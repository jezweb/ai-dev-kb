# AnimeJS: CSS Variable Animation

**Summary:** This file covers topics related to "AnimeJS: CSS Variable Animation". Key snippets include: HTML Structure for CSS Variable Animation Demo, Animating CSS Variables with AnimeJS WAAPI method.

---

## HTML Structure for CSS Variable Animation Demo

**Description:** The HTML structure shows a grid of square elements that will be animated using CSS variables. These squares are the targets for the animation examples shown in the JavaScript code.

```html
<div class="medium justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

---

## Animating CSS Variables with AnimeJS WAAPI method

**Description:** This example shows how to animate CSS variables using the WAAPI animate() method. CSS variables can be directly referenced using the 'var(--variable-name)' syntax without additional helpers.

```javascript
import { waapi, animate } from 'animejs';

waapi.animate('.square',  {
  rotate: 'var(--rotation)',
  borderColor: ['var(--hex-orange)', 'var(--hex-red)' ],
});
```

---