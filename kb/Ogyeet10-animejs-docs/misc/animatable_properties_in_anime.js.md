# Animatable Properties in Anime.js

**Summary:** This file covers topics related to "Animatable Properties in Anime.js". Key snippets include: Animating CSS Properties with Anime.js.

---

## Animating CSS Properties with Anime.js

**Description:** This example demonstrates how to animate various CSS properties including positioning, border radius, background color, and filter effects using Anime.js. It shows property naming conventions for properties with dashes, which can be written in camelCase or as strings.

```javascript
import { animate } from 'animejs';

animate('.square', {
  left: 'calc(7.75rem * 2)',
  borderRadius: 64,
  'background-color': '#F9F640',
  filter: 'blur(5px)',
});
```

---