# Configuring Scroll Animation Synchronization in Anime.js

**Summary:** This file covers topics related to "Configuring Scroll Animation Synchronization in Anime.js". Key snippets include: Animating Scroll with Synchronization Mode in Anime.js.

---

## Animating Scroll with Synchronization Mode in Anime.js

**Description:** This snippet demonstrates how to utilize the onScroll() method from Anime.js to synchronize animation with scroll position, utilizing parameters to define the synchronization behavior.

```javascript
animate('.square', {
  x: 100,
  autoplay: onScroll({
    container: '.container',
    target: '.section',
    axis: 'y',
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,            // Synchronisation Mode
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

---