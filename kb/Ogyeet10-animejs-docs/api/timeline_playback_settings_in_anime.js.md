# Timeline Playback Settings in Anime.js

**Summary:** This file covers topics related to "Timeline Playback Settings in Anime.js". Key snippets include: Creating a Timeline with Default Parameters in Anime.js, Creating a Reversed Timeline with Anime.js, Configuring Timeline Playback Ease with Individual Animations, Setting Global Default for Reversed Timeline in Anime.js, HTML Structure for Anime.js Timeline Animation.

---

## Creating a Timeline with Default Parameters in Anime.js

**Description:** This example demonstrates how to create an Anime.js timeline with default parameters that will be applied to all animations within the timeline. The defaults include easing, duration, loop count, and direction settings.

```javascript
import { createTimeline } from 'animejs';

const tl = createTimeline({
  defaults: {
    ease: 'inOutExpo',
    duration: 500,
    loop: 2,
    reversed: true,
    alternate: true,
  }
})
.add('.square', { x: '15rem' })
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' });
```

---

## Creating a Reversed Timeline with Anime.js

**Description:** This code creates a reversed timeline using Anime.js. It animates three elements (.circle, .triangle, .square) along the x-axis and updates a time display. The timeline is set to play in reverse by default.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $time ] = utils.$('.time');

const tl = createTimeline({
  reversed: true,
  onUpdate: self => $time.innerHTML = self.currentTime
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

---

## Configuring Timeline Playback Ease with Individual Animations

**Description:** Creates a timeline with custom playback easing and adds multiple animations with different easing functions for different elements.

```javascript
const tl = createTimeline({
  playbackEase: 'inOut(3)', // this ease is applied across all children
})
.add('.circle', { x: '15rem', ease: 'out(1)' })
.add('.triangle', { x: '15rem', ease: 'out(2)' })
.add('.square', { x: '15rem', ease: 'out(3)' });
```

---

## Setting Global Default for Reversed Timeline in Anime.js

**Description:** This snippet demonstrates how to change the default value of the 'reversed' property globally for all timelines in Anime.js. It imports the engine from 'animejs' and sets the default reversed value to true.

```javascript
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

---

## HTML Structure for Anime.js Timeline Animation

**Description:** This HTML structure contains the elements targeted by the Anime.js timeline animation. It includes triangle, square, and circle elements arranged in a pyramid layout.

```html
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
```

---