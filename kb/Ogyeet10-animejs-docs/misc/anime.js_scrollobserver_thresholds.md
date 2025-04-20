# Anime.js ScrollObserver Thresholds

**Summary:** This file covers topics related to "Anime.js ScrollObserver Thresholds". Key snippets include: Anime.js ScrollObserver Thresholds Example, Anime.js ScrollObserver Object Syntax.

---

## Anime.js ScrollObserver Thresholds Example

**Description:** This code snippet demonstrates how to use ScrollObserver with custom enter and leave thresholds to control an animation. The animation is triggered when the bottom of the container meets the top of the target and when the top of the container meets the bottom of the target.

```javascript
animate('.square', {
  x: 100,
  autoplay: onScroll({

    container: '.container',
    target: '.section',
    axis: 'y',
  ┬─────────────────────┐
  │ enter: 'bottom top',     │─ Thresholds
  │ leave: 'top bottom',     │
  └─────────────────────┘
    sync: true,
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

---

## Anime.js ScrollObserver Object Syntax

**Description:** This snippet shows how to define ScrollObserver thresholds using an object syntax.  The `enter` property defines when the target enters the viewport (top of the target meets the bottom of the container), and the `leave` property defines when the target leaves the viewport (bottom of the target meets the top of the container).

```javascript
onScroll({
  // Enters when the top of the target meets the bottom of the container
  enter: { target: 'top', container: 'bottom' },
  // Leaves when the bottom of the target meets the top of the container
  leave: { target: 'bottom', container: 'top' }
});
```

---