# API Differences between Anime.js and Web Animation API

**Summary:** This file covers topics related to "API Differences between Anime.js and Web Animation API". Key snippets include: Using Anime.js with Async/Await, Complete Anime.js Example with Promise Handling, Native WAAPI Animation with Promise.all, Using then() Method with Anime.js WAAPI, Equivalent animation using Web Animation API.

---

## Using Anime.js with Async/Await

**Description:** Shows how to use Anime.js animations with async/await pattern. The function returns the animation which can be awaited to continue execution after completion.

```javascript
async function waitForAnimationToComplete() {
  return animate(target, {
    translate: '100px',
    duration: 500,
  });
}

const asyncAnimation = await waitForAnimationToComplete();
```

---

## Complete Anime.js Example with Promise Handling

**Description:** A full example showing how to import Anime.js modules, create an animation with multiple options, and use the then() method to update UI text when the animation is fulfilled.

```javascript
import { waapi, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = waapi.animate('.circle', {
  translate: '16rem',
  loop: 2,
  alternate: true,
});

animation.then(() => $value.textContent = 'fulfilled');
```

---

## Native WAAPI Animation with Promise.all

**Description:** Demonstrates the equivalent approach using native Web Animation API. This example creates multiple animations and uses Promise.all with the finished property to track completion of all animations.

```javascript
const targets = document.querySelectorAll('.square');
const animations = [];

targets.forEach(($el, i) => {
  animations[i] = $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 500,
  });
});

Promise.all(
  animations
    .map((animation) => animation.finished)
    .then(() => console.log('completed'))
);
```

---

## Using then() Method with Anime.js WAAPI

**Description:** Demonstrates the inline usage of the then() method in Anime.js to execute a callback after animation completion. This replaces the finished property available in native WAAPI.

```javascript
waapi.animate(target, {
  translate: '100px',
  duration: 500,
}).then(callback);
```

---

## Equivalent animation using Web Animation API

**Description:** This code snippet shows how to achieve the same animation effect as the Anime.js example using the native Web Animation API. It selects all elements with the 'square' class and animates them to translate 100 pixels, with alternate-reverse direction for 4 iterations.

```javascript
const targets = document.querySelectorAll('.square');

targets.forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 1000,
    direction: 'alternate-reverse',
    iterations: 4
  })
});
```

---