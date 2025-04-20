# Anime.js Vanilla JavaScript Integration

**Summary:** This file covers topics related to "Anime.js Vanilla JavaScript Integration". Key snippets include: Creating a Bounce Animation Loop, Importing Anime.js Modules, Animating Logo Rotation on Click, HTML Structure for Logo and Button, Creating Draggable Elements.

---

## Creating a Bounce Animation Loop

**Description:** This snippet demonstrates creating a looping bounce animation using Anime.js's `animate` function.  It targets elements with the class `.logo.js` and animates their `scale` property with custom easing functions and durations. The animation loops indefinitely with a specified delay.

```javascript
// Created a bounce animation loop
animate('.logo.js', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: createSpring({ stiffness: 300 }) }
  ],
  loop: true,
  loopDelay: 250,
});
```

---

## Importing Anime.js Modules

**Description:** This code snippet demonstrates how to import specific modules from the Anime.js library. These modules include `animate` for creating animations, `utils` for utility functions like selecting DOM elements, and `createSpring` for creating spring-based easing functions.

```javascript
import { animate, utils, createSpring } from 'animejs';
```

---

## Animating Logo Rotation on Click

**Description:** This snippet defines a function `rotateLogo` that increments a rotation counter and animates the rotation of the logo element when a button is clicked.  It updates the button's text to display the current rotation count. The animation uses Anime.js to rotate the logo with a specified easing and duration.

```javascript
// Animate logo rotation on click
const rotateLogo = () => {
  rotations++;
  $button.innerText = `rotations: ${rotations}`;
  animate($logo, {
    rotate: rotations * 360,
    ease: 'out(4)',
    duration: 1500,
  });
}
```

---

## HTML Structure for Logo and Button

**Description:** This HTML snippet provides the structure for the logo (an SVG element) and the button that triggers the rotation animation.  The logo uses the class `logo js` for targeting in the JavaScript code, and the button is used to display the rotation count and trigger the animation.

```html
<div class="large centered row">
  <svg class="logo js" preserveAspectRatio="xMidYMid meet" viewBox="0 0 630 630"><path fill="currentColor" d="M577,0 C606.271092,0 630,23.7289083 630,53 L630,577 C630,606.271092 606.271092,630 577,630 L53,630 C23.7289083,630 0,606.271092 0,577 L0,53 C0,23.7289083 23.7289083,0 53,0 L577,0 Z M479.5,285.89 C426.63,285.89 392.8,319.69 392.8,364.09 C392.8,411.808 420.615238,434.63146 462.622716,452.742599 L478.7,459.64 L483.441157,461.719734 C507.57404,472.359996 521.8,479.858 521.8,498.94 C521.8,515.88 506.13,528.14 481.6,528.14 C452.4,528.14 435.89,512.91 423.2,492.19 L375.09,520.14 C392.47,554.48 427.99,580.68 482.97,580.68 C539.2,580.68 581.07,551.48 581.07,498.18 C581.07,448.74 552.67,426.75 502.37,405.18 L487.57,398.84 L485.322788,397.859899 C461.5199,387.399087 451.17,380.1172 451.17,362.89 C451.17,348.52 462.16,337.52 479.5,337.52 C496.5,337.52 507.45,344.69 517.6,362.89 L563.7,333.29 C544.2,298.99 517.14,285.89 479.5,285.89 Z M343.09,289.27 L283.89,289.27 L283.89,490.57 C283.89,520.16 271.62,527.77 252.17,527.77 C231.83,527.77 223.37,513.82 214.07,497.32 L165.88,526.495 C179.84,556.04 207.29,580.57 254.69,580.57 C307.15,580.57 343.09,552.67 343.09,491.37 L343.09,289.27 Z"/></svg>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button>rotations: 0</button>
  </fieldset>
</div>
```

---

## Creating Draggable Elements

**Description:** This snippet creates a draggable element using the `createDraggable` function. It targets elements with the class `.logo.js` and configures the draggable behavior. It also uses `createSpring` for the `releaseEase` property, providing a spring-like effect when the element is released.

```javascript
// Make the logo draggable around its center
createDraggable('.logo.js', {
  container: [0, 0, 0, 0],
  releaseEase: createSpring({ stiffness: 200 })
});
```

---