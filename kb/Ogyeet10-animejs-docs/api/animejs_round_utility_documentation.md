# AnimeJS Round Utility Documentation

**Summary:** This file covers topics related to "AnimeJS Round Utility Documentation". Key snippets include: AnimeJS Round Utility in Animation Example.

---

## AnimeJS Round Utility in Animation Example

**Description:** Demonstrates using the round utility in actual animations. It creates two animations, one normal and one with rotation values rounded to one decimal place using the round utility as a modifier function.

```javascript
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
});

animate('.rounded', {
  rotate: '1turn',
  modifier: utils.round(1), // Used as a function
  duration: 3000,
  loop: true,
});
```

---