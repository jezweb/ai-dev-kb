# Anime.js Stagger Modifier Documentation

**Summary:** This file covers topics related to "Anime.js Stagger Modifier Documentation". Key snippets include: Anime.js Stagger Modifier with boxShadow.

---

## Anime.js Stagger Modifier with boxShadow

**Description:** This JavaScript snippet demonstrates the use of the stagger modifier in Anime.js to control the box-shadow of multiple elements. It defines a function that modifies the staggered value to generate different box-shadow offsets based on the input value. The animation is set to loop indefinitely.

```javascript
import { animate, stagger } from 'animejs';

animate('.square', {
  boxShadow: [
    { to: stagger([1, .25], {
        modifier: v => `0 0 ${v * 30}px ${v * 20}px currentColor`,
        from: 'center'
      })
    },
    { to: 0 },
  ],
  delay: stagger(100, { from: 'center' }),
  loop: true
});
```

---