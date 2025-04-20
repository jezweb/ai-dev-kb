# Anime.js Engine Pause and Resume Example

**Summary:** This file covers topics related to "Anime.js Engine Pause and Resume Example". Key snippets include: Pausing and Resuming Anime.js Engine, HTML Structure for Anime.js Animation Control.

---

## Pausing and Resuming Anime.js Engine

**Description:** This JavaScript code pauses the Anime.js engine, displays a countdown on a button, and resumes the engine after the countdown. It uses `engine.pause()` to stop animations and `engine.resume()` to restart them. The `setInterval` function is used to manage the countdown and update the button text.

```javascript
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $add, $pause ] = utils.$('button');

function addAnimation() {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    loop: true,
  });
}

let timeout = 3;
let interval;

function pauseEngine() {
  engine.pause();
  $pause.setAttribute('disabled', 'true');
  $pause.innerHTML = `Resume in ${timeout--} seconds`;
  interval = setInterval(() => {
    if (timeout <= 0) {
      clearInterval(interval);
      engine.resume();
      $pause.removeAttribute('disabled');
      $pause.innerHTML = 'Pause for 3 seconds';
      timeout = 3;    
    } else {
      $pause.innerHTML = `Resume in ${timeout--} seconds`;
    }
  }, 1000);
}

$add.addEventListener('click', addAnimation);
$pause.addEventListener('click', pauseEngine);
```

---

## HTML Structure for Anime.js Animation Control

**Description:** This HTML code defines the structure for the animation container and control buttons. It creates a container where the animations are displayed and two buttons: one to add animations and another to pause/resume the engine.  The classes are used for styling and selecting the elements with JavaScript.

```html
<div class="large row container"></div>
<div class="medium row">
  <fieldset class="controls">
    <button>Add animation</button>
    <button>Pause for 3 seconds</button>
  </fieldset>
</div>
```

---