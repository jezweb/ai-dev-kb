# Function-based Values in Web Animation API

**Summary:** This file covers topics related to "Function-based Values in Web Animation API". Key snippets include: Animating Elements with Function-based Values using Anime.js, Advanced Anime.js Animation with Dynamic Duration.

---

## Animating Elements with Function-based Values using Anime.js

**Description:** This snippet shows how to use Anime.js to animate multiple '.square' elements with function-based values for translation, rotation, and scaling. It also demonstrates the use of the stagger function for delayed animations.

```javascript
waapi.animate('.square', {
  translate: () => `${utils.random(10, 17)}rem`,
  rotate: () => utils.random(-180, 180),
  scale: (_, i) => .25 + (i * .25),
  delay: stagger(100)
});
```

---

## Advanced Anime.js Animation with Dynamic Duration

**Description:** This snippet showcases a more advanced use of Anime.js, where the duration of each element's animation is determined by its data attribute. It also imports necessary functions from the Anime.js library.

```javascript
import { waapi, utils, stagger } from 'animejs';

waapi.animate('.square', {
  translate: () => `${utils.random(10, 17)}rem`,
  rotate: () => utils.random(-180, 180),
  scale: (_, i) => .25 + (i * .25),
  duration: $el => $el.dataset.duration,
  delay: stagger(100)
});
```

---