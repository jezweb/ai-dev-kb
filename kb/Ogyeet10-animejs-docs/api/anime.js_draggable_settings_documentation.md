# Anime.js Draggable Settings Documentation

**Summary:** This file covers topics related to "Anime.js Draggable Settings Documentation". Key snippets include: Configuring Draggable Settings in Anime.js, Configuring Draggable Elements with containerFriction in Anime.js.

---

## Configuring Draggable Settings in Anime.js

**Description:** Example showing how to create a draggable element with custom settings including snap points, axis constraints, container padding, and event handlers. The code demonstrates various configuration options available in the createDraggable() method.

```javascript
createDraggable('.square', {
  x: { snap: 100 },
  y: { snap: 50 },
  modifier: utils.wrap(-200, 0),
  containerPadding: 10,
  releaseStiffness: 40,
  releaseEase: 'out(3)',
  onGrab: () => {},
  onDrag: () => {},
  onRelease: () => {},
});
```

---

## Configuring Draggable Elements with containerFriction in Anime.js

**Description:** This snippet demonstrates how to create draggable elements with different containerFriction values using Anime.js. It shows two examples: one with no friction (0) and another with maximum friction (1).

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  containerFriction: 0,
});

createDraggable('.circle', {
  container: '.grid',
  containerFriction: 1,
});
```

---