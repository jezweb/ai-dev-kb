# Draggable Callbacks Documentation - Anime.js

**Summary:** This file covers topics related to "Draggable Callbacks Documentation - Anime.js". Key snippets include: Implementing Draggable Callbacks in Anime.js.

---

## Implementing Draggable Callbacks in Anime.js

**Description:** Example showing how to create a draggable element with snap points, container constraints, and callback functions. The code demonstrates setting up x/y snap points, modifier functions, container padding, stiffness, and ease settings along with basic callback hooks.

```javascript
createDraggable('.square', {
  x: { snap: 100 },
  y: { snap: 50 },
  modifier: utils.wrap(-200, 0),
  containerPadding: 10,
  containerStiffness: 40,
  containerEase: 'out(3)',
  onGrab: () => {},
  onDrag: () => {},
  onRelease: () => {},
});
```

---