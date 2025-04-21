# AnimeJS Draggable Library Documentation

**Summary:** This file covers topics related to "AnimeJS Draggable Library Documentation". Key snippets include: Configuring Draggable Component with Axes Parameters in AnimeJS.

---

## Configuring Draggable Component with Axes Parameters in AnimeJS

**Description:** This snippet demonstrates how to create a draggable element with specific configurations for x and y axes. It shows how to set different snap values for each axis, apply a modifier function, set container padding, adjust release animations, and handle events.

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