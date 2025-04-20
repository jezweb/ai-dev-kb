# AnimeJS Random Pick Utility Documentation

**Summary:** This file covers topics related to "AnimeJS Random Pick Utility Documentation". Key snippets include: Advanced Random Pick Implementation - JavaScript.

---

## Advanced Random Pick Implementation - JavaScript

**Description:** Shows how to use randomPick with AnimeJS utils.set() to randomly assign various properties including position, scale, color, and content to elements with the 'letter' class.

```javascript
import { utils } from 'animejs';

utils.set('.letter', {
  x: () => utils.randomPick([5, 9, 13, 17]) + 'rem',
  scale: () => utils.randomPick([1, 1.25, 1.5, 1.75]),
  color: () => `var(--hex-${utils.randomPick(['red', 'orange', 'yellow'])})`,
  innerHTML: () => utils.randomPick('ABCD'),
});
```

---