# Animation Methods - revert() in AnimeJS

**Summary:** This file covers topics related to "Animation Methods - revert() in AnimeJS". Key snippets include: Using revert() Method to Cancel and Revert AnimeJS Animations in JavaScript, HTML Structure for AnimeJS revert() Demo with Interactive Buttons.

---

## Using revert() Method to Cancel and Revert AnimeJS Animations in JavaScript

**Description:** This snippet demonstrates how to create a staggered animation with AnimeJS and implement revert() and restart() functionality through button clicks. It imports required functions from AnimeJS, sets up a staggered animation on multiple square elements, and attaches event listeners to buttons that control the animation state.

```javascript
import { animate, utils, stagger } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $restartButton ] = utils.$('.restart');

// Set an initial translateX value
utils.set('.square', { x: '17rem' });

const animation = animate('.square', {
  x: 0,
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const revertAnimation = () => animation.revert();
const restartAnimation = () => animation.restart();

$revertButton.addEventListener('click', revertAnimation);
$restartButton.addEventListener('click', restartAnimation);
```

---

## HTML Structure for AnimeJS revert() Demo with Interactive Buttons

**Description:** The HTML structure that accompanies the JavaScript example, containing square elements that will be animated and control buttons for triggering the revert() and restart() methods. It includes three rows with animated squares and buttons for user interaction.

```html
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button revert">Revert</button>
    <button class="button restart">Restart</button>
  </fieldset>
</div>
```

---