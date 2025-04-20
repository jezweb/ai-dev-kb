# Hardware Accelerated Animations in Anime.js

**Summary:** This file covers topics related to "Hardware Accelerated Animations in Anime.js". Key snippets include: Comparing WAAPI and JavaScript Animations with Anime.js.

---

## Comparing WAAPI and JavaScript Animations with Anime.js

**Description:** This code demonstrates how to create animations using both the Web Animation API and standard JavaScript approaches in Anime.js. It includes a CPU-blocking timer to showcase how WAAPI animations remain smooth even when the main thread is busy.

```javascript
import { animate, waapi, createTimer, utils } from 'animejs';

const [ $block ] = utils.$('.button');

const waapiAnim = waapi.animate('.waapi.square', {
  translate: 270,
  rotate: 180,
  alternate: true,
  loop: true,
  ease: 'cubicBezier(0, 0, .58, 1)',
});

const jsAnim = animate('.js.square', {
  x: 270,
  rotate: 180,
  ease: 'cubicBezier(0, 0, .58, 1)',
  alternate: true,
  loop: true,
});

const blockCPUTimer = createTimer({
  onUpdate: () => {
    const end = Date.now() + 100;
    while(Date.now() < end) {
      Math.random() * Math.random();
    }
  },
  autoplay: false
});

let isBusy = false;

const toggleCPU = () => {
  blockCPUTimer[isBusy ? 'pause' : 'play']();
  $block.innerText = (isBusy ? 'block' : 'free') + ' CPU';
  isBusy = !isBusy;
}

$block.addEventListener('click', toggleCPU);
```

---