# Defining Scope Defaults for Animations in Anime.js

**Summary:** This file covers topics related to "Defining Scope Defaults for Animations in Anime.js". Key snippets include: Creating Animation Scopes with Anime.js in JavaScript, HTML Structure for Anime.js Animation Scopes.

---

## Creating Animation Scopes with Anime.js in JavaScript

**Description:** This JavaScript snippet demonstrates how to create custom scopes with Anime.js, setting default animation properties like easing. The snippet iterates through row elements and applies a specific animation to child '.square' elements. It requires 'animejs' for animation functions and an element selection utility method 'utils.$'.

```JavaScript
import { createScope, animate } from 'animejs';

const rows = utils.$('.row');

rows.forEach(($row, i) => {
  createScope({
    root: $row,
    defaults: { ease: `out(${1 + i})` }
  })
  .add(() => {
    animate('.square', {
      x: '17rem',
      loop: true,
      alternate: true
    });
  });
});
```

---

## HTML Structure for Anime.js Animation Scopes

**Description:** This HTML snippet provides the structure needed for applying the Anime.js animation. Each '.row' element contains a '.square' div that is the target for animations, demonstrating how multiple identical structures can use shared scope defaults for consistent animations.

```HTML
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">scope 1</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">scope 2</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">scope 3</div>
</div>
```

---