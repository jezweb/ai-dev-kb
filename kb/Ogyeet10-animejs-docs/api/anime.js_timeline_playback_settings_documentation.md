# Anime.js Timeline Playback Settings Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Playback Settings Documentation". Key snippets include: Configuring Timeline Playback Settings in Anime.js.

---

## Configuring Timeline Playback Settings in Anime.js

**Description:** This example demonstrates how to configure timeline playback settings in the createTimeline() function call. It shows various options including defaults for animations, loop count, alternate direction, autoplay setting, and callback functions.

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