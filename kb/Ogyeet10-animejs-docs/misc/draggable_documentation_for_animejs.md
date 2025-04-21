# Draggable Documentation for AnimeJS

**Summary:** This file covers topics related to "Draggable Documentation for AnimeJS". Key snippets include: Creating a Draggable Element with AnimeJS, Basic Usage of createDraggable with CSS Selector.

---

## Creating a Draggable Element with AnimeJS

**Description:** Demonstrates the basic usage of the createDraggable function. It takes a target (CSS selector or DOM element) and optional parameters to create a draggable element.

```javascript
const draggable = createDraggable(target, parameters);
```

---

## Basic Usage of createDraggable with CSS Selector

**Description:** Shows a simple example of creating a draggable element using a CSS selector '.square' as the target. This makes all elements with the class 'square' draggable.

```javascript
import { createDraggable } from 'animejs';

createDraggable('.square');
```

---