# Animatable Properties in Anime.js - CSS Variables Animation

**Summary:** This file covers topics related to "Animatable Properties in Anime.js - CSS Variables Animation". Key snippets include: Animating CSS Variables with Anime.js, HTML Structure for CSS Variables Animation Demo.

---

## Animating CSS Variables with Anime.js

**Description:** This code demonstrates how to set and animate CSS variables using Anime.js. It shows how to initialize variables including one applied to a pseudo-element, and then animate those variables. The example includes changing border radius, translation, and scaling of a pseudo-element.

```javascript
import { animate, utils } from 'animejs';

// Set the CSS variables as properties on the animated elements
utils.set('.square', {
  '--radius': '4px',
  '--x': '0rem',
  '--pseudo-el-after-scale': '1', // applied to the pseudo element "::after"
  borderRadius: 'var(--radius)',
  translateX: 'var(--x)',
});

// Animate the values of the CSS variables
animate('.square', {
  '--radius': '20px',
  '--x': '16.5rem',
  '--pseudo-el-after-scale': '1.55' // Animates the ":after" pseudo element of the element
});
```

---

## HTML Structure for CSS Variables Animation Demo

**Description:** HTML markup showing the structure used for demonstrating CSS variable animations. It consists of three rows, each containing a square element that will be animated using the CSS variables.

```html
<div class="medium row">
  <div class="css-variables square"></div>
</div>
<div class="medium row">
  <div class="css-variables square"></div>
</div>
<div class="medium row">
  <div class="css-variables square"></div>
</div>
```

---