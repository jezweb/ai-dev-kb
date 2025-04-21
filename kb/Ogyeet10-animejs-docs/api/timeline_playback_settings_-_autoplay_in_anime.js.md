# Timeline Playback Settings - Autoplay in Anime.js

**Summary:** This file covers topics related to "Timeline Playback Settings - Autoplay in Anime.js". Key snippets include: Creating a Manual Timeline with Playback Control in Anime.js, Configuring Global Autoplay Default in Anime.js.

---

## Creating a Manual Timeline with Playback Control in Anime.js

**Description:** Example of creating a timeline with autoplay disabled that requires manual playback control. The code sets up a timeline with animation sequences for multiple elements and adds a click event listener to a play button.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $paused ] = utils.$('.paused');
const [ $play ] = utils.$('.play');

const tl = createTimeline({
  autoplay: false,
  onUpdate: self => $paused.innerHTML = !!self.paused,
  onComplete: self => $paused.innerHTML = !!self.paused
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

const playTl = () => tl.paused ? tl.restart() : tl.play();

$play.addEventListener('click', playTl);
```

---

## Configuring Global Autoplay Default in Anime.js

**Description:** Code snippet showing how to change the default autoplay setting globally for all timelines by updating the engine.defaults object in Anime.js.

```javascript
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

---