# Using Stagger Function in Anime.js Timeline Position Arguments

**Summary:** This file covers topics related to "Using Stagger Function in Anime.js Timeline Position Arguments". Key snippets include: Implementing Staggered Timeline Animations with Anime.js, HTML Structure for Anime.js Staggered Animation.

---

## Implementing Staggered Timeline Animations with Anime.js

**Description:** This example demonstrates how to use the stagger function in Anime.js to position animations with consistent delays between targets. It creates a timeline with staggered animations that include callbacks which are also staggered for each target.

```javascript
import { createTimeline, stagger, utils } from 'animejs';

const tl = createTimeline();

const onComplete = ({ targets }) => {
  utils.set(targets, { color: 'var(--hex-red)' });
}

tl
.add('.circle', { x: '15rem', onComplete })
.label('circle completes')
.add(['.triangle', '.square'], {
  x: '15rem',
  onComplete, // Callbacks are aslo staggered
}, stagger(500, { start: 'circle completes-=500' }));
```

---

## HTML Structure for Anime.js Staggered Animation

**Description:** The HTML structure used for the staggered animation example, containing a pyramid of shapes (triangle, square, and circle) that will be animated with different timing delays.

```html
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
```

---