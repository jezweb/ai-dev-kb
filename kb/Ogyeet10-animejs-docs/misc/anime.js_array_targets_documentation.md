# Anime.js Array Targets Documentation

**Summary:** This file covers topics related to "Anime.js Array Targets Documentation". Key snippets include: Animating Multiple Targets with Anime.js.

---

## Animating Multiple Targets with Anime.js

**Description:** Example showing how to animate both a JavaScript object (vector2D) and a DOM element (.square) simultaneously. Uses utils.roundPad for number formatting and updates a log element with the current vector2D state.

```javascript
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('.demo code');

const vector2D = { x: 0, y: 0 };

animate([vector2D, '.square'], {
  x: '17rem',
  modifier: utils.roundPad(2).padStart(5, '0'),
  onRender: () => $log.textContent = JSON.stringify(vector2D),
});
```

---