# Anime.js radToDeg Utility Documentation

**Summary:** This file covers topics related to "Anime.js radToDeg Utility Documentation". Key snippets include: Practical Animation Example Using radToDeg in Anime.js, Chain-able radToDeg Examples in Anime.js.

---

## Practical Animation Example Using radToDeg in Anime.js

**Description:** Demonstrates a practical application of the radToDeg utility in an animation context. Creates two clock elements, one rotating in radians and the other in degrees, showing their synchronized rotation.

```javascript
import { animate, createAnimatable, utils } from 'animejs';

const degAnimatable = createAnimatable('.deg', {
  rotate: { unit: 'deg', duration: 0 }
});

const [ $rad ] = utils.$('.rad');

const degAnimation = animate($rad, {
  rotate: (Math.PI * 2) + 'rad',
  ease: 'linear',
  loop: true,
  onUpdate: () => {
    const radians = utils.get($rad, 'rotate', false);
    degAnimatable.rotate(utils.radToDeg(radians));
  }
});
```

---

## Chain-able radToDeg Examples in Anime.js

**Description:** Demonstrates how to create a chain-able radToDeg function that can be reused or combined with other utility functions. Shows examples of direct conversion and combining with the round utility.

```javascript
const radToDeg = utils.radToDeg();
radToDeg(1.7453292519943295); // 100
radToDeg(Math.PI);            // 180

const roundRadToDeg = utils.radToDeg().round(2); // Convert radians to degrees then round to 2 decimal places
roundRadToDeg(Math.PI / 7);  // 25.71
```

---