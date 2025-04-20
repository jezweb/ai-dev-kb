# Draggable Callbacks Documentation for Anime.js

**Summary:** This file covers topics related to "Draggable Callbacks Documentation for Anime.js". Key snippets include: Implementing onRelease Callback with Anime.js Draggable, Implementing onDrag Callback with Anime.js, HTML Structure for Draggable Demo.

---

## Implementing onRelease Callback with Anime.js Draggable

**Description:** Demonstrates how to create a draggable element with an onRelease callback that increments and displays a counter. The callback function executes whenever the draggable element is released after being grabbed.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let releases = 0;

createDraggable('.square', {
  container: '.grid',
  onRelease: () => $value.textContent = ++releases
});
```

---

## Implementing onDrag Callback with Anime.js

**Description:** Demonstrates how to create a draggable element with a callback function that counts and displays the number of drag operations. The callback executes whenever the element is being dragged.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let drags = 0;

createDraggable('.square', {
  container: '.grid',
  onDrag: () => $value.textContent = ++drags
});
```

---

## HTML Structure for Draggable Demo

**Description:** Defines the HTML structure required for the draggable element and drag counter display. Includes a grid container, log display area, and the draggable square element.

```html
<div class="large padded grid square-grid">
  <pre class="large log row">
    <span class="label">drags</span>
    <span class="value">0</span>
  </pre>
  <div class="square draggable"></div>
</div>
```

---