# Easing in Anime.js Web Animation API

**Summary:** This file covers topics related to "Easing in Anime.js Web Animation API". Key snippets include: Implementing Staggered Animation with Custom Easing, Using Custom Easing with Anime.js WAAPI.

---

## Implementing Staggered Animation with Custom Easing

**Description:** Example showing how to create a staggered animation with a custom power-based easing function. This snippet imports the required modules and animates multiple elements with a 100ms delay between each animation.

```javascript
import { waapi, stagger } from 'animejs';

waapi.animate('.square', {
  translate: '17rem',
  ease: 'inOut(6)',
  delay: stagger(100)
});
```

---

## Using Custom Easing with Anime.js WAAPI

**Description:** Example demonstrating how to use the custom elastic easing function with Anime.js' WAAPI implementation. The ease parameter accepts an easing function and animates an element 100px horizontally.

```javascript
waapi.animate('.square', {
  x: 100,
  ease: eases.outElastic(1.25, .1)
});
```

---