# Anime.js Animation Documentation

**Summary:** This file covers topics related to "Anime.js Animation Documentation". Key snippets include: Importing and Using the animate() Method in Anime.js, Creating Complex Animations with Keyframes and Property-Specific Parameters, Importing and Using the WAAPI Version of Anime.js.

---

## Importing and Using the animate() Method in Anime.js

**Description:** Basic syntax for importing and using the animate() method from Anime.js to create animations. The example shows how to target elements and define animation parameters.

```javascript
import { animate } from 'animejs';

const animation = animate(targets, parameters);
```

---

## Creating Complex Animations with Keyframes and Property-Specific Parameters

**Description:** Example demonstrating how to use the animate() method with keyframes, property-specific parameters, function-based values, easing, looping, and delays. Shows advanced animation configuration options.

```javascript
import { animate } from 'animejs';

animate('span', {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: (_, i) => i * 50, // Function based value
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});
```

---

## Importing and Using the WAAPI Version of Anime.js

**Description:** Shows how to import and use the Web Animation API (WAAPI) powered version of Anime.js, which is more lightweight (3KB) compared to the standard JavaScript version (10KB).

```javascript
import { waapi } from 'animejs';

const animation = waapi.animate(targets, parameters);
```

---