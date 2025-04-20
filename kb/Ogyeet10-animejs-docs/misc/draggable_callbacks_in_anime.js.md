# Draggable Callbacks in Anime.js

**Summary:** This file covers topics related to "Draggable Callbacks in Anime.js". Key snippets include: Implementing onResize Callback for Draggable Elements in Anime.js, HTML Structure for Draggable Element and Resize Counter Display, Implementing onGrab Callback for Draggable Elements in Anime.js.

---

## Implementing onResize Callback for Draggable Elements in Anime.js

**Description:** This snippet demonstrates how to use the onResize callback with createDraggable in Anime.js. It creates a draggable square and updates a counter each time the container or dragged target sizes change.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let resizes = 0;

createDraggable('.square', {
  container: '.grid',
  onResize: self => {
    $value.textContent = ++resizes;
  }
});
```

---

## HTML Structure for Draggable Element and Resize Counter Display

**Description:** This HTML snippet provides the structure for displaying a draggable square element within a grid container, along with a counter to show the number of resizes that have occurred.

```html
<div class="iframe-content resizable">
  <div class="large padded grid square-grid">
    <pre class="large log row">
      <span class="label">resizes</span>
      <span class="value">0</span>
    </pre>
    <div class="square draggable"></div>
  </div>
</div>
```

---

## Implementing onGrab Callback for Draggable Elements in Anime.js

**Description:** This snippet demonstrates how to use the onGrab callback with createDraggable in Anime.js. It creates a draggable square and updates a counter each time the element is grabbed.

```javascript
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let grabs = 0;

createDraggable('.square', {
  container: '.grid',
  onGrab: () => $value.textContent = ++grabs
});
```

---