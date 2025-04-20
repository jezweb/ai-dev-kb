# Tween Parameters Documentation for AnimeJS

**Summary:** This file covers topics related to "Tween Parameters Documentation for AnimeJS". Key snippets include: Configuring Animation Duration in AnimeJS, Setting Global Default Duration in AnimeJS, HTML Structure for Animation Target.

---

## Configuring Animation Duration in AnimeJS

**Description:** Demonstrates setting both global and property-specific duration values in an animation configuration. Shows how to animate position and rotation with different durations.

```javascript
import { animate } from 'animejs';

const animation = animate('.square', {
  x: '17rem',
  rotate: {
    to: 360,
    duration: 1500, // Local duration only applied to rotate property
  },
  duration: 3000,  // Global duration applied to all properties
  loop: true,
  alternate: true
});
```

---

## Setting Global Default Duration in AnimeJS

**Description:** Shows how to modify the default animation duration globally using the engine.defaults object.

```javascript
import { engine } from 'animejs';
engine.defaults.duration = 500;
```

---

## HTML Structure for Animation Target

**Description:** Shows the HTML markup structure required for the animation example, containing a square element within a medium row container.

```html
<div class="medium row">
  <div class="square"></div>
</div>
```

---