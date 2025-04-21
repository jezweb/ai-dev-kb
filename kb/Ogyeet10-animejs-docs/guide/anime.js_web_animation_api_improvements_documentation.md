# Anime.js Web Animation API Improvements Documentation

**Summary:** This file covers topics related to "Anime.js Web Animation API Improvements Documentation". Key snippets include: Using WAAPI with Scope for Media Queries in Anime.js.

---

## Using WAAPI with Scope for Media Queries in Anime.js

**Description:** Example of creating a scope for WAAPI animations with media queries handling. This demonstrates how to create responsive animations that respect user preferences like reduced motion.

```javascript
createScope({
  mediaQueries: { reduceMotion: '(prefers-reduced-motion)' }
})
.add(({ matches }) => {
  const { reduceMotion } = matches;
  waapi.animate('.square', {
    transform: reduceMotion ? ['100px', '100px'] : '100px',
    opacity: [0, 1],
  });
});
```

---