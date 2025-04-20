# AnimeJS Timeline Documentation

**Summary:** This file covers topics related to "AnimeJS Timeline Documentation". Key snippets include: Creating and Adding Animations to a Timeline in AnimeJS.

---

## Creating and Adding Animations to a Timeline in AnimeJS

**Description:** Code example that demonstrates creating a timeline in AnimeJS and using both sync() and add() methods to add animations. This showcases how to create external animations and synchronize them with a timeline as well as adding animations directly to a timeline with various parameters.

```javascript
import { createTimeline, animate } from 'animejs';

const circleAnimation = animate('.circle', {
  x: '15rem'
});

const tl = createTimeline()
.sync(circleAnimation)
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
  alternate: true,
  loop: 2,
})
.add('.square', {
  x: '15rem',
});
```

---