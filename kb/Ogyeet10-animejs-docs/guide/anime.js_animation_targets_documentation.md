# Anime.js Animation Targets Documentation

**Summary:** This file covers topics related to "Anime.js Animation Targets Documentation". Key snippets include: Basic Anime.js Animation Configuration.

---

## Basic Anime.js Animation Configuration

**Description:** Demonstrates the basic structure of an Anime.js animation configuration using a CSS selector target. Shows various animation properties including translation, scaling, opacity, duration, delay, easing, looping, and callback functions.

```javascript
animate(
'.square',
{
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