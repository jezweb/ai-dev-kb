# Anime.js Timeline Play Method Documentation

**Summary:** This file covers topics related to "Anime.js Timeline Play Method Documentation". Key snippets include: Implementing Timeline.play() Method in Anime.js.

---

## Implementing Timeline.play() Method in Anime.js

**Description:** This code snippet demonstrates how to create a timeline with multiple animations and control it using the play() method. It creates a timeline with three animations for different shapes and attaches a click event listener to a play button.

```javascript
import { createTimeline, utils } from 'animejs';

const [ $playButton ] = utils.$('.play');

const tl = createTimeline({
  autoplay: false
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const playTimeline = () => tl.play();

$playButton.addEventListener('click', playTimeline);
```

---