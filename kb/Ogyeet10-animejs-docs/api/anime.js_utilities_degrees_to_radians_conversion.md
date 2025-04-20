# Anime.js Utilities: Degrees to Radians Conversion

**Summary:** This file covers topics related to "Anime.js Utilities: Degrees to Radians Conversion". Key snippets include: Animating Rotation in Degrees and Radians with Anime.js.

---

## Animating Rotation in Degrees and Radians with Anime.js

**Description:** Illustrates how to use the degToRad utility in an animation context. It creates two animatables, one for degrees and one for radians, and synchronizes their rotation using the degToRad conversion.

```javascript
import { animate, createAnimatable, utils } from 'animejs';

const radAnimatable = createAnimatable('.rad', {
  rotate: { unit: 'rad', duration: 0 },
});

const [ $deg ] = utils.$('.deg');

const degAnimation = animate($deg, {
  rotate: '360deg',
  ease: 'linear',
  loop: true,
  onUpdate: () => {
    const degrees = utils.get($deg, 'rotate', false);
    radAnimatable.rotate(utils.degToRad(degrees));
  }
});
```

---