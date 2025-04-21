# AnimeJS Animatable Settings Documentation

**Summary:** This file covers topics related to "AnimeJS Animatable Settings Documentation". Key snippets include: Configuring Animatable Properties in AnimeJS.

---

## Configuring Animatable Properties in AnimeJS

**Description:** Demonstrates how to set both specific and global animation properties using createAnimatable. Shows configuration of unit types, duration, and easing for individual properties as well as global settings.

```javascript
createAnimatable(targets, {
  x: {
    unit: 'rem',
    duration: 400,
    ease: 'out(4)'
  },
  y: 200,
  rotate: 1000,
  ease: 'out(2)'
});
```

---