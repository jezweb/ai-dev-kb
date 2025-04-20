# Animating JavaScript Objects with Anime.js

**Summary:** This file covers topics related to "Animating JavaScript Objects with Anime.js". Key snippets include: Animating JavaScript Object Properties with Anime.js.

---

## Animating JavaScript Object Properties with Anime.js

**Description:** This snippet shows how to use Anime.js to animate properties of a JavaScript object. It animates a 2D vector object, updating its x and y coordinates, and logs the changes to the DOM.

```javascript
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('code');

const vector2D = { x: 0, y: 0 };

animate(vector2D, {
  x: 100,
  y: 150,
  modifier: utils.round(0),
  onUpdate: () => $log.textContent = JSON.stringify(vector2D),
});
```

---