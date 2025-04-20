# Delay Parameter in Anime.js Animation

**Summary:** This file covers topics related to "Delay Parameter in Anime.js Animation". Key snippets include: HTML Structure for Anime.js Animation Target, Setting Global Default Delay in Anime.js.

---

## HTML Structure for Anime.js Animation Target

**Description:** Provides the HTML structure for the target element of the Anime.js animation, which is a square div inside a container with specific classes.

```html
<div class="medium row">
  <div class="square"></div>
</div>
```

---

## Setting Global Default Delay in Anime.js

**Description:** Demonstrates how to change the default delay value globally for all animations using the engine.defaults object in Anime.js.

```javascript
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

---