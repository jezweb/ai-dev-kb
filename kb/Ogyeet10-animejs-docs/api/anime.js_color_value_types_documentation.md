# Anime.js Color Value Types Documentation

**Summary:** This file covers topics related to "Anime.js Color Value Types Documentation". Key snippets include: Animating with HSLA Color Values in Anime.js, HTML Structure for Color Animation Examples in Anime.js, Animating with HEXA Color Values in Anime.js, Animating with RGB Color Values in Anime.js, Animating with HEX Color Values in Anime.js....

---

## Animating with HSLA Color Values in Anime.js

**Description:** This example illustrates the use of HSLA color values in Anime.js animations. It targets an element with the class 'hsla' and animates its background color to 'hsla(44, 100%, 59%, .2)'.

```javascript
animate('.hsla', {
  background: 'hsla(44, 100%, 59%, .2)',
});
```

---

## HTML Structure for Color Animation Examples in Anime.js

**Description:** This HTML snippet provides the structure for displaying the color animation examples. It creates a row of circular divs, each with a class corresponding to a different color format used in the animation examples.

```html
<div class="large justified row">
  <div class="circle hex"></div>
  <div class="circle rgb"></div>
  <div class="circle hsl"></div>
  <div class="circle hexa"></div>
  <div class="circle rgba"></div>
  <div class="circle hsla"></div>
</div>
```

---

## Animating with HEXA Color Values in Anime.js

**Description:** This example demonstrates how to use HEXA (HEX with alpha) color values in Anime.js animations. It targets an element with the class 'hexa' and animates its background color to '#FF4B4B33'.

```javascript
animate('.hexa', {
  background: '#FF4B4B33',
});
```

---

## Animating with RGB Color Values in Anime.js

**Description:** This example shows how to use RGB color values in Anime.js animations. It targets an element with the class 'rgb' and animates its background color to 'rgb(255, 168, 40)'.

```javascript
animate('.rgb',  {
  background: 'rgb(255, 168, 40)',
});
```

---

## Animating with HEX Color Values in Anime.js

**Description:** This snippet demonstrates how to use HEX color values in Anime.js animations. It targets an element with the class 'hex' and animates its background color to '#FF4B4B'.

```javascript
import { animate } from 'animejs';

animate('.hex',  {
  background: '#FF4B4B',
});
```

---

## Animating with HSL Color Values in Anime.js

**Description:** This snippet illustrates the use of HSL color values in Anime.js animations. It targets an element with the class 'hsl' and animates its background color to 'hsl(44, 100%, 59%)'.

```javascript
animate('.hsl',  {
  background: 'hsl(44, 100%, 59%)',
});
```

---