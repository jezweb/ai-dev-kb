# Anime.js Scope Configuration

**Summary:** This file covers topics related to "Anime.js Scope Configuration". Key snippets include: Initializing Anime.js Scope.

---

## Initializing Anime.js Scope

**Description:** This code snippet initializes an Anime.js scope using the `createScope` function. It configures the scope with a root element selector, default animation properties (duration and easing), and media queries. The media queries are defined for mobile devices and reduced motion preference.

```javascript
import { createScope, animate } from 'animejs';

createScope({
  root: '.section',
  defaults: {
    duration: 250,
    ease: 'out(4)',
  },
  mediaQueries: {
    mobile: '(max-width: 640px)',
    reducedMotion: '(prefers-reduced-motion)',
  }
})
.add( ctx => {
  const isMobile = ctx.matches.mobile;
  const reduceMotion = ctx.matches.reducedMotion;
  animate(targets, {
    x: isMobile ? 0 : '100vw',
    y: isMobile ? '100vh' : 0,
    duration: reduceMotion ? 0 : 750
  });
});
```

---