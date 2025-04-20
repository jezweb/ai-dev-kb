# Web Animation API - Convert Ease Function

**Summary:** This file covers topics related to "Web Animation API - Convert Ease Function". Key snippets include: Converting Spring Easing Function to WAAPI Compatible Linear Easing, Applying Multiple Spring Animations Using WAAPI.

---

## Converting Spring Easing Function to WAAPI Compatible Linear Easing

**Description:** Basic example showing how to convert a spring easing function to WAAPI compatible linear easing. It imports the necessary functions from anime.js, creates a spring with specified stiffness, and converts it to a linear easing function for WAAPI.

```javascript
import { waapi, createSpring } from 'animejs';

const spring = createSpring({ stiffness: 12 });

const linearEasing = waapi.convertEase(spring.ease);
```

---

## Applying Multiple Spring Animations Using WAAPI

**Description:** Demonstration of applying different spring animations to multiple elements using WAAPI. This snippet creates three spring animations with different stiffness values, selects elements with querySelector, and applies animations with different settings to each element.

```javascript
import { waapi, createSpring } from 'animejs';

const springs = [
  createSpring({ stiffness: 100 }),
  createSpring({ stiffness: 150 }),
  createSpring({ stiffness: 200 })
]

document.querySelectorAll('#web-animation-api-waapi-convertease .demo .square').forEach(($el, i) => {
  $el.animate({
    translate: '17rem',
    rotate: '1turn',
  }, {
    easing: waapi.convertEase(springs[i].ease),
    delay: i * 250,
    duration: springs[i].duration,
    fill: 'forwards'
  });
});
```

---