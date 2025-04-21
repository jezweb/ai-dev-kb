# Animating SVG Attributes with Anime.js

**Summary:** This file covers topics related to "Animating SVG Attributes with Anime.js". Key snippets include: Animating SVG Polygon Points with Anime.js, Animating SVG Filter Effects with Anime.js, SVG Markup with Displacement Filter.

---

## Animating SVG Polygon Points with Anime.js

**Description:** Example of animating an SVG polygon shape by modifying its points attribute in a looping animation. The animation transitions between different polygon shapes and alternates back and forth.

```javascript
animate('polygon', {
  points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
  alternate: true,
  loop: true
});
```

---

## Animating SVG Filter Effects with Anime.js

**Description:** Example of animating SVG filter elements (feTurbulence and feDisplacementMap) by changing their baseFrequency and scale properties in a looping animation. This creates a dynamic displacement effect that alternates.

```javascript
import { animate } from 'animejs';

animate(['feTurbulence', 'feDisplacementMap'], {
  baseFrequency: .05,
  scale: 15,
  alternate: true,
  loop: true
});
```

---

## SVG Markup with Displacement Filter

**Description:** HTML markup for an SVG element that includes a displacement filter and a polygon shape. This SVG demonstrates the visual output of the animation examples, showing a hexagon that can be animated.

```html
<div class="large centered row">
<svg width="128" height="128" viewBox="0 0 128 128">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" numOctaves="2" baseFrequency="0" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"  fill="currentColor"/>
</svg>
</div>
```

---