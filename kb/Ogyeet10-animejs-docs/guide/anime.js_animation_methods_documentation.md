# Anime.js Animation Methods Documentation

**Summary:** This file covers topics related to "Anime.js Animation Methods Documentation". Key snippets include: Implementing Reverse Animation with Anime.js, Accessing Animation Methods in Anime.js, Creating an Animation Instance in Anime.js, HTML Structure for Reverse Animation Demo.

---

## Implementing Reverse Animation with Anime.js

**Description:** Creates an animation that moves squares horizontally with a staggered delay, and implements a reverse function triggered by a button click. The animation uses the inOutSine easing function and can be reversed through a click event listener.

```javascript
import { animate, utils, stagger } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(100),
});

const reverseAnimation = () => animation.reverse();

$reverseButton.addEventListener('click', reverseAnimation);
```

---

## Accessing Animation Methods in Anime.js

**Description:** Demonstrates several animation control methods that can be called on an animation instance, including pause(), play(), and restart().

```javascript
animation.pause()
animation.play()
animation.restart()
```

---

## Creating an Animation Instance in Anime.js

**Description:** Shows how to create an animation instance object using the animate function, which allows calling animation methods on the returned object.

```javascript
const animation = animate(target, parameters);
```

---

## HTML Structure for Reverse Animation Demo

**Description:** Defines the HTML structure for demonstrating the reverse animation, including two square elements and a control button. The layout uses rows for organization and includes a fieldset for controls.

```html
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button reverse">Reverse</button>
  </fieldset>
</div>
```

---