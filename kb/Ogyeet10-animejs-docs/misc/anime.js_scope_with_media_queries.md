# Anime.js Scope with Media Queries

**Summary:** This file covers topics related to "Anime.js Scope with Media Queries". Key snippets include: Defining Anime.js Scope with Media Queries.

---

## Defining Anime.js Scope with Media Queries

**Description:** This JavaScript code snippet demonstrates how to define an anime.js scope with media queries. It imports `createScope` and `animate` from the animejs library and creates a scope with `mediaQueries` object, which maps arbitrary names (isSmall, isMedium, isLarge, reduceMotion) to media query definition strings. It then adds an animation to the scope that adjusts animation properties based on the matched media queries.

```JavaScript
import { createScope, animate } from 'animejs';

createScope({
  mediaQueries: {
    isSmall: '(max-width: 100px)',
    isMedium: '(min-width: 101px) and (max-width: 200px)',
    isLarge: '(min-width: 201px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
})
.add(self => {

  const { isSmall, isMedium, isLarge, reduceMotion } = self.matches;
    
  utils.set('.square', { scale: isMedium ? .75 : isLarge ? 1 : .5 });
    
  animate('.square', {
    x: isSmall ? 0 : ['-35vw', '35vw'],
    y: isSmall ? ['-40vh', '40vh'] : 0,
    rotate: 360,
    loop: true,
    alternate: true,
    duration: reduceMotion ? 0 : isSmall ? 750 : 1250
  });

});
```

---