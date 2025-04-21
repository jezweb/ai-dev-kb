# AnimeJS Stagger Value Types Documentation

**Summary:** This file covers topics related to "AnimeJS Stagger Value Types Documentation". Key snippets include: Using Numerical Values with AnimeJS Stagger Function in JavaScript.

---

## Using Numerical Values with AnimeJS Stagger Function in JavaScript

**Description:** This snippet demonstrates how to use the stagger function with numerical values to create incremental animations. It shows how to increase translateX by 5.75rem and delay by 100ms for each element in a sequence.

```javascript
import { animate, stagger } from 'animejs';

animate('.square', {
  // Increase translateX by 5.75rem for each elements
  x: stagger('5.75rem'),
  // Increase delay by 100ms for each elements
  delay: stagger(100)
});
```

---