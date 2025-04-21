# Draggable Callbacks Documentation in Anime.js

**Summary:** This file covers topics related to "Draggable Callbacks Documentation in Anime.js". Key snippets include: HTML Structure for Draggable Element, Implementing onSettle Callback with Anime.js Draggable.

---

## HTML Structure for Draggable Element

**Description:** Defines the HTML structure required for the draggable functionality, including a container grid, a counter display, and the draggable square element.

```html
<div class="large padded grid square-grid">
  <pre class="large log row">
    <span class="label">stops</span>
    <span class="value">0</span>
  </pre>
  <div class="square draggable"></div>
</div>
```

---

## Implementing onSettle Callback with Anime.js Draggable

**Description:** Demonstrates how to create a draggable element with an onSettle callback that counts and displays the number of times the element has stopped moving. The callback is triggered when the dragged element comes to a complete stop after being released.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let stops = 0;

createDraggable('.square', {
  container: '.grid',
  onSettle: () => $value.textContent = ++stops
});
```

---