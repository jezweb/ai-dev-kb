# Configuring Animation Speed in Anime.js

**Summary:** This file covers topics related to "Configuring Animation Speed in Anime.js". Key snippets include: Adjusting Global Animation Speed with Anime.js in JavaScript, Animating Elements with Anime.js in JavaScript.

---

## Adjusting Global Animation Speed with Anime.js in JavaScript

**Description:** This code snippet demonstrates setting the global speed of all animations in Anime.js to half speed, using the engine.speed parameter. It requires the Anime.js library and features a simple import statement.

```JavaScript
engine.speed = 0.5; // Run all animations at half speed
```

---

## Animating Elements with Anime.js in JavaScript

**Description:** This snippet illustrates adding and animating 150 particles with random positions and scale, leveraging utility functions from Anime.js. Requires imports from the Anime.js package and a container to hold particles.

```JavaScript
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
  utils.sync(() => engine.speed = this.value);
}

$range.addEventListener('input', onInput);
```

---