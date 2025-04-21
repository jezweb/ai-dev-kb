# Anime.js Scopes: Managing Animations in Responsive Environments

**Summary:** This file covers topics related to "Anime.js Scopes: Managing Animations in Responsive Environments". Key snippets include: Creating an Anime.js Scope with Media Queries (JavaScript).

---

## Creating an Anime.js Scope with Media Queries (JavaScript)

**Description:** This code snippet demonstrates creating an Anime.js scope using the `createScope` function and defining media queries within it.  The scope is configured with `mediaQueries` for 'isSmall' and 'reduceMotion', which are then used to conditionally modify the animation based on the current viewport size and user preferences.

```JavaScript
import { animate, utils, createScope } from 'animejs';

createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
})
.add(self => {

  const { isSmall, reduceMotion } = self.matches;
  
  if (isSmall) {
    utils.set('.square', { scale: .5 });
  }
    
  animate('.square', {
    x: isSmall ? 0 : ['-35vw', '35vw'],
    y: isSmall ? ['-40vh', '40vh'] : 0,
    loop: true,
    alternate: true,
    duration: reduceMotion ? 0 : isSmall ? 750 : 1250
  });

});
```

---