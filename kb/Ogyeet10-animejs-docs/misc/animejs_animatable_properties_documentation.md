# Animejs Animatable Properties Documentation

**Summary:** This file covers topics related to "Animejs Animatable Properties Documentation". Key snippets include: Defining Animatable Properties in Anime.js.

---

## Defining Animatable Properties in Anime.js

**Description:** This code snippet demonstrates how to define animatable properties in Anime.js using the animate() function. The example shows how to animate translateX, scale, and opacity properties along with animation configuration options like duration, delay, easing, looping, and callbacks.

```javascript
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

---