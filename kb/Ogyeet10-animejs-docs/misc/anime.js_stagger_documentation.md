# Anime.js Stagger Documentation

**Summary:** This file covers topics related to "Anime.js Stagger Documentation". Key snippets include: Anime.js Stagger Example, Configuring Anime.js Stagger Parameters.

---

## Anime.js Stagger Example

**Description:** This example demonstrates how to use the `stagger` function in Anime.js to create staggered animations. It shows different options for staggering, including `start`, `from`, `reversed`, `ease`, and `grid` parameters.

```javascript
stagger(
  /*───────────────────*/
  '1rem',
  /*───────────────────*/
  {
    start: 100,
    from: 2,
    reversed: false,
    ease: 'outQuad',
    grid: [8, 8],
  }
);
```

---

## Configuring Anime.js Stagger Parameters

**Description:** Demonstrates the stagger method with multiple configuration options including start, from, reversed, ease, and grid parameters. Used to create sequential or grid-based animation effects.

```javascript
stagger(
  '1rem',
  {
    start: 100,
    from: 2,
    reversed: false,
    ease: 'outQuad',
    grid: [8, 8],
  }
);
```

---