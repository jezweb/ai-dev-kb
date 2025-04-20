# Anime.js Animation Composition Modes

**Summary:** This file covers topics related to "Anime.js Animation Composition Modes". Key snippets include: HTML Structure for Composition Mode Demonstration in Anime.js, Setting Global Default Composition Mode in Anime.js, Implementing Different Composition Modes with Interactive Animation Example in Anime.js.

---

## HTML Structure for Composition Mode Demonstration in Anime.js

**Description:** This HTML structure creates a layout for demonstrating three different composition modes in Anime.js. It contains three squares with class names corresponding to their composition modes ('none', 'replace', and 'blend') and instructions for user interaction.

```html
<div class="large spaced-evenly row">
  <div class="col">
    <div class="centered row">
      <span class="label centered">none<br><br></span>
      <div class="square none"></div>
    </div>
  </div>
  <div class="col">
    <div class="centered row">
      <span class="label centered">replace<br><br></span>
      <div class="square replace"></div>
    </div>
  </div>
  <div class="col">
    <div class="centered row">
      <span class="label centered">blend<br><br></span>
      <div class="square blend"></div>
    </div>
  </div>
</div>

<div class="medium spaced-evenly centered row">
  <div class="label"><br><br>(Hover the squares)</div>
</div>
```

---

## Setting Global Default Composition Mode in Anime.js

**Description:** This snippet demonstrates how to change the default composition mode globally for all animations by updating the engine.defaults object in Anime.js.

```javascript
import { engine } from 'animejs';
engine.defaults.composition = 'blend';
```

---

## Implementing Different Composition Modes with Interactive Animation Example in Anime.js

**Description:** This code demonstrates how to use different composition modes ('none', 'replace', and 'blend') in Anime.js animations. It sets up a base animation for three squares and adds interactive hover animations with different composition behaviors for each square.

```javascript
import { animate, utils } from 'animejs';

const squares = utils.$('.square');
const [ $none, $replace, $blend ] = squares;

// Animate each square with a different composition mode

squares.forEach($square => {
  // 'none', 'replace', 'blend'
  const mode = $square.classList[1];
  animate($square, {
    scale: [.5, 1],
    alternate: true,
    loop: true,
    duration: 750,
    composition: mode,
  });
});

// Common animation parameters

const enter = { scale: 1.5, duration: 350 };
const leave = { scale: 1.0, duration: 250 };

// Composition none animations

const enterNone = () => animate($none, {
  composition: 'none', ...enter
});

const leaveNone = () => animate($none, {
  composition: 'none', ...leave
});

$none.addEventListener('mouseenter', enterNone);
$none.addEventListener('mouseleave', leaveNone);

// Composition replace animations

const enterReplace = () => animate($replace, {
  composition: 'replace', ...enter
});

const leaveReplace = () => animate($replace, {
  composition: 'replace', ...leave
});

$replace.addEventListener('mouseenter', enterReplace);
$replace.addEventListener('mouseleave', leaveReplace);

// Composition blend animations

const enterBlend = () => animate($blend, {
  composition: 'blend', ...enter
});

const leaveBlend = () => animate($blend, {
  composition: 'blend', ...leave
});

$blend.addEventListener('mouseenter', enterBlend);
$blend.addEventListener('mouseleave', leaveBlend);
```

---