# Anime.js Documentation: Tween Parameters

**Summary:** This file covers topics related to "Anime.js Documentation: Tween Parameters". Key snippets include: Configuring Global and Local Tween Parameters in Anime.js.

---

## Configuring Global and Local Tween Parameters in Anime.js

**Description:** This example demonstrates how to set both global and local tween parameters in an Anime.js animation. Global parameters (duration, delay, ease, loop, alternate) apply to all properties, while local parameters can be defined for specific properties to override the global settings.

```javascript
animate('.square', {
  x: {
    to: 100,
    delay: 0,
    ease: 'inOut(4)'
  },
  scale: 1,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
});
```

---