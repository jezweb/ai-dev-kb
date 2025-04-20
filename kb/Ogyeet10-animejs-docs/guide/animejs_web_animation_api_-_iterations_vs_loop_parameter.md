# AnimeJS Web Animation API - Iterations vs Loop Parameter

**Summary:** This file covers topics related to "AnimeJS Web Animation API - Iterations vs Loop Parameter". Key snippets include: Comparing AnimeJS WAAPI adapter with native Web Animation API.

---

## Comparing AnimeJS WAAPI adapter with native Web Animation API

**Description:** This code snippet compares the syntax of AnimeJS's WAAPI adapter with the equivalent native Web Animation API implementation. While AnimeJS uses 'loop: 3', the native WAAPI uses 'iterations: 4' to achieve the same effect.

```javascript
// Anime.js
waapi.animate('.square', {
  x: 100,
  loop: 3
});

// WAAPI equivalent
const targets = document.querySelectorAll('.square');

targets.forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 1000,
    iterations: 4
  })
});
```

---