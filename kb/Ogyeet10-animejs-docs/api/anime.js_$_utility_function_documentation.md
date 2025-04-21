# Anime.js $ Utility Function Documentation

**Summary:** This file covers topics related to "Anime.js $ Utility Function Documentation". Key snippets include: Using $ Utility Function in Anime.js, Implementing $ Utility with Global and Scoped Selections in Anime.js.

---

## Using $ Utility Function in Anime.js

**Description:** Shows how to use the $ utility function to select elements and manipulate them. It demonstrates both global selection and scoped selection with createScope.

```javascript
const targetsArray = utils.$(targets);
```

---

## Implementing $ Utility with Global and Scoped Selections in Anime.js

**Description:** Example showing how to use the $ utility to select elements globally and within a specific scope. It demonstrates setting scale on all squares and rotating only squares within a specific row.

```javascript
import { utils, createScope } from 'animejs';

// Targets all the '.square' elements
utils.$('.square').forEach($square => {
  utils.set($square, { scale: .5 });
});

createScope({ root: '.row:nth-child(2)' }).add(() => {
  // Limits the selection to '.row:nth-child(2) .square'
  utils.$('.square').forEach($square => {
    utils.set($square, { rotate: 45 });
  });
});
```

---