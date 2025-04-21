# Draggable Settings in AnimeJS

**Summary:** This file covers topics related to "Draggable Settings in AnimeJS". Key snippets include: Configuring Draggable Cursor Settings in AnimeJS, HTML Structure for Draggable Elements in AnimeJS.

---

## Configuring Draggable Cursor Settings in AnimeJS

**Description:** This snippet demonstrates how to create draggable elements with custom cursor settings using AnimeJS. It shows two examples: one disabling custom cursor styling and another setting specific cursor styles for hover and grab states.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  cursor: false
});

createDraggable('.circle', {
  cursor: {
    onHover: 'move',
    onGrab: 'wait'
  }
});
```

---

## HTML Structure for Draggable Elements in AnimeJS

**Description:** This HTML snippet defines the structure for two draggable elements: a square and a circle. These elements are targeted by the JavaScript code to apply draggable functionality with custom cursor settings.

```html
<div class="large centered row">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

---