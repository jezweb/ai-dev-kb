# AnimeJS Utilities Documentation - cleanInlineStyles

**Summary:** This file covers topics related to "AnimeJS Utilities Documentation - cleanInlineStyles". Key snippets include: HTML Structure for Animation Demo, Implementing cleanInlineStyles with Animations.

---

## HTML Structure for Animation Demo

**Description:** HTML markup demonstrating the structure needed for the animation examples, including elements with different style retention behaviors.

```html
<div class="medium row">
  <div class="square keep-styles"></div>
  <div class="padded label">Keep styles (default)</div>
</div>
<div class="medium row">
  <div class="square clean-styles"></div>
  <div class="padded label">Clean translateX and borderRadius</div>
</div>
```

---

## Implementing cleanInlineStyles with Animations

**Description:** Comprehensive example showing how to use cleanInlineStyles with animations, including setting initial styles and cleaning specific properties while keeping others.

```javascript
import { animate, utils } from 'animejs';

utils.set('.square', { scale: .75 });

animate('.keep-styles', {
  x: '23rem',
  borderRadius: '50%',
});

animate('.clean-styles', {
  x: '23rem',
  borderRadius: '50%',
  // This removes the translateX and borderRadius inline styles
  // But keeps the scale previously added outside of this animation
  onComplete: utils.cleanInlineStyles
});
```

---