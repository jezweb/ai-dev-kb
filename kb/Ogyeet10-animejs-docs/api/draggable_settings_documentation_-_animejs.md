# Draggable Settings Documentation - AnimeJS

**Summary:** This file covers topics related to "Draggable Settings Documentation - AnimeJS". Key snippets include: Configuring Draggable Elements with ReleaseDamping - JavaScript.

---

## Configuring Draggable Elements with ReleaseDamping - JavaScript

**Description:** Demonstrates how to create draggable elements with different damping settings using AnimeJS. Shows configuration of both square and circle elements with custom releaseDamping and releaseStiffness values.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseDamping: 5,
});

createDraggable('.circle', {
  container: '.grid',
  releaseStiffness: 30,
});
```

---