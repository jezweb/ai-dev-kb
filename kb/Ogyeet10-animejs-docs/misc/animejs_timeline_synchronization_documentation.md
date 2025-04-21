# AnimeJS Timeline Synchronization Documentation

**Summary:** This file covers topics related to "AnimeJS Timeline Synchronization Documentation". Key snippets include: Basic Timeline Synchronization in AnimeJS.

---

## Basic Timeline Synchronization in AnimeJS

**Description:** Demonstrates basic timeline synchronization by creating and syncing a child timeline with position transformations.

```javascript
const tlChild = createTimeline().add(target, { x: 100 }).add(target, { y: 100 });

creatTimeline().sync(tlChild);
```

---