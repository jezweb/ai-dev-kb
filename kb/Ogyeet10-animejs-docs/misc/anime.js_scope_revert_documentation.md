# Anime.js Scope Revert Documentation

**Summary:** This file covers topics related to "Anime.js Scope Revert Documentation". Key snippets include: Creating and Adding Scopes, Creating an Anime.js Scope Constructor, Adding Event Listeners to Buttons, Importing Anime.js utilities and functions, Defining Event Listener Functions for Animation.

---

## Creating and Adding Scopes

**Description:** This code creates two Anime.js scopes, `scope1` and `scope2`, associated with the '.row-1' and '.row-2' elements respectively. The `scopeConstructor` function is added to each scope, applying the defined animations and event listeners to the elements within each row.

```javascript
const scope1 = createScope({ root: '.row-1' }).add(scopeConstructor);
const scope2 = createScope({ root: '.row-2' }).add(scopeConstructor);
```

---

## Creating an Anime.js Scope Constructor

**Description:** The `scopeConstructor` function defines the animation logic and event listeners for elements within a scope. It selects elements with the class 'circle', adds animations to them, and attaches mouseenter and mouseleave event listeners.  The return value is a cleanup function that removes the event listeners, which is essential for the `revert` method to work correctly.

```javascript
const scopeConstructor = scope => {
  const circles = utils.$('.circle');
    
  circles.forEach(($circle, i) => {
    animate($circle, {
      opacity: .25,
      loop: true,
      alternate: true,
      duration: 500,
      delay: i * 100,
      ease: 'inOut(3)',
    });
    $circle.addEventListener('mouseenter', onMouseEnter);
    $circle.addEventListener('mouseleave', onMouseLeave);
  });
  
  // Cleanup function to take care of removing event listeners on revert
  return () => {
    circles.forEach($circle => {
      // Anime.js instances are automatically reverted by the Scope
      $circle.removeEventListener('mouseenter', onMouseEnter);
      $circle.removeEventListener('mouseleave', onMouseLeave);
    });
  }
}
```

---

## Adding Event Listeners to Buttons

**Description:** This snippet adds click event listeners to the buttons with the class 'revert'. When clicked, these buttons will trigger the `revertScope1` or `revertScope2` functions, reverting the animations and removing the event listeners associated with each scope.

```javascript
$button1.addEventListener('click', revertScope1);
$button2.addEventListener('click', revertScope2);
```

---

## Importing Anime.js utilities and functions

**Description:** This snippet imports necessary functions and utilities from the Anime.js library, including `utils`, `stagger`, `createScope`, and `createTimeline`. These modules will be used to select elements, create animations with staggered delays, and manage animation scopes.

```javascript
import { utils, stagger, createScope, createTimeline } from 'animejs';
```

---

## Defining Event Listener Functions for Animation

**Description:** These functions, `onMouseEnter` and `onMouseLeave`, define the animations that occur when the mouse enters or leaves an element.  `onMouseEnter` scales the element up, and `onMouseLeave` scales it back down. The `animate` function is assumed to be globally available and handles the actual animation logic.

```javascript
function onMouseEnter() { animate(this, { scale: 2, duration: 250 }) }
function onMouseLeave() { animate(this, { scale: 1, duration: 750 }) }
```

---