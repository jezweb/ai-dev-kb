# Anime.js Animation Value Types Documentation

**Summary:** This file covers topics related to "Anime.js Animation Value Types Documentation". Key snippets include: Setting Animation Values in Anime.js.

---

## Setting Animation Values in Anime.js

**Description:** Demonstrates different ways to specify animation values in Anime.js including direct values, function-based values, relative values, and property objects with 'from' values.

```javascript
animate('.square', {
  x: '6rem', 
  y: $el => $el.dataset.y, 
  scale: '+=.25', 
  opacity: {
    from: .4, 
  },
});
```

---