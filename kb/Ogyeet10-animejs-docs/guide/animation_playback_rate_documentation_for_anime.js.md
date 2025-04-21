# Animation Playback Rate Documentation for Anime.js

**Summary:** This file covers topics related to "Animation Playback Rate Documentation for Anime.js". Key snippets include: Setting Global Default Playback Rate in Anime.js, HTML Structure for Animation Speed Control Demo.

---

## Setting Global Default Playback Rate in Anime.js

**Description:** Shows how to modify the default playbackRate value globally for all animations by updating the engine.defaults object. This allows setting a different base speed for all animations in your project.

```javascript
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

---

## HTML Structure for Animation Speed Control Demo

**Description:** HTML markup for the animation playback rate demo, featuring a circle element that will be animated, a display for the current speed value, and a range input control for adjusting the animation speed.

```html
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">speed</span>
    <span class="speed value">1.00</span>
  </pre>
</div>
<div class="medium row">
  <fieldset class="controls">
    <input type="range" min=0 max=5 value=1 step=.01 class="range" />
  </fieldset>
</div>
```

---