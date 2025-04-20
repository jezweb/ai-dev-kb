# Utilizing Stagger Effect with Anime.js

**Summary:** This file covers topics related to "Utilizing Stagger Effect with Anime.js". Key snippets include: Applying Stagger Effects with Anime.js in JavaScript.

---

## Applying Stagger Effects with Anime.js in JavaScript

**Description:** The JavaScript snippet demonstrates how to apply stagger effects using Anime.js, which includes altering the y-position of elements in a staggered manner with ease functions. Dependencies include Anime.js, and it manipulates DOM elements with the class '.square'. The primary inputs are element selectors and stagger configurations. The result is a smooth animation of movement and delay.

```JavaScript
import { animate, stagger } from 'animejs';

animate('.square', {
  y: stagger(['2.75rem', '-2.75rem'], { ease: 'inOut(3)' }),
  delay: stagger(100, { ease: 'inOut(3)' }),
});
```

---