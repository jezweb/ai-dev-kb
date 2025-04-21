# Timeline Remove Method in Anime.js

**Summary:** This file covers topics related to "Timeline Remove Method in Anime.js". Key snippets include: Removing Targets from Anime.js Timeline, Removing Animations, Timers, or Timelines from Anime.js Timeline, Implementing Timeline Remove Methods in Anime.js.

---

## Removing Targets from Anime.js Timeline

**Description:** Shows how to remove targets from an Anime.js timeline. The method accepts targets as a parameter.

```javascript
timeline.remove(targets);
```

---

## Removing Animations, Timers, or Timelines from Anime.js Timeline

**Description:** Demonstrates how to remove animations, timers, or timelines from an Anime.js timeline. The method accepts an object (Animation, Timer, or Timeline) and an optional time position.

```javascript
timeline.remove([animation, timer, timeline]);
```

---

## Implementing Timeline Remove Methods in Anime.js

**Description:** A complete example demonstrating the usage of remove() method in different scenarios. It creates a timeline with multiple animations and provides functions to remove an animation, a target, and a specific tween property.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $removeA, $removeB, $removeC ] = utils.$('.button');

const animation = animate('.circle', { x: '15rem', scale: [1, .5, 1] });

const tl = createTimeline({ loop: true, alternate: true })
.sync(animation)
.add('.triangle', { x: '15rem', rotate: 360 }, 100)
.add('.square',   { x: '15rem' }, 200);

const removeAnimation = () => tl.remove(animation);
const removeTarget = () => tl.remove('.square');
const removeRotate = () => tl.remove('.triangle', 'rotate');

$removeA.addEventListener('click', removeAnimation);
$removeB.addEventListener('click', removeTarget);
$removeC.addEventListener('click', removeRotate);
```

---