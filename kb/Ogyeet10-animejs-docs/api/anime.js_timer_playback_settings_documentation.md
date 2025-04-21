# Anime.js Timer Playback Settings Documentation

**Summary:** This file covers topics related to "Anime.js Timer Playback Settings Documentation". Key snippets include: HTML Structure for Displaying Anime.js Timer Values, Setting Global Default for Reversed Timer in Anime.js.

---

## HTML Structure for Displaying Anime.js Timer Values

**Description:** This HTML snippet creates a structure to display the iteration time and current time of an Anime.js timer animation. It uses pre-formatted elements with specific classes for styling and identification.

```html
<div class="large centered row">
  <div class="col">
    <pre class="large log row">
      <span class="label">iteration time</span>
      <span class="iteration-time value lcd">0</span>
    </pre>
  </div>
  <div class="col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="current-time value lcd">0</span>
    </pre>
  </div>
</div>
```

---

## Setting Global Default for Reversed Timer in Anime.js

**Description:** This snippet demonstrates how to change the default value of the 'reversed' property globally for all Anime.js animations. It imports the engine from Anime.js and sets the default 'reversed' value to true.

```javascript
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

---