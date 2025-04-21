# AnimeJS Stagger Range Value Types

**Summary:** This file covers topics related to "AnimeJS Stagger Range Value Types". Key snippets include: Implementing Stagger Range Values with AnimeJS.

---

## Implementing Stagger Range Values with AnimeJS

**Description:** This code demonstrates how to use the stagger function with range values to distribute animations evenly. It animates elements with class 'square' using staggered y-position values between '2.75rem' and '-2.75rem', and delays between 0 and 500 milliseconds.

```javascript
import { animate, stagger } from 'animejs';

animate('.square', {
  y: stagger(['2.75rem', '-2.75rem']),
  delay: stagger([0, 500]),
});
```

---