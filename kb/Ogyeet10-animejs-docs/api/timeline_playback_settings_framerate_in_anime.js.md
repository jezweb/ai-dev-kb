# Timeline Playback Settings: Framerate in Anime.js

**Summary:** This file covers topics related to "Timeline Playback Settings: Framerate in Anime.js". Key snippets include: Creating and Controlling Timeline with Dynamic Framerate in Anime.js, Setting Default Framerate Globally in Anime.js.

---

## Creating and Controlling Timeline with Dynamic Framerate in Anime.js

**Description:** This code creates an Anime.js timeline with an initial framerate of 60 fps and sets up event listeners to dynamically update the framerate based on user input. It animates multiple elements and allows real-time adjustment of the animation speed.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');

const tl = createTimeline({
  frameRate: 60,
  loop: true,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  tl.fps = value;
}

$range.addEventListener('input', updateFps);
```

---

## Setting Default Framerate Globally in Anime.js

**Description:** This snippet shows how to change the default framerate for all animations globally using the engine.defaults object in Anime.js. It sets the default framerate to 30 fps.

```javascript
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

---