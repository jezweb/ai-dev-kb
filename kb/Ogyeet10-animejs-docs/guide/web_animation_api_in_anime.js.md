# Web Animation API in Anime.js

**Summary:** This file covers topics related to "Web Animation API in Anime.js". Key snippets include: Importing and Using WAAPI with Anime.js, Creating a Staggered Animation with WAAPI.

---

## Importing and Using WAAPI with Anime.js

**Description:** Basic syntax for creating WAAPI-powered animations in Anime.js. This shows how to import the waapi module and use the animate() method with targets and parameters.

```javascript
import { waapi } from 'animejs';

const animation = waapi.animate(targets, parameters);
```

---

## Creating a Staggered Animation with WAAPI

**Description:** Example of creating a staggered animation effect using WAAPI in Anime.js. This code animates span elements with a vertical translation, staggered delay, looping, and easing.

```javascript
import { waapi, stagger } from 'animejs';

waapi.animate('span', {
  translate: `0 -2rem`,
  delay: stagger(100),
  duration: 600,
  loop: true,
  alternate: true,
  ease: 'inOut(2)',
});
```

---