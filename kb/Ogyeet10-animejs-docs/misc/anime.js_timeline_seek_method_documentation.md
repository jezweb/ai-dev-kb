# Anime.js Timeline Seek Method Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Seek Method Documentation". Key snippets include: Timeline Seek Method Implementation in JavaScript.

---

## Timeline Seek Method Implementation in JavaScript

**Description:** Demonstrates implementation of timeline seek functionality using Anime.js. Creates a timeline with multiple animations and connects it to range input and play/pause button controls. Includes event listeners and state management for timeline control.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');

const updateButtonLabel = tl => {
  $playPauseButton.textContent = tl.paused ? 'Play' : 'Pause';
}

const tl = createTimeline({
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const seekTimeline = () => tl.seek(+$range.value);

const playPauseTimeline = () => {
  if (tl.paused) {
    tl.play();
  } else {
    tl.pause();
    updateButtonLabel(tl);
  }
}

$range.addEventListener('input', seekTimeline);
$playPauseButton.addEventListener('click', playPauseTimeline);
```

---