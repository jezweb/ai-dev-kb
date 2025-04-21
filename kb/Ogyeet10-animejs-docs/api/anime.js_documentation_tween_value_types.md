# Anime.js Documentation: Tween Value Types

**Summary:** This file covers topics related to "Anime.js Documentation: Tween Value Types". Key snippets include: Unit Inheritance in Anime.js Animations, HTML Structure for Animation Target.

---

## Unit Inheritance in Anime.js Animations

**Description:** Shows how Anime.js inherits units from previous animations on the same property when no unit is specified in subsequent animations.

```javascript
animate(target, { width: '50%' }); // Uses '%'
animate(target, { width: 75 });    // Inherits '%' -> '75%'
```

---

## HTML Structure for Animation Target

**Description:** Provides the HTML structure for the animation target, including a container div and a square element to be animated.

```html
<div class="large row">
  <div class="square"></div>
</div>
```

---