# Animating with Precision in Anime.js

**Summary:** This file covers topics related to "Animating with Precision in Anime.js". Key snippets include: Setting Animation Precision in Anime.js - JavaScript.

---

## Setting Animation Precision in Anime.js - JavaScript

**Description:** This snippet demonstrates how to set the precision of animated values in Anime.js. The 'engine.precision' property is adjusted based on user input, allowing for control over the rounding of decimal points in animations. A number higher than or equal to 0 enables rounding, while a negative number skips rounding altogether. The default precision is set to 4.

```javascript
engine.precision = 1; // values will be rounded to 1 decimal place ('120.7px')
```

```javascript
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $range ] = utils.$('.range');

for (let i = 0; i < 150; i++) {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    delay: utils.random(0, 1000),
    loop: true,
  });  
}

function onInput() {
  engine.precision = this.value;
}

$range.addEventListener('input', onInput);
```

---