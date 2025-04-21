# Controlling Animation Frame Rate with Anime.js in JavaScript

**Summary:** This file covers topics related to "Controlling Animation Frame Rate with Anime.js in JavaScript". Key snippets include: Structuring HTML for Particle Animation and User Input.

---

## Structuring HTML for Particle Animation and User Input

**Description:** This HTML snippet sets up the necessary structure for displaying the animated particles and a control input range slider. It assumes CSS for styling and layout management. The HTML includes a container for particles and a range input for dynamic frame rate adjustments.

```HTML
<div class="large row container"></div>
<div class="medium row">
  <fieldset class="controls">
    <input type="range" min=0 max=240 value=60 step=1 class="range" />
  </fieldset>
</div>
```

---