# Animating HTML Attributes with Anime.js

**Summary:** This file covers topics related to "Animating HTML Attributes with Anime.js". Key snippets include: Importing Anime.js and Animating Input Value.

---

## Importing Anime.js and Animating Input Value

**Description:** This snippet demonstrates how to import Anime.js and create an animation that targets an input element's 'value' attribute. It uses the 'animate' function to set up a looping animation with alternating direction and rounds the value to integers.

```javascript
import { animate, utils } from 'animejs';

animate('input', {
  value: 1000, // animate the input "value" attribute
  alternate: true,
  loop: true,
  modifier: utils.round(0),
});
```

---