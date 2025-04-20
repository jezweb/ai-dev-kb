# Web Animation API Multi-Target Animation Documentation

**Summary:** This file covers topics related to "Web Animation API Multi-Target Animation Documentation". Key snippets include: HTML Structure for Animation, WAAPI Native Implementation for Multiple Elements.

---

## HTML Structure for Animation

**Description:** HTML markup showing the structure of multiple circle elements that are targeted by the animations.

```html
<div class="medium row">
  <div class="circle"></div>
</div>
<div class="medium row">
  <div class="circle"></div>
</div>
<div class="medium row">
  <div class="circle"></div>
</div>
```

---

## WAAPI Native Implementation for Multiple Elements

**Description:** Native Web Animation API implementation showing how to animate multiple elements with staggered delay using forEach loop.

```javascript
document.querySelectorAll('.circle').forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    duration: 1000,
    delay: i * 100,
    easing: 'ease-out',
  }).finished.then(() => {
    $el.style.translate = '100px';
  })
});
```

---