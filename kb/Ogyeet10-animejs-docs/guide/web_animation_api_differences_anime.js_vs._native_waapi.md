# Web Animation API Differences: Anime.js vs. Native WAAPI

**Summary:** This file covers topics related to "Web Animation API Differences: Anime.js vs. Native WAAPI". Key snippets include: Animating Elements with Native Web Animation API.

---

## Animating Elements with Native Web Animation API

**Description:** Illustrates how to use the native Web Animation API's element.animate() method to achieve similar animation effects. It shows differences in syntax for element selection, keyframe definition, and animation option settings.

```javascript
const $square = document.querySelector('.square');

$square
.animate({
translate: '100px 50px',
opacity: .5,
}, {
ieterations: 4,
direction: 'alternate',
easing: 'ease-out',
});
```

---