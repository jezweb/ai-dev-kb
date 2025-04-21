# Anime.js Keyframe Animation Documentation

**Summary:** This file covers topics related to "Anime.js Keyframe Animation Documentation". Key snippets include: Complex Keyframe Animation with Multiple Properties - JavaScript, Basic Keyframe Animation Example - JavaScript.

---

## Complex Keyframe Animation with Multiple Properties - JavaScript

**Description:** Shows a comprehensive example of keyframe animation with multiple properties including translation, scaling, and rotation. Includes various animation parameters like duration, easing, and looping.

```javascript
animate('.square', {
  translateX: ['0rem', 0, 17, 17, 0, 0],
  translateY: ['0rem', -2.5, -2.5, 2.5, 2.5, 0],
  scale: [1, 1, .5, .5, 1, 1],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

---

## Basic Keyframe Animation Example - JavaScript

**Description:** Demonstrates a simple keyframe animation using array syntax to define the from and to values for the x property.

```javascript
animate(target: { x: [-100, 100] }); // Animate x from -100 to 100
```

---