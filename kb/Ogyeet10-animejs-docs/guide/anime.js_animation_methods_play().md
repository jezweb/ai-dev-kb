# Anime.js Animation Methods: play()

**Summary:** This file covers topics related to "Anime.js Animation Methods: play()". Key snippets include: Using play() Method with Event Listener in Anime.js, HTML Structure for Anime.js play() Method Demo.

---

## Using play() Method with Event Listener in Anime.js

**Description:** This JavaScript snippet demonstrates how to create a paused animation with Anime.js and then use the play() method to start it when a button is clicked. It creates an animation that moves squares horizontally with a staggered delay.

```javascript
import { animate, utils, stagger } from 'animejs';

const [ $playButton ] = utils.$('.play');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(100),
  autoplay: false, // The animation is paused by default
});

const playAnimation = () => animation.play();

$playButton.addEventListener('click', playAnimation);
```

---

## HTML Structure for Anime.js play() Method Demo

**Description:** This HTML snippet defines the structure for demonstrating the play() method. It includes multiple rows with square elements that will be animated, and a control section with a play button that triggers the animation.

```html
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button play">Play</button>
  </fieldset>
</div>
```

---