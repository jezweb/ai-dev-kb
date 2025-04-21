# Using Scope in Anime.js for DOM Queries

**Summary:** This file covers topics related to "Using Scope in Anime.js for DOM Queries". Key snippets include: Creating a Scoped Animation in Anime.js using JavaScript, HTML Setup for Scoped Animation with Anime.js.

---

## Creating a Scoped Animation in Anime.js using JavaScript

**Description:** This snippet demonstrates how to use the `createScope` function from Anime.js to limit queries to a particular DOM subtree, defined by a CSS selector or a DOM element. Dependencies include the Anime.js library, and key functionality involves initializing animations within a defined scope.

```javascript
import { createScope, animate } from 'animejs';

createScope({ root: '.row:nth-child(2)' })
.add(() => {
  animate('.square', {
    x: '17rem',
    loop: true,
    alternate: true
  });
});
```

---

## HTML Setup for Scoped Animation with Anime.js

**Description:** This HTML structure sets up three '.medium.row' divs, each containing a '.square' div. The second '.row' is targeted for scoped animation with Anime.js, allowing the animation to be contained within a specific section of the DOM.

```html
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">outside scope</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">inside scope</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">outside scope</div>
</div>
```

---