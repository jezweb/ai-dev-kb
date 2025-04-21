# Configuring ScrollObserver in animejs

**Summary:** This file covers topics related to "Configuring ScrollObserver in animejs". Key snippets include: Animating Elements with ScrollObserver in JavaScript.

---

## Animating Elements with ScrollObserver in JavaScript

**Description:** The snippet demonstrates how to configure the ScrollObserver settings in animejs to animate elements when they enter or leave the viewport. Dependencies include the animejs library, and key parameters include container and target for the element selection, as well as axis for defining the scroll direction. The onEnter, onLeave, and onUpdate functions are used as hooks for respective scroll events.

```JavaScript
animate('.square', {
  x: 100,
  autoplay: onScroll({
  ┌───────────────────────────────────────┌
  │ container: '.container', │
  │ target: '.section',      ├─ Settings
  │ axis: 'y',               │
  └──────────────────────────────────────────┌
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

---