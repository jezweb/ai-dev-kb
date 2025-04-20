# Animation Playback Settings in AnimeJS: Reversed Property

**Summary:** This file covers topics related to "Animation Playback Settings in AnimeJS: Reversed Property". Key snippets include: Setting Global Default for Reversed Animation in AnimeJS, HTML Structure for Reversed Animation Examples, Creating Normal and Reversed Animations with AnimeJS.

---

## Setting Global Default for Reversed Animation in AnimeJS

**Description:** Shows how to change the default value of the 'reversed' property globally by updating the engine.defaults object. This allows all animations to play backwards by default without specifying for each instance.

```javascript
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

---

## HTML Structure for Reversed Animation Examples

**Description:** HTML markup that creates containers for demonstrating normal and reversed animations. Each container includes a circle element that will be animated and a label indicating the reversed property value.

```html
<div class="medium row">
  <div class="circle dir-normal"></div>
  <div class="padded label">reversed: false</div>
</div>
<div class="medium row">
  <div class="circle dir-reverse"></div>
  <div class="padded label">reversed: true</div>
</div>
```

---

## Creating Normal and Reversed Animations with AnimeJS

**Description:** Examples of creating animations with different direction settings using the 'reversed' property. One animation plays in the normal direction (false) while the other plays in reverse (true). Both animations loop continuously.

```javascript
import { animate } from 'animejs';

animate('.dir-normal', {
  x: '17rem',
  reversed: false, // Default behaviour
  loop: true
});

animate('.dir-reverse', {
  x: '17rem',
  reversed: true,
  loop: true
});
```

---