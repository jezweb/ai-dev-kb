# Configuring Draggable Settings in Anime.js

**Summary:** This file covers topics related to "Configuring Draggable Settings in Anime.js". Key snippets include: Configuring Draggable Container Padding in Anime.js, Creating a Draggable Element with Custom Scroll Threshold - JavaScript.

---

## Configuring Draggable Container Padding in Anime.js

**Description:** This snippet demonstrates how to create a draggable element with custom container padding using Anime.js. It sets up a draggable square within a grid container, specifying different padding values for each side.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  containerPadding: [ 16, 32, -16, 64], // top, right, bottom, left
  scrollThreshold: 0,
});
```

---

## Creating a Draggable Element with Custom Scroll Threshold - JavaScript

**Description:** This snippet demonstrates how to create a draggable element using the Anime.js library, specifying a custom scroll threshold. The 'container' option defines the scrolling element, and 'scrollThreshold' sets the number of pixels required to trigger scrolling.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.scroll-container',
  scrollThreshold: 12,
});
```

---