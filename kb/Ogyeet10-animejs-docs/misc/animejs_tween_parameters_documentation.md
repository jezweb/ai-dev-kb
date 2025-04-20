# Animejs Tween Parameters Documentation

**Summary:** This file covers topics related to "Animejs Tween Parameters Documentation". Key snippets include: Animating Elements with From Parameter in Animejs.

---

## Animating Elements with From Parameter in Animejs

**Description:** Demonstrates how to use the 'from' parameter to define starting values for various animation properties including opacity, translation, and rotation. The animation transitions from these specified values to their default target values.

```javascript
import { animate } from 'animejs';

animate('.square', {
  opacity: { from: .5 }, // Animate from .5 opacity to 1 opacity
  translateX: { from: '16rem' }, // From 16rem to 0rem
  rotate: {
    from: '-.75turn', // From -.75turn to 0turn
    ease: 'inOutQuad',
  },
});
```

---