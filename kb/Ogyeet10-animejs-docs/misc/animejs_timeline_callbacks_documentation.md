# AnimeJS Timeline Callbacks Documentation

**Summary:** This file covers topics related to "AnimeJS Timeline Callbacks Documentation". Key snippets include: Defining Timeline Callbacks in AnimeJS.

---

## Defining Timeline Callbacks in AnimeJS

**Description:** This snippet demonstrates how to define timeline callbacks within the createTimeline() function in AnimeJS. It includes settings for defaults, loop, alternate, autoplay, and various callback functions.

```javascript
createTimeline({
  defaults: {
    ease: 'out(3)',
    duration: 500,
  },
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

---