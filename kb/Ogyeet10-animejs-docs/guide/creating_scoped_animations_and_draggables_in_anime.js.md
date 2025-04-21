# Creating Scoped Animations and Draggables in Anime.js

**Summary:** This file covers topics related to "Creating Scoped Animations and Draggables in Anime.js". Key snippets include: Creating Scoped Animations and Draggables in Anime.js.

---

## Creating Scoped Animations and Draggables in Anime.js

**Description:** This snippet initializes a new scope with media queries and default settings. It registers a constructor function that animates an element based on the media query match, using Anime.js to either animate the square or create a draggable element. It also returns a cleanup function to remove any added class when the scope reverts.

```javascript
import { utils, animate, createScope, createDraggable } from 'animejs';

createScope({
  mediaQueries: { isSmall: '(max-width: 200px)' },
  defaults: { ease: 'linear' },
})
.add(self => {

  /* Media queries state are accessible on the matches property */
  const { isSmall } = self.matches;
  /* The $() utility method is also scoped */
  const [ $square ] = utils.$('.square');

  if (self.matches.isSmall) {
    /* Only animate the square when the iframe is small */
    animate($square, {
      rotate: 360,
      loop: true,
    });
  } else {
    /* Only create the draggable when the iframe is large enough */
    $square.classList.add('draggable');
    createDraggable($square, {
      container: document.body,
    });
  }
  
  return () => {
    /* Removes the class 'draggable' when the scope reverts itself */
    $square.classList.remove('draggable');
  }

});
```

---