# AnimeJS CSS Selector Targets Documentation

**Summary:** This file covers topics related to "AnimeJS CSS Selector Targets Documentation". Key snippets include: Targeting Elements with AnimeJS CSS Selectors.

---

## Targeting Elements with AnimeJS CSS Selectors

**Description:** Demonstrates different ways to target DOM elements using CSS selectors in AnimeJS animations. Shows examples of class, ID, and nth-child selectors with various animation properties.

```javascript
import { animate } from 'animejs';

animate('.square', { x: '17rem' });
animate('#css-selector-id', { rotate: '1turn' });
animate('.row:nth-child(3) .square', { scale: [1, .5, 1] });
```

---