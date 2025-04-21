# Creating Scroll Observers in Anime.js

**Summary:** This file covers topics related to "Creating Scroll Observers in Anime.js". Key snippets include: Creating a Non-Repeating Scroll Observer in Anime.js, Creating a Repeating Scroll Observer in Anime.js.

---

## Creating a Non-Repeating Scroll Observer in Anime.js

**Description:** This code snippet creates a scroll observer that updates a value but does not repeat the event handling after the animation is complete. It utilizes 'createTimer' similarly to the repeating observer but sets the 'repeat' property to false.

```JavaScript
const [ $noRepeat ] = utils.$('.no-repeat .value');
let noRepeatUpdates = 0;

createTimer({
  duration: 1000,
  autoplay: onScroll({
    container: '.scroll-container',
    target: '.no-repeat',
    enter: 'bottom-=40 top',
    leave: 'top+=60 bottom',
    onUpdate: () => $noRepeat.innerHTML = noRepeatUpdates++,
    repeat: false,
    debug: true,
  })
});
```

---

## Creating a Repeating Scroll Observer in Anime.js

**Description:** This code snippet sets up a scroll observer using Anime.js that updates a value based on scroll actions. It uses 'createTimer' to manage the animation duration and behavior on scroll events, including repeated event handling.

```JavaScript
import { createTimer, onScroll, utils } from 'animejs';

const [ $repeat ] = utils.$('.repeat .value');
let repeatUpdates = 0;

createTimer({
  duration: 1000,
  autoplay: onScroll({
    container: '.scroll-container',
    target: '.repeat',
    enter: 'bottom-=40 top',
    leave: 'top+=60 bottom',
    onUpdate: () => $repeat.innerHTML = repeatUpdates++,
    repeat: true,
    debug: true,
  })
});
```

---