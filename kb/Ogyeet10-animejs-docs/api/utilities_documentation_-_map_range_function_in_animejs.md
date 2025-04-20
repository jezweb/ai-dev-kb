# Utilities Documentation - Map Range Function in AnimeJS

**Summary:** This file covers topics related to "Utilities Documentation - Map Range Function in AnimeJS". Key snippets include: Basic MapRange Usage in JavaScript, AnimeJS Animation with MapRange Modifier.

---

## Basic MapRange Usage in JavaScript

**Description:** Demonstrates the basic usage of mapRange utility function to map a value from one range to another.

```javascript
const mappedValue = utils.mapRange(value, fromLow, fromHigh, toLow, toHigh);
const mapperFunction = utils.mapRange(fromLow, fromHigh, toLow, toHigh);
```

---

## AnimeJS Animation with MapRange Modifier

**Description:** Demonstrates using mapRange as a modifier in AnimeJS animations, comparing normal and mapped rotation animations.

```javascript
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '12turn',
  duration: 12000,
  loop: true,
  ease: 'inOut',
});

animate('.mapped', {
  rotate: '12turn',
  modifier: utils.mapRange(0, 12, 0, 1), // Used as a modifier
  duration: 12000,
  loop: true,
  ease: 'inOut',
});
```

---