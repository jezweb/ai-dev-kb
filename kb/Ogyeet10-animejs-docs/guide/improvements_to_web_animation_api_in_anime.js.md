# Improvements to Web Animation API in Anime.js

**Summary:** This file covers topics related to "Improvements to Web Animation API in Anime.js". Key snippets include: Animating with Individual Property Parameters using Anime.js WAAPI, Animating Multiple Properties with Default Units in Anime.js WAAPI, Animating with Anime.js WAAPI Module, Importing and Using Anime.js WAAPI Module, HTML Structure for Anime.js Animation Demo.

---

## Animating with Individual Property Parameters using Anime.js WAAPI

**Description:** This code demonstrates how to animate multiple properties with individual parameter configurations. Each property can have its own specific to/from values, ease function, and duration while sharing global animation parameters.

```javascript
waapi.animate('.square', {
  y: {
    to: [0, -30, 0],
    ease: 'out(4)',
    duration: 1000,
  },
  rotate: { from: -180, to: 0, ease: 'out(3)' },
  scale: { to: [.65, 1, .65], ease: 'inOut(3)' },
  duration: 500,
  delay: stagger(75),
  loop: true,
});
```

---

## Animating Multiple Properties with Default Units in Anime.js WAAPI

**Description:** This example demonstrates animating multiple properties of an element using Anime.js WAAPI. It animates opacity, x-position, rotation, width, and height, relying on default units for numeric values.

```javascript
import { waapi } from 'animejs';

waapi.animate('.square', {
  opacity: .5,
  x: 250,
  rotate: 45,
  width: 40,
  height: 40,
});
```

---

## Animating with Anime.js WAAPI Module

**Description:** Demonstrates the simplified syntax for animating an element using Anime.js WAAPI module. It applies a translation of 100 pixels to an element with the class 'circle'.

```javascript
waapi.animate('.circle', { translate: '100px' });
```

---

## Importing and Using Anime.js WAAPI Module

**Description:** Demonstrates how to import the WAAPI module from Anime.js and use it to animate an element with a translation of 16rem.

```javascript
import { waapi } from 'animejs';

waapi.animate('.circle', { translate: '16rem' });
```

---

## HTML Structure for Anime.js Animation Demo

**Description:** HTML markup showing the target elements for the animation. Six square div elements are arranged in a row that will be animated using the WAAPI implementation.

```html
<div class="large row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

---