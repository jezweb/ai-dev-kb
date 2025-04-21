# Draggable Settings in Anime.js

**Summary:** This file covers topics related to "Draggable Settings in Anime.js". Key snippets include: Creating Draggable Elements with Container Boundaries in Anime.js, Implementing Draggable Elements with Custom Drag Speeds in Anime.js, Configuring releaseContainerFriction for Draggable Elements in Anime.js.

---

## Creating Draggable Elements with Container Boundaries in Anime.js

**Description:** This snippet demonstrates how to create draggable elements with specified container boundaries using Anime.js. It shows two examples: one using a CSS selector to define the container, and another using an array of numerical values.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
});

createDraggable('.circle', {
  container: [-16, 80, 16, 0],
});
```

---

## Implementing Draggable Elements with Custom Drag Speeds in Anime.js

**Description:** This snippet demonstrates how to create draggable elements with different drag speeds using Anime.js. It shows two examples: one with increased speed and another with decreased speed.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  dragSpeed: 2,
});

createDraggable('.circle', {
  container: '.grid',
  dragSpeed: .5,
});
```

---

## Configuring releaseContainerFriction for Draggable Elements in Anime.js

**Description:** This snippet demonstrates how to create draggable elements with different releaseContainerFriction values. It shows two examples: one with no friction (0) and another with maximum friction (1).

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseContainerFriction: 0,
});

createDraggable('.circle', {
  container: '.grid',
  releaseContainerFriction: 1,
});
```

---