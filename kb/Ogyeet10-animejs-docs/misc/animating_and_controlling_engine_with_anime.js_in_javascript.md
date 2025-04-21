# Animating and Controlling Engine with Anime.js in JavaScript

**Summary:** This file covers topics related to "Animating and Controlling Engine with Anime.js in JavaScript". Key snippets include: Adding Animations and Managing Engine State with Anime.js.

---

## Adding Animations and Managing Engine State with Anime.js

**Description:** This code snippet sets up a container where 150 animated particles are added, along with functionality to pause and resume the animation engine through button interactions. Dependencies include the Anime.js library, which provides animation utilities and engine control methods.

```JavaScript
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $pause, $resume ] = utils.$('button');

function addAnimation() {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    loop: true,
    delay: utils.random(0, 1000)
  });
}

for (let i = 0; i < 150; i++) addAnimation();

const resumeEngine = () => engine.resume();
const pauseEngine = () => engine.pause();

$pause.addEventListener('click', pauseEngine);
$resume.addEventListener('click', resumeEngine);

<div class="large row container"></div>
<div class="medium row">
  <fieldset class="controls">
    <button>Pause</button>
    <button>Resume</button>
  </fieldset>
</div>
```

---